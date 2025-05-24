"use client";

import React from "react";
import "./HomeSection.css";

const HomeSection = () => {
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
          <button className="btn-primary">Apply Today</button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
