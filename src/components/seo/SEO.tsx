import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  schema?: object;
  canonical?: string;
}

const SEO = ({
  title,
  description,
  keywords,
  ogImage = "/og-image.jpg",
  ogUrl = "https://village.seedfoodculturetourism.org",
  ogType = "website",
  schema,
  canonical,
}: SEOProps) => {
  const defaultTitle = "Indigenous Seeds Village | Heritage Retreat Near Lake Elementaita, Gilgil";
  const defaultDescription =
    "Experience authentic Kenyan hospitality at Indigenous Seeds Village, a premier heritage retreat near Lake Elementaita in Gilgil, Nakuru County. Offering eco-friendly accommodation, indigenous cuisine, conference facilities, and cultural experiences rooted in Kenya's rich heritage. Book your stay today.";
  const defaultKeywords =
    "Indigenous Seeds Village, hotel Gilgil, accommodation near Lake Elementaita, Nakuru County hotels, heritage retreat Kenya, eco-lodge Gilgil, conference facilities Nakuru, indigenous cuisine Kenya, seed savers network, farm-to-table dining Kenya, bird watching Lake Elementaita, cultural experiences Kenya, sustainable tourism Kenya, hotel near Lake Nakuru, Gilgil accommodation, Nakuru conference venue, eco-friendly hotel Kenya, traditional Kenyan hospitality";

  const pageTitle = title
    ? `${title} | Indigenous Seeds Village — Gilgil, Nakuru County`
    : defaultTitle;

  const pageDescription = description || defaultDescription;
  const pageKeywords = keywords || defaultKeywords;

  // Default Hotel Schema
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Indigenous Seeds Village",
    description: defaultDescription,
    url: "https://village.seedfoodculturetourism.org",
    telephone: "+254712451777",
    email: "info@seedfoodculturetourism.org",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Near Lake Elementaita, Off Nakuru-Nairobi Highway",
      addressLocality: "Gilgil",
      addressRegion: "Nakuru County",
      addressCountry: "KE",
      postalCode: "20100",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -0.45,
      longitude: 36.25,
    },
    image: "https://village.seedfoodculturetourism.org/og-image.jpg",
    priceRange: "KSh 6,500 - KSh 18,000",
    openingHours: "Mo-Su 06:00-22:00",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free WiFi" },
      { "@type": "LocationFeatureSpecification", name: "Restaurant" },
      { "@type": "LocationFeatureSpecification", name: "Conference Facilities" },
      { "@type": "LocationFeatureSpecification", name: "Free Parking" },
      { "@type": "LocationFeatureSpecification", name: "Garden" },
      { "@type": "LocationFeatureSpecification", name: "Nature Walks" },
    ],
    parentOrganization: {
      "@type": "Organization",
      name: "Seed Savers Network Kenya",
      url: "https://seedsaverskenya.org",
    },
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Indigenous Seeds Village" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="KE-31" />
      <meta name="geo.placename" content="Gilgil, Nakuru County" />
      <meta name="geo.position" content="-0.45;36.25" />
      <meta name="ICBM" content="-0.45, 36.25" />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Indigenous Seeds Village" />
      <meta property="og:locale" content="en_KE" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schema || defaultSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;