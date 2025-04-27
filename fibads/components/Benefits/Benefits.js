import "./Benefits.css";

const Benefits = () => {
  const benefits = [
    {
      id: "brand",
      title: "Versterk Jouw Merk",
      description:
        "Creëer een solide merkidentiteit die jouw verhaal duidelijk communiceert naar je doelgroep.",
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8V16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 12H16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: "roi",
      title: "Maximaliseer Jouw Rendement",
      description:
        "Haal meer uit jouw marketingbudget met doelgerichte Ads en data-gedreven optimalisaties.",
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2V6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 18V22"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.93 4.93L7.76 7.76"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.24 16.24L19.07 19.07"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12H6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 12H22"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.93 19.07L7.76 16.24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.24 7.76L19.07 4.93"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: "custom",
      title: "Maatwerk Voor Jouw Doelen",
      description:
        "Ontvang een op maat gemaakte strategie die perfect aansluit bij jouw bedrijfsdoelen en doelgroep.",
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 16V8.00002C20.9996 7.6493 20.9071 7.30483 20.7315 7.00119C20.556 6.69754 20.3037 6.44539 20 6.27002L13 2.27002C12.696 2.09449 12.3511 2.00208 12 2.00208C11.6489 2.00208 11.304 2.09449 11 2.27002L4 6.27002C3.69626 6.44539 3.44398 6.69754 3.26846 7.00119C3.09294 7.30483 3.00036 7.6493 3 8.00002V16C3.00036 16.3508 3.09294 16.6952 3.26846 16.9989C3.44398 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9056 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9056 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9989C20.9071 16.6952 20.9996 16.3508 21 16Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.27002 7.00002L12 12L20.73 7.00002"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 22V12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="benefits-section" id="benefits">
      {/* Add visual elements to reduce empty space */}
      <div className="benefits-background">
        <div className="benefits-bg-shape"></div>
        <div className="benefits-bg-shape shape-2"></div>
        <div className="benefits-particle-grid"></div>
      </div>

      <div className="container">
        <div className="benefits-header" data-aos="fade-up">
          <span className="section-label">Voordelen</span>
          <h2 className="benefits-title">Bereik natuurlijk succes</h2>
          <p className="benefits-subtitle">
            Ontdek hoe onze aanpak jouw bedrijf helpt groeien met een effectieve
            en natuurlijke strategie
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className="benefit-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="benefit-icon">{benefit.icon}</div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>

              {/* Add feature bullets to reduce empty space */}
              <ul className="benefit-features">
                <li>Strategische aanpak</li>
                <li>Meetbare resultaten</li>
                <li>Persoonlijke ondersteuning</li>
              </ul>
            </div>
          ))}
        </div>

        {/* Add extra visual element at the bottom */}
        <div className="benefits-cta" data-aos="fade-up">
          <a href="/contact" className="benefits-button">
            Ontdek wat wij voor je kunnen doen
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
    </section>
  );
};

export default Benefits;
