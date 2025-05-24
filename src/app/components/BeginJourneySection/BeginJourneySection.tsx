'use client';

import React from 'react';
import './BeginJourneySection.css';

const BeginJourneySection = () => {
  return (
    <section className="journey-section">
      <div className="journey-content">
        <h2 className="journey-title">Begin Your Journey</h2>
        <p className="journey-subtext">
          Applications for our next cohort are now open. Take the first step toward a
          transformative experience at Harvest Island School of Discipleship.
        </p>
        <div className="journey-buttons">
          <button className="journey-btn">Apply Now</button>
          <button className="journey-btn">Request Information</button>
        </div>
      </div>
    </section>
  );
};

export default BeginJourneySection;
