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

    // Create and animate background elements
    const createBackgroundElements = () => {
      const ctaSection = document.querySelector(".cta-section");

      if (!ctaSection) return;

      // Create circles
      const createCircles = () => {
        const circleContainer = document.createElement("div");
        circleContainer.className = "circle-container";

        // Create main large circle
        const mainCircle = document.createElement("div");
        mainCircle.className = "main-circle";
        circleContainer.appendChild(mainCircle);

        // Create accent dots
        const dotPositions = [
          { top: "80px", right: "auto", left: "calc(50% + 230px)" },
          { top: "500px", right: "auto", left: "calc(50% - 230px)" },
        ];

        dotPositions.forEach((pos) => {
          const dot = document.createElement("div");
          dot.className = "accent-dot";
          dot.style.top = pos.top;
          dot.style.right = pos.right;
          dot.style.left = pos.left;
          circleContainer.appendChild(dot);
        });

        // Create decorative floating shapes
        const createFloatingShapes = () => {
          const shapes = [
            { className: "floating-shape shape-1" },
            { className: "floating-shape shape-2" },
            { className: "floating-shape shape-3" },
            { className: "floating-shape shape-4" },
          ];

          shapes.forEach((shape) => {
            const element = document.createElement("div");
            element.className = shape.className;
            circleContainer.appendChild(element);
          });
        };

        createFloatingShapes();
        ctaSection.appendChild(circleContainer);
      };

      createCircles();
    };

    createBackgroundElements();

    return () => {
      if (section) observer.unobserve(section);

      // Clean up created elements
      const circleContainer = document.querySelector(".circle-container");
      if (circleContainer) circleContainer.remove();
    };
  }, []);

  return (
    <section
      className={`cta-section ${isVisible ? "visible" : ""}`}
      id="contact-us"
    >
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">
            <span className="title-first-line">Have A</span>
            <span className="title-second-line">Project</span>
            <span className="title-third-line">In Mind?</span>
          </h2>

          <div className="cta-button-container">
            <a href="/contact" className="cta-button">
              <span>Let's Work Together</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="arrow-icon"
              >
                <path
                  d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
