import React from 'react';
import img from '../images/cover2.jpg';
import './Intro.css';

function Intro() {
    return (
        <div className="intro">
            <div className="intro_container">
                <div>
                    {/* <p className="topLine">Features</p> */}
                    <h1 className="intro_heading">Welcome to Your Future Home</h1>
                    <p>A society based near ittehad</p>
                    <div className="intro_features">
                        <h1 className="intro_feature">Vision</h1>
                        <p>To sacrifice my own life for pakistan</p>
                    </div>
                    <div>
                    <h1 className="intro_feature">Mission</h1>
                        <p>I will open XBOX educational institutes in pakistan</p>
                    </div>
                </div>
                <div>
                    <img src={img} alt="Intro Image" className="intro_img" />
                    </div>
            </div>
        </div>
    )
}

export default Intro
