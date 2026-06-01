import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Banner */}
      <section className="contact-hero">
        <div className="contact-hero-overlay" />
        <div className="container contact-hero-content">
          <span>Get in Touch</span>
          <h1>Contact Us</h1>
          <p>
            We'd love to hear from you. Reach out and let us help
            you plan your perfect retreat.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main">
        <div className="container">
          
          {/* Contact Cards Grid */}
          <div className="contact-cards">
            
            {/* Address Card */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3>Our Location</h3>
              <div className="contact-detail">
                <p className="detail-label">Physical Address</p>
                <p className="detail-value">
                  Indigenous Seeds Village<br />
                  Off Nakuru - Nairobi Highway<br />
                  Near Lake Elementaita<br />
                  Nakuru County, Kenya
                </p>
              </div>
              <div className="contact-detail">
                <p className="detail-label">Postal Address</p>
                <p className="detail-value">
                  P.O. Box 1234 - 20100<br />
                  Nakuru, Kenya
                </p>
              </div>
              <Link 
                to="https://maps.google.com" 
                target="_blank"
                className="direction-link"
              >
                Get Directions →
              </Link>
            </div>

            {/* Phone Card */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3>Phone Numbers</h3>
              <div className="contact-detail">
                <p className="detail-label">Reservations</p>
                <a href="tel:+254700000000" className="detail-value phone-link">
                  +254 700 000 000
                </a>
              </div>
              <div className="contact-detail">
                <p className="detail-label">General Inquiries</p>
                <a href="tel:+254711000000" className="detail-value phone-link">
                  +254 711 000 000
                </a>
              </div>
              <div className="contact-detail">
                <p className="detail-label">Conference Booking</p>
                <a href="tel:+254722000000" className="detail-value phone-link">
                  +254 722 000 000
                </a>
              </div>
              <div className="contact-detail">
                <p className="detail-label">WhatsApp</p>
                <a 
                  href="https://wa.me/254700000000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="detail-value phone-link whatsapp-link"
                >
                  Chat on WhatsApp →
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h3>Email Addresses</h3>
              <div className="contact-detail">
                <p className="detail-label">General Inquiries</p>
                <a href="mailto:info@indigenousseedsvillage.co.ke" className="detail-value email-link">
                  info@indigenousseedsvillage.co.ke
                </a>
              </div>
              <div className="contact-detail">
                <p className="detail-label">Reservations</p>
                <a href="mailto:bookings@indigenousseedsvillage.co.ke" className="detail-value email-link">
                  bookings@indigenousseedsvillage.co.ke
                </a>
              </div>
              <div className="contact-detail">
                <p className="detail-label">Events & Conference</p>
                <a href="mailto:events@indigenousseedsvillage.co.ke" className="detail-value email-link">
                  events@indigenousseedsvillage.co.ke
                </a>
              </div>
              <div className="contact-detail">
                <p className="detail-label">Media & Press</p>
                <a href="mailto:media@indigenousseedsvillage.co.ke" className="detail-value email-link">
                  media@indigenousseedsvillage.co.ke
                </a>
              </div>
            </div>

            {/* Hours Card */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3>Operating Hours</h3>
              <div className="hours-list">
                <div className="hours-row">
                  <span className="day">Monday - Friday</span>
                  <span className="time">6:00 AM - 10:00 PM</span>
                </div>
                <div className="hours-row">
                  <span className="day">Saturday</span>
                  <span className="time">6:00 AM - 11:00 PM</span>
                </div>
                <div className="hours-row">
                  <span className="day">Sunday & Holidays</span>
                  <span className="time">7:00 AM - 9:00 PM</span>
                </div>
              </div>
              <div className="hours-note">
                <p>Check-in: 12:00 PM</p>
                <p>Check-out: 10:00 AM</p>
              </div>
              <p className="hours-disclaimer">
                * Reception is open 24 hours for guest assistance
              </p>
            </div>

            {/* Quick Links Card */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3>Quick Links</h3>
              <div className="quick-links-list">
                <Link to="/booking" className="quick-link">
                  <span>Book a Room</span>
                  <span className="quick-link-arrow">→</span>
                </Link>
                <Link to="/accommodation" className="quick-link">
                  <span>View Accommodation</span>
                  <span className="quick-link-arrow">→</span>
                </Link>
                <Link to="/restaurant" className="quick-link">
                  <span>Explore Restaurant</span>
                  <span className="quick-link-arrow">→</span>
                </Link>
                <Link to="/conference" className="quick-link">
                  <span>Conference Facilities</span>
                  <span className="quick-link-arrow">→</span>
                </Link>
                <Link to="/experiences" className="quick-link">
                  <span>Activities & Experiences</span>
                  <span className="quick-link-arrow">→</span>
                </Link>
              </div>
            </div>

            {/* Social Media Card */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </div>
              <h3>Connect With Us</h3>
              <p className="social-intro">
                Follow us for updates, offers, and glimpses of
                Indigenous Seeds Village.
              </p>
              <div className="social-links-detailed">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link-detailed"
                >
                  <span className="social-platform-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </span>
                  <div className="social-platform-info">
                    <span className="platform-name">Facebook</span>
                    <span className="platform-handle">@IndigenousSeedsVillage</span>
                  </div>
                </a>
                
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link-detailed"
                >
                  <span className="social-platform-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="17.5" cy="6.5" r="1.5" />
                    </svg>
                  </span>
                  <div className="social-platform-info">
                    <span className="platform-name">Instagram</span>
                    <span className="platform-handle">@indigenousseedsvillage</span>
                  </div>
                </a>

                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link-detailed"
                >
                  <span className="social-platform-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    </svg>
                  </span>
                  <div className="social-platform-info">
                    <span className="platform-name">Twitter / X</span>
                    <span className="platform-handle">@IndigenousSeedsV</span>
                  </div>
                </a>

                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link-detailed"
                >
                  <span className="social-platform-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z" />
                      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                    </svg>
                  </span>
                  <div className="social-platform-info">
                    <span className="platform-name">YouTube</span>
                    <span className="platform-handle">@IndigenousSeedsVillage</span>
                  </div>
                </a>
              </div>
            </div>

          </div>

          {/* Map Section */}
          <div className="contact-map-section">
            <div className="map-heading">
              <h2>Find Us</h2>
              <p>
                Located near the breathtaking Lake Elementaita,
                just off the Nakuru - Nairobi Highway.
              </p>
            </div>
            <div className="map-container">
              {/* Replace with actual Google Maps embed */}
              <div className="map-placeholder">
                <div className="map-placeholder-content">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <h3>Indigenous Seeds Village</h3>
                  <p>Near Lake Elementaita, Nakuru County</p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="map-direction-btn"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
            <div className="landmarks">
              <h4>Nearby Landmarks</h4>
              <div className="landmarks-grid">
                <div className="landmark-item">
                  <span className="landmark-distance">2.5 km</span>
                  <span className="landmark-name">Lake Elementaita</span>
                </div>
                <div className="landmark-item">
                  <span className="landmark-distance">15 km</span>
                  <span className="landmark-name">Nakuru Town</span>
                </div>
                <div className="landmark-item">
                  <span className="landmark-distance">30 km</span>
                  <span className="landmark-name">Lake Nakuru National Park</span>
                </div>
                <div className="landmark-item">
                  <span className="landmark-distance">45 km</span>
                  <span className="landmark-name">Naivasha Town</span>
                </div>
              </div>
            </div>
          </div>

          {/* Seed Savers Network Section */}
          <div className="contact-partner">
            <div className="partner-content">
              <span className="partner-tag">An Initiative of</span>
              <h3>Seed Savers Network Kenya</h3>
              <p>
                Indigenous Seeds Village is part of Seed Savers Network Kenya,
                an organization dedicated to conserving indigenous seeds and
                promoting agricultural biodiversity across Kenya.
              </p>
              <a 
                href="https://seedsaverskenya.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="partner-link"
              >
                Visit Seed Savers Network Kenya →
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;