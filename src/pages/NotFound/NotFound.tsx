import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./NotFound.css";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 — Page Not Found | Indigenous Seeds Village</title>
        <meta name="description" content="The page you are looking for could not be found. Return to Indigenous Seeds Village homepage to book your stay near Lake Elementaita, Gilgil." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <Navbar />

      <section className="not-found">
        <div className="container not-found-content">
          <div className="not-found-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
              <line x1="9" y1="9" x2="9.01" y2="9" />
              <line x1="15" y1="9" x2="15.01" y2="9" />
            </svg>
          </div>

          <span className="not-found-tag">404 Error</span>
          <h1>Page Not Found</h1>
          <p>
            Oops! The page you're looking for doesn't exist or has been moved.
            But don't worry — your perfect retreat is still waiting for you.
          </p>

          <div className="not-found-actions">
            <Link to="/" className="not-found-primary">
              ← Return to Home
            </Link>
            <Link to="/booking" className="not-found-secondary">
              Book Your Stay
            </Link>
            <Link to="/contact" className="not-found-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default NotFound;