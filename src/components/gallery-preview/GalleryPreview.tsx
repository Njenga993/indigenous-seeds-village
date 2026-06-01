import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./GalleryPreview.css";

import gallery1 from "../../assets/images/SSN_up.webp";
import gallery2 from "../../assets/images/SSN_bed.webp";
import gallery3 from "../../assets/images/SSN_insert.webp";
import gallery4 from "../../assets/images/SSN_garden.webp";
import gallery5 from "../../assets/images/SSN_shoes.webp";
import gallery6 from "../../assets/images/SSN_seeds.webp";
import gallery7 from "../../assets/images/SSN_truck.webp";
import gallery8 from "../../assets/images/SSN_avocado.webp";

const galleryImages = [
  { src: gallery1, alt: "Indigenous Seeds Village View", large: true },
  { src: gallery2, alt: "Accommodation Interior" },
  { src: gallery3, alt: "Restaurant Dining" },
  { src: gallery4, alt: "Nature Surroundings", large: true },
  { src: gallery5, alt: "Garden Landscape" },
  { src: gallery6, alt: "Sunset View" },
  { src: gallery7, alt: "Cultural Experience", large: true },
  { src: gallery8, alt: "Farm Fresh Produce" },
];

const GalleryPreview = () => {
  const [visibleImages, setVisibleImages] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            galleryImages.forEach((_, index) => {
              setTimeout(() => {
                setVisibleImages((prev) => [...prev, index]);
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="gallery-preview" ref={sectionRef}>
      <div className="container">
        <div className="gallery-heading">
          <span>Our Gallery</span>
          <h2>A Glimpse of Indigenous Seeds Village</h2>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`gallery-item ${
                image.large ? "gallery-large" : ""
              } ${
                visibleImages.includes(index) ? "gallery-visible" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
              />
              <div className="gallery-item-overlay">
                <span>{image.alt}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-action">
          <Link to="/gallery" className="gallery-btn">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;