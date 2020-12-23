import React from "react";
import img from "../images/mall.jpg";
import './NewsStyles.css';

function NewsCard() {
  return (
    <div className="card-1">
      <h2>General Body Meeting of 2020</h2>
      <p>September 18, 2020</p>
      <img src={img} alt="GBM" className="cardimg-1"/>
      <p>
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the
        mussels, if you like.
      </p>
      <button>Read More</button>
    </div>
  );
}

export default NewsCard;
