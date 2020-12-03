import React from 'react';
import '../../App.css';
// import '../Gallery.css';
import PicturesGallery from '../PicturesGallery';
// import ImageGrid from '../ImageGrid';
// import UploadForm from '../UploadForm';

export default function Gallery() {
    return (
        <div className="gallery">
            <PicturesGallery />
            {/* <UploadForm /> */}
            {/* <ImageGrid /> */}            
        </div>
    )
}