"use client";

import React, { useState } from "react";
import "./Services.css";

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: "digital-strategy",
      number: "01",
      title: "Digital strategy & consulting",
      imageUrl: "/img/service-digital-strategy.jpg",
      link: "/services/digital-strategy",
    },
    {
      id: "branding",
      number: "02",
      title: "Branding & identity design",
      imageUrl: "/img/service-branding.jpg",
      link: "/services/branding",
    },
    {
      id: "web",
      number: "03",
      title: "Web development & design",
      imageUrl: "/img/service-web.jpg",
      link: "/services/web-development",
    },
    {
      id: "social-media",
      number: "04",
      title: "Social media management",
      imageUrl: "/img/service-social.jpg",
      link: "/services/social-media",
    },
    {
      id: "marketing",
      number: "05",
      title: "Digital marketing",
      imageUrl: "/img/service-marketing.jpg",
      link: "/services/digital-marketing",
    },
  ];

  const handleMouseEnter = (id) => {
    setActiveService(id);
  };

  const handleMouseLeave = () => {
    setActiveService(null);
  };

  return (
    <section className="services-new-section">
      <div className="services-new-container">
        <div className="services-new-header">
          <span className="services-new-label">Services</span>
          <h2 className="services-new-title">Our digital offerings</h2>
        </div>

        <div className="services-new-list">
          {services.map((service) => (
            <a
              href={service.link}
              key={service.id}
              className={`service-new-item ${
                activeService === service.id ? "active" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(service.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="service-item-left">
                <span className="service-new-number">{service.number}</span>
                <h3 className="service-new-name">{service.title}</h3>
              </div>

              <div className="service-item-right">
                <div className="service-new-arrow">
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

              {activeService === service.id && (
                <div className="service-image-wrapper">
                  <div className="service-new-image">
                    <img src={service.imageUrl} alt={service.title} />
                  </div>
                </div>
              )}
            </a>
          ))}
        </div>

        <div className="services-new-cta">
          <a href="/services" className="services-new-link">
            View Services
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 14L14 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6H14V14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
