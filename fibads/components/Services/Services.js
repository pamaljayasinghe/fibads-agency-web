import "./Services.css";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      id: "branding",
      title: "Grafisch Ontwerp & Branding",
      items: [
        {
          title: "Strategisch Design",
          description:
            "We versterken jouw merk met creatives die inspelen op emoties en beleving.",
        },
        {
          title: "Consistente Merkbeleving",
          description:
            "Laat jouw merk overal herkenbaar zijn met een consistente visuele stijl.",
        },
      ],
      btnText: "Meer over branding",
      btnLink: "/diensten/branding",
      imageUrl: "/api/placeholder/400/300",
      iconClass: "service-icon-branding",
    },
    {
      id: "web",
      title: "Web Design & Web Development",
      items: [
        {
          title: "Op Maat Gemaakte Oplossingen",
          description:
            "Wij ontwerpen en bouwen websites die aansluiten bij jouw doelen.",
        },
        {
          title: "Technische Perfectie",
          description:
            "Snelle, geoptimaliseerde websites die voldoen aan de nieuwste webstandaarden.",
        },
      ],
      btnText: "Meer over webdesign",
      btnLink: "/diensten/webdesign",
      imageUrl: "/api/placeholder/400/300",
      iconClass: "service-icon-web",
    },
    {
      id: "googleads",
      title: "Google Ads",
      items: [
        {
          title: "Gerichte Campagnes",
          description:
            "Wij helpen jou om het maximale uit jouw budget te halen met effectieve zoek- en displaycampagnes.",
        },
        {
          title: "Resultaatgerichte Ads",
          description:
            "Geoptimaliseerd voor de beste ROI met realtime rapportages.",
        },
      ],
      btnText: "Meer over google ads",
      btnLink: "/diensten/google-ads",
      imageUrl: "/api/placeholder/400/300",
      iconClass: "service-icon-ads",
    },
  ];

  return (
    <section className="services-section">
      <div className="container">
        <div className="services-header reveal">
          <span className="section-label">Diensten</span>
          <h2 className="services-title">Op maat voor jouw bedrijf</h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
