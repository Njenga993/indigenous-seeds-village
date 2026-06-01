import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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

    const params = new URLSearchParams();
    if (checkIn) params.set("checkIn", checkIn);
    if (checkOut) params.set("checkOut", checkOut);
    if (guests) params.set("adults", guests);

    const queryString = params.toString();
    navigate(`/booking${queryString ? `?${queryString}` : ""}`);
  };

  // Structured Data for Hotel
  const hotelSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Indigenous Seeds Village",
    description:
      "Experience authentic Kenyan hospitality at Indigenous Seeds Village, a premier heritage retreat near Lake Elementaita in Gilgil, Nakuru County. Offering eco-friendly accommodation, indigenous cuisine, conference facilities, and cultural experiences.",
    url: "https://village.seedfoodculturetourism.org",
    telephone: "+254712451777",
    email: "info@seedfoodculturetourism.org",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Near Lake Elementaita, Off Nakuru-Nairobi Highway",
      addressLocality: "Gilgil",
      addressRegion: "Nakuru County",
      addressCountry: "KE",
      postalCode: "20100",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -0.5036,
      longitude: 36.3188,
    },
    image: "https://village.seedfoodculturetourism.org/og-image.jpg",
    priceRange: "KSh 6,500 - KSh 18,000",
    checkinTime: "12:00",
    checkoutTime: "10:00",
    openingHours: "Mo,Tu,We,Th,Fr,Sa,Su 06:00-22:00",
    starRating: {
      "@type": "Rating",
      ratingValue: "4",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free WiFi" },
      { "@type": "LocationFeatureSpecification", name: "Farm-to-Table Restaurant" },
      { "@type": "LocationFeatureSpecification", name: "Conference Facilities" },
      { "@type": "LocationFeatureSpecification", name: "Free Parking" },
      { "@type": "LocationFeatureSpecification", name: "Indigenous Gardens" },
      { "@type": "LocationFeatureSpecification", name: "Nature Walks" },
      { "@type": "LocationFeatureSpecification", name: "Bird Watching" },
      { "@type": "LocationFeatureSpecification", name: "24-Hour Front Desk" },
      { "@type": "LocationFeatureSpecification", name: "Daily Housekeeping" },
      { "@type": "LocationFeatureSpecification", name: "Laundry Service" },
    ],
    parentOrganization: {
      "@type": "Organization",
      name: "Seed Savers Network Kenya",
      url: "https://seedsaverskenya.org",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "45",
      bestRating: "5",
    },
  };

  // Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Indigenous Seeds Village",
    image: "https://village.seedfoodculturetourism.org/og-image.jpg",
    "@id": "https://village.seedfoodculturetourism.org",
    url: "https://village.seedfoodculturetourism.org",
    telephone: "+254712451777",
    email: "info@seedfoodculturetourism.org",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Near Lake Elementaita, Off Nakuru-Nairobi Highway",
      addressLocality: "Gilgil",
      addressRegion: "Nakuru County",
      addressCountry: "KE",
      postalCode: "20100",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -0.5036,
      longitude: 36.3188,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "06:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "06:00",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "07:00",
        closes: "21:00",
      },
    ],
    sameAs: [
      "https://facebook.com/IndigenousSeedsVillage",
      "https://instagram.com/indigenousseedsvillage",
      "https://twitter.com/IndigenousSeedsV",
      "https://youtube.com/@IndigenousSeedsVillage",
    ],
  };

  // FAQ Schema for rich results
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where is Indigenous Seeds Village located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Indigenous Seeds Village is located near Lake Elementaita, off the Nakuru-Nairobi Highway in Gilgil, Nakuru County, Kenya. We are approximately 15 km from Nakuru Town and 30 km from Lake Nakuru National Park.",
        },
      },
      {
        "@type": "Question",
        name: "What types of rooms are available at Indigenous Seeds Village?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer 15 fully self-contained rooms including Standard Single Rooms (KSh 6,500/night), Standard Double Rooms (KSh 8,500/night), Family Cottages (KSh 12,000/night), and an Executive Suite (KSh 18,000/night). All rooms feature garden views and modern amenities.",
        },
      },
      {
        "@type": "Question",
        name: "What activities and experiences are available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Guests can enjoy nature walks, bird watching at Lake Elementaita, seed conservation tours, farm experiences, cultural evenings with traditional music and dance, indigenous food cooking workshops, wellness and meditation sessions, and photography tours.",
        },
      },
      {
        "@type": "Question",
        name: "Does Indigenous Seeds Village have conference facilities?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we have three conference spaces including a Main Conference Hall (up to 100 guests), a Meeting Room (up to 20 guests), and an Outdoor Conference Space (up to 60 guests). All spaces are equipped with modern AV equipment and high-speed WiFi.",
        },
      },
      {
        "@type": "Question",
        name: "What type of cuisine is served at the restaurant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our restaurant serves authentic indigenous Kenyan cuisine with a farm-to-table philosophy. We use organic ingredients grown in our own gardens, featuring traditional vegetables, grains, and recipes that celebrate Kenya's rich food heritage. We also accommodate vegetarian, vegan, gluten-free, and other dietary requirements.",
        },
      },
    ],
  };

  return (
    <>
      {/* ================================
          COMPREHENSIVE SEO
          ================================ */}
      <Helmet>
        {/* Primary Meta Tags */}
        <title>
          Indigenous Seeds Village | Heritage Retreat Near Lake Elementaita,
          Gilgil, Nakuru County
        </title>
        <meta
          name="title"
          content="Indigenous Seeds Village | Heritage Retreat Near Lake Elementaita, Gilgil, Nakuru County"
        />
        <meta
          name="description"
          content="Experience authentic Kenyan hospitality at Indigenous Seeds Village — a premier heritage retreat near Lake Elementaita in Gilgil, Nakuru County. Book eco-friendly rooms, enjoy indigenous cuisine, conference facilities & cultural experiences. Best rates guaranteed."
        />
        <meta
          name="keywords"
          content="Indigenous Seeds Village, hotel Gilgil, accommodation near Lake Elementaita, Nakuru County hotels, heritage retreat Kenya, eco-lodge Gilgil, conference facilities Nakuru, indigenous cuisine Kenya, seed savers network, farm-to-table dining Kenya, bird watching Lake Elementaita, cultural experiences Kenya, sustainable tourism Kenya, hotel near Lake Nakuru, Gilgil accommodation, Nakuru conference venue, eco-friendly hotel Kenya, traditional Kenyan hospitality, budget hotel Gilgil, family cottage Nakuru, executive suite Kenya, hotel with garden views, book hotel Gilgil, best hotel Nakuru County, Lake Elementaita accommodation, Gilgil hotels Kenya, Nakuru County lodging"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Indigenous Seeds Village" />
        <meta name="language" content="English" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />

        {/* Geographic Meta Tags */}
        <meta name="geo.region" content="KE-31" />
        <meta name="geo.placename" content="Gilgil, Nakuru County, Kenya" />
        <meta name="geo.position" content="-0.5036;36.3188" />
        <meta name="ICBM" content="-0.5036, 36.3188" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://village.seedfoodculturetourism.org" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="hotel" />
        <meta property="og:url" content="https://village.seedfoodculturetourism.org" />
        <meta
          property="og:title"
          content="Indigenous Seeds Village | Heritage Retreat Near Lake Elementaita, Gilgil"
        />
        <meta
          property="og:description"
          content="Experience authentic Kenyan hospitality at Indigenous Seeds Village — a premier heritage retreat near Lake Elementaita in Gilgil, Nakuru County. Book eco-friendly rooms, enjoy indigenous cuisine & cultural experiences."
        />
        <meta
          property="og:image"
          content="https://village.seedfoodculturetourism.org/og-image.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Indigenous Seeds Village — Heritage Retreat near Lake Elementaita" />
        <meta property="og:site_name" content="Indigenous Seeds Village" />
        <meta property="og:locale" content="en_KE" />
        <meta property="og:latitude" content="-0.5036" />
        <meta property="og:longitude" content="36.3188" />
        <meta property="og:street-address" content="Near Lake Elementaita, Off Nakuru-Nairobi Highway" />
        <meta property="og:locality" content="Gilgil" />
        <meta property="og:region" content="Nakuru County" />
        <meta property="og:country-name" content="Kenya" />
        <meta property="og:postal-code" content="20100" />
        <meta property="og:phone_number" content="+254712451777" />
        <meta property="og:email" content="info@seedfoodculturetourism.org" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IndigenousSeedsV" />
        <meta name="twitter:creator" content="@IndigenousSeedsV" />
        <meta
          name="twitter:title"
          content="Indigenous Seeds Village | Heritage Retreat Near Lake Elementaita, Gilgil"
        />
        <meta
          name="twitter:description"
          content="Experience authentic Kenyan hospitality at Indigenous Seeds Village — a premier heritage retreat near Lake Elementaita in Gilgil, Nakuru County. Book your stay today!"
        />
        <meta
          name="twitter:image"
          content="https://village.seedfoodculturetourism.org/og-image.jpg"
        />
        <meta name="twitter:image:alt" content="Indigenous Seeds Village — Heritage Retreat near Lake Elementaita" />

        {/* Pinterest */}
        <meta name="pinterest-rich-pin" content="true" />

        {/* Structured Data — Hotel */}
        <script type="application/ld+json">
          {JSON.stringify(hotelSchema)}
        </script>

        {/* Structured Data — Local Business */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>

        {/* Structured Data — FAQ */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* ================================
          HERO SECTION
          ================================ */}
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
    </>
  );
};

export default Hero;