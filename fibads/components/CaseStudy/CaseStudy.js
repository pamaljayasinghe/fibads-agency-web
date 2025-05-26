"use client";

import { useState, useEffect } from "react";
import "./CaseStudy.css";

const CaseStudy = () => {
  // Define case studies data
  const caseStudies = [
    {
      id: 1,
      title: "Redefining E-Commerce",
      date: "mrt. 2025",
      type: "Webshop optimalisatie",
      image:
        "https://placehold.co/600x400/f9f9f9/000000?text=Product+Design+Studio",
      tags: ["Branding", "UI/UX"],
      description:
        "A complete redesign for an e-commerce platform that resulted in a 45% increase in user engagement and 60% higher conversion rates. Our approach focused on simplifying the user journey while creating a distinctive brand presence.",
    },
    {
      id: 2,
      title: "Design That Converts",
      date: "feb. 2025",
      type: "UI/UX-revisie",
      image:
        "https://placehold.co/600x400/f9f9f9/000000?text=Mobile+App+Design",
      tags: ["Design", "Idea"],
      description:
        "Strategic design implementation that transformed user interaction and increased conversion rates by 37%. We created a seamless experience across all touchpoints while maintaining strong brand consistency.",
    },
    {
      id: 3,
      title: "A New Brand Identity",
      date: "jan. 2025",
      type: "Volledige rebranding",
      image: "https://placehold.co/600x400/f9f9f9/000000?text=Brand+Identity",
      tags: ["Branding", "Mockup"],
      description:
        "Creating a cohesive brand identity system for a startup that helped them secure additional funding rounds. Our comprehensive approach covered everything from visual identity to brand voice and positioning strategy.",
    },
    {
      id: 4,
      title: "Business Card Design",
      date: "dec. 2024",
      type: "Print & digital assets",
      image:
        "https://placehold.co/600x400/f9f9f9/000000?text=Business+Card+Design",
      tags: ["Design", "Card"],
      description:
        "Minimalist yet impactful business card design that perfectly captured the essence of the client's brand. The design increased brand recall and recognition in a competitive marketplace.",
    },
  ];

  // State to track which case study is currently hovered/active
  const [activeStudy, setActiveStudy] = useState(caseStudies[0].id);

  // Animation tracking
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle case study selection with animation
  const handleCaseStudyChange = (id) => {
    if (activeStudy !== id && !isAnimating) {
      setIsAnimating(true);
      setActiveStudy(id);
      setTimeout(() => setIsAnimating(false), 400); // Match fadeIn animation duration

      // For mobile: scroll to the active case study item to ensure it's visible
      if (window.innerWidth <= 768) {
        const activeElement = document.querySelector(
          `.case-study-item[data-id="${id}"]`
        );
        if (activeElement) {
          activeElement.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
        }
      }
    }
  };

  // Initialize animations on component mount
  useEffect(() => {
    // Add stagger effect to case study items
    const items = document.querySelectorAll(".case-study-item");
    items.forEach((item, index) => {
      item.classList.add("stagger-item");
      item.style.animationDelay = `${0.1 * (index + 1)}s`;
      item.style.animationName = "fadeIn";
      item.style.animationDuration = "0.6s";
      item.style.animationFillMode = "forwards";
    });

    // Animate the title
    const titleElement = document.querySelector(".case-studies-title");
    if (titleElement) {
      titleElement.classList.add("slide-up");
    }

    // Animate section label
    const labelElement = document.querySelector(".section-label");
    if (labelElement) {
      labelElement.classList.add("fade-in");
    }
  }, []);

  return (
    <section className="case-studies-section">
      <div className="container">
        <span className="section-label">Case studies</span>
        <h2 className="case-studies-title">GESELECTEERDE CASES</h2>

        <div className="case-studies-container">
          <div className="case-studies-list">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className={`case-study-item ${
                  activeStudy === study.id ? "active" : ""
                }`}
                onMouseEnter={() => handleCaseStudyChange(study.id)}
              >
                <h3 className="case-study-item-title">{study.title}</h3>
                <p className="case-study-item-date">
                  {study.date} · {study.type}
                </p>
                {/* Mobile image appears after title - only shown in mobile view via CSS */}
                <div className="mobile-case-study-image">
                  <img src={study.image} alt={study.title} />
                </div>
                <div className="arrow-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 7H17V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="case-study-preview">
            {/* Only rendering the active case study for better performance */}
            {caseStudies
              .filter((study) => study.id === activeStudy)
              .map((study) => (
                <div
                  key={study.id}
                  className={`case-study-details ${
                    isAnimating ? "animating" : ""
                  }`}
                >
                  <div className="case-study-image">
                    <img src={study.image} alt={study.title} />
                  </div>
                  <div className="case-study-description">
                    {study.description}
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="case-studies-view-more">
          <a
            href="/case-studies"
            className="view-case-studies-btn animated-underline"
          >
            Alle projecten bekijken →
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
