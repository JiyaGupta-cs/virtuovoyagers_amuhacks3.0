import React, { useEffect } from 'react';
import './styles.css';
import Toon from './assets/toon.png'
import Meet from './assets/meet.png'

const angle = 20;

const lerp = (start, end, amount) => {
  return (1 - amount) * start + amount * end;
};

const remap = (value, oldMax, newMax) => {
  const newValue = ((value + oldMax) * (newMax * 2)) / (oldMax * 2) - newMax;
  return Math.min(Math.max(newValue, -newMax), newMax);
};

const C2 = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((e) => {
      e.addEventListener("mousemove", (event) => {
        const rect = e.getBoundingClientRect();
        const centerX = (rect.left + rect.right) / 2;
        const centerY = (rect.top + rect.bottom) / 2;
        const posX = event.pageX - centerX;
        const posY = event.pageY - centerY;
        const x = remap(posX, rect.width / 2, angle);
        const y = remap(posY, rect.height / 2, angle);
        e.dataset.rotateX = x;
        e.dataset.rotateY = -y;
      });

      e.addEventListener("mouseout", (event) => {
        e.dataset.rotateX = 0;
        e.dataset.rotateY = 0;
      });
    });

    const update = () => {
      cards.forEach((e) => {
        let currentX = parseFloat(e.style.getPropertyValue('--rotateY').slice(0, -1));
        let currentY = parseFloat(e.style.getPropertyValue('--rotateX').slice(0, -1));
        if (isNaN(currentX)) currentX = 0;
        if (isNaN(currentY)) currentY = 0;
        const x = lerp(currentX, e.dataset.rotateX, 0.05);
        const y = lerp(currentY, e.dataset.rotateY, 0.05);
        e.style.setProperty("--rotateY", x + "deg");
        e.style.setProperty("--rotateX", y + "deg");
      });
    };
    const intervalId = setInterval(update, 1000 / 60);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className='c2'>
      <section className="wrapper">
  <div className="top">Showdown</div>
  <div className="bottom" aria-hidden="true">showdown</div>
</section>
      <div className="centered" >
        
        <div className="card border-bottom-behind border-right-behind border-left-behind shadow" style={{ backgroundImage: "url('https://virbe-landing-prod-assets.s3.eu-central-1.amazonaws.com/images/origin/Ready_Player_Me_Avatar_4_bc928469bb.png')" }}>
          <div className="image background" style={{ backgroundImage: "url('https://i.ibb.co/MDBcyMW/b-background.png')" }}></div>
          <div className="image cutout" style={{ backgroundImage: `url(${Toon})` }}></div>
          <div className="content purple">
            <h2 className='bolder'>Lorem, ipsum.</h2>
            <p className='bolder'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="card border-right-behind border-left-behind border-bottom-behind shadow" style={{ backgroundImage: "url('https://png.pngtree.com/png-clipart/20190603/original/pngtree-office-meeting-png-image_730259.jpg')"}}>
        <div className="image background" style={{ backgroundImage: "url('https://i.ibb.co/ZdGBm4K/m-background.png')"}}></div>
        <div className="image cutout" style={{ backgroundImage: `url(${Meet})` }}></div>
        <div className="content">
            <h2>lorem ipsummmm!</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </div>
    <div className="card border-left-behind shadow" style={{ backgroundImage: "url('https://i.ibb.co/gSBp82C/b-full.png')"}}>
        <div className="image background" style={{ backgroundImage: "url('https://i.ibb.co/MDBcyMW/b-background.png')"}}></div>
        <div className="image cutout" style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/020/995/173/original/3d-blank-bar-graph-template-bar-chart-mock-up-data-analysis-colorful-statistic-bar-chart-with-a-arrow-up-3d-illustration-free-png.png')"}}></div>
        <div className="content">
            <h2>lorem ipsummmm!</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </div>
      </div>
    </div>
  );
};

export default C2;
