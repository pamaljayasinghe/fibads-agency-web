import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "Fib Ads heeft ons geholpen onze online zichtbaarheid te vergroten. Dankzij hun strategie zien we dagelijks nieuwe leads binnenkomen.",
      author: "Hanna Koster",
      position: "Marketing Manager",
      imageUrl: "/api/placeholder/60/60",
    },
    {
      id: 2,
      rating: 5,
      text: "De samenwerking met Fib Ads was professioneel en klantgericht. Het resultaat overtrof onze verwachtingen.",
      author: "John de Vries",
      position: "Eigenaar De Vries Tuinen",
      imageUrl: "/api/placeholder/60/60",
    },
    {
      id: 3,
      rating: 5,
      text: "Zeer tevreden over het ontwerp en de support van Fib Ads. Ze denken echt met je mee!",
      author: "Joris van Leeuwen",
      position: "Eigenaar Golf Boutique",
      imageUrl: "/api/placeholder/60/60",
    },
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-bg-shape"></div>
      <div className="container">
        <div className="testimonials-header" data-aos="fade-up">
          <span className="section-label">Ervaringen</span>
          <h2 className="testimonials-title">Wat onze klanten zeggen</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="testimonial-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-offset="200"
            >
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">
                    ★
                  </span>
                ))}
              </div>

              <p className="testimonial-text">{testimonial.text}</p>

              <div className="testimonial-author">
                <div className="author-image">
                  <img src={testimonial.imageUrl} alt={testimonial.author} />
                </div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.author}</h4>
                  <p className="author-position">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
