import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/navbar/Navbar";
import BackToTop from "./components/backtotop/BackToTop";
import WhatsAppButton from "./components/whatsapp/whatsAppButton";
import Loader from "./components/loader/Loader";
import Footer from "./components/footer/Footer";

function App() {
  return (
      <HelmetProvider>
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <BackToTop />
      <WhatsAppButton />
      <Loader />
      <Footer />
    </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;