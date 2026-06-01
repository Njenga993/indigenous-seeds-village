import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./About.css";

import aboutHero from "../../assets/images/hero_img.webp";
import ourStory from "../../assets/images/SSN_hotel.webp";
import missionImage from "../../assets/images/SSN_up.webp";
import heritage1 from "../../assets/images/SSN_seeds.webp";
import heritage2 from "../../assets/images/SSN_garden.webp";
import heritage3 from "../../assets/images/SSN_counter.webp";
import sustainabilityImg from "../../assets/images/SSN_bed.webp";
//import valuesImg from "../../assets/images/values.jpg";

const About = () => {
  return (
    <>
      <Navbar />

      {/* ================================
          HERO SECTION
          ================================ */}
      <section className="about-hero">
        <div
          className="about-hero-bg"
          style={{ backgroundImage: `url(${aboutHero})` }}
        />
        <div className="about-hero-overlay" />
        <div className="container about-hero-content">
          <span className="about-hero-tag">Our Story</span>
          <h1>About Indigenous Seeds Village</h1>
          <p>
            Where heritage meets hospitality — a retreat rooted in
            indigenous wisdom, biodiversity conservation, and the
            warmth of authentic Kenyan culture.
          </p>
        </div>
      </section>

      {/* ================================
          OUR STORY SECTION
          ================================ */}
      <section className="about-story">
        <div className="container">
          <div className="story-grid">
            <div className="story-image">
              <img src={ourStory} alt="Our Story" />
              <div className="story-image-accent" />
            </div>
            <div className="story-content">
              <span className="section-tag">How It All Began</span>
              <h2>A Dream Rooted in Heritage</h2>
              <p className="story-lead">
                Indigenous Seeds Village was born from a simple yet powerful
                vision — to create a space where people could experience the
                richness of Kenya's indigenous food heritage while enjoying
                world-class hospitality.
              </p>
              <p>
                What began as a seed conservation demonstration site has
                blossomed into a premier eco-retreat that welcomes visitors
                from across Kenya and beyond. Our founders recognized that
                the best way to preserve indigenous knowledge was to share
                it — to let people taste, touch, and experience the wealth
                of biodiversity that has sustained communities for generations.
              </p>
              <p>
                Today, Indigenous Seeds Village stands as a testament to
                what is possible when conservation meets commerce, when
                tradition meets innovation, and when hospitality serves a
                higher purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================
          SEED SAVERS CONNECTION
          ================================ */}
      <section className="about-seedsavers">
        <div className="container">
          <div className="seedsavers-banner">
            <div className="seedsavers-content">
              <span className="section-tag">Our Roots</span>
              <h2>An Initiative of Seed Savers Network Kenya</h2>
              <p>
                Indigenous Seeds Village is proudly part of Seed Savers
                Network Kenya, a pioneering organization dedicated to
                conserving indigenous seeds, promoting agricultural
                biodiversity, and empowering farming communities across
                the country.
              </p>
              <p>
                Since its founding, Seed Savers Network Kenya has worked
                tirelessly to protect Kenya's rich agricultural heritage.
                The network connects farmers, researchers, and communities
                in a shared mission to preserve traditional seed varieties
                that are resilient, nutritious, and adapted to local
                conditions.
              </p>
              <p>
                Indigenous Seeds Village serves as the network's flagship
                demonstration site — a living showcase of what indigenous
                knowledge can achieve when given the platform it deserves.
              </p>
              <a
                href="https://seedsaverskenya.org"
                target="_blank"
                rel="noopener noreferrer"
                className="seedsavers-link"
              >
                Learn More About Seed Savers Network Kenya →
              </a>
            </div>
            <div className="seedsavers-stats">
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Years of Seed Conservation</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Indigenous Seed Varieties</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10,000+</span>
                <span className="stat-label">Farmers in Network</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">12</span>
                <span className="stat-label">Counties Reached</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================
          MISSION & VISION
          ================================ */}
      <section className="about-mission">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-image-wrapper">
              <img src={missionImage} alt="Our Mission" />
            </div>
            <div className="mission-content">
              <div className="mission-block">
                <div className="mission-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="12 6 12 12 16 10" />
                  </svg>
                </div>
                <h3>Our Mission</h3>
                <p>
                  To provide an immersive hospitality experience that
                  celebrates indigenous Kenyan food heritage, promotes
                  biodiversity conservation, and creates meaningful
                  connections between people, nature, and culture.
                </p>
              </div>

              <div className="mission-block">
                <div className="mission-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3>Our Vision</h3>
                <p>
                  To become East Africa's leading heritage retreat — a
                  destination where indigenous knowledge is preserved,
                  shared, and celebrated through exceptional hospitality,
                  culinary excellence, and immersive cultural experiences.
                </p>
              </div>

              <div className="mission-block">
                <div className="mission-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <h3>Our Philosophy</h3>
                <p>
                  We believe that the best way to preserve culture is to
                  share it generously. Every meal we serve, every tour we
                  guide, and every room we prepare is an invitation to
                  experience the beauty and wisdom of indigenous Kenya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================
          CORE VALUES
          ================================ */}
      <section className="about-values">
        <div className="container">
          <div className="values-header">
            <span className="section-tag">What We Stand For</span>
            <h2>Our Core Values</h2>
            <p>
              These principles guide everything we do — from how we grow
              our food to how we welcome our guests.
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-number">01</div>
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>Cultural Authenticity</h3>
              <p>
                We honour and celebrate indigenous Kenyan traditions in
                everything we do — from our architecture and cuisine to
                our experiences and hospitality.
              </p>
            </div>

            <div className="value-card">
              <div className="value-number">02</div>
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2 22l1-2h18l1 2M2 2h20v14H2z" />
                  <path d="M9 18h6" />
                  <path d="M12 14v4" />
                </svg>
              </div>
              <h3>Biodiversity Conservation</h3>
              <p>
                We actively protect and promote indigenous seed varieties,
                ensuring that Kenya's agricultural heritage thrives for
                generations to come.
              </p>
            </div>

            <div className="value-card">
              <div className="value-number">03</div>
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3>Community Empowerment</h3>
              <p>
                We work hand-in-hand with local farmers, artisans, and
                communities to create economic opportunities and preserve
                traditional knowledge.
              </p>
            </div>

            <div className="value-card">
              <div className="value-number">04</div>
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                </svg>
              </div>
              <h3>Sustainable Hospitality</h3>
              <p>
                Every aspect of our operation — from energy use to waste
                management — is designed to minimize environmental impact
                and maximize positive community outcomes.
              </p>
            </div>

            <div className="value-card">
              <div className="value-number">05</div>
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                  <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </svg>
              </div>
              <h3>Knowledge Sharing</h3>
              <p>
                We believe in the power of education. Every guest leaves
                with a deeper understanding of indigenous food systems,
                biodiversity, and sustainable living.
              </p>
            </div>

            <div className="value-card">
              <div className="value-number">06</div>
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>Warm Hospitality</h3>
              <p>
                Genuine Kenyan warmth defines every interaction. Our guests
                arrive as visitors and leave as family, carrying memories
                that last a lifetime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================
          OUR HERITAGE SECTION
          ================================ */}
      <section className="about-heritage">
        <div className="container">
          <div className="heritage-header">
            <span className="section-tag">Our Heritage</span>
            <h2>The Indigenous Difference</h2>
            <p>
              What sets Indigenous Seeds Village apart is our deep connection
              to the land, the seeds, and the traditions that have sustained
              Kenyan communities for centuries.
            </p>
          </div>

          <div className="heritage-grid">
            <div className="heritage-card">
              <div className="heritage-card-image">
                <img src={heritage1} alt="Indigenous Seeds" />
              </div>
              <div className="heritage-card-content">
                <h3>Living Seed Bank</h3>
                <p>
                  Our grounds are home to a living collection of indigenous
                  seeds — vegetables, grains, legumes, and fruits that have
                  been cultivated in Kenya for generations. Guests can tour
                  the seed bank and learn about each variety's unique
                  properties, culinary uses, and cultural significance.
                </p>
              </div>
            </div>

            <div className="heritage-card">
              <div className="heritage-card-image">
                <img src={heritage2} alt="Traditional Architecture" />
              </div>
              <div className="heritage-card-content">
                <h3>Traditional Architecture</h3>
                <p>
                  Our buildings draw inspiration from traditional Kenyan
                  architecture, using locally sourced materials and
                  time-tested design principles. Each structure tells a
                  story of place, people, and purpose — creating spaces
                  that feel both timeless and deeply comfortable.
                </p>
              </div>
            </div>

            <div className="heritage-card">
              <div className="heritage-card-image">
                <img src={heritage3} alt="Cultural Experiences" />
              </div>
              <div className="heritage-card-content">
                <h3>Cultural Immersion</h3>
                <p>
                  From traditional cooking demonstrations to evening
                  storytelling sessions around the fire, we create
                  opportunities for guests to connect with Kenya's
                  rich cultural heritage in meaningful, memorable ways.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================
          SUSTAINABILITY SECTION
          ================================ */}
      <section className="about-sustainability">
        <div className="container">
          <div className="sustainability-grid">
            <div className="sustainability-content">
              <span className="section-tag">Our Commitment</span>
              <h2>Sustainability at Our Core</h2>
              <p>
                Sustainability is not an afterthought — it is woven into the
                very fabric of Indigenous Seeds Village. Every decision we
                make is guided by our responsibility to the environment, our
                community, and future generations.
              </p>

              <div className="sustainability-list">
                <div className="sustainability-item">
                  <div className="sustainability-icon">🌱</div>
                  <div>
                    <h4>Organic Farming</h4>
                    <p>
                      All food served in our restaurant is grown organically
                      on-site or sourced from partner farmers in our network.
                    </p>
                  </div>
                </div>

                <div className="sustainability-item">
                  <div className="sustainability-icon">☀️</div>
                  <div>
                    <h4>Renewable Energy</h4>
                    <p>
                      Solar panels provide the majority of our energy needs,
                      reducing our carbon footprint significantly.
                    </p>
                  </div>
                </div>

                <div className="sustainability-item">
                  <div className="sustainability-icon">💧</div>
                  <div>
                    <h4>Water Conservation</h4>
                    <p>
                      Rainwater harvesting systems and water-efficient
                      fixtures ensure responsible water use throughout
                      the property.
                    </p>
                  </div>
                </div>

                <div className="sustainability-item">
                  <div className="sustainability-icon">♻️</div>
                  <div>
                    <h4>Zero Waste Goals</h4>
                    <p>
                      We compost organic waste, recycle extensively, and
                      minimize single-use plastics across all operations.
                    </p>
                  </div>
                </div>

                <div className="sustainability-item">
                  <div className="sustainability-icon">🤝</div>
                  <div>
                    <h4>Fair Employment</h4>
                    <p>
                      Over 90% of our team members are from surrounding
                      communities, and we pay above-market wages with
                      comprehensive benefits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sustainability-image">
              <img src={sustainabilityImg} alt="Sustainability" />
              <div className="sustainability-badge">
                <span>Eco-Friendly</span>
                <span>Retreat</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================
          WHY CHOOSE US
          ================================ */}
      <section className="about-why">
        <div className="container">
          <div className="why-header">
            <span className="section-tag">Why Indigenous Seeds Village</span>
            <h2>More Than Just a Stay</h2>
            <p>
              When you choose Indigenous Seeds Village, you're choosing an
              experience that nourishes the body, mind, and spirit.
            </p>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </div>
              <h3>Farm-to-Table Dining</h3>
              <p>
                Every meal tells a story. Our ingredients travel mere meters
                from garden to kitchen, ensuring unparalleled freshness and
                flavour.
              </p>
            </div>

            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="4" />
                  <path d="M3 9h18" />
                  <path d="M9 21V9" />
                </svg>
              </div>
              <h3>Purposeful Design</h3>
              <p>
                Spaces designed to connect you with nature — from sunlit
                rooms to open-air dining areas surrounded by indigenous
                gardens.
              </p>
            </div>

            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3>Learning Experiences</h3>
              <p>
                Leave with more than memories — gain knowledge about
                indigenous foods, sustainable farming, and cultural
                traditions.
              </p>
            </div>

            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>Peaceful Sanctuary</h3>
              <p>
                Escape the noise of modern life. Our location near Lake
                Elementaita offers tranquility, fresh air, and stunning
                natural beauty.
              </p>
            </div>

            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3>Rich Biodiversity</h3>
              <p>
                Our grounds are a haven for birds, butterflies, and native
                plants — a living ecosystem that delights nature lovers
                of all ages.
              </p>
            </div>

            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <h3>Impactful Stay</h3>
              <p>
                Your visit directly supports seed conservation, community
                empowerment, and the preservation of Kenya's agricultural
                heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================
          TESTIMONIAL PREVIEW
          ================================ */}
      <section className="about-testimonial">
        <div className="container">
          <div className="testimonial-quote">
            <div className="quote-mark">"</div>
            <blockquote>
              Indigenous Seeds Village is not just a place to stay — it is
              a place to learn, to grow, and to reconnect with what truly
              matters. Our guests leave with full hearts, inspired minds,
              and a deep appreciation for Kenya's indigenous heritage.
            </blockquote>
            <div className="quote-author">
              <span className="quote-name">— The Indigenous Seeds Village Family</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================================
          CTA SECTION
          ================================ */}
      <section className="about-cta">
        <div className="container">
          <div className="about-cta-content">
            <h2>Experience It For Yourself</h2>
            <p>
              Come and discover why Indigenous Seeds Village is more than
              a destination — it is a journey into the heart of Kenya's
              natural and cultural heritage.
            </p>
            <div className="about-cta-buttons">
              <Link to="/booking" className="about-cta-primary">
                Book Your Stay
              </Link>
              <Link to="/contact" className="about-cta-secondary">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;