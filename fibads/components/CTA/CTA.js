import "./CTA.css";

const CTA = () => {
  return (
    <section className="cta-section" id="contact-us">
      {/* Add background elements for modern look */}
      <div className="cta-background">
        <div className="cta-bg-shape cta-shape-1"></div>
        <div className="cta-bg-shape cta-shape-2"></div>
        <div className="noise-overlay"></div>
      </div>

      <div className="container">
        <div className="cta-wrapper">
          <div className="cta-content reveal">
            <span className="section-label">Laten we samenwerken</span>
            <h2 className="cta-title">
              Klaar om jouw online aanwezigheid naar het volgende niveau te
              tillen?
            </h2>

            <div className="cta-boxes">
              <div className="cta-box" data-aos="fade-up">
                <h3 className="cta-box-title">Gratis Ads Strategie</h3>
                <p className="cta-box-description">
                  Krijg een op maat gemaakt adviesrapport met quick wins voor
                  jouw Ads. Onze experts analyseren je huidige strategie en
                  geven concrete aanbevelingen.
                </p>
                <a href="/contact" className="cta-box-button">
                  <span>Plan jouw gesprek</span>
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

              <div className="cta-box" data-aos="fade-up" data-aos-delay="100">
                <h3 className="cta-box-title">Neem direct contact op</h3>
                <p className="cta-box-description">
                  Heb je een dringende vraag? Bel ons of stuur direct een
                  bericht. We staan klaar om al je vragen te beantwoorden en je
                  te helpen met je marketing uitdagingen.
                </p>
                <a href="/contact" className="cta-box-button secondary">
                  <span>Neem contact op</span>
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
