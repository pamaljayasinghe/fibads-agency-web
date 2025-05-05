import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-left-column">
          <div className="hero-content" data-aos="fade-up">
            <span className="section-label">Digital agency</span>
            <h1 className="hero-title">
              We drive you
              <br />
              to digital
              <br />
              world
            </h1>

            <div className="hero-rating">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="hero-star">
                  ★
                </span>
              ))}
              <p className="hero-trust">
                Trusted globally by over 199+ clients
              </p>
            </div>

            <div className="hero-avatars">
              <div className="avatar avatar-1">
                <img src="/api/placeholder/50/50" alt="Client" />
              </div>
              <div className="avatar avatar-2">
                <img src="/api/placeholder/50/50" alt="Client" />
              </div>
              <div className="avatar avatar-3">
                <img src="/api/placeholder/50/50" alt="Client" />
              </div>
              <div className="avatar avatar-4">
                <img src="/api/placeholder/50/50" alt="Client" />
              </div>
              <div className="avatar avatar-you">You</div>
            </div>
          </div>
        </div>

        <div
          className="hero-right-column"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="laptop-mockup">
            <img
              src="/img/Logog.png"
              alt="Laptop showing website"
              className="laptop-img"
            />
          </div>

          <p className="hero-description">
            At <strong>Lunex</strong>, we propel your business into the digital
            world by combining innovative strategies, cutting-edge design, and
            tailored solutions to drive growth, boost engagement, and ensure
            your brand thrives in the digital landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
