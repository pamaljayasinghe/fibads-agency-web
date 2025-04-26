import "./CaseStudy.css";

const CaseStudy = () => {
  return (
    <section className="case-study-section">
      <div className="container">
        <div className="case-study-grid">
          <div className="case-study-content reveal">
            <span className="section-label">Case Study</span>
            <h2 className="case-study-title">
              Een Nieuwe Identiteit voor The Golf Lab
            </h2>

            <div className="case-study-features">
              <div className="case-study-feature">
                <h3 className="feature-title">Een Volledige Transformatie</h3>
                <p className="feature-description">
                  We ontwikkelden een frisse visuele stijl, inclusief logo,
                  kleurenpalet en typografie, om The Golf Lab een moderne
                  uitstraling te geven.
                </p>
              </div>

              <div className="case-study-feature">
                <h3 className="feature-title">
                  Een Slimme Structuur voor Succes
                </h3>
                <p className="feature-description">
                  De nieuwe website heeft een gebruiksvriendelijke navigatie en
                  responsief design, waardoor de klantreis soepel verloopt.
                </p>
              </div>
            </div>

            <a href="/contact" className="case-study-button">
              Dit wil ik ook!
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

          <div className="case-study-image reveal">
            <div className="image-container">
              <img
                src="/api/placeholder/600/400"
                alt="The Golf Lab Case Study"
              />
              <div className="floating-element floating-element-1"></div>
              <div className="floating-element floating-element-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
