import "./CTA.css";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-wrapper">
          <div className="cta-content reveal">
            <span className="section-label">Call-to-action</span>
            <h2 className="cta-title">
              Ontdek wat wij voor jou kunnen betekenen!
            </h2>

            <div className="cta-boxes">
              <div className="cta-box">
                <h3 className="cta-box-title">Gratis Ads Strategie</h3>
                <p className="cta-box-description">
                  Krijg een op maat gemaakt adviesrapport met quick wins voor
                  jouw Ads.
                </p>
                <a href="/contact" className="cta-box-button">
                  Plan jouw gesprek
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

              <div className="cta-box">
                <h3 className="cta-box-title">Neem direct contact op</h3>
                <p className="cta-box-description">
                  Heb je een dringende vraag? Bel ons of stuur direct een
                  bericht.
                </p>
                <a href="/contact" className="cta-box-button secondary">
                  Neem contact op
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
