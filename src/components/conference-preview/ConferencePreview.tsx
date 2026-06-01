import { Link } from "react-router-dom";
import "./ConferencePreview.css";

import conferenceImage from "../../assets/images/SSN_seats.webp";

const ConferencePreview = () => {
  return (
    <section className="conference-preview">
      <div className="container">

        <div className="conference-heading">
          <span>Conference & Events</span>
          <h2>Host Your Gathering in Nature</h2>
        </div>

        <div className="conference-wrapper">

          <div className="conference-image">
            <img
              src={conferenceImage}
              alt="Conference Facilities"
            />
            <div className="capacity-badge">
              <span>Up to</span>
              <strong>100</strong>
              <span>Guests</span>
            </div>
          </div>

          <div className="conference-details">

            <p className="conference-description">
              From corporate retreats to workshops and
              private celebrations, our conference
              facilities blend modern amenities with
              the serenity of nature. Your team will
              leave refreshed, inspired, and connected.
            </p>

            <div className="facility-grid">

              <div className="facility-card">
                <div className="facility-icon">🏛️</div>
                <h4>3 Conference Rooms</h4>
                <p>Flexible layouts for any gathering</p>
              </div>

              <div className="facility-card">
                <div className="facility-icon">🌿</div>
                <h4>Natural Lighting</h4>
                <p>Bright spaces with scenic views</p>
              </div>

              <div className="facility-card">
                <div className="facility-icon">🤝</div>
                <h4>Team Building</h4>
                <p>Outdoor activities and bonding</p>
              </div>

              <div className="facility-card">
                <div className="facility-icon">🍽️</div>
                <h4>Catering Services</h4>
                <p>Indigenous cuisine for your guests</p>
              </div>

            </div>

            <Link
              to="/conference"
              className="conference-btn"
            >
              Explore Facilities
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ConferencePreview;