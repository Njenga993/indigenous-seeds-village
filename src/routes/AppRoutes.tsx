import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Accommodation from "../pages/Accommodation/Accommodation";
import Restaurant from "../pages/Restaurant/Restaurant";
import Experiences from "../pages/Experiences/Experiences";
import Conference from "../pages/Conference/Conference";
import Gallery from "../pages/Gallery/Gallery";
//import Events from "../pages/Events/Events";
import Contact from "../pages/Contact/Contact";
import Booking from "../pages/Booking/Booking";
import NotFound from "../pages/NotFound/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/accommodation" element={<Accommodation />} />
      <Route path="/restaurant" element={<Restaurant />} />
      <Route path="/experiences" element={<Experiences />} />
      <Route path="/conference" element={<Conference />} />
      <Route path="/gallery" element={<Gallery />} />
      {/* <Route path="/events" element={<Events />} /> */}
      <Route path="/contact" element={<Contact />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;