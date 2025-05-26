"use client";

import { useState, useEffect } from "react";
import "./Header.css";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check dark mode status
  useEffect(() => {
    // Initial check
    setIsDarkMode(document.body.classList.contains("dark-mode"));

    // Set up observer to watch for class changes on body
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          setIsDarkMode(document.body.classList.contains("dark-mode"));
        }
      });
    });

    observer.observe(document.body, { attributes: true });

    return () => observer.disconnect();
  }, []);

  // Handle scroll effects for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Lock/unlock body scroll when menu is open/closed
    if (!isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo-container">
          <a href="/" className="logo">
            {isDarkMode ? (
              <Image
                src="/img/Logow.png"
                alt="FIB DIGITAL Dark Logo"
                width={140}
                height={40}
                className="logo-image"
                priority
              />
            ) : (
              <Image
                src="/img/Logob.png"
                alt="FIB DIGITAL Light Logo"
                width={140}
                height={40}
                className="logo-image"
                priority
              />
            )}
            <span className="logo-text visually-hidden">FIB DIGITAL</span>
          </a>
        </div>

        <nav className="main-nav">
          <ul className="nav-links">
            <li>
              <a href="/diensten" className="nav-link">
                Diensten
              </a>
            </li>
            <li>
              <a href="/cases" className="nav-link">
                Cases
              </a>
            </li>
            <li>
              <a href="/over-ons" className="nav-link">
                Over ons
              </a>
            </li>
            <li>
              <a href="/mad" className="nav-link">
                Mad
              </a>
            </li>
          </ul>
        </nav>

        {/* Header right side with CTA button */}
        <div className="header-right">
          <a href="/contact" className="contact-btn">
            <span>Contact</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className={`mobile-menu-btn ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle Mobile Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile menu overlay */}
        <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
          <div className="mobile-menu-container">
            <ul className="mobile-nav-links">
              <li>
                <a href="/diensten" className="mobile-nav-link">
                  Diensten
                </a>
              </li>
              <li>
                <a href="/cases" className="mobile-nav-link">
                  Cases
                </a>
              </li>
              <li>
                <a href="/over-ons" className="mobile-nav-link">
                  Over ons
                </a>
              </li>
              <li>
                <a href="/mad" className="mobile-nav-link">
                  Mad
                </a>
              </li>
            </ul>
            <div className="mobile-menu-footer">
              <a href="/contact" className="mobile-contact-btn">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
