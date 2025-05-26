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
          Creatief Bureau <span className="red-arrow">→</span>
          <br />
          Amsterdam, Nederland
        </p>
        <div className="location-divider"></div>
      </div>

      <div className="hero-content">
        <div className="title-container">
          <div className="title-line">
            <h1 className="hero-title cretive">CREATIEVE</h1>
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
            <h1 className="hero-title world">IN EEN 3D-WERELD.</h1>
          </div>

          <div className="mobile-hero-cta">
            <a href="/diensten" className="mobile-hero-button">
              Ontdek onze diensten
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="/contact" className="mobile-hero-button secondary-button">
              Plan een gratis strategiegesprek
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="agency-description">
        <p>
          "Bij Fib Digital combineren we strategie, design
          <br className="line-break" />
          en techniek om merken écht te laten groeien.
          <br className="line-break" />
          Durf jij de volgende stap te zetten?"
        </p>
      </div>

      <div className="wireframe-sphere">
        <img src="/img/wireframe-sphere.png" alt="Wireframe Sphere" />
      </div>
    </section>
  );
};

export default Hero;
