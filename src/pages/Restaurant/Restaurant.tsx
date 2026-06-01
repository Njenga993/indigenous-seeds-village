import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


import "./Restaurant.css";

import restaurantHero from "../../assets/images/SSN_insert.webp";
import farmToTable from "../../assets/images/SSN_dinning_table.webp";
import indoorDining from "../../assets/images/SSN_dinning_table.webp";
import outdoorDining from "../../assets/images/SSN_garden.webp";
import privateDining from "../../assets/images/SSN_cottage.webp";
import dish1 from "../../assets/images/mukimo.jpg";
import dish2 from "../../assets/images/fish.jpg";
import dish3 from "../../assets/images/salad.jpg";
import dish4 from "../../assets/images/githeri.jpg";
import dish5 from "../../assets/images/porridje.jpg";
import dish6 from "../../assets/images/fruits.jpg";
import experience1 from "../../assets/images/solo.jpeg";
import experience2 from "../../assets/images/cooking.png";
import experience3 from "../../assets/images/SSN_up.webp";

// Import the menu PDF
import menuPDF from "../../assets/docs/INDIGENOUS_VILLAGE_Food Menu.pdf";

const signatureDishes = [
  {
    name: "Mukimo with Indigenous Greens",
    description:
      "A hearty blend of mashed potatoes, pumpkin leaves, amaranth, and traditional spices, served with slow-cooked indigenous vegetables.",
    image: dish1,
    category: "Main Course",
  },
  {
    name: "Grilled Tilapia with Sorghum Ugali",
    description:
      "Fresh Lake Elementaita tilapia, marinated in herbs, grilled to perfection, and served with nutrient-rich sorghum ugali and kachumbari.",
    image: dish2,
    category: "Main Course",
  },
  {
    name: "Indigenous Seed Salad",
    description:
      "A vibrant salad featuring sprouted indigenous seeds, roasted pumpkin, amaranth leaves, and a tangy tamarind dressing.",
    image: dish3,
    category: "Starter",
  },
  {
    name: "Traditional Githeri Platter",
    description:
      "A modern take on the classic Kenyan dish — slow-cooked beans and maize with seasonal indigenous vegetables and aromatic herbs.",
    image: dish4,
    category: "Main Course",
  },
  {
    name: "Finger Millet Porridge",
    description:
      "Creamy finger millet porridge sweetened with local honey, topped with fresh fruits and crushed indigenous nuts.",
    image: dish5,
    category: "Breakfast",
  },
  {
    name: "Indigenous Fruit Platter",
    description:
      "A seasonal selection of indigenous fruits including baobab, tamarind, and wild berries, served with coconut cream.",
    image: dish6,
    category: "Dessert",
  },
];

const diningSpaces = [
  {
    name: "The Main Dining Room",
    description:
      "An elegant indoor space with floor-to-ceiling windows overlooking the indigenous gardens. Warm lighting, handcrafted furniture, and traditional textiles create an atmosphere of refined comfort.",
    capacity: "Seats up to 60 guests",
    bestFor: "Daily dining, family meals",
    image: indoorDining,
  },
  {
    name: "The Garden Terrace",
    description:
      "Dine under the African sky on our open-air terrace surrounded by indigenous plants and the gentle sounds of nature. Perfect for sunny breakfasts and romantic dinners under the stars.",
    capacity: "Seats up to 40 guests",
    bestFor: "Sunset dinners, weekend brunch",
    image: outdoorDining,
  },
  {
    name: "The Private Dining Room",
    description:
      "An intimate space for special occasions, business dinners, and private celebrations. Customizable menus and dedicated service ensure a memorable experience.",
    capacity: "Seats up to 12 guests",
    bestFor: "Private events, celebrations",
    image: privateDining,
  },
];

const foodExperiences = [
  {
    title: "Farm-to-Table Tour",
    duration: "1.5 Hours",
    description:
      "Walk through our indigenous gardens and learn about traditional vegetables, herbs, and seeds. Pick fresh ingredients and watch as our chefs transform them into a delicious meal.",
    image: experience1,
  },
  {
    title: "Traditional Cooking Class",
    duration: "3 Hours",
    description:
      "Hands-on cooking experience where you'll learn to prepare authentic Kenyan dishes using indigenous ingredients, traditional techniques, and time-honored recipes passed down through generations.",
    image: experience2,
  },
  {
    title: "Sunset Tasting Experience",
    duration: "2 Hours",
    description:
      "A curated tasting journey featuring six courses of indigenous cuisine, each paired with stories about the ingredients, their cultural significance, and nutritional benefits.",
    image: experience3,
  },
];

const Restaurant = () => {
  // Restaurant Page Schema
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Indigenous Seeds Village Restaurant",
    description:
      "Farm-to-table restaurant serving authentic indigenous Kenyan cuisine near Lake Elementaita, Gilgil. Enjoy organic vegetables from our gardens, traditional recipes, and seasonal menus in Nakuru County.",
    url: "https://village.seedfoodculturetourism.org/restaurant",
    telephone: "+254712451777",
    email: "info@seedfoodculturetourism.org",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Near Lake Elementaita, Off Nakuru-Nairobi Highway",
      addressLocality: "Gilgil",
      addressRegion: "Nakuru County",
      addressCountry: "KE",
      postalCode: "20166",
    },
    servesCuisine: ["Kenyan", "Indigenous", "African", "Organic", "Farm-to-Table"],
    priceRange: "KSh 500 - KSh 3,000",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "06:00",
        closes: "21:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "06:00",
        closes: "21:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "07:00",
        closes: "21:30",
      },
    ],
    menu: "https://village.seedfoodculturetourism.org/assets/docs/INDIGENOUS_VILLAGE_Food%20Menu.pdf",
    acceptsReservations: "Yes",
    hasMenu: {
      "@type": "Menu",
      name: "Indigenous Seeds Village Menu",
      description: "Full menu featuring indigenous Kenyan cuisine",
    },
  };

  // FAQ Schema for Restaurant
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What type of cuisine does the Indigenous Seeds Village restaurant serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our restaurant serves authentic indigenous Kenyan cuisine with a farm-to-table philosophy. We use 100% organic ingredients grown in our own gardens or sourced from farmers within the Seed Savers Network. Our menu features traditional dishes like Mukimo, Githeri, grilled Lake Elementaita tilapia with sorghum ugali, and seasonal indigenous vegetables. We also accommodate vegetarian, vegan, gluten-free, and other dietary requirements.",
        },
      },
      {
        "@type": "Question",
        name: "What are the restaurant operating hours?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Breakfast is served from 6:00 AM to 10:00 AM, Lunch from 12:00 PM to 3:00 PM, and Dinner from 6:00 PM to 9:30 PM. The restaurant is open Monday through Sunday, including holidays.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer vegetarian and vegan options?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! We offer a wide range of vegetarian and vegan dishes featuring indigenous vegetables, grains, and legumes. Our kitchen is happy to accommodate various dietary requirements including gluten-free, nut-free, and dairy-free. Please inform us when making your reservation so we can prepare accordingly.",
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
          Restaurant — Indigenous Cuisine | Indigenous Seeds Village, Gilgil
          — Nakuru County
        </title>
        <meta
          name="description"
          content="Dine at our farm-to-table restaurant at Indigenous Seeds Village near Lake Elementaita, Gilgil. Enjoy authentic indigenous Kenyan cuisine — Mukimo, grilled tilapia, Githeri, and seasonal organic dishes. View our menu (PDF), book a table, or explore our dining spaces, cooking classes, and culinary experiences in Nakuru County. Vegetarian, vegan & gluten-free options available."
        />
        <meta
          name="keywords"
          content="restaurant Gilgil, indigenous cuisine Kenya, farm-to-table dining Nakuru, organic restaurant Lake Elementaita, traditional Kenyan food, hotel restaurant Gilgil, best restaurant Nakuru County, Kenyan dishes, vegetarian restaurant Kenya, Mukimo, Githeri, grilled tilapia Kenya, indigenous food workshop, cooking class Gilgil, dining near Lake Elementaita, outdoor dining Kenya, private dining Nakuru, Kenyan breakfast, organic food Kenya, seed-to-plate restaurant"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />

        {/* Geographic Tags */}
        <meta name="geo.region" content="KE-31" />
        <meta name="geo.placename" content="Gilgil, Nakuru County, Kenya" />
        <meta name="geo.position" content="-0.5036;36.3188" />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://village.seedfoodculturetourism.org/restaurant"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Restaurant — Indigenous Cuisine | Indigenous Seeds Village, Gilgil"
        />
        <meta
          property="og:description"
          content="Farm-to-table indigenous Kenyan cuisine near Lake Elementaita. Organic ingredients, traditional recipes, and seasonal menus. View our menu and book a table."
        />
        <meta
          property="og:url"
          content="https://village.seedfoodculturetourism.org/restaurant"
        />
        <meta property="og:type" content="restaurant" />
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
          content="Restaurant — Indigenous Cuisine | Indigenous Seeds Village"
        />
        <meta
          name="twitter:description"
          content="Farm-to-table indigenous Kenyan cuisine near Lake Elementaita. Organic ingredients & traditional recipes."
        />
        <meta
          name="twitter:image"
          content="https://village.seedfoodculturetourism.org/og-image.jpg"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(restaurantSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>


      {/* ================================
          HERO SECTION
          ================================ */}
      <section className="restaurant-hero">
        <div
          className="restaurant-hero-bg"
          style={{ backgroundImage: `url(${restaurantHero})` }}
        />
        <div className="restaurant-hero-overlay" />
        <div className="container restaurant-hero-content">
          <span className="restaurant-hero-tag">Taste Indigenous Cuisine</span>
          <h1>Our Restaurant</h1>
          <p>
            Discover the rich flavours of Kenya's indigenous food heritage —
            every meal is a journey through taste, tradition, and biodiversity.
          </p>
        </div>
      </section>

      {/* ================================
          PHILOSOPHY SECTION
          ================================ */}
      <section className="restaurant-philosophy">
        <div className="container">
          <div className="philosophy-grid">
            <div className="philosophy-image">
              <img src={farmToTable} alt="Farm-to-table organic dining at Indigenous Seeds Village restaurant Gilgil Kenya" />
              <div className="philosophy-badge">
                <span>Seed</span>
                <span>to</span>
                <span>Plate</span>
              </div>
            </div>
            <div className="philosophy-content">
              <span className="section-tag">Our Philosophy</span>
              <h2>Farm-to-Table, Rooted in Heritage</h2>
              <p className="philosophy-lead">
                At Indigenous Seeds Village, food is more than sustenance —
                it is a celebration of Kenya's agricultural biodiversity,
                a tribute to the farmers who preserve indigenous seeds, and
                an invitation to experience flavours that have nourished
                communities for centuries.
              </p>
              <p>
                Every ingredient we use is either grown in our own indigenous
                gardens or sourced from farmers within the Seed Savers Network.
                This ensures unparalleled freshness while directly supporting
                the conservation of traditional seed varieties and the
                livelihoods of small-scale farmers.
              </p>
              <p>
                Our chefs work closely with our farmers and seed conservationists
                to create menus that change with the seasons — because the best
                food is food that respects nature's rhythms.
              </p>
              <div className="philosophy-features">
                <div className="philosophy-feature">
                  <span className="feature-check">✓</span>
                  <span>100% Organic Ingredients</span>
                </div>
                <div className="philosophy-feature">
                  <span className="feature-check">✓</span>
                  <span>Seasonal Rotating Menu</span>
                </div>
                <div className="philosophy-feature">
                  <span className="feature-check">✓</span>
                  <span>Indigenous Seed Varieties</span>
                </div>
                <div className="philosophy-feature">
                  <span className="feature-check">✓</span>
                  <span>Supporting Local Farmers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================
          SIGNATURE DISHES
          ================================ */}
      <section className="restaurant-dishes">
        <div className="container">
          <div className="dishes-header">
            <span className="section-tag">Signature Flavours</span>
            <h2>Our Signature Dishes</h2>
            <p>
              A glimpse into the culinary experiences that await you — each dish
              tells a story of tradition, innovation, and the incredible diversity
              of indigenous Kenyan ingredients.
            </p>
          </div>
          <div className="dishes-grid">
            {signatureDishes.map((dish, index) => (
              <div key={index} className="dish-card">
                <div className="dish-image">
                  <img src={dish.image} alt={`${dish.name} — ${dish.category} at Indigenous Seeds Village restaurant Gilgil`} />
                  <span className="dish-category">{dish.category}</span>
                </div>
                <div className="dish-content">
                  <h3>{dish.name}</h3>
                  <p>{dish.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================
          MENU DOWNLOAD SECTION
          ================================ */}
      <section className="restaurant-menu">
        <div className="container">
          <div className="menu-banner">
            <div className="menu-content">
              <span className="section-tag">Our Menu</span>
              <h2>Explore Our Full Menu</h2>
              <p>
                From sunrise breakfasts to candlelit dinners, our menu is a
                carefully curated journey through Kenya's indigenous food heritage.
                View online or download to plan your culinary experience.
              </p>
              <div className="menu-actions">
                <a
                  href={menuPDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="menu-btn-primary"
                  aria-label="View Indigenous Seeds Village restaurant menu online"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  View Menu Online
                </a>
                <a
                  href={menuPDF}
                  download="Indigenous-Seeds-Village-Menu.pdf"
                  className="menu-btn-secondary"
                  aria-label="Download Indigenous Seeds Village restaurant menu PDF"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download Menu (PDF)
                </a>
              </div>
              <div className="menu-info">
                <div className="menu-info-item">
                  <h4>Breakfast</h4>
                  <p>6:00 AM - 10:00 AM</p>
                </div>
                <div className="menu-info-item">
                  <h4>Lunch</h4>
                  <p>12:00 PM - 3:00 PM</p>
                </div>
                <div className="menu-info-item">
                  <h4>Dinner</h4>
                  <p>6:00 PM - 9:30 PM</p>
                </div>
              </div>
            </div>
            <div className="menu-decorative">
              <div className="menu-pattern" />
            </div>
          </div>
        </div>
      </section>

      {/* ================================
          DINING SPACES
          ================================ */}
      <section className="restaurant-spaces">
        <div className="container">
          <div className="spaces-header">
            <span className="section-tag">Dining Spaces</span>
            <h2>Choose Your Perfect Setting</h2>
            <p>
              Whether you prefer elegant indoor dining, breezy outdoor meals,
              or intimate private gatherings, we have the perfect space for
              every occasion.
            </p>
          </div>
          <div className="spaces-grid">
            {diningSpaces.map((space, index) => (
              <div key={index} className="space-card">
                <div className="space-image">
                  <img src={space.image} alt={`${space.name} at Indigenous Seeds Village — ${space.bestFor} near Lake Elementaita`} />
                </div>
                <div className="space-content">
                  <h3>{space.name}</h3>
                  <p className="space-description">{space.description}</p>
                  <div className="space-details">
                    <div className="space-detail">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      <span>{space.capacity}</span>
                    </div>
                    <div className="space-detail">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <span>{space.bestFor}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================
          CULINARY EXPERIENCES
          ================================ */}
      <section className="restaurant-experiences">
        <div className="container">
          <div className="experiences-header">
            <span className="section-tag">Beyond Dining</span>
            <h2>Culinary Experiences</h2>
            <p>
              Dive deeper into Kenya's food culture with our immersive culinary
              experiences — designed to educate, inspire, and delight.
            </p>
          </div>
          <div className="experiences-grid">
            {foodExperiences.map((experience, index) => (
              <div key={index} className="food-experience-card">
                <div className="food-experience-image">
                  <img src={experience.image} alt={`${experience.title} — culinary experience at Indigenous Seeds Village Gilgil Kenya`} />
                  <span className="experience-duration">{experience.duration}</span>
                </div>
                <div className="food-experience-content">
                  <h3>{experience.title}</h3>
                  <p>{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================
          SPECIAL DIETS SECTION
          ================================ */}
      <section className="restaurant-diets">
        <div className="container">
          <div className="diets-content">
            <span className="section-tag">Everyone Is Welcome</span>
            <h2>Dietary Requirements</h2>
            <p>
              We believe that great food should be accessible to everyone. Our
              kitchen is happy to accommodate a wide range of dietary needs and
              preferences. Please inform us when making your reservation.
            </p>
            <div className="diets-grid">
              <div className="diet-item">
                <span className="diet-icon"></span>
                <span>Vegetarian</span>
              </div>
              <div className="diet-item">
                <span className="diet-icon"></span>
                <span>Vegan</span>
              </div>
              <div className="diet-item">
                <span className="diet-icon"></span>
                <span>Gluten-Free</span>
              </div>
              <div className="diet-item">
                <span className="diet-icon"></span>
                <span>Nut-Free</span>
              </div>
              <div className="diet-item">
                <span className="diet-icon"></span>
                <span>Dairy-Free</span>
              </div>
              <div className="diet-item">
                <span className="diet-icon"></span>
                <span>Children's Menu</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================
          PRIVATE EVENTS
          ================================ */}
      <section className="restaurant-events">
        <div className="container">
          <div className="events-banner">
            <div className="events-content">
              <span className="section-tag">Special Occasions</span>
              <h2>Private Dining & Events</h2>
              <p>
                Celebrate birthdays, anniversaries, corporate dinners, or any
                special occasion with a bespoke dining experience. Our team will
                work with you to create a menu and setting that makes your event
                unforgettable.
              </p>
              <Link to="/contact" className="events-cta">
                Enquire About Private Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================================
          CTA SECTION
          ================================ */}
      <section className="restaurant-cta">
        <div className="container">
          <div className="restaurant-cta-content">
            <h2>Ready to Taste Indigenous Kenya?</h2>
            <p>
              Join us for an unforgettable culinary journey that celebrates the
              flavours, traditions, and biodiversity of Kenya's food heritage.
            </p>
            <div className="restaurant-cta-buttons">
              <Link to="/booking" className="restaurant-cta-primary">
                Book a Table
              </Link>
              <Link to="/contact" className="restaurant-cta-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default Restaurant;