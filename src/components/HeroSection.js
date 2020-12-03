import { Button } from './Button';
import React from 'react';
import "./HeroSection.css";
import '../App.css';
// import video from "../videos/video-1.mp4";
import {Link} from 'react-router-dom';

function HeroSection() {
    return(
         <div className='hero-container'>
             {/* <video src={video} autoPlay loop muted /> */}
             <h1>Welcome to SDECHS!</h1>
             {/* <p>What are you waiting for?</p> */}
             <div className='hero-btns'>
             <Link to="/services" className="btn-mobile">
                 <Button className='btns' buttonStyle='btn-outline' buttonSize='btn-large'>
                     GET STARTED
                     </Button>
                     </Link>
                     <Link to="/gallery" className="btn-mobile">
                     <Button className='btns' buttonStyle='btn-primary' buttonSize='btn-large'>
                      VIEW GALLERY <i className='far fa-play-circle' /> 
                     </Button>
                     </Link>

             </div>
         </div>
    )
}   

export default HeroSection;