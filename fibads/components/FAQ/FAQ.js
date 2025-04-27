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
    {
      id: 4,
      question: "Wat zijn de kosten van jullie diensten?",
      answer:
        "Onze prijzen zijn afhankelijk van je specifieke wensen en de omvang van het project. We werken met transparante prijsmodellen en stellen altijd een gedetailleerde offerte op. Zo weet je precies waar je aan toe bent.",
    },
    {
      id: 5,
      question: "Hoe lang duurt het voordat ik resultaten zie?",
      answer:
        "Dit verschilt per dienst en situatie. Bij Google Ads kunnen de eerste resultaten al binnen enkele dagen zichtbaar zijn. Bij SEO en branding projecten moet je rekening houden met een langere termijn, vaak 3-6 maanden voor significante resultaten.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-background">
        <div className="faq-mesh-gradient"></div>
        <div className="faq-dotted-pattern"></div>
      </div>

      <div className="container">
        <div className="faq-header">
          <span className="section-label">Veelgestelde vragen</span>
          <h2 className="faq-title">Krijg antwoord op al je vragen</h2>
          <p className="faq-description">
            We begrijpen dat je vragen kunt hebben over onze diensten. Hieronder
            vind je de meestgestelde vragen. Als je vraag er niet tussen staat,
            neem dan gerust contact met ons op.
          </p>
        </div>

        <div className="faq-wrapper">
          <div className="faq-accordion">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
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

          {/* Add visual element to balance the section */}
          <div className="faq-image-container" data-aos="fade-left">
            <div className="faq-image">
              <div className="faq-image-shape"></div>
              <img src="/api/placeholder/400/400" alt="Fib Ads Support" />
            </div>
          </div>
        </div>

        <div className="faq-cta">
          <p className="faq-cta-text">
            Nog steeds vragen? We helpen je graag verder
          </p>
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
