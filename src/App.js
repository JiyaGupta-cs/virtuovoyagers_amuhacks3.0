import React from 'react'
import Viewer from './components/Viewer'
import VRrooms from './components/VRrooms'
import './App.css'
import C2 from './components/C2'

const App = () => {
  return (
    <div>
      <div className="ct-1">
        <Viewer/>
      </div>
      {/* <VRrooms/> */}
      <C2/>
      {/* <div>
      <Card border="border-left-behind" shadowUrl="shadow(style='--url: url('https://i.ibb.co/PM4ghD4/full.png')" backgroundUrl="https://i.ibb.co/JpJVJxq/Background.png" cutoutUrl="https://i.ibb.co/Dw3q3tZ/cutout.png" />
      <Card border='border-right-behind border-bottom-behind' shadowUrl='shadow(style="--url: url("https://i.ibb.co/DC0MbxS/m-full.png")' backgroundUrl='https://i.ibb.co/ZdGBm4K/m-background.png' cutoutUrl='https://i.ibb.co/RC70XmC/m-cutout.png' />
  
      <Card border='border-left-behind' shadowUrl="shadow(style='--url: url(\'https://i.ibb.co/gSBp82C/b-full.png\')')" backgroundUrl='https://i.ibb.co/MDBcyMW/b-background.png' cutoutUrl='https://i.ibb.co/bQNgD6y/b-cutout.png' />
  
  
    </div> */}

    </div>
  )
}

export default App
