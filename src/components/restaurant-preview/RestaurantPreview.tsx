import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./RestaurantPreview.css";

import food1 from "../../assets/images/SSN_dinning_table.webp";
import food2 from "../../assets/images/SSN_restuarant.webp";
import food3 from "../../assets/images/SSN_insert.webp";
import food4 from "../../assets/images/SSN_din.webp";

const images = [
  food1,
  food2,
  food3,
  food4,
];

const RestaurantPreview = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(
        (prev) => (prev + 1) % images.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="restaurant-preview">
      <div className="container restaurant-container">

        <div className="restaurant-carousel">

          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Restaurant ${index + 1}`}
              className={
                index === current
                  ? "carousel-image active"
                  : "carousel-image"
              }
            />
          ))}

          <div className="carousel-dots">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={
                  index === current
                    ? "dot active-dot"
                    : "dot"
                }
              />
            ))}
          </div>

        </div>

        <div className="restaurant-content">

          <span className="restaurant-tag">
            Taste Indigenous Cuisine
          </span>

          <h2>
            Farm-to-Table Dining
            Inspired by Heritage
          </h2>

          <p>
            Discover authentic flavours crafted from
            indigenous vegetables, traditional grains,
            and locally sourced ingredients.
            Every meal celebrates Kenya's agricultural
            heritage while delivering a memorable
            culinary experience.
          </p>

          <div className="restaurant-features">
            <div className="feature-item">
              ✓ Indigenous Vegetables
            </div>

            <div className="feature-item">
              ✓ Traditional Recipes
            </div>

            <div className="feature-item">
              ✓ Organic Ingredients
            </div>

            <div className="feature-item">
              ✓ Seasonal Menus
            </div>
          </div>

          <Link
            to="/restaurant"
            className="restaurant-btn"
          >
            Explore Restaurant
          </Link>

        </div>

      </div>
    </section>
  );
};

export default RestaurantPreview;