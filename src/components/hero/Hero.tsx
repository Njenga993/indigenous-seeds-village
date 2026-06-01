import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

// Import Hero Image
import heroImage from "../../assets/images/hero_img.webp";

const Hero = () => {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("1");

  const today = new Date().toISOString().split("T")[0];
  const minCheckOut = checkIn
    ? new Date(new Date(checkIn).getTime() + 86400000)
        .toISOString()
        .split("T")[0]
    : today;

  const handleCheckAvailability = (e: React.FormEvent) => {
    e.preventDefault();

    // Build query params to pre-fill the booking page
    const params = new URLSearchParams();
    if (checkIn) params.set("checkIn", checkIn);
    if (checkOut) params.set("checkOut", checkOut);
    if (guests) params.set("adults", guests);

    const queryString = params.toString();
    navigate(`/booking${queryString ? `?${queryString}` : ""}`);
  };

  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <span className="hero-tagline">Indigenous Heritage Retreat</span>

        <h1>
          Experience Nature,
          <br />
          Culture & Comfort
        </h1>

        <p>
          Nestled within a serene landscape, Indigenous Seeds Village offers
          authentic hospitality, indigenous cuisine, conference facilities,
          and unforgettable experiences inspired by Kenya's rich heritage.
        </p>

        <div className="hero-buttons">
          <button
            className="hero-primary-btn"
            onClick={() => navigate("/booking")}
          >
            Book Your Stay
          </button>

          <button
            className="hero-secondary-btn"
            onClick={() => navigate("/experiences")}
          >
            Explore Experiences
          </button>
        </div>

        {/* ===== AVAILABILITY CHECK WIDGET ===== */}
        <div className="hero-availability-widget">
          <form
            className="availability-form"
            onSubmit={handleCheckAvailability}
          >
            <div className="availability-field">
              <label htmlFor="hero-checkin">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>Check-in</span>
              </label>
              <input
                type="date"
                id="hero-checkin"
                value={checkIn}
                onChange={(e) => {
                  setCheckIn(e.target.value);
                  if (checkOut && e.target.value >= checkOut) {
                    setCheckOut("");
                  }
                }}
                min={today}
              />
            </div>

            <div className="availability-field">
              <label htmlFor="hero-checkout">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>Check-out</span>
              </label>
              <input
                type="date"
                id="hero-checkout"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                min={minCheckOut}
              />
            </div>

            <div className="availability-field">
              <label htmlFor="hero-guests">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span>Guests</span>
              </label>
              <select
                id="hero-guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                <option value="6">6+ Guests</option>
              </select>
            </div>

            <button type="submit" className="availability-btn">
              Check Availability
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;