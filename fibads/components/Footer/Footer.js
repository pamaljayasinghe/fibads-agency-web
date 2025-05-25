import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        {/* Header Section with Title and Contact Button */}
        <div className="footer-header">
          <div className="footer-title-container">
            <h2 className="footer-title">
              LET'S <span>WORK</span>
            </h2>
            <h2 className="footer-title-second">TOGETHER!</h2>
            <div className="contact-btn-container">
              <a href="/contact" className="contact-btn">
                CONTACT US <span>↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        {/* Footer Content Section */}
        <div className="footer-content">
          {/* Left Column with Services and Information */}
          <div className="footer-column">
            {/* Star Logo */}
            <div className="footer-star-container">
              <svg
                className="footer-star rotate-animation"
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50 0L61.7557 38.2443L100 50L61.7557 61.7557L50 100L38.2443 61.7557L0 50L38.2443 38.2443L50 0Z"
                  fill="#c8ff00"
                />
              </svg>
            </div>

            {/* Services Section */}
            <div className="service-section">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="/services/web-design">Web Design</a>
                </li>
                <li>
                  <a href="/services/video-production">Video Production</a>
                </li>
                <li>
                  <a href="/services/digital-marketing">Digital Marketing</a>
                </li>
                <li>
                  <a href="/services/web-development">Web Development</a>
                </li>
                <li>
                  <a href="/services/ui-ux-design">UI/UX Design</a>
                </li>
              </ul>
            </div>

            {/* Information Section */}
            <div className="info-section">
              <h3>Information</h3>
              <ul>
                <li>
                  <a href="/about">About Company</a>
                </li>
                <li>
                  <a href="/case-study">Case Study</a>
                </li>
                <li>
                  <a href="/careers">Our Careers</a>
                </li>
                <li>
                  <a href="/blog">Our Blogs</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column with Address */}
          <div className="address-column">
            <div className="address-section">
              <h3>ADDRESS</h3>
              <p className="address">
                5919 trussvillecrossings pkwy, birmingham
              </p>
              <div className="phone">
                <a href="tel:+2456343244">+2 456 (343) 24 45</a>
              </div>
              <div className="social-links">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3C22.1 3.6 21.2 4.1 20.2 4.4C19.1 3.3 17.5 2.7 15.9 2.7C12.7 2.7 10.1 5.2 10.1 8.3C10.1 8.8 10.2 9.2 10.3 9.7C5.5 9.4 1.3 7.2 0.5 4C0.2 4.9 0 5.9 0 6.9C0 8.9 1 10.6 2.5 11.6C1.9 11.5 1.3 11.3 0.8 11V11.1C0.8 13.8 2.8 16 5.5 16.6C5.1 16.7 4.6 16.8 4.1 16.8C3.7 16.8 3.4 16.7 3.1 16.7C3.7 18.9 5.8 20.5 8.3 20.5C6.4 22 4 22.9 1.4 22.9C0.9 22.9 0.5 22.9 0 22.8C2.5 24.4 5.5 25.3 8.7 25.3C19.1 25.3 24.8 16.9 24.8 9.6C24.8 9.3 24.8 9.1 24.8 8.9C25.7 8.1 26.5 7.1 27 6C26.1 6.4 25.1 6.7 24 6.8C25.1 6.1 26 5.1 26.4 3.9C25.4 4.5 24.3 4.9 23 5.1" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © FIB Digital {currentYear}. All rights reserved.
            </p>
            <div className="footer-legal">
              <a href="/terms-conditions" className="legal-link">
                Terms & Conditions
              </a>
              <a href="/privacy-policy" className="legal-link">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
