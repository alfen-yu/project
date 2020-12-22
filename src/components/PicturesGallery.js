import React from 'react';
import './GalleryPictures.css';
import Footer from './Footer';
import img1 from '../images/img-1.jpg'
import img2 from '../images/img-2.jpg'
import img3 from '../images/img-3.jpg'
import img4 from '../images/img-4.jpg'
import img5 from '../images/img-5.jpg'
import img6 from '../images/cover.jpg'
import img7 from '../images/cover1.jpg'
import img8 from '../images/cover2.jpg'
import img9 from '../images/img-9.jpg'
import img10 from '../images/img-home.jpg'
import img11 from '../images/sample.jpg'
import img12 from '../images/park.jpg'
import img13 from '../images/mall.jpg'
import img14 from '../images/placeholder-img.png'
import img15 from '../images/school.jpg'

const PicturesGallery = () => {
    return (
        <>
            <h1 className="images-title">Media Center of SDECHS</h1>
    <div className="images-container">
        <div className="images-row">
            <div className="images-column">
                <img src={img1} alt="sdechs" />
                <img src={img2} alt="sdechs" />
                <img src={img3} alt="sdechs" />
            </div>
            <div className="images-column">
                <img src={img6} alt="sdechs" />
                <img src={img7} alt="sdechs" />
                <img src={img8} alt="sdechs" />
                <img src={img9} alt="sdechs" />
                <img src={img10} alt="sdechs" />
                <img src={img5} alt="sdechs" />
            </div>
            <div className="images-column">
                <img src={img11} alt="sdechs" />
                <img src={img12} alt="sdechs" />
                <img src={img13} alt="sdechs" />
                <img src={img14} alt="sdechs" />
                <img src={img15} alt="sdechs" />
                <img src={img4} alt="sdechs" />
            </div>
        </div>
        <br /><br /><br /><br />
        <Footer />
    </div>
        </>
        
    )
}

export default PicturesGallery;