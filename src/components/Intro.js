import React, { useState } from "react";
import img from "../images/cover2.jpg";
import "./Intro.css";
import IntroModal from "./IntroModal";

function Intro() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="intro">
        <h1 className="intro_heading"><i class="fas fa-info-circle"></i> About Us </h1>{" "}
        <div className="intro_container">
          <div>
            <li className="intro_feature"> Introduction </li>{" "}
            <p>
              Statistics Division Employees Co-operative Housing Society Limited
              (Regd # K-999) is a registered co-operative housing society
              working under the provisions of its Registered Bye-Laws including
              the boundaries of relevant laws and principles at no profit no
              loss basis. It aims at providing plots on a very low cost to its
              members serving / served and their relatives in Statistics
              Division and Pakistan Bureau of Statistics for dwelling and
              enjoying the common amenities and services of living.
            </p>{" "}
            <br />
            <hr />
            <br />
            <br />
            <div>
              <li className="intro_feature">Objectives</li>{" "}
              <p className="last-p">
                The society shall carry on the trade of building and of
                acquiring, buying, selling, hiring, letting and developing land
                in accordance with Co-operative principles and to establish and
                carry on social, re-creative and educational work in connection
                with its tenants and the society shall have full power to do or
                thinks it deems necessary or expedient for the accomplishment
                all objectives specified in its Bye-Laws.
              </p>{" "}
              <br />
            <hr />
            </div>{" "}
          </div>{" "}
          <div className="image-div">
            <img
              src={img}
              alt="Intro"
              className="intro_img"
              onClick={() => setIsOpen(true)}
            />{" "}
          </div>{" "}
        </div>{" "}
        <IntroModal open={isOpen} onClose={() => setIsOpen(false)}>
          <img src={img} alt="sdechs-plan" onClick={() => setIsOpen(false)} />{" "}
        </IntroModal>{" "}
      </div>{" "}
    </>
  );
}

export default Intro;
