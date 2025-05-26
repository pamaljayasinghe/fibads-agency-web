"use client";

import { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: "Welke diensten biedt Fib Digital aan?",
      answer:
        "We bieden een breed scala aan diensten, waaronder branding, webdesign, webontwikkeling, digital marketing, social media strategie, contentcreatie, UX/UI-design en advertentiecampagnes. Ons team stemt elke oplossing af op de unieke behoeften van uw bedrijf.",
    },
    {
      id: 2,
      question: "Hoe helpt een creatieve agency mijn merk groeien?",
      answer:
        "Een creatief bureau kan uw bedrijf helpen groeien door een sterke merkidentiteit te ontwikkelen, boeiende digitale ervaringen te creëren, effectieve marketingstrategieën te implementeren en ervoor te zorgen dat uw boodschap resoneert bij uw doelgroep. Wij richten ons op het leveren van meetbare resultaten die bedrijfsgroei stimuleren.",
    },
    {
      id: 3,
      question: "Hoelang duurt een gemiddeld project?",
      answer:
        "Projecttijdlijnen variëren op basis van omvang, complexiteit en specifieke vereisten. Kleine projecten kunnen enkele weken duren, terwijl uitgebreide branding of website-ontwikkeling enkele maanden kan duren. We verstrekken gedetailleerde tijdlijnen tijdens onze eerste consultatie en houden u gedurende het proces op de hoogte.",
    },
    {
      id: 4,
      question: "Werk ik zelf mee aan het ontwerp?",
      answer:
        "Absoluut! Ons ontwerpproces is zeer collaboratief. We beginnen met het begrijpen van uw bedrijfsdoelen en doelgroep, en betrekken u bij elke fase van onderzoek, conceptontwikkeling, design, feedback en verfijning. We houden gedurende het hele proces open communicatie en een samenwerkingsgerichte aanpak.",
    },
    {
      id: 5,
      question: "Bieden jullie nazorg en support?",
      answer:
        "Ja, we bieden verschillende ondersteuningsplannen om ervoor te zorgen dat uw digitale middelen na de lancering effectief blijven. Deze kunnen website-onderhoud, prestatiemonitoring, content-updates en optimalisatie van marketingcampagnes omvatten. We zijn toegewijd aan het opbouwen van langdurige relaties met onze klanten.",
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
          <h2 className="faq-title">Populaire vragen</h2>
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
            Bekijk alle FAQs →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
