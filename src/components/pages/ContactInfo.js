import React from 'react';
import '../../App.css';
import AddressDetails from '../AddressDetails';
import '../ContactInfo.css';
import PlotDetails from '../PlotDetails';
import Footer from '../Footer';
import HeroSectionCI from '../HeroSectionCI';
import ScrollToTop from '../ScrollToTop';

export default function ContactInfo() {
    return(
        <div className="contactinfo">
            <HeroSectionCI />
            <PlotDetails />
            <AddressDetails />
            <Footer />
            <ScrollToTop />  
        </div>
    )
}