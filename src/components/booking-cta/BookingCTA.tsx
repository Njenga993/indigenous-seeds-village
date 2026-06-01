import { Link } from "react-router-dom";
import "./BookingCTA.css";

import ctaBackground from "../../assets/images/hero_img.webp";

const BookingCTA = () => {
  return (
    <section className="booking-cta">
      <div
        className="cta-background"
        style={{ backgroundImage: `url(${ctaBackground})` }}
      />
      <div className="cta-overlay" />

      <div className="container cta-content">
        <span className="cta-tag">Start Your Journey</span>

        <h2>Ready to Experience Indigenous Seeds Village?</h2>

        <p>
          Book your stay and immerse yourself in nature,
          heritage, and authentic Kenyan hospitality.
          Your unforgettable retreat awaits.
        </p>

        <div className="cta-buttons">
          <Link to="/booking" className="cta-btn-primary">
            Book Your Stay
          </Link>
          <Link to="/contact" className="cta-btn-secondary">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;