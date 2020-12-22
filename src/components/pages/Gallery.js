import React from 'react';
import '../../App.css';
import PicturesGallery from '../PicturesGallery';
import ScrollToTop from '../ScrollToTop';

export default function Gallery() {
    return (
        <div className="gallery">
            <PicturesGallery />  
            <ScrollToTop />        
        </div>
    )
}