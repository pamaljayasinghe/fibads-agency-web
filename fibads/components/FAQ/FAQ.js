"use client";

import { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: "Wat is Fib Ads?",
      answer:
        "Fib Ads is een full-service marketingbureau dat zich specialiseert in branding, webdesign en Google Ads. We helpen bedrijven hun online aanwezigheid te versterken en meer klanten te bereiken op een natuurlijke en effectieve manier.",
    },
    {
      id: 2,
      question: "Hoe werken jullie samen met klanten?",
      answer:
        "We geloven in een persoonlijke aanpak. Na een gratis adviesgesprek stellen we een op maat gemaakte strategie op die aansluit bij jouw doelen en budget. We houden je tijdens het hele proces op de hoogte met regelmatige updates en rapportages.",
    },
    {
      id: 3,
      question: "Bieden jullie garantie?",
      answer:
        "We bieden geen resultaatgarantie, omdat online marketing van veel factoren afhankelijk is. Wel garanderen we transparantie, kwaliteit en een proactieve aanpak. Als je niet tevreden bent met onze dienstverlening, gaan we graag in gesprek om tot een oplossing te komen.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-header reveal">
          <span className="section-label">FAQ</span>
          <h2 className="faq-title">Veelgestelde vragen</h2>
        </div>

        <div className="faq-accordion reveal">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question}
                <span className="faq-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 5V19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 12H19"
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
          ))}
        </div>

        <div className="faq-cta reveal">
          <a href="/contact" className="faq-button">
            Vrijblijvend contact
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

export default FAQ;
