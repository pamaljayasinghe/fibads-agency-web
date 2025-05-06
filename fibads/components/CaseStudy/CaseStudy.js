"use client";

import { useState } from "react";
import "./CaseStudy.css";

const CaseStudy = () => {
  // Define case studies data
  const caseStudies = [
    {
      id: 1,
      title: "Project digital transformation initiative",
      date: "17 Mar 2025",
      image: "/img/Logog.png", // Using an existing image from your project
      description:
        "The Brand elevation strategy launch is aimed at reshaping brands through innovative digital strategies. Our team integrates advanced technologies & creative solutions to enhance user experiences, streamline processes, & drive measurable growth.",
    },
    {
      id: 2,
      title: "Brand elevation strategy launch",
      date: "12 Feb 2025",
      image: "/img/Logow.png",
      description:
        "Brand elevation focuses on enhancing market position and perception. We create comprehensive strategies that refine visual identity, messaging, and customer touchpoints to establish a stronger emotional connection with target audiences.",
    },
    {
      id: 3,
      title: "Innovation through digital design",
      date: "05 Jan 2025",
      image: "/img/Logob.png",
      description:
        "Our digital design innovation combines cutting-edge aesthetics with functional excellence. We develop responsive, intuitive interfaces that captivate users while ensuring seamless experiences across all platforms and devices.",
    },
    {
      id: 4,
      title: "Creative vision for growth",
      date: "30 Dec 2025",
      image: "/img/iconwhite.png",
      description:
        "Creative vision drives sustainable business growth by reimagining possibilities. We align bold creative concepts with strategic business objectives to create memorable brand experiences that resonate with audiences and foster long-term loyalty.",
    },
  ];

  // State to track which case study is currently hovered
  const [activeStudy, setActiveStudy] = useState(caseStudies[0].id);

  return (
    <section className="case-studies-section">
      <div className="container">
        <span className="section-label">Case studies</span>
        <h2 className="case-studies-title">Our latest case studies</h2>

        <div className="case-studies-container">
          <div className="case-studies-list">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className={`case-study-item ${
                  activeStudy === study.id ? "active" : ""
                }`}
                onMouseEnter={() => setActiveStudy(study.id)}
              >
                <h3 className="case-study-item-title">{study.title}</h3>
                <p className="case-study-item-date">{study.date}</p>
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
                <div key={study.id} className="case-study-details">
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
          <a href="/case-studies" className="view-case-studies-btn">
            View Case Studies
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 8H15M15 8L8 1M15 8L8 15"
                stroke="currentColor"
                strokeWidth="1.5"
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

export default CaseStudy;
