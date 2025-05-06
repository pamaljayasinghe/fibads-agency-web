import "./ServiceCard.css";

const ServiceCard = ({ service, index, animationDelay }) => {
  return (
    <div
      className="service-card gradient-border"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay={animationDelay}
    >
      <div className="service-icon">
        <div className={`icon-container ${service.iconClass}`}>
          {service.id === "branding" && (
            <svg
              width="40"
              height="40"
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
                d="M7 15L12 10L17 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          {service.id === "web" && (
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 9H22"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 3H22"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 15H22"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 21H22"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          {service.id === "googleads" && (
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 4.5L2 10L7.5 15.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.5 4.5L22 10L16.5 15.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 2L10 22"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>

      <h3 className="service-title ethno-text">{service.title}</h3>

      <div className="service-content">
        {service.items.map((item, i) => (
          <div key={i} className="service-item">
            <h4 className="service-item-title">{item.title}</h4>
            <p className="service-item-description">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="service-image-container">
        <div className="service-image default">
          <img src={service.imageUrl} alt={service.title} />
        </div>
        <div className="service-image hover">
          <img
            src={service.hoverImageUrl || service.imageUrl}
            alt={`${service.title} hover`}
          />
          <div className="service-image-overlay">
            <span className="ethno-text">Bekijk</span>
          </div>
        </div>
      </div>

      <a href={service.btnLink} className="service-button btn-3d">
        {service.btnText}
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
  );
};

export default ServiceCard;
