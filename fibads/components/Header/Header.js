"use client";

import { useState, useEffect } from "react";
import "./Header.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  let lastScrollTop = 0;

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

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 20) {
        // Trigger header change sooner
        setScrolled(true);
        if (scrollTop > lastScrollTop) {
          setHidden(true);
        } else {
          setHidden(false);
        }
      } else {
        setScrolled(false);
        setHidden(false);
      }

      lastScrollTop = scrollTop;
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
    <header
      className={`header ${scrolled ? "scrolled" : ""} ${
        hidden ? "hidden" : ""
      }`}
    >
      <div className="container header-container">
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

        {/* Adjusted nav styling to align properly */}
        <nav className="main-nav">
          <ul className="nav-links">
            <li>
              <a href="/diensten" className="nav-link animated-underline">
                Diensten
              </a>
            </li>
            <li>
              <a href="/cases" className="nav-link animated-underline">
                Cases
              </a>
            </li>
            <li>
              <a href="/over-ons" className="nav-link animated-underline">
                Over ons
              </a>
            </li>
            <li>
              <a href="/mad" className="nav-link animated-underline">
                Mad
              </a>
            </li>
          </ul>
        </nav>

        {/* DarkModeToggle and CTA button */}
        <div className="header-actions">
          <DarkModeToggle />

          <div className="cta-button-container">
            <a href="/contact" className="cta-button gradient-bg">
              <span>Start</span>
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

        <button
          className={`mobile-menu-toggle ${isMenuOpen ? "active" : ""}`}
          aria-label="Toggle Mobile Menu"
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
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
            <li>
              <div className="mobile-theme-toggle">
                <DarkModeToggle />
              </div>
            </li>
            <li>
              <a href="/contact" className="mobile-nav-link cta">
                Start
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
