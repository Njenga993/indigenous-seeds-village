import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Top Section */}
        <div className="footer-top">
          {/* Brand Column */}
          <div className="footer-col footer-brand">
            <h3>Indigenous Seeds Village</h3>
            <p>
              A heritage retreat by Seed Savers Network Kenya.
              Experience authentic Kenyan hospitality rooted
              in nature, culture, and indigenous wisdom.
            </p>
            <div className="footer-social">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-icon"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-icon"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="social-icon"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="social-icon"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z" />
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/accommodation">Accommodation</Link></li>
              <li><Link to="/restaurant">Restaurant</Link></li>
              <li><Link to="/experiences">Experiences</Link></li>
            </ul>
          </div>

          {/* More Links */}
          <div className="footer-col">
            <h4>Discover</h4>
            <ul>
              <li><Link to="/conference">Conference Facilities</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/booking">Book Now</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col footer-contact">
            <h4>Get in Touch</h4>
            <ul className="contact-list">
              <li>
                <span className="contact-icon">📍</span>
                <span>
                  Indigenous Seeds Village<br />
                  Near Lake Elementaita<br />
                  Nakuru County, Kenya
                </span>
              </li>
              <li>
                <span className="contact-icon">📞</span>
                <span>+254 700 000 000</span>
              </li>
              <li>
                <span className="contact-icon">✉️</span>
                <span>info@indigenousseedsvillage.co.ke</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Seed Savers Network Banner */}
        <div className="footer-partner">
          <div className="partner-line" />
          <span>An Initiative of</span>
          <div className="partner-line" />
        </div>
        <div className="partner-name">
          Seed Savers Network Kenya
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Indigenous Seeds Village.
            All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;