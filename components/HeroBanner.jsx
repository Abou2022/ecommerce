import React from "react";
import Link from "next/link";

const HeroBanner = ({ HeroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{HeroBanner.smallText}</p>
        <h3>{HeroBanner.midText}</h3>
        <h1>{HeroBanner.largeText1}</h1>
        <img src="" alt="basin" className="hero-banner-image" />
        <div>
          <Link href="./product/ID">
            <button type="button">BUTTON TEXT</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>DESCRIPTION</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
