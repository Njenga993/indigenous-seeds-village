import { useState, useEffect } from "react";
import "./Loader.css";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Hide loader after page loads
    const handleLoad = () => {
      setTimeout(() => {
        setIsFadingOut(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 600); // Match CSS transition duration
      }, 500); // Small delay for smooth feel
    };

    // Check if page is already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div className={`loader-overlay ${isFadingOut ? "loader-fade-out" : ""}`}>
      <div className="loader-content">
        {/* Logo / Brand */}
        <div className="loader-brand">
          <h1 className="loader-logo">ISV</h1>
          <span className="loader-tagline">Indigenous Seeds Village</span>
        </div>

        {/* Spinner */}
        <div className="loader-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring spinner-ring-inner"></div>
        </div>

        {/* Loading text */}
        <p className="loader-text">Preparing your experience...</p>

        {/* Decorative leaves 
        <div className="loader-leaves">
          <span className="leaf leaf-1">🌿</span>
          <span className="leaf leaf-2">🌱</span>
          <span className="leaf leaf-3">🍃</span>
        </div>*/}
      </div>
    </div>
  );
};

export default Loader;