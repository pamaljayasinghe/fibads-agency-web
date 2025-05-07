"use client";

import "./Benefits.css";
import { useEffect, useState } from "react";

const Benefits = () => {
  const [isVisible, setIsVisible] = useState(false);

  const benefits = [
    {
      id: "brand",
      title: "Versterk Jouw Merk",
      description:
        "Creëer een solide merkidentiteit die jouw verhaal duidelijk communiceert naar je doelgroep.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="24"
          height="24"
        >
          <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-5-5c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5zm-8.5 0c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5-3.5 1.57-3.5 3.5zm4.5-1.5v-1h-2v1h2zm0 3v-1.5h-2V15h2z" />
        </svg>
      ),
    },
    {
      id: "roi",
      title: "Maximaliseer Jouw Rendement",
      description:
        "Haal meer uit jouw marketingbudget met doelgerichte Ads en data-gedreven optimalisaties.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="24"
          height="24"
        >
          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
        </svg>
      ),
      stats: "40%",
      statsText: "hogere ROI",
    },
    {
      id: "custom",
      title: "Maatwerk Voor Jouw Doelen",
      description:
        "Ontvang een op maat gemaakte strategie die perfect aansluit bij jouw bedrijfsdoelen en doelgroep.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="24"
          height="24"
        >
          <path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
        </svg>
      ),
      stats: "15+",
      statsText: "jaren expertise",
    },
  ];

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

    const section = document.querySelector(".benefits-section");
    if (section) observer.observe(section);

    // Initialize animation for benefit items
    const benefitItems = document.querySelectorAll(".benefit-item");
    benefitItems.forEach((item, index) => {
      item.classList.add("benefit-item-hidden");
      setTimeout(() => {
        item.classList.remove("benefit-item-hidden");
        item.classList.add("benefit-item-visible");
      }, index * 200);
    });

    // Add hover effect for benefit icons
    const benefitIcons = document.querySelectorAll(".benefit-icon");
    benefitIcons.forEach((icon) => {
      icon.addEventListener("mouseenter", () => {
        icon.classList.add("icon-pulse");
      });
      icon.addEventListener("mouseleave", () => {
        icon.classList.remove("icon-pulse");
      });
    });

    // Animate stat counters if they exist
    const statsElements = document.querySelectorAll(".benefit-stats");
    if (statsElements.length > 0) {
      setTimeout(() => {
        statsElements.forEach((stat) => {
          stat.classList.add("stats-visible");
        });
      }, 800);
    }

    // Create floating shapes
    const createFloatingShapes = () => {
      const benefitsSection = document.querySelector(".benefits-section");
      if (!benefitsSection) return;

      const shapes = ["circle", "square", "triangle"];
      const count = 5; // Number of shapes

      const shapesContainer = document.createElement("div");
      shapesContainer.className = "benefits-bg-shapes";
      benefitsSection.appendChild(shapesContainer);

      for (let i = 0; i < count; i++) {
        const shape = document.createElement("div");
        const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
        shape.className = `floating-shape ${randomShape}`;
        shape.style.left = `${Math.random() * 90 + 5}%`;
        shape.style.top = `${Math.random() * 80 + 10}%`;
        shape.style.animationDelay = `${Math.random() * 5}s`;
        shape.style.animationDuration = `${Math.random() * 10 + 10}s`;
        shapesContainer.appendChild(shape);
      }
    };

    createFloatingShapes();

    return () => {
      // Clean up event listeners
      const icons = document.querySelectorAll(".benefit-icon");
      icons.forEach((icon) => {
        icon.removeEventListener("mouseenter", () => {});
        icon.removeEventListener("mouseleave", () => {});
      });

      if (section) observer.unobserve(section);

      // Remove any created elements
      const shapesContainer = document.querySelector(".benefits-bg-shapes");
      if (shapesContainer) shapesContainer.remove();
    };
  }, []);

  return (
    <section
      className={`benefits-section ${isVisible ? "visible" : ""}`}
      id="benefits"
    >
      {/* Background gradient overlay */}
      <div className="benefits-bg-overlay"></div>

      {/* Decorative elements */}
      <div className="benefits-circle-1"></div>
      <div className="benefits-circle-2"></div>
      <div className="benefits-line"></div>

      <div className="container">
        <div className="benefits-header">
          <span className="section-label">Voordelen</span>
          <h2 className="benefits-title">Bereik natuurlijk succes</h2>
          <p className="benefits-subtitle">
            Ontdek hoe onze expertise je helpt bij het realiseren van jouw
            doelen
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={benefit.id} className="benefit-item">
              <div className="benefit-icon">
                {benefit.icon}
                <div className="icon-backdrop"></div>
              </div>
              <div className="benefit-details">
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
                {benefit.stats && (
                  <div className="benefit-stats">
                    <span className="stat-number">{benefit.stats}</span>
                    <span className="stat-text">{benefit.statsText}</span>
                  </div>
                )}
              </div>
              <div className="benefit-number">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>

        <div className="benefits-cta">
          <p>Klaar voor jouw persoonlijke succesplan?</p>
          <a href="/contact" className="benefits-cta-button">
            <span>Begin jouw reis</span>
            <svg
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
    </section>
  );
};

export default Benefits;
