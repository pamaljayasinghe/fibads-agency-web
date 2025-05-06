"use client";

import { useState, useEffect, useRef } from "react";
import "./Hero.css";

const Hero = () => {
  // Define stats data
  const stats = [
    { value: 199, suffix: "+", label: "Proud clients" },
    { value: 212, suffix: "+", label: "Completed initiatives" },
    { value: 11, suffix: "+", label: "Trophies" },
  ];

  // Counter state
  const [counters, setCounters] = useState(stats.map(() => 0));
  const statsRef = useRef(null);
  const hasAnimated = useRef(false);

  const animateValue = (start, end, duration, index) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentValue = Math.floor(progress * (end - start) + start);

      setCounters((prevCounters) => {
        const newCounters = [...prevCounters];
        newCounters[index] = currentValue;
        return newCounters;
      });

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  // Check if element is in view
  const isInViewport = (element) => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  // Start counter animation when the section becomes visible
  useEffect(() => {
    const handleScroll = () => {
      if (hasAnimated.current) return;

      if (statsRef.current && isInViewport(statsRef.current)) {
        hasAnimated.current = true;

        stats.forEach((stat, index) => {
          // Adjust duration based on the number size
          const duration = 2000 + stat.value * 5;
          animateValue(0, stat.value, duration, index);
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once in case the section is already visible
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-left-column">
          <div className="hero-content" data-aos="fade-up">
            <span className="section-label">Digital agency</span>
            <h1 className="hero-title">
              We drive you
              <br />
              to digital
              <br />
              world
            </h1>

            <div className="hero-rating">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="hero-star">
                  ★
                </span>
              ))}
              <p className="hero-trust">
                Trusted globally by over 199+ clients
              </p>
            </div>

            <div className="hero-avatars">
              <div className="avatar avatar-1">
                <img src="/api/placeholder/50/50" alt="Client" />
              </div>
              <div className="avatar avatar-2">
                <img src="/api/placeholder/50/50" alt="Client" />
              </div>
              <div className="avatar avatar-3">
                <img src="/api/placeholder/50/50" alt="Client" />
              </div>
              <div className="avatar avatar-4">
                <img src="/api/placeholder/50/50" alt="Client" />
              </div>
              <div className="avatar avatar-you">You</div>
            </div>
          </div>
        </div>

        <div
          className="hero-right-column"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="laptop-mockup">
            <img
              src="/img/Logog.png"
              alt="Laptop showing website"
              className="laptop-img"
            />
          </div>

          <p className="hero-description">
            At <strong>Lunex</strong>, we propel your business into the digital
            world by combining innovative strategies, cutting-edge design, and
            tailored solutions to drive growth, boost engagement, and ensure
            your brand thrives in the digital landscape.
          </p>
        </div>
      </div>

      {/* Statistics Section */}
      <div
        className="stats-section"
        data-aos="fade-up"
        data-aos-delay="200"
        ref={statsRef}
      >
        <div className="container">
          <h3 className="stats-title">Completion milestone</h3>
          <div className="stats-container">
            {stats.map((stat, index) => (
              <div className="stat-item" key={index}>
                <span className="counter-value">
                  {counters[index]}
                  {stat.suffix}
                </span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
