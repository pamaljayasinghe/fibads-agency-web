"use client";

import { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: "What services do you offer as a creative agency?",
      answer:
        "We offer a wide range of services, including branding, graphic design, web development, digital marketing, social media strategy, content creation, UX/UI design, and advertising campaigns. Our team tailors each solution to fit the unique needs of your business.",
    },
    {
      id: 2,
      question: "How can a creative agency help my business grow?",
      answer:
        "A creative agency can help your business grow by developing a strong brand identity, creating engaging digital experiences, implementing effective marketing strategies, and ensuring your message resonates with your target audience. We focus on delivering measurable results that drive business growth.",
    },
    {
      id: 3,
      question: "How long does it take to complete a project?",
      answer:
        "Project timelines vary based on scope, complexity, and specific requirements. Small projects might take a few weeks, while comprehensive branding or website development could take several months. We provide detailed timelines during our initial consultation and keep you informed throughout the process.",
    },
    {
      id: 4,
      question: "What is your design process like?",
      answer:
        "Our design process begins with understanding your business goals and target audience. We then move through research, conceptualization, design development, client feedback, refinement, and final delivery. We maintain open communication and collaborative approach throughout the entire process.",
    },
    {
      id: 5,
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Yes, we offer various support plans to ensure your digital assets remain effective after launch. These can include website maintenance, performance monitoring, content updates, and marketing campaign optimization. We're committed to building long-term relationships with our clients.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-header">
          <span className="section-label">FAQ</span>
          <h2 className="faq-title">Popular questions</h2>
        </div>

        <div className="faq-content">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <div className="faq-number">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="faq-details">
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span className="faq-icon">
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
                  </span>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-footer">
          <a href="/faq" className="view-faq-btn">
            View FAQ
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

export default FAQ;
