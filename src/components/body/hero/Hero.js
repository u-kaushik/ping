import React from "react";
import "../../../sass/components/Hero.scss";
import hero from "../../../assets/images/hero.png";

function Hero() {
  return (
    <div className="hero">
      <img class="hero-image" src={hero} alt="hero" />
    </div>
  );
}

export default Hero;
