/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./ContactInfo.css";

function AddressDetails() {

  return (
    <>
      <div className="address-container">
        {/* MAP INTEGRATION */}
          <div className="gmap_canvas">
            <iframe
              title="sdechs-map"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=sdechs&t=&z=15&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            ></iframe>
            <a href="https://embedgooglemap.net/145/"></a>
          </div>

        {/* ADDRESS INFORMATION */}
        <div className="address-details">
          <h3>
            <i className="fas fa-phone-square-alt"></i> &nbsp; Phone :
          </h3>
          <p>0333-2064548</p>
          <h3>
            <i className="fab fa-whatsapp"></i> &nbsp; Whatsapp :
          </h3>
          <p>0333-2064548</p>
          <h3>
            <i className="fas fa-map-pin"></i> &nbsp; Address :
          </h3>
          <p>
            SDECHS Gadap Town, Deh Halkani, Scheme No. 43 besides
            Sharah-e-Qazafi, Near the CNG Bus Terminal, Karachi.
          </p>
          <h3>
            <i className="fas fa-envelope-square"></i> &nbsp; Email :
          </h3>
          <p>info@sdechs.com</p>
        </div>
      </div>
    </>
  );
}

export default AddressDetails;
