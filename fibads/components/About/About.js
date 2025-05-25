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
          <span className="section-label">About Us</span>
          <h2 className="about-title">
            We Create Digital <br />
            Experiences That Matter
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
                Years of
                <br />
                Experience
              </span>
            </div>
          </div>

          <div className="about-text" data-aos="fade-left" data-aos-delay="300">
            <p className="about-description">
              Bij Fib Ads draait alles om balans en ontwikkeling. We combineren
              branding, webdesign en Google Ads om jouw bedrijf op een
              natuurlijke en effectieve manier te laten groeien.
            </p>

            <p className="about-description">
              Ons ervaren team van specialisten werkt samen om strategieën te
              ontwikkelen die niet alleen korte termijn resultaten opleveren,
              maar ook duurzame groei stimuleren.
            </p>

            <div className="about-stats">
              <div
                className="stat-item"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <span className="stat-number">150+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div
                className="stat-item"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <span className="stat-number">98%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>

            <div className="about-cta" data-aos="fade-up" data-aos-delay="600">
              <a href="/contact" className="about-button">
                Contact Us <span className="button-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
