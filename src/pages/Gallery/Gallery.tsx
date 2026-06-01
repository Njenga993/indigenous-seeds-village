import { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet-async";

import "./Gallery.css";

// Import all gallery images
import gallery1 from "../../assets/images/SSN_cottage.webp";
import gallery2 from "../../assets/images/SSN_bed.webp";
import gallery3 from "../../assets/images/SSN_room.webp";
import gallery4 from "../../assets/images/SSN_red.webp";
import gallery5 from "../../assets/images/SSN_insert.webp";
import gallery6 from "../../assets/images/SSN_din.webp";
import gallery7 from "../../assets/images/SSN_dinning_table.webp";
import gallery8 from "../../assets/images/SSN_restuarant.webp";
import gallery9 from "../../assets/images/SSN_garden.webp";
import gallery10 from "../../assets/images/SSN_shoes.webp";
import gallery11 from "../../assets/images/SSN_room_out.webp";
import gallery12 from "../../assets/images/SSN_seeds.webp";
import gallery13 from "../../assets/images/SSN_hall.webp";
import gallery14 from "../../assets/images/SSN_seats.webp";
import gallery15 from "../../assets/images/SSN_tables.webp";
import gallery16 from "../../assets/images/SSN_hall.webp";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  // Accommodation
  { id: 1, src: gallery1, alt: "Family Cottage at Indigenous Seeds Village Gilgil — heritage retreat accommodation", category: "accommodation" },
  { id: 2, src: gallery2, alt: "Standard Double Room interior — eco-friendly hotel room near Lake Elementaita", category: "accommodation" },
  { id: 3, src: gallery3, alt: "Cozy guest room with garden views at Indigenous Seeds Village Nakuru County", category: "accommodation" },
  { id: 4, src: gallery4, alt: "Executive Suite bedroom — luxury accommodation Gilgil Kenya", category: "accommodation" },

  // Restaurant & Cuisine
  { id: 5, src: gallery5, alt: "Indigenous cuisine platter — traditional Kenyan food at Indigenous Seeds Village", category: "restaurant" },
  { id: 6, src: gallery6, alt: "Farm-to-table dining experience — organic restaurant Gilgil Nakuru County", category: "restaurant" },
  { id: 7, src: gallery7, alt: "Outdoor dining terrace surrounded by indigenous gardens near Lake Elementaita", category: "restaurant" },
  { id: 8, src: gallery8, alt: "Traditional cooking experience — indigenous food workshop Kenya", category: "restaurant" },

  // Nature & Gardens
  { id: 9, src: gallery9, alt: "Indigenous gardens at sunrise — eco-retreat surroundings Gilgil Kenya", category: "nature" },
  { id: 10, src: gallery10, alt: "Seed bank collection — indigenous seed conservation at Seed Savers Network Kenya", category: "nature" },
  { id: 11, src: gallery11, alt: "Scenic Lake Elementaita view from Indigenous Seeds Village Nakuru County", category: "nature" },
  { id: 12, src: gallery12, alt: "Bird watching paradise — diverse bird species at Lake Elementaita UNESCO site", category: "nature" },

  // Conference & Events
  { id: 13, src: gallery13, alt: "Main Conference Hall setup — corporate event venue Gilgil Nakuru County", category: "conference" },
  { id: 14, src: gallery14, alt: "Conference seating arrangement — meeting space near Lake Elementaita", category: "conference" },
  { id: 15, src: gallery15, alt: "Outdoor meeting space — garden conference venue Indigenous Seeds Village", category: "conference" },
  { id: 16, src: gallery16, alt: "Team building activity space — corporate retreat venue Nakuru Kenya", category: "conference" },
];

const categories = [
  { id: "all", label: "All" },
  { id: "accommodation", label: "Accommodation" },
  { id: "restaurant", label: "Restaurant & Cuisine" },
  { id: "nature", label: "Nature & Gardens" },
  { id: "conference", label: "Conference & Events" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<number[]>([]);

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(
        galleryImages.filter((img) => img.category === activeCategory)
      );
    }
  }, [activeCategory]);

  useEffect(() => {
    setLoadedImages([]);
    filteredImages.forEach((_, index) => {
      setTimeout(() => {
        setLoadedImages((prev) => [...prev, index]);
      }, index * 80);
    });
  }, [filteredImages]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };

  const navigateLightbox = useCallback(
    (direction: "prev" | "next") => {
      if (direction === "prev") {
        setLightboxIndex((prev) =>
          prev > 0 ? prev - 1 : filteredImages.length - 1
        );
      } else {
        setLightboxIndex((prev) =>
          prev < filteredImages.length - 1 ? prev + 1 : 0
        );
      }
    },
    [filteredImages.length]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") navigateLightbox("next");
      if (e.key === "ArrowLeft") navigateLightbox("prev");
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, navigateLightbox]);

  // Gallery Page Schema
  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Indigenous Seeds Village Photo Gallery",
    description:
      "Explore our photo gallery showcasing the beauty of Indigenous Seeds Village — accommodation, restaurant, indigenous gardens, conference facilities, and Lake Elementaita views in Gilgil, Nakuru County.",
    url: "https://village.seedfoodculturetourism.org/gallery",
    about: {
      "@type": "Hotel",
      name: "Indigenous Seeds Village",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Gilgil",
        addressRegion: "Nakuru County",
        addressCountry: "KE",
      },
    },
    hasPart: galleryImages.map((img) => ({
      "@type": "Photograph",
      name: img.alt,
      url: `https://village.seedfoodculturetourism.org/gallery#image-${img.id}`,
    })),
  };

  return (
    <>
      {/* ================================
          COMPREHENSIVE SEO
          ================================ */}
      <Helmet>
        {/* Primary Meta Tags */}
        <title>
          Photo Gallery | Indigenous Seeds Village — Gilgil, Nakuru County
        </title>
        <meta
          name="description"
          content="Explore our photo gallery showcasing Indigenous Seeds Village near Lake Elementaita, Gilgil. Browse 16 images of our accommodation, farm-to-table restaurant, indigenous gardens, conference facilities, and scenic views in Nakuru County, Kenya."
        />
        <meta
          name="keywords"
          content="Indigenous Seeds Village photos, hotel gallery Gilgil, Lake Elementaita hotel images, Nakuru County accommodation pictures, eco-lodge Kenya photos, heritage retreat gallery, indigenous gardens photos, conference venue images Gilgil, Kenyan hotel photo gallery, farm-to-table restaurant pictures Kenya"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large" />

        {/* Geographic Tags */}
        <meta name="geo.region" content="KE-31" />
        <meta name="geo.placename" content="Gilgil, Nakuru County, Kenya" />
        <meta name="geo.position" content="-0.5036;36.3188" />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://village.seedfoodculturetourism.org/gallery"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Photo Gallery | Indigenous Seeds Village — Gilgil, Nakuru County"
        />
        <meta
          property="og:description"
          content="Browse our photo gallery showcasing accommodation, restaurant, gardens, conference facilities, and Lake Elementaita views at Indigenous Seeds Village."
        />
        <meta
          property="og:url"
          content="https://village.seedfoodculturetourism.org/gallery"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://village.seedfoodculturetourism.org/og-image.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Indigenous Seeds Village" />
        <meta property="og:locale" content="en_KE" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Photo Gallery | Indigenous Seeds Village — Gilgil, Nakuru County"
        />
        <meta
          name="twitter:description"
          content="Browse our photo gallery — accommodation, restaurant, gardens & conference facilities at Indigenous Seeds Village."
        />
        <meta
          name="twitter:image"
          content="https://village.seedfoodculturetourism.org/og-image.jpg"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(gallerySchema)}
        </script>
      </Helmet>

      

      {/* ================================
          HERO SECTION
          ================================ */}
      <section className="gallery-hero">
        <div className="gallery-hero-bg" />
        <div className="gallery-hero-overlay" />
        <div className="container gallery-hero-content">
          <span className="gallery-hero-tag">Visual Journey</span>
          <h1>Our Gallery</h1>
          <p>
            Explore the beauty of Indigenous Seeds Village through our curated
            collection of images — from serene accommodation spaces to vibrant
            gardens, exquisite cuisine, and memorable events.
          </p>
        </div>
      </section>

      {/* ================================
          CATEGORY FILTER
          ================================ */}
      <section className="gallery-filter">
        <div className="container">
          <div className="filter-bar">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${
                  activeCategory === category.id ? "filter-btn-active" : ""
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
          <div className="filter-count">
            <span>{filteredImages.length} images</span>
          </div>
        </div>
      </section>

      {/* ================================
          GALLERY GRID
          ================================ */}
      <section className="gallery-grid-section">
        <div className="container">
          {filteredImages.length === 0 ? (
            <div className="gallery-empty">
              <p>No images found in this category.</p>
            </div>
          ) : (
            <div className="gallery-masonry">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  id={`image-${image.id}`}
                  className={`gallery-item ${
                    index % 5 === 0 || index % 7 === 0 ? "gallery-item-large" : ""
                  } ${index % 3 === 0 ? "gallery-item-tall" : ""} ${
                    loadedImages.includes(index) ? "gallery-item-visible" : ""
                  }`}
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                  />
                  <div className="gallery-item-overlay">
                    <div className="gallery-item-info">
                      <span className="gallery-item-category">
                        {categories.find((c) => c.id === image.category)?.label}
                      </span>
                      <h4>{image.alt}</h4>
                    </div>
                    <div className="gallery-item-zoom">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        <line x1="11" y1="8" x2="11" y2="14" />
                        <line x1="8" y1="11" x2="14" y2="11" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ================================
          CTA SECTION
          ================================ */}
      <section className="gallery-cta">
        <div className="container">
          <div className="gallery-cta-content">
            <h2>Want to Experience This in Person?</h2>
            <p>
              Pictures tell a story, but being here is something else entirely.
              Book your stay and create your own memories at Indigenous Seeds Village.
            </p>
            <div className="gallery-cta-buttons">
              <a href="/booking" className="gallery-cta-primary">
                Book Your Stay
              </a>
              <a href="/contact" className="gallery-cta-secondary">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================================
          LIGHTBOX
          ================================ */}
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close lightbox">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <button
              className="lightbox-arrow lightbox-prev"
              onClick={() => navigateLightbox("prev")}
              aria-label="Previous image"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <button
              className="lightbox-arrow lightbox-next"
              onClick={() => navigateLightbox("next")}
              aria-label="Next image"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            <div className="lightbox-image-wrapper">
              <img
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].alt}
              />
            </div>

            <div className="lightbox-info">
              <h3>{filteredImages[lightboxIndex].alt}</h3>
              <span className="lightbox-category">
                {
                  categories.find(
                    (c) => c.id === filteredImages[lightboxIndex].category
                  )?.label
                }
              </span>
              <span className="lightbox-counter">
                {lightboxIndex + 1} / {filteredImages.length}
              </span>
            </div>
          </div>
        </div>
      )}

      
    </>
  );
};

export default Gallery;