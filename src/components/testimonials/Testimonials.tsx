import { useState, useEffect, useCallback } from "react";
import "./Testimonials.css";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  stayDate: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jane Muthoni",
    location: "Nairobi, Kenya",
    rating: 5,
    text: "An incredible retreat surrounded by nature. The indigenous cuisine was absolutely unforgettable. I learned so much about traditional seeds and farming practices. Will definitely return!",
    stayDate: "March 2025",
    avatar: "JM",
  },
  {
    id: 2,
    name: "David Kimani",
    location: "Mombasa, Kenya",
    rating: 5,
    text: "We hosted our team building here and it exceeded all expectations. The conference facilities are world-class, and the farm-to-table dining experience was exceptional.",
    stayDate: "February 2025",
    avatar: "DK",
  },
  {
    id: 3,
    name: "Sarah Achieng",
    location: "Kisumu, Kenya",
    rating: 5,
    text: "The seed conservation tour opened my eyes to the importance of indigenous biodiversity. Beautiful rooms, warm hospitality, and the bird watching was spectacular!",
    stayDate: "January 2025",
    avatar: "SA",
  },
  {
    id: 4,
    name: "Michael Ochieng",
    location: "Eldoret, Kenya",
    rating: 5,
    text: "A hidden gem! The cultural evening was the highlight of our stay. Authentic food, beautiful surroundings, and such knowledgeable staff. Perfect for a peaceful getaway.",
    stayDate: "April 2025",
    avatar: "MO",
  },
  {
    id: 5,
    name: "Grace Wanjiku",
    location: "Nakuru, Kenya",
    rating: 5,
    text: "The farm experiences were so enriching. My children loved learning about indigenous vegetables and traditional cooking. A perfect family retreat with purpose.",
    stayDate: "March 2025",
    avatar: "GW",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const totalSlides = testimonials.length;

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 600);
    },
    [isTransitioning]
  );

  const nextSlide = useCallback(() => {
    goToSlide((current + 1) % totalSlides);
  }, [current, totalSlides, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((current - 1 + totalSlides) % totalSlides);
  }, [current, totalSlides, goToSlide]);

  // Auto-play with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? "star filled" : "star"}>
        ★
      </span>
    ));
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-heading">
          <span>Guest Experiences</span>
          <h2>What Our Visitors Say</h2>
        </div>
       
        <div
          className="testimonials-carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow prev-arrow"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <svg
              className="arrow-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            className="carousel-arrow next-arrow"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <svg
              className="arrow-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Google Rating Badge */}
          <div className="google-badge">
            <div className="google-icon">
              <span className="g-blue">G</span>
              <span className="g-red">o</span>
              <span className="g-yellow">o</span>
              <span className="g-blue">g</span>
              <span className="g-green">l</span>
              <span className="g-red">e</span>
            </div>
            <span className="google-text">Reviews</span>
            <span className="verified-check">✓</span>
            <div className="rating-summary">
              <span className="avg-rating">5.0</span>
              <span className="review-count">
                ★★★★★
              </span>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="testimonials-track">
            {testimonials.map((testimonial, index) => {
              let position = "next";

              if (index === current) {
                position = "active";
              } else if (
                index ===
                (current - 1 + totalSlides) % totalSlides
              ) {
                position = "prev";
              }

              return (
                <div
                  key={testimonial.id}
                  className={`testimonial-card ${position}`}
                >
                  {/* Accent Bar */}
                  <div className="card-accent-bar" />

                  <div className="card-body">
                    {/* Decorative Quote */}
                    <div className="card-quote-mark">"</div>

                    {/* Stars */}
                    <div className="testimonial-stars">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Review Text */}
                    <p className="testimonial-text">
                      {testimonial.text}
                    </p>

                    {/* Author */}
                    <div className="testimonial-author">
                      <div className="author-avatar">
                        {testimonial.avatar}
                      </div>
                      <div className="author-info">
                        <h4>{testimonial.name}</h4>
                        <span className="author-location">
                          {testimonial.location}
                        </span>
                        <span className="stay-date">
                          Stayed {testimonial.stayDate}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots */}
          <div className="carousel-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={
                  index === current
                    ? "dot active-dot"
                    : "dot"
                }
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;