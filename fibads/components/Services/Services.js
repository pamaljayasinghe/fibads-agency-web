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
      label: "Excellent Performance",
      title: "Content Marketing",
      link: "/services/content-marketing",
    },
    {
      id: "website-designing",
      label: "Designing Your Vision",
      title: "Website Designing",
      link: "/services/website-designing",
    },
    {
      id: "email-marketing",
      label: "Reach Your Audience",
      title: "E-mail Marketing",
      link: "/services/email-marketing",
    },
    {
      id: "webflow-development",
      label: "Building Seamless Websites",
      title: "Webflow Development",
      link: "/services/webflow-development",
    },
    {
      id: "social-media-marketing",
      label: "Engage, Grow, Succeed",
      title: "Social Media Marketing",
      link: "/services/social-media-marketing",
    },
    {
      id: "digital-marketing",
      label: "Driving Online Success",
      title: "Digital Marketing",
      link: "/services/digital-marketing",
    },
  ];

  return (
    <section className="services-section-dark" ref={sectionRef}>
      <div className="services-container">
        <div className="services-header">
          <span className="services-label-recent">RECENT SERVICES</span>
          <h2 className="services-title-main">
            <span className="services-title-our">OUR</span>{" "}
            <span className="services-title-services">SERVICES</span>
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

        <div className="services-more">
          <a href="/services" className="services-more-link">
            <div className="services-more-button">
              <span>More</span>
              <span>Service</span>
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
