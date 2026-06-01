import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./Experiences.css";

import experiencesHero from "../../assets/images/SSN_garden.webp";
import natureWalk1 from "../../assets/images/SSN_up.webp";
import natureWalk2 from "../../assets/images/SSN_room.webp";
import natureWalk3 from "../../assets/images/SSN_garden.webp";
import seedTour1 from "../../assets/images/SSN_crates.webp";
import seedTour2 from "../../assets/images/SSN_banner.webp";
import seedTour3 from "../../assets/images/SSN_bank.webp";
import birdWatching1 from "../../assets/images/SSN_truck_front.webp";
import birdWatching2 from "../../assets/images/SSN_tools.webp";
import birdWatching3 from "../../assets/images/SSN_seeds.webp";
import farmExperience1 from "../../assets/images/SSN_toilet.webp";
import farmExperience2 from "../../assets/images/SSN_truck.webp";
import farmExperience3 from "../../assets/images/SSN_pink.webp";
import culturalEvening1 from "../../assets/images/SSN_insert.webp";
import culturalEvening2 from "../../assets/images/SSN_room_out.webp";
import culturalEvening3 from "../../assets/images/SSN_counter.webp";
import foodWorkshop1 from "../../assets/images/SSN_restuarant.webp";
import foodWorkshop2 from "../../assets/images/SSN_garden.webp";
import foodWorkshop3 from "../../assets/images/SSN_fruits.webp";
import meditation1 from "../../assets/images/SSN_hall.webp";
import meditation2 from "../../assets/images/SSN_avocado.webp";
import photography1 from "../../assets/images/SSN_bank.webp";
import photography2 from "../../assets/images/SSN_banner.webp";

interface ExperienceImage {
  src: string;
  alt: string;
}

interface Experience {
  id: number;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  duration: string;
  bestTime: string;
  difficulty: string;
  included: string[];
  whatToBring: string[];
  images: ExperienceImage[];
  icon: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Nature Walks",
    tagline: "Explore scenic trails through indigenous landscapes",
    description:
      "Guided walks through our nature trails, indigenous gardens, and surrounding landscapes. Discover native plants, learn about their traditional uses, and immerse yourself in the tranquility of nature.",
    longDescription:
      "Our guided nature walks take you through carefully maintained trails that wind through indigenous gardens, small woodlands, and open landscapes. Along the way, our knowledgeable guides will introduce you to native plant species, explain their medicinal and culinary uses in traditional Kenyan culture, and help you spot the diverse birdlife and butterflies that call this area home. The walks are designed to be both educational and meditative — a chance to slow down, breathe deeply, and reconnect with the natural world.",
    duration: "1 - 2 Hours",
    bestTime: "Early Morning or Late Afternoon",
    difficulty: "Easy — Suitable for all ages",
    included: [
      "Experienced nature guide",
      "Botanical insights and plant identification",
      "Binoculars for bird watching",
      "Refreshments during the walk",
      "Photography opportunities",
    ],
    whatToBring: [
      "Comfortable walking shoes",
      "Hat and sunscreen",
      "Camera",
      "Water bottle",
      "Light jacket (mornings)",
    ],
    images: [
      { src: natureWalk1, alt: "Nature trail through indigenous gardens" },
      { src: natureWalk2, alt: "Guided walk with botanist" },
      { src: natureWalk3, alt: "Scenic landscape views" },
    ],
    icon: "🌿",
  },
  {
    id: 2,
    title: "Seed Conservation Tour",
    tagline: "Discover the living heritage of indigenous seeds",
    description:
      "An eye-opening tour of our living seed bank. Learn about indigenous seed varieties, their nutritional benefits, cultural significance, and the crucial work of preserving biodiversity.",
    longDescription:
      "The Seed Conservation Tour is the heart of the Indigenous Seeds Village experience. You'll visit our living seed bank where hundreds of indigenous seed varieties are preserved, propagated, and studied. Our seed conservationists will guide you through the fascinating world of traditional seeds — explaining how each variety is adapted to local conditions, its nutritional profile, its cultural significance, and why preserving this biodiversity is critical for food security and climate resilience. You'll have the opportunity to touch, smell, and even taste different seeds and learn how Seed Savers Network Kenya is leading conservation efforts across the country.",
    duration: "1.5 - 2 Hours",
    bestTime: "Morning (9:00 AM - 11:00 AM)",
    difficulty: "Easy — Walking involved",
    included: [
      "Expert seed conservationist guide",
      "Tour of the living seed bank",
      "Seed tasting session",
      "Educational materials",
      "Take-home indigenous seed samples",
    ],
    whatToBring: [
      "Notebook and pen",
      "Comfortable walking shoes",
      "Hat",
      "Curiosity and questions",
      "Camera",
    ],
    images: [
      { src: seedTour1, alt: "Living seed bank display" },
      { src: seedTour2, alt: "Seed conservationist explaining varieties" },
      { src: seedTour3, alt: "Indigenous seeds close-up" },
    ],
    icon: "🌱",
  },
  {
    id: 3,
    title: "Bird Watching",
    tagline: "Observe diverse bird species in their natural habitat",
    description:
      "Lake Elementaita and its surroundings are a birdwatcher's paradise. Join our expert guides to spot both resident and migratory birds in this world-renowned birding destination.",
    longDescription:
      "The Lake Elementaita ecosystem is a UNESCO World Heritage Site and an Important Bird Area (IBA), home to over 400 bird species including flamingos, pelicans, eagles, and numerous migratory species. Our bird watching experience is led by expert ornithologist guides who know exactly where to find the most spectacular species. Whether you're a serious birder with a life list or a curious beginner, we'll tailor the experience to your level of knowledge and interest. Early morning sessions offer the best viewing opportunities as birds are most active during this time. The experience can be combined with a nature walk for a full morning of exploration.",
    duration: "2 - 4 Hours",
    bestTime: "Early Morning (6:00 AM - 10:00 AM)",
    difficulty: "Easy to Moderate — Some walking on uneven terrain",
    included: [
      "Professional birding guide",
      "High-quality binoculars",
      "Bird identification guidebook",
      "Checklist of local species",
      "Light breakfast or snacks",
      "Transport to prime viewing spots",
    ],
    whatToBring: [
      "Sturdy walking shoes",
      "Neutral-colored clothing",
      "Hat and sunscreen",
      "Camera with zoom lens (optional)",
      "Water bottle",
    ],
    images: [
      { src: birdWatching1, alt: "Flamingos at Lake Elementaita" },
      { src: birdWatching2, alt: "Guide with binoculars" },
      { src: birdWatching3, alt: "Eagle in flight" },
    ],
    icon: "🦅",
  },
  {
    id: 4,
    title: "Farm Experience",
    tagline: "Get your hands dirty and learn sustainable farming",
    description:
      "A hands-on experience in our organic farm. Plant, harvest, and learn about indigenous crops, composting, water conservation, and sustainable farming practices that you can apply at home.",
    longDescription:
      "Our Farm Experience is a fully immersive, hands-on activity that connects you directly with the land and the food it produces. You'll work alongside our farmers in the indigenous vegetable gardens, learning traditional and modern sustainable farming techniques. Activities may include planting seeds, preparing garden beds, harvesting vegetables, making compost, and learning about natural pest management. The experience is tailored to your interests — whether you want to learn about small-scale urban farming, understand the principles of permaculture, or simply enjoy the therapeutic benefits of working with soil. All produce harvested during your session will be used in our restaurant, and you're welcome to join the kitchen to see how it's prepared!",
    duration: "2 - 3 Hours",
    bestTime: "Morning (8:00 AM - 11:00 AM)",
    difficulty: "Moderate — Physical activity involved",
    included: [
      "Farmer guide and mentor",
      "All farming tools and gloves",
      "Seeds or seedlings to plant",
      "Harvest to take to the kitchen",
      "Refreshments",
      "Certificate of participation",
    ],
    whatToBring: [
      "Comfortable clothes that can get dirty",
      "Closed shoes or gumboots",
      "Hat and sunscreen",
      "Water bottle",
      "Enthusiasm!",
    ],
    images: [
      { src: farmExperience1, alt: "Planting in the organic garden" },
      { src: farmExperience2, alt: "Harvesting indigenous vegetables" },
      { src: farmExperience3, alt: "Learning composting techniques" },
    ],
    icon: "👨‍🌾",
  },
  {
    id: 5,
    title: "Cultural Evenings",
    tagline: "Celebrate heritage through music, dance, and storytelling",
    description:
      "An enchanting evening of traditional music, dance performances, and storytelling around the fire. Experience the rich cultural heritage of Kenya's diverse communities.",
    longDescription:
      "As the sun sets over Indigenous Seeds Village, gather around the fire for an unforgettable cultural evening. Local performers, storytellers, and musicians come together to share the traditions that have been passed down through generations. You'll experience traditional songs and dances from different Kenyan communities, hear folk tales that carry ancient wisdom, and participate in interactive sessions where you can learn a few dance steps or try playing traditional instruments. The evening is accompanied by a selection of traditional snacks and beverages, creating a warm, communal atmosphere that embodies the spirit of African hospitality. These evenings often become the highlight of our guests' stay.",
    duration: "2 - 3 Hours (Evening)",
    bestTime: "Sundays and Thursdays, 6:30 PM onwards",
    difficulty: "Easy — Relaxed and social",
    included: [
      "Live traditional music and dance",
      "Storytelling sessions",
      "Traditional snacks and beverages",
      "Interactive participation opportunities",
      "Bonfire gathering",
    ],
    whatToBring: [
      "Warm clothing for the evening",
      "Camera",
      "Open mind and willingness to participate",
    ],
    images: [
      { src: culturalEvening1, alt: "Traditional dance performance" },
      { src: culturalEvening2, alt: "Storytelling around the bonfire" },
      { src: culturalEvening3, alt: "Musicians playing traditional instruments" },
    ],
    icon: "🥁",
  },
  {
    id: 6,
    title: "Indigenous Food Workshop",
    tagline: "Learn to cook traditional Kenyan dishes",
    description:
      "A hands-on cooking workshop where you'll learn to prepare authentic Kenyan dishes using indigenous ingredients, traditional techniques, and recipes passed down through generations.",
    longDescription:
      "Step into our kitchen for a culinary journey through Kenya's indigenous food heritage. Under the guidance of our experienced chefs, you'll learn to prepare a complete traditional meal from scratch — from selecting and preparing indigenous vegetables to mastering the art of cooking with traditional grains like sorghum, finger millet, and amaranth. The workshop covers the nutritional benefits of different ingredients, traditional cooking methods, and the cultural stories behind each dish. At the end of the session, you'll sit down to enjoy the meal you've prepared, accompanied by recipe cards to take home so you can recreate the experience in your own kitchen.",
    duration: "3 - 4 Hours",
    bestTime: "Morning (9:00 AM) or Afternoon (2:00 PM)",
    difficulty: "Easy — No cooking experience required",
    included: [
      "Professional chef instructor",
      "All ingredients and cooking equipment",
      "Apron and recipe cards",
      "Full meal of prepared dishes",
      "Certificate of participation",
      "Take-home spice blend",
    ],
    whatToBring: [
      "Comfortable clothing",
      "Appetite!",
      "Notebook for extra tips",
    ],
    images: [
      { src: foodWorkshop1, alt: "Cooking workshop in progress" },
      { src: foodWorkshop2, alt: "Preparing traditional dishes" },
      { src: foodWorkshop3, alt: "Finished meal presentation" },
    ],
    icon: "👩‍🍳",
  },
  {
    id: 7,
    title: "Wellness & Meditation",
    tagline: "Find peace and balance in nature",
    description:
      "Rejuvenate your mind and body with guided meditation and wellness sessions held in the tranquil surroundings of our indigenous gardens. Perfect for retreats and personal renewal.",
    longDescription:
      "Our wellness and meditation sessions are designed to help you disconnect from the stresses of modern life and reconnect with yourself and nature. Held in specially chosen spots within our gardens — under ancient trees, beside flowering shrubs, or overlooking the distant lake — each session is guided by an experienced meditation instructor who will lead you through breathing exercises, mindful walking, and seated meditation. The natural setting amplifies the experience, with birdsong, rustling leaves, and fresh air creating the perfect environment for deep relaxation. Private one-on-one sessions can be arranged, as well as group sessions for retreats and corporate wellness programs.",
    duration: "1 - 1.5 Hours",
    bestTime: "Early Morning or Sunset",
    difficulty: "Easy — Suitable for beginners",
    included: [
      "Experienced meditation guide",
      "Meditation mats and cushions",
      "Guided breathing exercises",
      "Mindful walking session",
      "Herbal tea after the session",
    ],
    whatToBring: [
      "Comfortable, loose clothing",
      "Light jacket or shawl",
      "Open mind",
    ],
    images: [
      { src: meditation1, alt: "Meditation in the garden" },
      { src: meditation2, alt: "Wellness session at sunset" },
    ],
    icon: "🧘",
  },
  {
    id: 8,
    title: "Photography Tours",
    tagline: "Capture the beauty of nature and culture",
    description:
      "Guided photography walks designed for both amateur and serious photographers. Capture stunning landscapes, vibrant birdlife, and authentic cultural moments.",
    longDescription:
      "Indigenous Seeds Village and the surrounding Lake Elementaita landscape offer endless opportunities for stunning photography. Our photography tours are led by guides who know the best spots, the best light, and the best moments to capture. Whether you're interested in landscape photography, bird photography, macro photography of indigenous plants and insects, or cultural photography during our events, we'll take you to the right place at the right time. The tour includes tips on composition, lighting, and camera settings, making it valuable for photographers of all skill levels. The golden hours around sunrise and sunset are particularly magical.",
    duration: "2 - 3 Hours",
    bestTime: "Sunrise or Sunset (Golden Hour)",
    difficulty: "Easy to Moderate",
    included: [
      "Photography guide familiar with best spots",
      "Access to prime photography locations",
      "Composition and technique tips",
      "Transport to different locations if needed",
    ],
    whatToBring: [
      "Camera (any type — phone to professional)",
      "Extra batteries and memory cards",
      "Tripod (recommended for sunrise/sunset)",
      "Comfortable walking shoes",
      "Weather-appropriate clothing",
    ],
    images: [
      { src: photography1, alt: "Sunset photography session" },
      { src: photography2, alt: "Nature macro photography" },
    ],
    icon: "📸",
  },
];

const Experiences = () => {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (experience: Experience) => {
    setSelectedExperience(experience);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedExperience(null);
    document.body.style.overflow = "";
  };

  return (
    <>
      <Navbar />

      {/* ================================
          HERO SECTION
          ================================ */}
      <section className="exp-hero">
        <div
          className="exp-hero-bg"
          style={{ backgroundImage: `url(${experiencesHero})` }}
        />
        <div className="exp-hero-overlay" />
        <div className="container exp-hero-content">
          <span className="exp-hero-tag">Discover & Explore</span>
          <h1>Experiences & Activities</h1>
          <p>
            Immerse yourself in the rich tapestry of nature, culture, and 
            heritage. Every experience is designed to educate, inspire, and 
            create lasting memories.
          </p>
        </div>
      </section>

      {/* ================================
          INTRO SECTION
          ================================ */}
      <section className="exp-intro">
        <div className="container">
          <div className="exp-intro-content">
            <span className="section-tag">Why Experiences Matter</span>
            <h2>More Than Just a Stay</h2>
            <p>
              At Indigenous Seeds Village, we believe that the best travel 
              experiences are those that connect you deeply with a place and 
              its people. Our carefully curated activities are designed to 
              immerse you in the natural beauty, cultural richness, and 
              agricultural heritage of Kenya. Whether you're seeking adventure, 
              knowledge, relaxation, or all three, there's an experience waiting 
              for you.
            </p>
            <div className="exp-summary">
              <div className="exp-summary-item">
                <span className="exp-summary-number">8</span>
                <span className="exp-summary-label">Unique Experiences</span>
              </div>
              <div className="exp-summary-item">
                <span className="exp-summary-number">All Ages</span>
                <span className="exp-summary-label">Family Friendly</span>
              </div>
              <div className="exp-summary-item">
                <span className="exp-summary-number">Guided</span>
                <span className="exp-summary-label">Expert-Led Activities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================
          EXPERIENCES GRID
          ================================ */}
      <section className="exp-grid-section">
        <div className="container">
          <div className="exp-grid">
            {experiences.map((experience) => (
              <div
                key={experience.id}
                className="exp-card"
                onClick={() => openModal(experience)}
              >
                <div className="exp-card-image">
                  <img
                    src={experience.images[0].src}
                    alt={experience.images[0].alt}
                  />
                  <div className="exp-card-overlay">
                    <span className="exp-card-icon">{experience.icon}</span>
                    <h3>{experience.title}</h3>
                    <p>{experience.tagline}</p>
                    <span className="exp-card-learn">Learn More →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================
          CUSTOM EXPERIENCES
          ================================ */}
      <section className="exp-custom">
        <div className="container">
          <div className="custom-banner">
            <div className="custom-content">
              <span className="section-tag">Tailored For You</span>
              <h2>Custom Experiences</h2>
              <p>
                Looking for something specific? We can create bespoke 
                experiences tailored to your interests, group size, and 
                schedule. Perfect for corporate retreats, family reunions, 
                school groups, and special celebrations.
              </p>
              <Link to="/contact" className="custom-cta">
                Enquire About Custom Experiences
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================================
          CTA SECTION
          ================================ */}
      <section className="exp-cta">
        <div className="container">
          <div className="exp-cta-content">
            <h2>Ready for an Unforgettable Experience?</h2>
            <p>
              Book your stay and add experiences to create a truly memorable 
              visit to Indigenous Seeds Village.
            </p>
            <div className="exp-cta-buttons">
              <Link to="/booking" className="exp-cta-primary">
                Book Your Stay
              </Link>
              <Link to="/contact" className="exp-cta-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================================
          EXPERIENCE DETAIL MODAL
          ================================ */}
      {isModalOpen && selectedExperience && (
        <div className="exp-modal-overlay" onClick={closeModal}>
          <div className="exp-modal-container" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button className="exp-modal-close" onClick={closeModal} aria-label="Close modal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="exp-modal-body">
              {/* Image Gallery */}
              <div className="exp-modal-gallery">
                <div className="exp-modal-image-wrapper">
                  <img
                    src={selectedExperience.images[currentImageIndex].src}
                    alt={selectedExperience.images[currentImageIndex].alt}
                  />
                  {selectedExperience.images.length > 1 && (
                    <>
                      <button
                        className="exp-gallery-arrow exp-gallery-prev"
                        onClick={() =>
                          setCurrentImageIndex((prev) =>
                            prev > 0 ? prev - 1 : selectedExperience.images.length - 1
                          )
                        }
                        aria-label="Previous image"
                      >
                        ‹
                      </button>
                      <button
                        className="exp-gallery-arrow exp-gallery-next"
                        onClick={() =>
                          setCurrentImageIndex((prev) =>
                            prev < selectedExperience.images.length - 1 ? prev + 1 : 0
                          )
                        }
                        aria-label="Next image"
                      >
                        ›
                      </button>
                      <div className="exp-gallery-counter">
                        {currentImageIndex + 1} / {selectedExperience.images.length}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Details */}
              <div className="exp-modal-details">
                <div className="exp-modal-header">
                  <span className="exp-modal-icon">{selectedExperience.icon}</span>
                  <h2>{selectedExperience.title}</h2>
                  <p className="exp-modal-tagline">{selectedExperience.tagline}</p>
                </div>

                <p className="exp-modal-description">{selectedExperience.longDescription}</p>

                {/* Quick Info */}
                <div className="exp-modal-info">
                  <div className="exp-info-item">
                    <span className="exp-info-label">Duration</span>
                    <span className="exp-info-value">{selectedExperience.duration}</span>
                  </div>
                  <div className="exp-info-item">
                    <span className="exp-info-label">Best Time</span>
                    <span className="exp-info-value">{selectedExperience.bestTime}</span>
                  </div>
                  <div className="exp-info-item">
                    <span className="exp-info-label">Difficulty</span>
                    <span className="exp-info-value">{selectedExperience.difficulty}</span>
                  </div>
                </div>

                {/* Included */}
                <div className="exp-modal-section">
                  <h4>What's Included</h4>
                  <ul className="exp-included-list">
                    {selectedExperience.included.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* What to Bring */}
                <div className="exp-modal-section">
                  <h4>What to Bring</h4>
                  <ul className="exp-bring-list">
                    {selectedExperience.whatToBring.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="exp-modal-footer">
                  <Link
                    to="/booking"
                    className="exp-modal-book-btn"
                    onClick={closeModal}
                  >
                    Book This Experience
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Experiences;