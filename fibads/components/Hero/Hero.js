"use client";

import { useState, useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  // Star rotation state
  const [rotation, setRotation] = useState(0);

  // Rotate star animation
  useEffect(() => {
    const rotateInterval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 30);

    return () => clearInterval(rotateInterval);
  }, []);

  return (
    <section className="hero-section">
      <div className="agency-info">
        <p className="agency-location">
          Creative Agency Beside <span className="red-arrow">→</span>
          <br />
          New York USA
        </p>
        <div className="location-divider"></div>
      </div>

      <div className="hero-content">
        <div className="title-container">
          <div className="title-line">
            <h1 className="hero-title cretive">CRETIVE</h1>
            <div
              className="star-icon"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              ✻
            </div>
          </div>

          <div className="title-line">
            <h1 className="hero-title branding">BRANDING</h1>
            <div className="smiley-icon">☺</div>
          </div>

          <div className="title-line">
            <h1 className="hero-title world">
              W
              <span className="o-letter">
                <img src="/img/3d-ring.png" alt="3D O" className="o-image" />
              </span>
              RLD.
            </h1>
          </div>
          
          {/* Mobile-only CTA button */}
          <div className="mobile-hero-cta">
            <a href="/contact" className="mobile-hero-button">
              Get Started
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="agency-description">
        <p>
          Elevate Your Brand With The
          <br />
          Agencyo Agency – Everything From
          <br />
          Strategy To Advertising & Scale
        </p>
      </div>

      <div className="wireframe-sphere">
        <img src="/img/wireframe-sphere.png" alt="Wireframe Sphere" />
      </div>
    </section>
  );
};

export default Hero;
