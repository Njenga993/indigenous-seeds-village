import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "./RoomModal.css";

interface RoomImage {
  src: string;
  alt: string;
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

interface RoomModalProps {
  room: Room | null;
  isOpen: boolean;
  onClose: () => void;
}

const RoomModal = ({ room, isOpen, onClose }: RoomModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && room) {
        setCurrentImageIndex((prev) =>
          prev < room.images.length - 1 ? prev + 1 : 0
        );
      }
      if (e.key === "ArrowLeft" && room) {
        setCurrentImageIndex((prev) =>
          prev > 0 ? prev - 1 : room.images.length - 1
        );
      }
    },
    [onClose, room]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [room]);

  if (!isOpen || !room) return null;

  const nextImage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentImageIndex((prev) =>
      prev < room.images.length - 1 ? prev + 1 : 0
    );
    setTimeout(() => setIsAnimating(false), 400);
  };

  const prevImage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentImageIndex((prev) =>
      prev > 0 ? prev - 1 : room.images.length - 1
    );
    setTimeout(() => setIsAnimating(false), 400);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="modal-body">
          {/* Image Gallery */}
          <div className="modal-gallery">
            <div className="modal-image-wrapper">
              <img
                src={room.images[currentImageIndex].src}
                alt={room.images[currentImageIndex].alt}
                className={isAnimating ? "image-transitioning" : ""}
              />
              {room.images.length > 1 && (
                <>
                  <button
                    className="gallery-arrow gallery-prev"
                    onClick={prevImage}
                    aria-label="Previous image"
                  >
                    ‹
                  </button>
                  <button
                    className="gallery-arrow gallery-next"
                    onClick={nextImage}
                    aria-label="Next image"
                  >
                    ›
                  </button>
                  <div className="gallery-counter">
                    {currentImageIndex + 1} / {room.images.length}
                  </div>
                  <div className="gallery-dots">
                    {room.images.map((_, i) => (
                      <button
                        key={i}
                        className={`gallery-dot ${
                          i === currentImageIndex ? "gallery-dot-active" : ""
                        }`}
                        onClick={() => setCurrentImageIndex(i)}
                        aria-label={`Go to image ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="modal-details">
            <div className="modal-header">
              <span className="modal-badge">
                {room.totalRooms} Room{room.totalRooms > 1 ? "s" : ""} Available
              </span>
              <h2>{room.name}</h2>
              <p className="modal-tagline">{room.tagline}</p>
            </div>

            <p className="modal-description">{room.longDescription}</p>

            {/* Quick Info */}
            <div className="modal-quick-info">
              <div className="modal-info-item">
                <span className="modal-info-label">Bed Type</span>
                <span className="modal-info-value">{room.bedType}</span>
              </div>
              <div className="modal-info-item">
                <span className="modal-info-label">Capacity</span>
                <span className="modal-info-value">{room.capacity}</span>
              </div>
              <div className="modal-info-item">
                <span className="modal-info-label">Room Size</span>
                <span className="modal-info-value">{room.size}</span>
              </div>
              <div className="modal-info-item">
                <span className="modal-info-label">View</span>
                <span className="modal-info-value">{room.view}</span>
              </div>
            </div>

            {/* Highlights */}
            <div className="modal-highlights">
              <h4>Room Highlights</h4>
              <ul>
                {room.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>

            {/* Amenities */}
            <div className="modal-amenities">
              <h4>Amenities & Features</h4>
              <div className="modal-amenities-grid">
                {room.amenities.map((amenity, i) => (
                  <span key={i} className="modal-amenity-tag">
                    ✓ {amenity}
                  </span>
                ))}
              </div>
            </div>

            {/* Price & Booking */}
            <div className="modal-footer">
              <div className="modal-price">
                <span className="modal-price-amount">{room.price}</span>
                <span className="modal-price-period">per night</span>
              </div>
              <Link
                to="/booking"
                className="modal-book-btn"
                onClick={onClose}
              >
                Book This Room
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomModal;