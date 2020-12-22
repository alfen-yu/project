import React from "react";
import "./HeroSectionCI.css";
import storeimg from "../images/storefront-colour.svg";

function HeroSectionCI() {
  
  
  function scrollWindow() {
    window.scrollBy({top: 600, behavior: "smooth"})
  }

  return (
    <div className="hs-container">
      <div>
        <h1 className="hs-heading">
          Our Services
          <br />
          and info of
          <br />
          plots.
        </h1>
        <p className="hs-p">
          Need to Book a plot or get informaton
          <br /> regarding the properties in our society?
          <br /> Just give us a call and we will be doing our
          <br /> service.
        </p>
        <div className="hs-buttons">
          <button onClick={scrollWindow}> Take a Look! </button>
        </div>
      </div>
      <div className="hs-img-container">
        <img src={storeimg} alt="store" className="hs-image" />
      </div>
    </div>
  );
}

export default HeroSectionCI;
