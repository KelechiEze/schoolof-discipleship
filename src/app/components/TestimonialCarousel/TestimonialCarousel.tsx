'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import './TestimonialCarousel.css';

const testimonials = [
  {
    image: '/mercyakpan.jpg',
    text: 'Since I joined the School of Discipleship, I have been made stronger in faith, and also in building of my relationship with God.',
    name: 'Mercy Akpan',
    title: 'Current Student',
  },
  {
    image: '/ifeoluwa.jpg',
    text: 'The series of teachings on being a New Creation by the transformative work of Jesus Christ have awakened my spirit and mind to the realities of new identity in Christ.',
    name: 'Ifeoluwa Kolajo',
    title: 'Current Student',
  },
  {
    image: '/Mayen.jpg',
    text: 'The School of Discipleship transformed my understanding of Christ and family.',
    name: 'Mayen Okokon',
    title: 'Current Student',
  },
  {
    image: '/femi.jpg',
    text: 'I have been greatly blessed by the School of Discipleship at Global Harvest Island Church.',
    name: 'Oluwafemi Amida',
    title: 'Current Student',
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, [isTransitioning]);

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  const startCycle = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        nextSlide();
      }
    }, 5000);
  }, [isPaused, nextSlide]);

  const pauseCycle = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startCycle();
    return () => pauseCycle();
  }, [isPaused, startCycle]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPaused(document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return (
    <div 
      className="testimonial-wrapper"
      ref={carouselRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="testimonial-header">
        <h2 className="testimonial-heading">Student Testimonials</h2>
        <p className="testimonial-subtext">
          Hear from those whose lives have been impacted by their time at the School of Discipleship.
        </p>
      </div>

      <div className="carousel-container">
        <button 
          className="carousel-nav-button carousel-nav-left" 
          onClick={prevSlide}
          disabled={isTransitioning}
          aria-label="Previous testimonial"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="testimonial-carousel">
          <div
            className={`testimonial-track ${isTransitioning ? 'transitioning' : ''}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / 3)}%)`,
            }}
          >
            {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
              <div 
                key={`${index}-${Math.floor(index / testimonials.length)}`} 
                className={`testimonial-card ${
                  isTransitioning ? 'card-transitioning' : ''
                } ${
                  index >= currentIndex && index < currentIndex + 3 ? 'card-active' : ''
                }`}
              >
                <div className="testimonial-image-container">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="testimonial-image" 
                    loading="lazy"
                  />
                </div>
                <div className="testimonial-content">
                  <p className="testimonial-text">&ldquo;{testimonial.text}&rdquo;</p>
                  <div className="testimonial-author">
                    <h4 className="testimonial-name">{testimonial.name}</h4>
                    <p className="testimonial-title">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          className="carousel-nav-button carousel-nav-right" 
          onClick={nextSlide}
          disabled={isTransitioning}
          aria-label="Next testimonial"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="carousel-indicators">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'indicator-active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
