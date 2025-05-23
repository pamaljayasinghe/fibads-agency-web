"use client";

import { useState, useEffect, useRef } from "react";
import "./Hero.css";

const Hero = () => {
  // Define stats data
  const stats = [
    { value: 199, suffix: "+", label: "Proud clients" },
    { value: 212, suffix: "+", label: "Completed initiatives" },
    { value: 11, suffix: "+", label: "Trophies" },
  ];

  // Counter state
  const [counters, setCounters] = useState(stats.map(() => 0));
  const statsRef = useRef(null);
  const hasAnimated = useRef(false);
  
  // Star rotation state
  const [rotation, setRotation] = useState(0);

  const animateValue = (start, end, duration, index) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentValue = Math.floor(progress * (end - start) + start);

      setCounters((prevCounters) => {
        const newCounters = [...prevCounters];
        newCounters[index] = currentValue;
        return newCounters;
      });

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  // Check if element is in view
  const isInViewport = (element) => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  // Start counter animation when the section becomes visible
  useEffect(() => {
    const handleScroll = () => {
      if (hasAnimated.current) return;

      if (statsRef.current && isInViewport(statsRef.current)) {
        hasAnimated.current = true;

        stats.forEach((stat, index) => {
          // Adjust duration based on the number size
          const duration = 2000 + stat.value * 5;
          animateValue(0, stat.value, duration, index);
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once in case the section is already visible
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Rotate star animation
  useEffect(() => {
    const rotateInterval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360);
    }, 30);
    
    return () => clearInterval(rotateInterval);
  }, []);

  // Create Star SVG component
  const StarIcon = ({ className }) => (
    <svg 
      className={className} 
      style={{ transform: `rotate(${rotation}deg)` }}
      width="60" 
      height="60" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 1L15.5 8.5H23L17 13.5L19 22L12 17.5L5 22L7 13.5L1 8.5H8.5L12 1Z" fill="white" />
    </svg>
  );

  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-left-column">
          <div className="hero-content" data-aos="fade-up">
            <span className="section-label">Creative Agency Beside<br />New York USA</span>
            
            <div className="creative-title-container">
              <h1 className="hero-title">
                CRETIVE <StarIcon className="rotating-star" />
              </h1>
              <h1 className="hero-title large-title">
                BRANDING <span className="smiley-icon">☺</span>
              </h1>
              <h1 className="hero-title">
                WORLD.
              </h1>
            </div>
          </div>
        </div>

        <div
          className="hero-right-column"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="agency-description">
            <p className="hero-description">
              Elevate Your Brand With The<br />
              Agencyo Agency – Everything From<br />
              Strategy To Advertising & Scale
            </p>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div
        className="stats-section"
        data-aos="fade-up"
        data-aos-delay="200"
        ref={statsRef}
      >
        <div className="container">
          <h3 className="stats-title">Completion milestone</h3>
          <div className="stats-container">
            {stats.map((stat, index) => (
              <div className="stat-item" key={index}>
                <span className="counter-value">
                  {counters[index]}
                  {stat.suffix}
                </span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
