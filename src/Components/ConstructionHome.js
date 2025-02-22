import React from "react";
import "../styles/ConstructionHome.css";
import img1 from "../images/const-img1.jpg";
import img2 from "../images/const-img2.jpg";
import img3 from "../images/const-img3.jpg";
import img4 from "../images/const-img4.jpg";

export default function ConstructionHome() {
  return (
    <div>
        <h2 className="const-title">We are expanding our services in the Construction Industry! Let us help you achieve the best buildings with top-notch infrastructure.</h2>
      <div className="gallery">
        <img src={img1} alt="a construction" />
        <img src={img2} alt="a construction" />
        <img src={img3} alt="a building" />
        <img src={img4} alt="a building" />
      </div>
    </div>
  );
}
