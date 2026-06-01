import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import RoomModal from "../../components/room-modal/RoomModal";
import "./Accommodation.css";

import accomHero from "../../assets/images/SSN_bed.webp";
import roomStandard1 from "../../assets/images/SSN_red.webp";
import roomStandard2 from "../../assets/images/SSN_bed.webp";
import roomStandard3 from "../../assets/images/SSN_red.webp";
import roomDeluxe1 from "../../assets/images/SSN_pink.webp";
import roomDeluxe2 from "../../assets/images/SSN_green_mat.webp";
import roomDeluxe3 from "../../assets/images/SSN_pink.webp";
import roomCottage1 from "../../assets/images/SSN_cottage.webp";
import roomCottage2 from "../../assets/images/SSN_green_mat.webp";
import roomCottage3 from "../../assets/images/SSN_cottage.webp";
import roomSuite1 from "../../assets/images/SSN_red.webp";
import roomSuite2 from "../../assets/images/SSN_shower.webp";
import roomSuite3 from "../../assets/images/SSN_tab_cott.webp";
import amenityWifi from "../../assets/icons/wifi.svg";
import amenityParking from "../../assets/icons/parking.svg";
import amenityRestaurant from "../../assets/icons/restaurant.svg";
import amenityGarden from "../../assets/icons/garden.svg";
import amenityLaundry from "../../assets/icons/laundry.svg";
import amenitySecurity from "../../assets/icons/security.svg";

interface RoomImage {
  src: string;
  alt: string;
}

interface RoomAmenity {
  name: string;
  icon: string;
}

interface Room {
  id: number;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  price: string;
  bedType: string;
  capacity: string;
  size: string;
  view: string;
  totalRooms: number;
  images: RoomImage[];
  amenities: string[];
  highlights: string[];
}

const rooms: Room[] = [
  {
    id: 1,
    name: "Standard Single Room",
    tagline: "Comfortable simplicity for the solo traveler",
    description:
      "A cozy, fully self-contained room designed for solo travelers seeking comfort and tranquility. Features a single bed, modern bathroom, and views of our indigenous gardens.",
    longDescription:
      "Our Standard Single Rooms offer the perfect sanctuary for solo travelers. Each room is thoughtfully designed with locally inspired décor, premium bedding, and all the essential amenities for a comfortable stay. Large windows frame beautiful views of our indigenous gardens, bringing nature right to your doorstep. Whether you're here for a retreat, business, or exploration, these rooms provide everything you need and nothing you don't.",
    price: "KSh 6,500",
    bedType: "1 Single Bed",
    capacity: "1 Guest",
    size: "24 m²",
    view: "Garden View",
    totalRooms: 8,
    images: [
      { src: roomStandard1, alt: "Standard Single Room Interior" },
      { src: roomStandard2, alt: "Standard Single Room Bathroom" },
      { src: roomStandard3, alt: "Standard Single Room Garden View" },
    ],
    amenities: [
      "Comfortable Single Bed",
      "En-suite Bathroom",
      "Hot Shower",
      "Fresh Linens & Towels",
      "Writing Desk",
      "Wardrobe",
      "Garden Views",
      "Daily Housekeeping",
      "Complimentary Water",
      "Mosquito Net",
    ],
    highlights: [
      "Peaceful garden-facing position",
      "Ideal for solo travelers",
      "Writing desk for quiet reflection",
      "Close to restaurant and common areas",
    ],
  },
  {
    id: 2,
    name: "Standard Double Room",
    tagline: "Spacious comfort for two",
    description:
      "A generously proportioned room with a comfortable double bed, perfect for couples or friends. Fully self-contained with elegant, locally inspired design elements.",
    longDescription:
      "Our Standard Double Rooms blend comfort with character. Each room features a plush double bed dressed in premium linens, a well-appointed en-suite bathroom, and carefully curated décor that reflects Kenya's rich cultural heritage. The spacious layout ensures you never feel cramped, while large windows invite natural light and garden views. Perfect for couples seeking a romantic getaway or friends traveling together.",
    price: "KSh 8,500",
    bedType: "1 Double Bed",
    capacity: "2 Guests",
    size: "32 m²",
    view: "Garden View",
    totalRooms: 5,
    images: [
      { src: roomDeluxe1, alt: "Standard Double Room Interior" },
      { src: roomDeluxe2, alt: "Standard Double Room Seating Area" },
      { src: roomDeluxe3, alt: "Standard Double Room Details" },
    ],
    amenities: [
      "Comfortable Double Bed",
      "En-suite Bathroom",
      "Hot Shower",
      "Premium Linens & Towels",
      "Sitting Area",
      "Writing Desk",
      "Wardrobe",
      "Garden Views",
      "Daily Housekeeping",
      "Complimentary Water",
      "Mosquito Net",
      "Extra Pillows & Blankets",
    ],
    highlights: [
      "Ideal for couples",
      "Spacious sitting area",
      "Beautiful garden views",
      "Locally inspired décor",
    ],
  },
  {
    id: 3,
    name: "Family Cottage",
    tagline: "Your home away from home",
    description:
      "A charming standalone cottage with one double bed and one single bed, perfect for families. Features a private veranda overlooking the indigenous gardens.",
    longDescription:
      "Our Family Cottages are designed for those who want a little extra space and privacy. These standalone units feature a comfortable double bed and a single bed, making them ideal for families of three or small groups. Each cottage has its own private veranda where you can enjoy morning tea while watching birds and butterflies in the garden. The interiors blend traditional Kenyan craftsmanship with modern comfort, creating a warm and inviting atmosphere that feels like a home away from home.",
    price: "KSh 12,000",
    bedType: "1 Double + 1 Single Bed",
    capacity: "3 Guests",
    size: "45 m²",
    view: "Panoramic Garden View",
    totalRooms: 2,
    images: [
      { src: roomCottage1, alt: "Family Cottage Exterior" },
      { src: roomCottage2, alt: "Family Cottage Interior" },
      { src: roomCottage3, alt: "Family Cottage Veranda" },
    ],
    amenities: [
      "1 Double Bed + 1 Single Bed",
      "En-suite Bathroom",
      "Hot Shower",
      "Premium Linens & Towels",
      "Private Veranda",
      "Sitting Area",
      "Writing Desk",
      "Wardrobe",
      "Panoramic Garden Views",
      "Daily Housekeeping",
      "Complimentary Water",
      "Mosquito Nets",
      "Extra Pillows & Blankets",
      "Children's Books & Games",
    ],
    highlights: [
      "Private standalone cottage",
      "Perfect for families",
      "Private veranda with seating",
      "Extra space for children",
      "Children's books and games provided",
    ],
  },
  {
    id: 4,
    name: "Executive Suite",
    tagline: "The ultimate Indigenous Seeds experience",
    description:
      "Our most luxurious offering — a spacious suite with a king-size bed, separate living area, and private outdoor space. The pinnacle of comfort and heritage-inspired elegance.",
    longDescription:
      "The Executive Suite represents the very best of Indigenous Seeds Village. This expansive sanctuary features a king-size bed dressed in the finest linens, a separate living area with comfortable seating, and a private outdoor terrace that offers sweeping views of the gardens and Lake Elementaita in the distance. Every detail has been carefully considered — from the handcrafted furniture to the curated selection of books on Kenyan heritage and biodiversity. This is more than a room; it is an experience designed for those who appreciate the finer things in life while staying connected to nature and culture.",
    price: "KSh 18,000",
    bedType: "1 King-Size Bed",
    capacity: "2 Guests",
    size: "60 m²",
    view: "Lake & Garden Panorama",
    totalRooms: 1,
    images: [
      { src: roomSuite1, alt: "Executive Suite Bedroom" },
      { src: roomSuite2, alt: "Executive Suite Living Area" },
      { src: roomSuite3, alt: "Executive Suite Terrace" },
    ],
    amenities: [
      "King-Size Bed",
      "En-suite Bathroom with Bathtub",
      "Rainfall Shower",
      "Luxury Linens & Bathrobes",
      "Separate Living Area",
      "Private Outdoor Terrace",
      "Writing Desk",
      "Walk-in Wardrobe",
      "Panoramic Lake & Garden Views",
      "Daily Housekeeping",
      "Complimentary Water & Welcome Drink",
      "Mosquito Net",
      "Mini Library",
      "Premium Toiletries",
      "In-room Coffee & Tea Station",
    ],
    highlights: [
      "Largest and most luxurious room",
      "Private terrace with panoramic views",
      "Separate living area",
      "Bathtub with a view",
      "Curated library on Kenyan heritage",
      "Ideal for honeymoons and special occasions",
    ],
  },
];

const hotelAmenities = [
  { name: "Free Wi-Fi", icon: amenityWifi },
  { name: "Ample Parking", icon: amenityParking },
  { name: "Farm-to-Table Restaurant", icon: amenityRestaurant },
  { name: "Indigenous Gardens", icon: amenityGarden },
  { name: "Laundry Service", icon: amenityLaundry },
  { name: "24/7 Security", icon: amenitySecurity },
];

const Accommodation = () => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (room: Room) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRoom(null);
    document.body.style.overflow = "";
  };

  return (
    <>
      <Navbar />

      {/* ================================
          HERO SECTION
          ================================ */}
      <section className="accom-hero">
        <div
          className="accom-hero-bg"
          style={{ backgroundImage: `url(${accomHero})` }}
        />
        <div className="accom-hero-overlay" />
        <div className="container accom-hero-content">
          <span className="accom-hero-tag">Rest & Rejuvenate</span>
          <h1>Our Accommodation</h1>
          <p>
            Choose from 15 thoughtfully designed rooms — each one a peaceful
            sanctuary rooted in nature and indigenous heritage.
          </p>
        </div>
      </section>

      {/* ================================
          INTRO SECTION
          ================================ */}
      <section className="accom-intro">
        <div className="container">
          <div className="accom-intro-content">
            <span className="section-tag">Your Home in Nature</span>
            <h2>Rooms Designed for Comfort & Connection</h2>
            <p>
              At Indigenous Seeds Village, every room tells a story. Our
              15 rooms blend traditional Kenyan craftsmanship with modern
              comfort, creating spaces that feel both luxurious and deeply
              rooted in place. Whether you're a solo traveler, a couple
              seeking romance, or a family on adventure, we have the
              perfect room waiting for you.
            </p>
            <div className="room-summary">
              <div className="room-summary-item">
                <span className="summary-number">15</span>
                <span className="summary-label">Total Rooms</span>
              </div>
              <div className="room-summary-item">
                <span className="summary-number">4</span>
                <span className="summary-label">Room Types</span>
              </div>
              <div className="room-summary-item">
                <span className="summary-number">100%</span>
                <span className="summary-label">Self-Contained</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================
          ROOMS LISTING
          ================================ */}
      <section className="accom-rooms">
        <div className="container">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              className={`room-listing ${
                index % 2 === 1 ? "room-listing-reverse" : ""
              }`}
            >
              <div className="room-listing-gallery">
                <div className="room-main-image">
                  <img src={room.images[0].src} alt={room.images[0].alt} />
                  <div className="room-image-counter">
                    1 / {room.images.length}
                  </div>
                </div>
                <div className="room-secondary-images">
                  {room.images.slice(1).map((img, i) => (
                    <div key={i} className="room-secondary-image">
                      <img src={img.src} alt={img.alt} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="room-listing-details">
                <div className="room-listing-header">
                  <span className="room-type-badge">
                    {room.totalRooms} Room{room.totalRooms > 1 ? "s" : ""} Available
                  </span>
                  <h3>{room.name}</h3>
                  <p className="room-tagline">{room.tagline}</p>
                </div>

                <p className="room-description">{room.description}</p>

                <div className="room-quick-info">
                  <div className="quick-info-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 12h18M3 6h18M3 18h18" />
                    </svg>
                    <span>{room.bedType}</span>
                  </div>
                  <div className="quick-info-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                    </svg>
                    <span>{room.capacity}</span>
                  </div>
                  <div className="quick-info-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M3 9h18M9 21V9" />
                    </svg>
                    <span>{room.size}</span>
                  </div>
                  <div className="quick-info-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    <span>{room.view}</span>
                  </div>
                </div>

                <div className="room-price-row">
                  <div className="room-price">
                    <span className="price-amount">{room.price}</span>
                    <span className="price-period">per night</span>
                  </div>
                </div>

                <div className="room-actions">
                  <Link to="/booking" className="room-btn-primary">
                    Book Now
                  </Link>
                  <button
                    className="room-btn-secondary"
                    onClick={() => openModal(room)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================================
          ALL AMENITIES SECTION
          ================================ */}
      <section className="accom-amenities">
        <div className="container">
          <div className="amenities-header">
            <span className="section-tag">Thoughtful Comforts</span>
            <h2>Hotel-Wide Amenities</h2>
            <p>
              Every guest enjoys access to our full range of facilities
              designed to make your stay seamless and memorable.
            </p>
          </div>
          <div className="amenities-grid">
            {hotelAmenities.map((amenity, index) => (
              <div key={index} className="amenity-card">
                <div className="amenity-icon">
                  <img src={amenity.icon} alt={amenity.name} />
                </div>
                <span>{amenity.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================
          POLICIES SECTION
          ================================ */}
      <section className="accom-policies">
        <div className="container">
          <div className="policies-header">
            <span className="section-tag">Good to Know</span>
            <h2>House Policies</h2>
          </div>
          <div className="policies-grid">
            <div className="policy-card">
              <h4>Check-in / Check-out</h4>
              <ul>
                <li>Check-in: 12:00 PM</li>
                <li>Check-out: 10:00 AM</li>
                <li>Early check-in subject to availability</li>
                <li>Late check-out on request</li>
              </ul>
            </div>
            <div className="policy-card">
              <h4>Cancellation Policy</h4>
              <ul>
                <li>Free cancellation 48 hours before arrival</li>
                <li>50% charge within 24-48 hours</li>
                <li>Full charge for no-shows</li>
                <li>Special rates are non-refundable</li>
              </ul>
            </div>
            <div className="policy-card">
              <h4>Children & Extra Beds</h4>
              <ul>
                <li>Children of all ages are welcome</li>
                <li>Children under 5 stay free</li>
                <li>Extra bed available on request</li>
                <li>Baby cot provided at no charge</li>
              </ul>
            </div>
            <div className="policy-card">
              <h4>General Rules</h4>
              <ul>
                <li>No smoking inside rooms</li>
                <li>Quiet hours: 10:00 PM - 6:00 AM</li>
                <li>Pets not allowed</li>
                <li>Visitors welcome in common areas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================================
          CTA SECTION
          ================================ */}
      <section className="accom-cta">
        <div className="container">
          <div className="accom-cta-content">
            <h2>Ready to Find Your Room?</h2>
            <p>
              Whether you're planning a solo retreat, a romantic getaway,
              or a family adventure, we have the perfect room waiting for you.
            </p>
            <div className="accom-cta-buttons">
              <Link to="/booking" className="accom-cta-primary">
                Book Your Stay
              </Link>
              <Link to="/contact" className="accom-cta-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Room Modal */}
      <RoomModal
        room={selectedRoom}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      <Footer />
    </>
  );
};

export default Accommodation;