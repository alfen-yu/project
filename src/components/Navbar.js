import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
// import logo from '../images/sdechslogo1.png';
// import {Button} from './Button.js';
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const [button, setButton] = useState(true);
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    SDECHS
                {/* <img src={logo} alt="Logo" className="logo-img" /> */}
                </Link>
                <div className='menu-icon' onClick={ handleClick }>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={ click ? 'nav-menu active' : 'nav-menu' }>
                <li className="nav-item">
                    <Link to="/" className='nav-links' onClick={closeMobileMenu}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contactinfo" className='nav-links' onClick={closeMobileMenu}>Contact & Info</Link>
                </li>
                <li className="nav-item">
                    <Link to="/gallery" className='nav-links' onClick={closeMobileMenu}>Gallery</Link>
                </li>
                <li className="nav-item">
                    <Link to="/news" className='nav-links' onClick={closeMobileMenu}>News & Events</Link>
                </li>
            </ul>
            {/* <Link to="/sign-up" className="btn-mobile">
            {button && <Button buttonStyle='btn-outline'>Sign Up</Button>}
            </Link> */}
            </div>
        </nav>
    )
}

export default Navbar
