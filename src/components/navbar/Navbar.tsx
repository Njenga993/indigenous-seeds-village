import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logos/logo.jpeg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`navbar ${
          scrolled ? "navbar-scrolled" : ""
        }`}
      >
        <div className="container navbar-container">

          {/* Logo */}
          <Link to="/" className="navbar-logo">
  <img src={logo} alt="logo" />
</Link>

          {/* Desktop Menu */}
          <nav className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/accommodation">Accommodation</Link>
            <Link to="/restaurant">Restaurant</Link>
            <Link to="/experiences">Experiences</Link>
            <Link to="/conference">Conference</Link>
            <Link to="/gallery">Gallery</Link>
            {/* <Link to="/events">Events</Link> */}
            <Link to="/contact">Contact</Link>
          </nav>

          {/* CTA */}
          <button className="book-btn" onClick={() => window.location.href = "/booking"}>
            Book Now
          </button>

          {/* Mobile Toggle */}
          <div
            className={`hamburger ${
              mobileMenu ? "active" : ""
            }`}
            onClick={() =>
              setMobileMenu(!mobileMenu)
            }
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`mobile-overlay ${
          mobileMenu ? "show" : ""
        }`}
        onClick={() => setMobileMenu(false)}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${
          mobileMenu ? "open" : ""
        }`}
      >
        <Link to="/" onClick={() => setMobileMenu(false)}>
          Home
        </Link>

        <Link to="/about" onClick={() => setMobileMenu(false)}>
          About
        </Link>

        <Link
          to="/accommodation"
          onClick={() => setMobileMenu(false)}
        >
          Accommodation
        </Link>

        <Link
          to="/restaurant"
          onClick={() => setMobileMenu(false)}
        >
          Restaurant
        </Link>

        <Link
          to="/experiences"
          onClick={() => setMobileMenu(false)}
        >
          Experiences
        </Link>

        <Link
          to="/conference"
          onClick={() => setMobileMenu(false)}
        >
          Conference
        </Link>

        <Link
          to="/gallery"
          onClick={() => setMobileMenu(false)}
        >
          Gallery
        </Link>

        <Link
          to="/events"
          onClick={() => setMobileMenu(false)}
        >
          Events
        </Link>

        <Link
          to="/contact"
          onClick={() => setMobileMenu(false)}
        >
          Contact
        </Link>

        <button className="mobile-book-btn" onClick={() => window.location.href = "/booking"}>
          Book Now
        </button>
      </div>
    </>
  );
};

export default Navbar;