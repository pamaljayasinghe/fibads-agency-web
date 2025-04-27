import "./CaseStudy.css";

const CaseStudy = () => {
  return (
    <section className="case-study-section">
      <div className="case-study-background">
        <div className="case-bg-shape shape-1"></div>
        <div className="case-bg-shape shape-2"></div>
        <div className="noise-overlay"></div>
      </div>

      <div className="container">
        <div className="case-study-grid">
          <div className="case-study-content" data-aos="fade-up">
            <span className="section-label">Case Study</span>
            <h2 className="case-study-title">
              Een Nieuwe Identiteit voor The Golf Lab
            </h2>

            <div className="case-study-features">
              <div className="case-study-feature">
                <div className="feature-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12L11 14L15 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Een Volledige Transformatie</h3>
                  <p className="feature-description">
                    We ontwikkelden een frisse visuele stijl, inclusief logo,
                    kleurenpalet en typografie, om The Golf Lab een moderne
                    uitstraling te geven die klanten aantrekt.
                  </p>
                </div>
              </div>

              <div className="case-study-feature">
                <div className="feature-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 16L12 12L8 16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 12V21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.39 18.39C21.3653 17.8583 22.1358 17.0169 22.5799 15.9986C23.0239 14.9804 23.1162 13.8432 22.8422 12.7667C22.5682 11.6901 21.9435 10.7355 21.0667 10.0534C20.1899 9.37138 19.1109 9.00073 18 9.00001H16.74C16.4373 7.82926 15.8731 6.74235 15.09 5.82101C14.3068 4.89967 13.3249 4.16786 12.2181 3.68062C11.1114 3.19338 9.90856 2.96583 8.70012 3.01638C7.49169 3.06693 6.31389 3.39451 5.24997 3.97398C4.18604 4.55346 3.26209 5.36964 2.54449 6.35729C1.82689 7.34494 1.33735 8.47759 1.1126 9.68027C0.887849 10.883 0.935386 12.1208 1.25093 13.3014C1.56648 14.482 2.14148 15.5743 2.93 16.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">
                    Een Slimme Structuur voor Succes
                  </h3>
                  <p className="feature-description">
                    De nieuwe website heeft een gebruiksvriendelijke navigatie
                    en responsief design, waardoor de klantreis soepel verloopt
                    en conversies zijn verbeterd met 45%.
                  </p>
                </div>
              </div>

              <div className="case-study-feature">
                <div className="feature-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Meetbare Resultaten</h3>
                  <p className="feature-description">
                    Na de rebrand en website launch zag The Golf Lab een
                    stijging van 60% in online aanmeldingen en een verhoogde
                    merkherkenning.
                  </p>
                </div>
              </div>
            </div>

            <a href="/contact" className="case-study-button">
              <span>Dit wil ik ook!</span>
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

          <div className="case-study-image" data-aos="fade-left">
            <div className="image-container">
              <img
                src="/api/placeholder/600/400"
                alt="The Golf Lab Case Study"
              />
              <div className="overlay">
                <div className="overlay-content">
                  <span className="view-text">Bekijk case</span>
                </div>
              </div>
              <div className="floating-element floating-element-1"></div>
              <div className="floating-element floating-element-2"></div>
              <div className="floating-element floating-element-3"></div>
            </div>

            <div className="stats-container">
              <div className="stat">
                <span className="stat-number">+60%</span>
                <span className="stat-label">Meer aanmeldingen</span>
              </div>
              <div className="stat">
                <span className="stat-number">+45%</span>
                <span className="stat-label">Hogere conversie</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
