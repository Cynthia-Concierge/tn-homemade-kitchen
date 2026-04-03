import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "T&N Homemade Kitchen | South Philly Catering, Breakfast & Lunch Since 1980",
    template: "%s | T&N Homemade Kitchen",
  },
  description:
    "Family-owned South Philly deli & catering since 1980. Signature sandwiches, breakfast platters, full-service catering, and the Jeet? Mobile food truck. Call 215-462-1095.",
  keywords: [
    "South Philly catering",
    "Philadelphia catering",
    "corporate catering Philadelphia",
    "food truck rental Philadelphia",
    "catering near me Philadelphia",
    "event catering South Philly",
    "South Philly deli",
    "Philadelphia sandwich shop",
    "breakfast Philadelphia",
  ],
  metadataBase: new URL("https://tnhomemadekitchen.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tnhomemadekitchen.com",
    siteName: "T&N Homemade Kitchen",
    title: "T&N Homemade Kitchen | South Philly Catering Since 1980",
    description:
      "Family-owned South Philly deli & catering since 1980. Signature sandwiches, full-service catering, and the Jeet? Mobile food truck.",
    images: [
      {
        url: "http://www.tnhomemadekitchen.com/wp-content/uploads/2018/03/TN-Logo.png",
        width: 400,
        height: 400,
        alt: "T&N Homemade Kitchen Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "T&N Homemade Kitchen | South Philly Catering Since 1980",
    description:
      "Family-owned South Philly deli & catering since 1980. Signature sandwiches, full-service catering, and the Jeet? Mobile food truck.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["Restaurant", "FoodEstablishment", "LocalBusiness"],
  name: "T&N Homemade Kitchen",
  description:
    "Family-owned South Philly deli, sandwich shoppe, and catering service since 1980. Signature sandwiches, breakfast platters, full-service catering, and the Jeet? Mobile food truck.",
  url: "https://tnhomemadekitchen.com",
  telephone: "+1-215-462-1095",
  email: "michael@tnhomemadekitchen.com",
  image: "http://www.tnhomemadekitchen.com/wp-content/uploads/2018/03/TN-Logo.png",
  logo: "http://www.tnhomemadekitchen.com/wp-content/uploads/2018/03/TN-Logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1820 W. Moyamensing Ave",
    addressLocality: "Philadelphia",
    addressRegion: "PA",
    postalCode: "19145",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.9251,
    longitude: -75.1775,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "06:30",
      closes: "14:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "08:00",
      closes: "14:00",
    },
  ],
  servesCuisine: ["American", "Italian", "Deli"],
  priceRange: "$$",
  foundingDate: "1980",
  founder: {
    "@type": "Person",
    name: "Michael Tuono",
    jobTitle: "Co-owner and Business Manager",
  },
  sameAs: ["https://www.instagram.com/tnhomemadekitchen"],
  hasMenu: "https://tnhomemadekitchen.com/menu",
  acceptsReservations: "True",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
