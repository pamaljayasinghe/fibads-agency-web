"use client";

import React, { useEffect, useRef } from "react";
import "./Services.css";

const Services = () => {
  const sectionRef = useRef(null);

  // Add animation triggers when the section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  // Define all services based on the screenshot
  const services = [
    {
      id: "content-marketing",
      label: "Storytelling die verbindt",
      title: "Contentmarketing",
      link: "/services/content-marketing",
      description: "Verhalen die verbinden en engagement opbouwen."
    },
    {
      id: "website-designing",
      label: "Perfecte gebruikerservaring",
      title: "Webdesign & Development",
      link: "/services/website-designing",
      description: "Visueel verbluffende, razendsnelle websites."
    },
    {
      id: "email-marketing",
      label: "Doelgerichte communicatie",
      title: "E-mailmarketing",
      link: "/services/email-marketing",
      description: "Gepersonaliseerde campagnes met meetbare ROI."
    },
    {
      id: "webflow-development",
      label: "Flexibele contentbeheer",
      title: "Webflow-ontwikkeling",
      link: "/services/webflow-development",
      description: "Pixel-perfecte, no-code sites die je zelf beheert."
    },
    {
      id: "social-media-marketing",
      label: "Effectieve sociale aanwezigheid",
      title: "Social media marketing",
      link: "/services/social-media-marketing",
      description: "Doelgerichte ads op Facebook, Instagram en LinkedIn."
    },
    {
      id: "digital-marketing",
      label: "Allesomvattende strategie",
      title: "Digital marketing",
      link: "/services/digital-marketing",
      description: "Holistische strategieën voor groei & conversie."
    },
  ];

  return (
    <section className="services-section-dark" ref={sectionRef}>
      <div className="services-container">
        <div className="services-header">
          <span className="services-label-recent">ONZE DIENSTEN</span>
          <h2 className="services-title-main">
            <span className="services-title-our">ONZE</span>{" "}
            <span className="services-title-services">DIENSTEN</span>
          </h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-card"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="service-content">
                <span className="service-label">{service.label}</span>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
              <a href={service.link} className="service-link">
                <svg
                  className="service-arrow"
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
              </a>
            </div>
          ))}
        </div>

        <div className="services-cta-banner">
          <p className="services-cta-text">Samen groeien? Vraag nu je gratis strategie aan →</p>
          <a href="/contact" className="services-cta-link">Vraag strategie aan</a>
        </div>

        <div className="services-more">
          <a href="/services" className="services-more-link">
            <div className="services-more-button">
              <span>Meer</span>
              <span>Diensten</span>
            </div>
          </a>
        </div>

        {/* 3D element shown in screenshot */}
        <div className="services-3d-element">
          <img src="/img/3d-ring.png" alt="3D Element" className="floating" />
        </div>
      </div>
    </section>
  );
};

export default Services;
