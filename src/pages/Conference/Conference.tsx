import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import "./Conference.css";

import conferenceHero from "../../assets/images/SSN_seats.webp";
import mainHall1 from "../../assets/images/SSN_hall.webp";
import mainHall2 from "../../assets/images/SSN_seats.webp";
import mainHall3 from "../../assets/images/SSN_hall.webp";
import meetingRoom1 from "../../assets/images/SSN_hall.webp";
import meetingRoom2 from "../../assets/images/SSN_seats.webp";
import meetingRoom3 from "../../assets/images/SSN_hall.webp";
import outdoorSpace1 from "../../assets/images/SSN_garden.webp";
import outdoorSpace2 from "../../assets/images/SSN_room_out.webp";
import outdoorSpace3 from "../../assets/images/SSN_garden.webp";
import teamBuilding1 from "../../assets/images/SSN_shoes.webp";
import catering1 from "../../assets/images/SSN_dinning_table.webp";
import catering2 from "../../assets/images/SSN_bed.webp";

interface FacilityImage {
  src: string;
  alt: string;
}

interface Facility {
  id: number;
  name: string;
  tagline: string;
  description: string;
  capacity: string;
  layoutOptions: string[];
  features: string[];
  bestFor: string[];
  images: FacilityImage[];
  icon: string;
}

const facilities: Facility[] = [
  {
    id: 1,
    name: "Main Conference Hall",
    tagline: "Versatile space for large gatherings and presentations",
    description:
      "Our flagship conference space features high ceilings, abundant natural light, and state-of-the-art audio-visual equipment. Floor-to-ceiling windows offer inspiring views of the indigenous gardens and distant Lake Elementaita. The hall can be configured in multiple layouts to suit your event — from theatre-style presentations to classroom setups and banquet arrangements. With its elegant yet functional design, it's ideal for conferences, workshops, seminars, and corporate events of all kinds.",
    capacity: "Up to 100 guests (theatre style)",
    layoutOptions: [
      "Theatre Style — 100 guests",
      "Classroom Style — 60 guests",
      "Banquet Rounds — 80 guests",
      "U-Shape — 40 guests",
      "Boardroom — 30 guests",
      "Cocktail Reception — 120 guests",
    ],
    features: [
      "HD Projector and large screen",
      "Professional sound system",
      "Wireless microphones",
      "High-speed Wi-Fi",
      "Flip charts and whiteboards",
      "Podium and stage",
      "Natural lighting with blackout options",
      "Air conditioning",
      "Backup generator",
      "Accessible entrance",
    ],
    bestFor: [
      "Conferences",
      "Seminars",
      "Workshops",
      "Product launches",
      "Award ceremonies",
      "Corporate presentations",
    ],
    images: [
      { src: mainHall1, alt: "Main Conference Hall at Indigenous Seeds Village Gilgil — theatre setup for 100 guests" },
      { src: mainHall2, alt: "Conference Hall banquet setup — corporate event venue Nakuru County" },
      { src: mainHall3, alt: "Main Conference Hall with garden views — meeting venue near Lake Elementaita" },
    ],
    icon: "🏛️",
  },
  {
    id: 2,
    name: "Meeting Room",
    tagline: "Intimate space for focused discussions and strategy sessions",
    description:
      "A thoughtfully designed meeting room for smaller groups, board meetings, and strategy sessions. The room features a solid wooden boardroom table, comfortable executive chairs, and all the technology needed for productive meetings — including video conferencing capabilities for hybrid gatherings. Large windows provide natural light and views of the gardens, creating an atmosphere that's both professional and refreshing. Adjacent to the main hall, it can also serve as a breakout room for larger events.",
    capacity: "Up to 20 guests (boardroom style)",
    layoutOptions: [
      "Boardroom — 20 guests",
      "U-Shape — 16 guests",
      "Classroom — 15 guests",
      "Casual Lounge — 12 guests",
    ],
    features: [
      "Large screen with screen sharing",
      "Video conferencing equipment",
      "High-speed Wi-Fi",
      "Whiteboard and flip charts",
      "Executive chairs",
      "Air conditioning",
      "Natural lighting",
      "Soundproofing",
      "Adjacent breakout area",
      "Printer access",
    ],
    bestFor: [
      "Board meetings",
      "Strategy sessions",
      "Client presentations",
      "Team discussions",
      "Interview panels",
      "Small workshops",
    ],
    images: [
      { src: meetingRoom1, alt: "Meeting Room boardroom setup — small conference venue Gilgil" },
      { src: meetingRoom2, alt: "Video conferencing meeting room — hybrid meeting space Nakuru" },
      { src: meetingRoom3, alt: "Meeting Room garden view — executive boardroom near Lake Elementaita" },
    ],
    icon: "💼",
  },
  {
    id: 3,
    name: "Outdoor Conference Space",
    tagline: "Inspire creativity with meetings surrounded by nature",
    description:
      "For those who believe the best ideas come in fresh air, our outdoor conference space offers a unique alternative to traditional meeting rooms. Set within our indigenous gardens, this covered yet open-air venue provides a refreshing environment for workshops, team meetings, and creative sessions. The sounds of birds and rustling leaves create a calming backdrop that stimulates creative thinking and reduces meeting fatigue. The space is equipped with portable audio-visual equipment and can be set up in various configurations.",
    capacity: "Up to 60 guests",
    layoutOptions: [
      "Theatre Style — 60 guests",
      "Classroom Style — 40 guests",
      "Casual Circle — 30 guests",
      "Cocktail Setup — 80 guests",
    ],
    features: [
      "Covered shade structure",
      "Portable projector and screen",
      "Portable sound system",
      "Wi-Fi coverage",
      "Garden views",
      "Natural ventilation",
      "Flexible seating arrangements",
      "Adjacent to restaurant",
      "Evening lighting",
      "Nature sounds ambiance",
    ],
    bestFor: [
      "Creative workshops",
      "Team building sessions",
      "Wellness retreats",
      "Networking events",
      "Evening receptions",
      "Yoga and mindfulness sessions",
    ],
    images: [
      { src: outdoorSpace1, alt: "Outdoor conference setup — garden meeting space Gilgil" },
      { src: outdoorSpace2, alt: "Open-air meeting venue surrounded by indigenous gardens Nakuru County" },
      { src: outdoorSpace3, alt: "Evening outdoor event space — reception venue near Lake Elementaita" },
    ],
    icon: "🌿",
  },
];

const additionalServices = [
  {
    title: "Corporate Catering",
    description:
      "Our farm-to-table restaurant provides exceptional catering for your event — from coffee breaks and working lunches to gala dinners featuring indigenous cuisine.",
    features: [
      "Customizable menus",
      "Coffee breaks with local pastries",
      "Working lunches",
      "Gala dinners",
      "Special dietary options",
      "Welcome drinks and cocktails",
    ],
    image: catering1,
    icon: "🍽️",
  },
  {
    title: "Team Building Activities",
    description:
      "Enhance your corporate retreat with our range of team building activities — from farm experiences and cooking challenges to nature walks and conservation projects.",
    features: [
      "Farm challenges",
      "Cooking competitions",
      "Guided nature walks",
      "Seed planting activities",
      "Cultural experiences",
      "Wellness sessions",
    ],
    image: teamBuilding1,
    icon: "🤝",
  },
  {
    title: "Accommodation & Packages",
    description:
      "Combine your conference with comfortable accommodation. We offer full-board conference packages that include meeting spaces, meals, and rooms at special rates.",
    features: [
      "Full-board packages available",
      "Group accommodation rates",
      "Dedicated conference coordinator",
      "Flexible check-in/out",
      "Welcome amenities",
      "Airport transfer arrangements",
    ],
    image: catering2,
    icon: "🏨",
  },
];

const Conference = () => {
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (facility: Facility) => {
    setSelectedFacility(facility);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFacility(null);
    document.body.style.overflow = "";
  };

  // Conference Page Schema
  const conferenceSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Indigenous Seeds Village — Conference Facilities",
    description:
      "Host your corporate event, conference, or retreat at Indigenous Seeds Village near Lake Elementaita, Gilgil. Three conference spaces accommodating up to 120 guests with modern AV equipment, farm-to-table catering, and team building activities in Nakuru County.",
    url: "https://village.seedfoodculturetourism.org/conference",
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
    meetingRoom: facilities.map((f) => ({
      "@type": "MeetingRoom",
      name: f.name,
      description: f.description,
      occupancy: f.capacity,
    })),
  };

  // FAQ Schema for Conference
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What conference facilities are available at Indigenous Seeds Village?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We have three conference spaces: the Main Conference Hall (up to 100 guests theatre-style, 120 for cocktail receptions), a Meeting Room (up to 20 guests boardroom style), and an Outdoor Conference Space (up to 60 guests). All spaces are equipped with modern AV equipment, high-speed WiFi, and offer garden views near Lake Elementaita in Gilgil, Nakuru County.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer conference packages with accommodation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! We offer Day Packages (meeting space + lunch), Full-Board Packages (meeting space + accommodation + all meals), and Retreat Packages (everything plus team building activities and wellness sessions). All packages can be customized to your needs. We have 15 rooms available for conference delegates.",
        },
      },
      {
        "@type": "Question",
        name: "What team building activities are available for corporate groups?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer farm challenges, cooking competitions, guided nature walks, seed planting activities, cultural experiences, wellness sessions, and bird watching at Lake Elementaita. All activities are designed to foster teamwork while connecting participants with nature and Kenyan heritage.",
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
          Conference Facilities & Event Venue | Indigenous Seeds Village,
          Gilgil — Nakuru County
        </title>
        <meta
          name="description"
          content="Host your corporate event, conference, or retreat at Indigenous Seeds Village near Lake Elementaita, Gilgil. Three versatile conference spaces for up to 120 guests with modern AV equipment, farm-to-table catering, team building activities, and accommodation in Nakuru County. Day packages, full-board, and retreat packages available."
        />
        <meta
          name="keywords"
          content="conference venue Gilgil, meeting rooms Nakuru County, corporate retreat Kenya, conference facilities Lake Elementaita, team building Gilgil, event venue Nakuru, workshop space Kenya, conference with accommodation, corporate catering Gilgil, conference hall Nakuru, outdoor meeting space Kenya, boardroom Gilgil, seminar venue Nakuru County, conference packages Kenya, MICE tourism Kenya, corporate event venue near Lake Nakuru, business retreat Kenya"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />

        {/* Geographic Tags */}
        <meta name="geo.region" content="KE-31" />
        <meta name="geo.placename" content="Gilgil, Nakuru County, Kenya" />
        <meta name="geo.position" content="-0.5036;36.3188" />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://village.seedfoodculturetourism.org/conference"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Conference Facilities & Event Venue | Indigenous Seeds Village, Gilgil"
        />
        <meta
          property="og:description"
          content="Host your corporate event at Indigenous Seeds Village near Lake Elementaita. Three conference spaces for up to 120 guests with AV equipment, catering, and accommodation."
        />
        <meta
          property="og:url"
          content="https://village.seedfoodculturetourism.org/conference"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://village.seedfoodculturetourism.org/og-image.jpg"
        />
        <meta property="og:site_name" content="Indigenous Seeds Village" />
        <meta property="og:locale" content="en_KE" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Conference Facilities & Event Venue | Indigenous Seeds Village"
        />
        <meta
          name="twitter:description"
          content="Host your corporate event near Lake Elementaita. Conference spaces for up to 120 guests with AV, catering & accommodation."
        />
        <meta
          name="twitter:image"
          content="https://village.seedfoodculturetourism.org/og-image.jpg"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(conferenceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

     

      {/* ================================
          HERO SECTION
          ================================ */}
      <section className="conf-hero">
        <div
          className="conf-hero-bg"
          style={{ backgroundImage: `url(${conferenceHero})` }}
        />
        <div className="conf-hero-overlay" />
        <div className="container conf-hero-content">
          <span className="conf-hero-tag">Meet & Inspire</span>
          <h1>Conference Facilities</h1>
          <p>
            Host your next event in a setting that blends professional excellence
            with natural beauty. Our conference facilities are designed to inspire
            creativity, foster collaboration, and leave a lasting impression.
          </p>
        </div>
      </section>

      {/* ================================
          INTRO SECTION
          ================================ */}
      <section className="conf-intro">
        <div className="container">
          <div className="conf-intro-content">
            <span className="section-tag">Work Meets Nature</span>
            <h2>Conferences That Inspire</h2>
            <p>
              At Indigenous Seeds Village, we believe the best meetings happen
              when people are comfortable, connected, and inspired by their
              surroundings. Our conference facilities combine modern amenities
              with the tranquility of nature — creating an environment where
              ideas flourish and teams grow stronger.
            </p>
            <div className="conf-summary">
              <div className="conf-summary-item">
                <span className="conf-summary-number">3</span>
                <span className="conf-summary-label">Meeting Spaces</span>
              </div>
              <div className="conf-summary-item">
                <span className="conf-summary-number">120</span>
                <span className="conf-summary-label">Max Capacity</span>
              </div>
              <div className="conf-summary-item">
                <span className="conf-summary-number">15</span>
                <span className="conf-summary-label">Rooms Available</span>
              </div>
              <div className="conf-summary-item">
                <span className="conf-summary-number">100%</span>
                <span className="conf-summary-label">AV Equipped</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================
          FACILITIES LISTING
          ================================ */}
      <section className="conf-facilities">
        <div className="container">
          <div className="facilities-header">
            <span className="section-tag">Our Spaces</span>
            <h2>Choose Your Perfect Venue</h2>
            <p>
              Three distinct spaces, each designed to suit different types of
              gatherings. Click on any facility to view full details and layout
              options.
            </p>
          </div>

          <div className="facilities-grid">
            {facilities.map((facility) => (
              <div
                key={facility.id}
                className="facility-card"
                onClick={() => openModal(facility)}
              >
                <div className="facility-card-image">
                  <img
                    src={facility.images[0].src}
                    alt={facility.images[0].alt}
                  />
                  <div className="facility-card-overlay">
                    <span className="facility-card-icon">{facility.icon}</span>
                    <span className="facility-card-view">View Details →</span>
                  </div>
                </div>
                <div className="facility-card-body">
                  <h3>{facility.name}</h3>
                  <p className="facility-card-tagline">{facility.tagline}</p>
                  <div className="facility-card-meta">
                    <span className="facility-meta-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                      </svg>
                      {facility.capacity}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================
          ADDITIONAL SERVICES
          ================================ */}
      <section className="conf-services">
        <div className="container">
          <div className="services-header">
            <span className="section-tag">Complete Experience</span>
            <h2>Additional Services</h2>
            <p>
              Beyond meeting spaces, we offer everything you need to make your
              conference or retreat a complete success.
            </p>
          </div>
          <div className="services-grid">
            {additionalServices.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.title + " at Indigenous Seeds Village conference venue Gilgil"} />
                </div>
                <div className="service-content">
                  <span className="service-icon">{service.icon}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================
          WHY HOST WITH US
          ================================ */}
      <section className="conf-why">
        <div className="container">
          <div className="why-header">
            <span className="section-tag">The Indigenous Advantage</span>
            <h2>Why Host Your Event With Us?</h2>
          </div>
          <div className="why-grid">
            <div className="why-item">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h4>Inspiring Location</h4>
              <p>
                Near Lake Elementaita, surrounded by indigenous gardens and
                natural beauty — far from the distractions of the city.
              </p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h4>Modern Technology</h4>
              <p>
                All spaces are equipped with professional AV equipment,
                high-speed Wi-Fi, and video conferencing capabilities.
              </p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </div>
              <h4>Farm-to-Table Catering</h4>
              <p>
                Exceptional food from our own gardens — healthy, delicious,
                and sustainably sourced.
              </p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h4>Work-Life Balance</h4>
              <p>
                Combine meetings with nature walks, farm experiences, and
                wellness sessions for a truly balanced retreat.
              </p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h4>Sustainable Venue</h4>
              <p>
                Host your event at a venue that prioritizes environmental
                sustainability and community impact.
              </p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h4>Dedicated Coordinator</h4>
              <p>
                A dedicated conference coordinator ensures every detail is
                handled, so you can focus on your event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================
          PACKAGES SECTION
          ================================ */}
      <section className="conf-packages">
        <div className="container">
          <div className="packages-banner">
            <div className="packages-content">
              <span className="section-tag">Conference Packages</span>
              <h2>Tailored Packages for Every Event</h2>
              <p>
                We offer flexible packages that can be customized to your specific
                needs — from half-day meetings to multi-day conferences with full
                accommodation. Contact us to discuss your requirements and receive
                a personalized quote.
              </p>
              <div className="packages-list">
                <div className="package-option">
                  <h4>Day Package</h4>
                  <ul>
                    <li>Meeting space (8:00 AM - 5:00 PM)</li>
                    <li>Morning and afternoon tea/coffee</li>
                    <li>Lunch at our restaurant</li>
                    <li>AV equipment</li>
                    <li>Stationery kit</li>
                    <li>Bottled water throughout</li>
                  </ul>
                </div>
                <div className="package-option">
                  <h4>Full-Board Package</h4>
                  <ul>
                    <li>Everything in Day Package</li>
                    <li>Overnight accommodation</li>
                    <li>Dinner and breakfast</li>
                    <li>Evening activity (cultural or wellness)</li>
                    <li>Airport transfer (on request)</li>
                    <li>Dedicated conference coordinator</li>
                  </ul>
                </div>
                <div className="package-option">
                  <h4>Retreat Package</h4>
                  <ul>
                    <li>Everything in Full-Board Package</li>
                    <li>Team building activities</li>
                    <li>Farm or seed tour experience</li>
                    <li>Wellness session</li>
                    <li>Customized menu</li>
                    <li>Welcome gift for all delegates</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================
          CTA SECTION
          ================================ */}
      <section className="conf-cta">
        <div className="container">
          <div className="conf-cta-content">
            <h2>Ready to Plan Your Event?</h2>
            <p>
              Get in touch with our team to discuss your requirements, check
              availability, and receive a personalized quote for your conference
              or retreat.
            </p>
            <div className="conf-cta-buttons">
              <Link to="/contact" className="conf-cta-primary">
                Enquire Now
              </Link>
              <Link to="/booking" className="conf-cta-secondary">
                Book Accommodation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================================
          FACILITY DETAIL MODAL
          ================================ */}
      {isModalOpen && selectedFacility && (
        <div className="conf-modal-overlay" onClick={closeModal}>
          <div className="conf-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="conf-modal-close" onClick={closeModal} aria-label="Close modal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="conf-modal-body">
              <div className="conf-modal-gallery">
                <div className="conf-modal-image-wrapper">
                  <img
                    src={selectedFacility.images[currentImageIndex].src}
                    alt={selectedFacility.images[currentImageIndex].alt}
                  />
                  {selectedFacility.images.length > 1 && (
                    <>
                      <button
                        className="conf-gallery-arrow conf-gallery-prev"
                        onClick={() =>
                          setCurrentImageIndex((prev) =>
                            prev > 0 ? prev - 1 : selectedFacility.images.length - 1
                          )
                        }
                        aria-label="Previous image"
                      >
                        ‹
                      </button>
                      <button
                        className="conf-gallery-arrow conf-gallery-next"
                        onClick={() =>
                          setCurrentImageIndex((prev) =>
                            prev < selectedFacility.images.length - 1 ? prev + 1 : 0
                          )
                        }
                        aria-label="Next image"
                      >
                        ›
                      </button>
                      <div className="conf-gallery-counter">
                        {currentImageIndex + 1} / {selectedFacility.images.length}
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="conf-modal-details">
                <div className="conf-modal-header">
                  <span className="conf-modal-icon">{selectedFacility.icon}</span>
                  <h2>{selectedFacility.name}</h2>
                  <p className="conf-modal-tagline">{selectedFacility.tagline}</p>
                </div>

                <p className="conf-modal-description">{selectedFacility.description}</p>

                <div className="conf-modal-capacity">
                  <span className="capacity-label">Capacity</span>
                  <span className="capacity-value">{selectedFacility.capacity}</span>
                </div>

                <div className="conf-modal-section">
                  <h4>Layout Options</h4>
                  <div className="layout-grid">
                    {selectedFacility.layoutOptions.map((layout, i) => (
                      <div key={i} className="layout-item">
                        <span className="layout-name">{layout.split(" — ")[0]}</span>
                        <span className="layout-capacity">{layout.split(" — ")[1]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="conf-modal-section">
                  <h4>Equipment & Features</h4>
                  <div className="features-grid">
                    {selectedFacility.features.map((feature, i) => (
                      <span key={i} className="feature-tag">
                        ✓ {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="conf-modal-section">
                  <h4>Best For</h4>
                  <div className="best-for-list">
                    {selectedFacility.bestFor.map((item, i) => (
                      <span key={i} className="best-for-tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="conf-modal-footer">
                  <Link
                    to="/contact"
                    className="conf-modal-enquire-btn"
                    onClick={closeModal}
                  >
                    Enquire About This Space
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      
    </>
  );
};

export default Conference;