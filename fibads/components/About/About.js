"use client";

import { useEffect } from "react";
import "./About.css";

const About = () => {
  // Initialize AOS when component mounts
  useEffect(() => {
    if (typeof window !== "undefined" && window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-header" data-aos="fade-up">
          <span className="section-label">Over ons</span>
          <h2 className="about-title">
            Wij creëren digitale <br />
            ervaringen die écht tellen
          </h2>
        </div>

        <div className="about-content">
          <div
            className="about-image-container"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="about-image-wrapper">
              <img
                src="/img/Logob.png"
                alt="Fib Digital Agency"
                className="about-image"
              />
              <div className="image-decoration"></div>
            </div>
            <div className="experience-badge">
              <span className="years">8+</span>
              <span className="text">
                jaar
                <br />
                ervaring
              </span>
            </div>
          </div>

          <div className="about-text" data-aos="fade-left" data-aos-delay="300">
            <p className="about-description">
              Fib Digital is jouw partner voor opvallende branding, 
              maatwerk webdesign en resultaatgerichte online campagnes.
            </p>

            <p className="about-description">
              Met meer dan 150 afgeronde projecten en een klanttevredenheid 
              van 98%, tillen we jouw merk naar nieuwe hoogten.
            </p>

            <div className="about-stats">
              <div
                className="stat-item"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <span className="stat-number">150+</span>
                <span className="stat-label">projecten voltooid</span>
              </div>
              <div
                className="stat-item"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <span className="stat-number">98%</span>
                <span className="stat-label">klanttevredenheid</span>
              </div>
              <div
                className="stat-item"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <span className="stat-number">8+</span>
                <span className="stat-label">jaar ervaring</span>
              </div>
            </div>

            <div className="about-cta" data-aos="fade-up" data-aos-delay="700">
              <a href="/contact" className="about-button">
                Neem contact op <span className="button-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
