"use client";

import React from "react";
import "./HomeSection.css";

const HomeSection = () => {
  const applyFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScvF9FLuBZEP3YGLbDPiHJ_T6x1wNPmBufIaUICBz3h2j-4qQ/viewform?usp=send_form";

  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-title">
          School of Discipleship at Harvest Island
        </h1>
        <p className="hero-subtitle">
          A transformative journey of spiritual growth, biblical education, and
          practical ministry experience in a beautiful island setting.
        </p>
        <div className="hero-buttons">
          <a 
            href={applyFormUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary"
          >
            Apply Today
          </a>
          {/* <button className="btn-secondary">Learn More</button> */}
        </div>
      </div>
    </section>
  );
};

export default HomeSection;