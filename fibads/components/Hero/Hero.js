import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Enhanced modern animated background */}
      <div className="hero-background">
        <div className="animated-gradient"></div>
        <div className="hero-mesh-gradient"></div>

        {/* Animated 3D shapes */}
        <div className="animated-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>

        {/* Animated curves */}
        <div className="hero-curves">
          <div className="curve curve-1"></div>
          <div className="curve curve-2"></div>
        </div>
      </div>

      <div className="container hero-container">
        <div className="hero-content" data-aos="fade-up">
          <span className="section-label">Jouw Marketingproces</span>
          <h1 className="hero-title">
            NATUURLIJK SUCCES
            <br />
            MET <span className="highlight-text">FIB ADS</span>
          </h1>
          <p className="hero-description">
            Bij Fib Ads draait alles om balans en ontwikkeling. We combineren
            branding, webdesign en Google Ads om jouw bedrijf op een natuurlijke
            en effectieve manier te laten groeien.
          </p>

          <div className="hero-buttons">
            <a href="/diensten" className="hero-button primary">
              <span className="button-text">Onze diensten</span>
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
            <a href="/contact" className="hero-button secondary">
              <span className="button-text">Gratis adviesgesprek</span>
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

        <div className="hero-image" data-aos="fade-up" data-aos-delay="100">
          <div className="logo-container">
            <div className="logo-glow"></div>
            <div className="logo-wrapper">
              <div className="logo-inner">
                <div className="logo-text">
                  <span className="fib">FIB</span>
                  <span className="ads">ADS</span>
                </div>
                <div className="orbit orbit-1">
                  <div className="orbit-circle"></div>
                  <div className="orbit-dot"></div>
                </div>
                <div className="orbit orbit-2">
                  <div className="orbit-circle"></div>
                  <div className="orbit-dot"></div>
                </div>
                <div className="orbit orbit-3">
                  <div className="orbit-circle"></div>
                  <div className="orbit-dot"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern wave divider with improved dark mode support */}
      <div className="hero-divider">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="wave-svg"
        >
          <path
            className="wave-fill"
            d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="partner-logos">
        <div className="container">
          <div className="partner-logos-wrapper" data-aos="fade-up">
            <div className="partner-logo">
              <img src="/api/placeholder/120/40" alt="Hotjar" />
            </div>
            <div className="partner-logo">
              <img src="/api/placeholder/120/40" alt="Framer" />
            </div>
            <div className="partner-logo">
              <img src="/api/placeholder/120/40" alt="WordPress" />
            </div>
            <div className="partner-logo">
              <img src="/api/placeholder/120/40" alt="Google Ads" />
            </div>
            <div className="partner-logo">
              <img src="/api/placeholder/120/40" alt="Cookiebot" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
