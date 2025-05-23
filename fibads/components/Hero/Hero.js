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

  // Create Star SVG component
  const StarIcon = ({ className }) => (
    <svg
      className={className}
      style={{ transform: `rotate(${rotation}deg)` }}
      width="80"
      height="80"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 1L15.5 8.5H23L17 13.5L19 22L12 17.5L5 22L7 13.5L1 8.5H8.5L12 1Z"
        fill="#c5ff00"
      />
    </svg>
  );

  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-left-column">
          <div className="hero-content">
            <div className="agency-location">
              <span className="location-text">
                Creative Agency Beside
                <span className="location-arrow">→</span>
                <br />
                New York USA
              </span>
            </div>
          </div>
        </div>

        <div className="hero-center-column">
          <div className="creative-title-container">
            <div className="title-row">
              <h1 className="hero-title first-title">CRETIVE</h1>
              <StarIcon className="rotating-star" />
            </div>
            <div className="title-row">
              <h1 className="hero-title large-title">BRANDING</h1>
              <span className="smiley-icon">😊</span>
            </div>
            <div className="title-row">
              <h1 className="hero-title last-title">
                W
                <span className="o-letter">
                  <img
                    src="/img/3d-ring.png"
                    alt="3D O"
                    className="o-image"
                  />
                </span>
                RLD.
              </h1>
            </div>
          </div>
        </div>

        <div className="hero-right-column">
          <div className="agency-description">
            <p className="hero-description">
              Elevate Your Brand With The
              <br />
              Agencyo Agency – Everything From
              <br />
              Strategy To Advertising & Scale
            </p>
          </div>
        </div>
      </div>

      <div className="wireframe-sphere">
        <img
          src="/img/wireframe-sphere.png"
          alt="Wireframe Sphere"
          className="sphere-image"
        />
      </div>
    </section>
  );
};

export default Hero;
