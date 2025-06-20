import React from 'react'
import { div } from 'three/tsl';
import { Link } from 'react-router-dom';
import Info from 'three/src/renderers/common/Info.js';
import arrow from '../assets/icons/arrow.svg'
const InfoBox = ({ text, link, btnText }) => (
   <div className="info-box">
    <p className='font-medium sm:text-xl text-center'>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn' >
      {btnText}
      <img src= {arrow} className="w-4 h-4 object-contain"/>
      </Link>
   </div>
    
  );

const renderContent ={
    1:(
        <h1 className="sm:text-xl sm:leading-snug text-center
        neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className='font-semibold'>Yojit Kataria</span>🐥
            <br />
            A Computer Science Student
            🦆
        </h1>
    ),
    2:(
        <InfoBox
        text = "Passionate Learner in Web, 3D & AI  Just Getting Started!"
        link = "/about"
        btnText = "Know More"
        
        />
    ),
    3:(
        <InfoBox
        text = "Check out my hands-on projects in Web, 3D design, and AI. It's just the beginning!"
        link = "/projects"
        btnText = "Visiting my Portfolio"
        
        />
    ),
    4:(
        <InfoBox
        text = "Let's connect! Open to collaborations, ideas, or just a good tech conversation."
        link = "/contact"
        btnText = "Let's Connect!"
        
        />
    ),
}




const HomeInfo = ({ CurrentStage}) => {
  return renderContent[CurrentStage] || null;}

export default HomeInfo