"use client";

import { useState, useEffect, useRef } from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: '"Innovative and impactful"',
      description:
        "The agency's creative approach was exactly what our business needed. Their work made us stand out in an already crowded market. We've seen an impressive increase in website traffic and customer inquiries, all thanks to their fresh ideas and strategic thinking.",
      author: "Emily Roberts",
      position: "Founder, Urban Innovators",
      company: "SupplyHog",
      imageUrl: "/img/Logob.png", // Using an existing image
    },
    {
      id: 2,
      rating: 5,
      text: '"Exceeded our expectations"',
      description:
        "Working with this team transformed our digital presence completely. They took the time to understand our unique challenges and delivered solutions that perfectly aligned with our goals. Our conversion rates have improved significantly since the launch.",
      author: "Michael Chen",
      position: "CEO, TechNova",
      company: "TechNova",
      imageUrl: "/img/Logob.png", // Using an existing image
    },
    {
      id: 3,
      rating: 5,
      text: '"Professional and results-driven"',
      description:
        "The level of expertise and dedication we received was outstanding. From the initial consultation to the final implementation, every step was handled with precision and care. They delivered measurable results that have positively impacted our bottom line.",
      author: "Sarah Johnson",
      position: "Marketing Director, EcoSmart",
      company: "EcoSmart",
      imageUrl: "/img/Logow.png", // Using an existing image
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("next");
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayIntervalRef = useRef(null);
  const autoPlayDelay = 5000; // 5 seconds between slides

  // Function to advance to the next testimonial
  const nextTestimonial = () => {
    if (!animating) {
      setDirection("next");
      setAnimating(true);
      setActiveIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
      setTimeout(() => setAnimating(false), 800); // Increased animation time
    }
  };

  // Function to go to the previous testimonial
  const prevTestimonial = () => {
    if (!animating) {
      setDirection("prev");
      setAnimating(true);
      setActiveIndex((prev) =>
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
      setTimeout(() => setAnimating(false), 800); // Increased animation time
    }
  };

  // Auto-advance slides - Updated to be more reliable
  useEffect(() => {
    // Clear any existing interval first to avoid having multiple intervals
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
      autoPlayIntervalRef.current = null;
    }

    if (isAutoPlaying) {
      autoPlayIntervalRef.current = setInterval(() => {
        nextTestimonial();
      }, autoPlayDelay);
    }

    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
        autoPlayIntervalRef.current = null;
      }
    };
  }, [isAutoPlaying, activeIndex]);

  // Initialize auto-play when component mounts
  useEffect(() => {
    // Start auto-play immediately when the component mounts
    setIsAutoPlaying(true);
    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
      }
    };
  }, []);

  // Pause auto-play on hover or focus
  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
  };

  // Resume auto-play when mouse leaves or focus is lost
  const resumeAutoPlay = () => {
    setIsAutoPlaying(true);
  };

  // Progress percentage for current testimonial
  const progressPercentage = ((activeIndex + 1) / testimonials.length) * 100;

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div
          className="testimonials-wrapper"
          onMouseEnter={pauseAutoPlay}
          onMouseLeave={resumeAutoPlay}
          onFocus={pauseAutoPlay}
          onBlur={resumeAutoPlay}
        >
          <span className="section-label">Client</span>
          <h2 className="testimonials-title">journeys</h2>

          <div className="testimonial-progress">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="progress-counter">
              {activeIndex + 1}/{testimonials.length}
            </div>
          </div>

          <div className="testimonial-content">
            <div className="testimonial-company">
              <div className="company-logo">
                <span className="company-name">
                  {testimonials[activeIndex].company}
                </span>
              </div>
              <div className="testimonial-rating">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <span key={i} className="star">
                    ★
                  </span>
                ))}
              </div>
            </div>

            <div
              className={`testimonial-quote ${
                animating ? `slide-${direction}` : ""
              }`}
            >
              <h3 className="quote-text">{testimonials[activeIndex].text}</h3>
            </div>

            <div
              className={`testimonial-description ${
                animating ? `fade-${direction}` : ""
              }`}
            >
              <p>{testimonials[activeIndex].description}</p>
            </div>

            <div
              className={`testimonial-author ${
                animating ? `fade-${direction}` : ""
              }`}
            >
              <div className="author-image">
                <img
                  src={testimonials[activeIndex].imageUrl}
                  alt={testimonials[activeIndex].author}
                />
              </div>
              <div className="author-info">
                <h4 className="author-name">
                  {testimonials[activeIndex].author}
                </h4>
                <p className="author-position">
                  {testimonials[activeIndex].position}
                </p>
              </div>
            </div>
          </div>

          <div className="testimonial-navigation">
            <button
              className="nav-button prev"
              onClick={() => {
                prevTestimonial();
                pauseAutoPlay();
                // Resume autoplay after user interaction
                setTimeout(() => resumeAutoPlay(), 10000);
              }}
              aria-label="Previous testimonial"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className="nav-button next"
              onClick={() => {
                nextTestimonial();
                pauseAutoPlay();
                // Resume autoplay after user interaction
                setTimeout(() => resumeAutoPlay(), 10000);
              }}
              aria-label="Next testimonial"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
