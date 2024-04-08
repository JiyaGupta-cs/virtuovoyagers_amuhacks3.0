import { useEffect, useRef } from "react";
// import { BrowserCompanyLogo } from "./browser-company-logo";

const ArcCard = ({ name, title, umi }) => {
    const boundingRef = useRef(null);

    const handleMouseEnter = (ev) => {
        boundingRef.current = ev.currentTarget.getBoundingClientRect();
    };

    const handleMouseMove = (ev) => {
        if (!boundingRef.current) return;
        const x = ev.clientX - boundingRef.current.left;
        const y = ev.clientY - boundingRef.current.top;
        const xPercentage = x / boundingRef.current.width;
        const yPercentage = y / boundingRef.current.height;
        const xRotation = (xPercentage - 0.5) * 20;
        const yRotation = (0.5 - yPercentage) * 20;

        ev.currentTarget.style.setProperty("--x-rotation", `${yRotation}deg`);
        ev.currentTarget.style.setProperty("--y-rotation", `${xRotation}deg`);
        ev.currentTarget.style.setProperty("--x", `${xPercentage * 100}%`);
        ev.currentTarget.style.setProperty("--y", `${yPercentage * 100}%`);
    };

    const handleMouseLeave = () => {
        boundingRef.current = null;
    };
// const umi='https://virtualspeech.com/wp-content/uploads/chatgpt-powered-conversation-ai-1.jpg';
    return (
        <div className="flex flex-col" style={{ perspective: "800px" }}>
            <div
                onMouseLeave={handleMouseLeave}
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
                className="group relative grid w-[430px] grid-rows-[242px_120px] rounded-md bg-[#FFFEEC] p-4 text-[#01A977] transition-transform ease-out hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.1)]"
            >
                <figure className={`rounded-md mix-blend-multiply`} style={{ 
  backgroundImage: `radial-gradient(at 70% 40%, transparent 30%, currentColor 80%), url(${umi})` 
}} />

       
                
       
                
                



                <div className="pt-4">
                    <p className="text-3xl font-bold">{name}</p>
                    <p className="text-lg font-semibold">{title}</p>
                </div>

                <div className="pointer-events-none absolute inset-0 group-hover:bg-[radial-gradient(at_var(--x)_var(--y),rgba(255,255,255,0.3)_20%,transparent_80%)]" />
            </div>
        </div>
    );
};

export default ArcCard;
