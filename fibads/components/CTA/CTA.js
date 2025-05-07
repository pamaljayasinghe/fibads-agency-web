"use client";

import "./CTA.css";
import { useEffect, useState } from "react";

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Intersection Observer to detect when section is visible
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector(".cta-section");
    if (section) observer.observe(section);

    // Initialize animation for CTA options
    const ctaOptions = document.querySelectorAll(".cta-option");
    ctaOptions.forEach((option, index) => {
      option.style.opacity = "0";
      option.style.transform = "translateY(20px)";

      setTimeout(() => {
        option.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        option.style.opacity = "1";
        option.style.transform = "translateY(0)";
      }, index * 200 + 300);
    });

    // Add hover effect for buttons
    const ctaButtons = document.querySelectorAll(".cta-button");
    ctaButtons.forEach((button) => {
      button.addEventListener("mouseenter", () => {
        const icon = button.querySelector(".cta-button-icon");
        if (icon) {
          icon.classList.add("icon-move");
        }
      });

      button.addEventListener("mouseleave", () => {
        const icon = button.querySelector(".cta-button-icon");
        if (icon) {
          icon.classList.remove("icon-move");
        }
      });
    });

    // Create geometric shapes for background
    const createBackgroundElements = () => {
      const ctaSection = document.querySelector(".cta-section");
      const container = document.querySelector(".cta-section .container");

      if (!ctaSection || !container) return;

      // Create pattern background
      const patternGrid = document.createElement("div");
      patternGrid.className = "cta-pattern-grid";
      ctaSection.insertBefore(patternGrid, container);

      // Create circles
      const circles = [
        { size: 300, position: "top-left", opacity: 0.03 },
        { size: 200, position: "bottom-right", opacity: 0.02 },
      ];

      circles.forEach((circle, index) => {
        const element = document.createElement("div");
        element.className = `cta-circle cta-circle-${circle.position}`;
        element.style.width = `${circle.size}px`;
        element.style.height = `${circle.size}px`;
        element.style.opacity = circle.opacity;
        ctaSection.insertBefore(element, container);
      });

      // Create floating dots
      const dotsContainer = document.createElement("div");
      dotsContainer.className = "cta-dots-container";

      for (let i = 0; i < 20; i++) {
        const dot = document.createElement("div");
        dot.className = "cta-floating-dot";
        dot.style.left = `${Math.random() * 100}%`;
        dot.style.top = `${Math.random() * 100}%`;
        dot.style.animationDelay = `${Math.random() * 5}s`;
        dot.style.opacity = (Math.random() * 0.1 + 0.05).toString();
        dotsContainer.appendChild(dot);
      }

      ctaSection.insertBefore(dotsContainer, container);
    };

    createBackgroundElements();

    return () => {
      // Clean up event listeners
      const buttons = document.querySelectorAll(".cta-button");
      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", () => {});
        button.removeEventListener("mouseleave", () => {});
      });

      if (section) observer.unobserve(section);

      // Remove any created elements
      const patternGrid = document.querySelector(".cta-pattern-grid");
      if (patternGrid) patternGrid.remove();

      const dotsContainer = document.querySelector(".cta-dots-container");
      if (dotsContainer) dotsContainer.remove();

      const circles = document.querySelectorAll(".cta-circle");
      circles.forEach((circle) => circle.remove());
    };
  }, []);

  return (
    <section
      className={`cta-section ${isVisible ? "visible" : ""}`}
      id="contact-us"
    >
      {/* Overlay gradient */}
      <div className="cta-bg-overlay"></div>

      <div className="container">
        <div className="cta-header">
          <span className="section-label">Laten we samenwerken</span>
          <h2 className="cta-title">
            Klaar om jouw online aanwezigheid naar het volgende niveau te
            tillen?
          </h2>
          <p className="cta-description">
            Wij bieden eerlijke adviezen en transparante oplossingen die passen
            bij jouw business
          </p>
        </div>

        <div className="cta-content">
          <div className="cta-options">
            <div className="cta-option">
              <div className="cta-option-marker">01</div>
              <div className="cta-option-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
                </svg>
              </div>
              <div className="cta-option-content">
                <h3 className="cta-option-title">Gratis Ads Strategie</h3>
                <p className="cta-option-description">
                  Krijg een op maat gemaakt adviesrapport met quick wins voor
                  jouw Ads. Onze experts analyseren je huidige strategie en
                  geven concrete aanbevelingen.
                </p>
                <div className="cta-option-features">
                  <div className="cta-feature">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      width="18"
                      height="18"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    <span>Expert analyse</span>
                  </div>
                  <div className="cta-feature">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      width="18"
                      height="18"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    <span>Persoonlijk advies</span>
                  </div>
                </div>
                <a href="/contact" className="cta-button primary">
                  <span>Plan jouw gesprek</span>
                  <svg
                    className="cta-button-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="cta-option">
              <div className="cta-option-marker">02</div>
              <div className="cta-option-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                </svg>
              </div>
              <div className="cta-option-content">
                <h3 className="cta-option-title">Neem direct contact op</h3>
                <p className="cta-option-description">
                  Heb je een dringende vraag? Bel ons of stuur direct een
                  bericht. We staan klaar om al je vragen te beantwoorden en je
                  te helpen met je marketing uitdagingen.
                </p>
                <div className="cta-option-features">
                  <div className="cta-feature">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      width="18"
                      height="18"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    <span>Snelle service</span>
                  </div>
                  <div className="cta-feature">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      width="18"
                      height="18"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    <span>Direct antwoord</span>
                  </div>
                </div>
                <a href="/contact" className="cta-button secondary">
                  <span>Neem contact op</span>
                  <svg
                    className="cta-button-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-testimonial">
          <div className="cta-testimonial-quote">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z" />
            </svg>
            <p>
              FibAds heeft onze online zichtbaarheid en conversies drastisch
              verbeterd. Hun expertise is een gamechanger voor ons bedrijf
              geweest.
            </p>
            <div className="cta-testimonial-author">
              <span className="author-name">Michael van den Berg</span>
              <span className="author-position">Marketing Director</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
