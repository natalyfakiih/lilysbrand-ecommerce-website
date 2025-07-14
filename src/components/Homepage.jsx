import React from "react";
import { assets } from "../assets/assets";

const Homepage = () => {
  return (
    <div className="home-container">
      <div className="img-container">
        <img src={assets.home_img} className="homepage-img" alt="home" />
        <div className="home-overlay"></div>
      </div>
      <div className="text-overlay">
        <p>Your newest obsession</p>
        <button>Shop now</button>
      </div>
    </div>
  );
};
export default Homepage;
