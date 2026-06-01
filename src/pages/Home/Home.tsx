import Hero from "../../components/hero/Hero";
import AboutPreview from "../../components/about-preview/AboutPreview";
import AccommodationPreview from "../../components/accommodation-preview/AccommodationPreview";
import RestaurantPreview from "../../components/restaurant-preview/RestaurantPreview";
import ExperiencesPreview from "../../components/experiences-preview/ExperiencesPreview";
import ConferencePreview from "../../components/conference-preview/ConferencePreview";
import GalleryPreview from "../../components/gallery-preview/GalleryPreview";
import Testimonials from "../../components/testimonials/Testimonials";
import BookingCTA from "../../components/booking-cta/BookingCTA";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutPreview />
      <AccommodationPreview />
      <RestaurantPreview />
      <ExperiencesPreview />
      <ConferencePreview />
      <GalleryPreview />
      <Testimonials />
      <BookingCTA />
      <Footer />
    </>
  );
};

export default Home;