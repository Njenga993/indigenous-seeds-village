import { Helmet } from "react-helmet-async";
import Hero from "../../components/hero/Hero";
import AboutPreview from "../../components/about-preview/AboutPreview";
import AccommodationPreview from "../../components/accommodation-preview/AccommodationPreview";
import RestaurantPreview from "../../components/restaurant-preview/RestaurantPreview";
import ExperiencesPreview from "../../components/experiences-preview/ExperiencesPreview";
import ConferencePreview from "../../components/conference-preview/ConferencePreview";
import GalleryPreview from "../../components/gallery-preview/GalleryPreview";
import Testimonials from "../../components/testimonials/Testimonials";
import BookingCTA from "../../components/booking-cta/BookingCTA";

const Home = () => {
  // Homepage Schema
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "@id": "https://village.seedfoodculturetourism.org/#hotel",
    name: "Indigenous Seeds Village",
    description:
      "Experience authentic Kenyan hospitality at Indigenous Seeds Village, a premier heritage retreat near Lake Elementaita in Gilgil, Nakuru County. Offering 15 eco-friendly rooms, indigenous cuisine, conference facilities, and cultural experiences rooted in Kenya's rich heritage. Book your stay today.",
    url: "https://village.seedfoodculturetourism.org",
    telephone: "+254712451777",
    email: "info@seedfoodculturetourism.org",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Off Nakuru-Nairobi Highway, Near Lake Elementaita",
      addressLocality: "Gilgil",
      addressRegion: "Nakuru County",
      addressCountry: "KE",
      postalCode: "20166",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -0.5036,
      longitude: 36.3188,
    },
    image: "https://village.seedfoodculturetourism.org/og-image.jpg",
    priceRange: "KSh 6,500 - KSh 18,000",
    checkinTime: "12:00",
    checkoutTime: "10:00",
    starRating: {
      "@type": "Rating",
      ratingValue: "4.8",
      bestRating: "5",
      reviewCount: "45",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "45",
      bestRating: "5",
    },
    numberOfRooms: "15",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free WiFi" },
      { "@type": "LocationFeatureSpecification", name: "Farm-to-Table Restaurant" },
      { "@type": "LocationFeatureSpecification", name: "Conference Facilities" },
      { "@type": "LocationFeatureSpecification", name: "Free Parking" },
      { "@type": "LocationFeatureSpecification", name: "Indigenous Gardens" },
      { "@type": "LocationFeatureSpecification", name: "Nature Walks" },
      { "@type": "LocationFeatureSpecification", name: "Bird Watching" },
      { "@type": "LocationFeatureSpecification", name: "24-Hour Front Desk" },
      { "@type": "LocationFeatureSpecification", name: "Daily Housekeeping" },
    ],
    parentOrganization: {
      "@type": "Organization",
      name: "Seed Savers Network Kenya",
      url: "https://seedsaverskenya.org",
    },
    sameAs: [
      "https://facebook.com/IndigenousSeedsVillage",
      "https://instagram.com/indigenousseedsvillage",
      "https://twitter.com/IndigenousSeedsV",
      "https://youtube.com/@IndigenousSeedsVillage",
    ],
  };

  // Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["Hotel", "LodgingBusiness"],
    "@id": "https://village.seedfoodculturetourism.org/#business",
    name: "Indigenous Seeds Village",
    description:
      "Heritage retreat and eco-lodge near Lake Elementaita offering accommodation, indigenous cuisine, conference facilities, and cultural experiences in Gilgil, Nakuru County.",
    url: "https://village.seedfoodculturetourism.org",
    telephone: "+254712451777",
    email: "info@seedfoodculturetourism.org",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Off Nakuru-Nairobi Highway, Near Lake Elementaita",
      addressLocality: "Gilgil",
      addressRegion: "Nakuru County",
      addressCountry: "KE",
      postalCode: "20166",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -0.5036,
      longitude: 36.3188,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "06:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "06:00",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "07:00",
        closes: "21:00",
      },
    ],
    priceRange: "KSh 6,500 - KSh 18,000",
  };

  // FAQ Schema for Homepage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where is Indigenous Seeds Village located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Indigenous Seeds Village is located near Lake Elementaita, off the Nakuru-Nairobi Highway in Gilgil, Nakuru County, Kenya. We are approximately 2.5 km from Lake Elementaita, 15 km from Nakuru Town, and 30 km from Lake Nakuru National Park.",
        },
      },
      {
        "@type": "Question",
        name: "What types of accommodation are available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer 15 fully self-contained rooms: Standard Single Rooms (KSh 6,500/night), Standard Double Rooms (KSh 8,500/night), Family Cottages (KSh 12,000/night), and an Executive Suite (KSh 18,000/night). All rooms feature garden views and en-suite bathrooms.",
        },
      },
      {
        "@type": "Question",
        name: "What activities and experiences does the hotel offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Guests can enjoy nature walks, bird watching at Lake Elementaita (UNESCO World Heritage Site with 400+ bird species), seed conservation tours, organic farm experiences, cultural evenings with traditional music and dance, indigenous food cooking workshops, wellness and meditation sessions, and photography tours.",
        },
      },
      {
        "@type": "Question",
        name: "Does Indigenous Seeds Village have a restaurant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Our farm-to-table restaurant serves authentic indigenous Kenyan cuisine using 100% organic ingredients from our gardens. We serve breakfast (6-10 AM), lunch (12-3 PM), and dinner (6-9:30 PM). Vegetarian, vegan, gluten-free, and other dietary options are available.",
        },
      },
      {
        "@type": "Question",
        name: "How do I make a booking?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can book directly through our website's booking form, call us at +254712451777, email info@seedfoodculturetourism.org, or chat with us on WhatsApp at +254712451777. We recommend booking in advance to secure your preferred room type and dates.",
        },
      },
    ],
  };

  // Site Navigation Schema
  const siteNavigationSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: "Indigenous Seeds Village Navigation",
    url: "https://village.seedfoodculturetourism.org",
    hasPart: [
      { "@type": "WebPage", name: "Home", url: "https://village.seedfoodculturetourism.org/" },
      { "@type": "WebPage", name: "About Us", url: "https://village.seedfoodculturetourism.org/about" },
      { "@type": "WebPage", name: "Accommodation", url: "https://village.seedfoodculturetourism.org/accommodation" },
      { "@type": "WebPage", name: "Restaurant", url: "https://village.seedfoodculturetourism.org/restaurant" },
      { "@type": "WebPage", name: "Experiences", url: "https://village.seedfoodculturetourism.org/experiences" },
      { "@type": "WebPage", name: "Conference Facilities", url: "https://village.seedfoodculturetourism.org/conference" },
      { "@type": "WebPage", name: "Gallery", url: "https://village.seedfoodculturetourism.org/gallery" },
      { "@type": "WebPage", name: "Contact Us", url: "https://village.seedfoodculturetourism.org/contact" },
      { "@type": "WebPage", name: "Book Now", url: "https://village.seedfoodculturetourism.org/booking" },
    ],
  };

  return (
    <>
      {/* ================================
          COMPREHENSIVE HOMEPAGE SEO
          ================================ */}
      <Helmet>
        {/* Primary Meta Tags */}
        <title>
          Indigenous Seeds Village | Heritage Retreat & Eco-Lodge Near Lake
          Elementaita, Gilgil — Nakuru County, Kenya
        </title>
        <meta
          name="title"
          content="Indigenous Seeds Village | Heritage Retreat & Eco-Lodge Near Lake Elementaita, Gilgil — Nakuru County"
        />
        <meta
          name="description"
          content="Experience authentic Kenyan hospitality at Indigenous Seeds Village — a premier heritage retreat and eco-lodge near Lake Elementaita in Gilgil, Nakuru County. Book 15 self-contained rooms (KSh 6,500-18,000/night), enjoy farm-to-table indigenous cuisine, host conferences for up to 120 guests, and explore nature walks, bird watching, seed tours, cultural evenings & more. An initiative of Seed Savers Network Kenya. Best rates guaranteed."
        />
        <meta
          name="keywords"
          content="Indigenous Seeds Village, hotel Gilgil, accommodation Lake Elementaita, Nakuru County hotels, heritage retreat Kenya, eco-lodge Gilgil, conference facilities Nakuru, indigenous cuisine Kenya, seed savers network, farm-to-table dining Kenya, bird watching Lake Elementaita, cultural experiences Kenya, sustainable tourism Kenya, hotel near Lake Nakuru, Gilgil accommodation, Nakuru conference venue, eco-friendly hotel Kenya, traditional Kenyan hospitality, budget hotel Gilgil, family cottage Nakuru, executive suite Kenya, book hotel Gilgil, best hotel Nakuru County, Lake Elementaita accommodation, things to do Gilgil, wellness retreat Kenya, nature walks Kenya"
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="bingbot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Indigenous Seeds Village — A Seed Savers Network Kenya Initiative" />
        <meta name="language" content="English" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta name="theme-color" content="#1E5631" />

        {/* Geographic Meta Tags */}
        <meta name="geo.region" content="KE-31" />
        <meta name="geo.placename" content="Gilgil, Nakuru County, Kenya" />
        <meta name="geo.position" content="-0.5036;36.3188" />
        <meta name="ICBM" content="-0.5036, 36.3188" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://village.seedfoodculturetourism.org" />

        {/* Alternate Language */}
        <link rel="alternate" href="https://village.seedfoodculturetourism.org" hrefLang="en" />
        <link rel="alternate" href="https://village.seedfoodculturetourism.org" hrefLang="en-KE" />
        <link rel="alternate" href="https://village.seedfoodculturetourism.org" hrefLang="x-default" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="hotel" />
        <meta property="og:url" content="https://village.seedfoodculturetourism.org" />
        <meta
          property="og:title"
          content="Indigenous Seeds Village | Heritage Retreat Near Lake Elementaita, Gilgil"
        />
        <meta
          property="og:description"
          content="Experience authentic Kenyan hospitality at Indigenous Seeds Village — a premier heritage retreat near Lake Elementaita in Gilgil, Nakuru County. Book eco-friendly rooms, enjoy indigenous cuisine & cultural experiences. Best rates guaranteed."
        />
        <meta
          property="og:image"
          content="https://village.seedfoodculturetourism.org/og-image.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Indigenous Seeds Village — Heritage Retreat near Lake Elementaita, Gilgil" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:site_name" content="Indigenous Seeds Village" />
        <meta property="og:locale" content="en_KE" />
        <meta property="og:latitude" content="-0.5036" />
        <meta property="og:longitude" content="36.3188" />
        <meta property="og:street-address" content="Off Nakuru-Nairobi Highway, Near Lake Elementaita" />
        <meta property="og:locality" content="Gilgil" />
        <meta property="og:region" content="Nakuru County" />
        <meta property="og:country-name" content="Kenya" />
        <meta property="og:postal-code" content="20166" />
        <meta property="og:phone_number" content="+254712451777" />
        <meta property="og:email" content="info@seedfoodculturetourism.org" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IndigenousSeedsV" />
        <meta name="twitter:creator" content="@IndigenousSeedsV" />
        <meta
          name="twitter:title"
          content="Indigenous Seeds Village | Heritage Retreat Near Lake Elementaita, Gilgil — Nakuru County"
        />
        <meta
          name="twitter:description"
          content="Experience authentic Kenyan hospitality at Indigenous Seeds Village. Book rooms from KSh 6,500/night, enjoy indigenous cuisine, and explore Lake Elementaita."
        />
        <meta
          name="twitter:image"
          content="https://village.seedfoodculturetourism.org/og-image.jpg"
        />
        <meta name="twitter:image:alt" content="Indigenous Seeds Village — Heritage Retreat near Lake Elementaita, Gilgil" />

        {/* Pinterest Rich Pin */}
        <meta name="pinterest-rich-pin" content="true" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(homeSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(siteNavigationSchema)}
        </script>
      </Helmet>

      <Hero />
      <AboutPreview />
      <AccommodationPreview />
      <RestaurantPreview />
      <ExperiencesPreview />
      <ConferencePreview />
      <GalleryPreview />
      <Testimonials />
      <BookingCTA />
    </>
  );
};

export default Home;