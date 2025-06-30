'use client';

import React from 'react';
import './BeginJourneySection.css';

const BeginJourneySection = () => {
  const applyFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScvF9FLuBZEP3YGLbDPiHJ_T6x1wNPmBufIaUICBz3h2j-4qQ/viewform?usp=send_form";

  return (
    <section className="journey-section">
      <div className="journey-content">
        <h2 className="journey-title">Begin Your Journey</h2>
        <p className="journey-subtext">
          Applications for our next cohort are now open. Take the first step toward a
          transformative experience at Harvest Island School of Discipleship.
        </p>
        <div className="journey-buttons">
          <a 
            href={applyFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="journey-btn"
          >
            Apply Now
          </a>
          {/* <button className="journey-btn">Request Information</button> */}
        </div>
      </div>
    </section>
  );
};

export default BeginJourneySection;