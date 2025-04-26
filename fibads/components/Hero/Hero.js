import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="hero-gradient"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <span className="section-label slide-in-left">
            Jouw Marketingproces
          </span>
          <h1
            className="hero-title slide-in-left"
            style={{ animationDelay: "0.2s" }}
          >
            NATUURLIJK SUCCES
            <br />
            MET FIB ADS
          </h1>
          <p
            className="hero-description slide-in-left"
            style={{ animationDelay: "0.4s" }}
          >
            Bij Fib Ads draait alles om balans en ontwikkeling. We combineren
            branding, webdesign en Google Ads om jouw bedrijf op een natuurlijke
            en effectieve manier te laten groeien.
          </p>

          <div
            className="hero-buttons slide-in-left"
            style={{ animationDelay: "0.6s" }}
          >
            <a href="/diensten" className="hero-button primary">
              Onze diensten
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
              Gratis adviesgesprek
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

        <div className="hero-image slide-in-right">
          <div className="logo-showcase">
            <div className="fib-logo">
              <div className="logo-inner">
                <div className="logo-text">
                  <span className="fib">FIB</span>
                  <span className="ads">ADS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="partner-logos">
        <div className="container">
          <div className="partner-logos-wrapper slide-up">
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
