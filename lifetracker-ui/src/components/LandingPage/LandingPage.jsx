import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero">
        <div className="hero-content">
          <h2 className="hero-title">LifeTracker</h2>
          <p className="hero-description">Helping you take back control of your world!</p>
        </div>
        <img
          className="hero-img"
          src="https://lifetracker.up.railway.app/assets/tracker-2a96bfd0.jpg"
          alt="Hero Image"
        />
      </div>
    </div>
    
  );
};

export default LandingPage;
