import React from "react";
import box1 from "../../assets/images/Vector 264.svg";
import box2 from "../../assets/images/Vector 263.svg";
const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-sec-content">
        <p>EXPERIENCE THE BEST IT SOLUTIONS</p>
        <h2>WEB RESPONSIVE & SERVICE</h2>
        <button>Learn more</button>
      </div>
      <div className="le-col-box">
        <img src={box1} alt="box col" />
      </div>
      <div className="right-col-box">
        <img src={box2} alt="box col" />
      </div>
    </div>
  );
};

export default HeroSection;
