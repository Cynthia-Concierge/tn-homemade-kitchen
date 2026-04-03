import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photo gallery from T&N Homemade Kitchen in South Philly. See our signature sandwiches, catering spreads, food truck events, and more.",
  openGraph: {
    title: "Gallery | T&N Homemade Kitchen",
    description: "See our signature sandwiches, catering spreads, and the Jeet? Mobile food truck in action.",
  },
};

const galleryItems = [
  { label: "Frankie Five Stents", category: "Sandwiches", src: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=600&q=80" },
  { label: "Sunday Gravy", category: "Sandwiches", src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80" },
  { label: "Cubano Paesano", category: "Sandwiches", src: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=600&q=80" },
  { label: "Breakfast Platter", category: "Breakfast", src: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&q=80" },
  { label: "Catering Spread", category: "Catering", src: "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80" },
  { label: "Sandwich Tray", category: "Catering", src: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=600&q=80" },
  { label: "Hors D'oeuvres", category: "Catering", src: "https://images.unsplash.com/photo-1530062845289-9109b2c9c868?w=600&q=80" },
  { label: "Antipasto Platter", category: "Catering", src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80" },
  { label: "Jeet? Mobile", category: "Food Truck", src: "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=600&q=80" },
  { label: "Food Truck Event", category: "Food Truck", src: "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=600&q=80" },
  { label: "Wedding Catering", category: "Events", src: "https://images.unsplash.com/photo-1530062845289-9109b2c9c868?w=600&q=80" },
  { label: "Corporate Event", category: "Events", src: "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80" },
  { label: "The Kitchen", category: "Behind the Scenes", src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80" },
  { label: "South Philly Love", category: "Community", src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80" },
  { label: "Family Tradition", category: "Community", src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80" },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(122,0,0,0.2),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-cream">Gallery</h1>
          <p className="text-cream/60 text-lg max-w-xl mx-auto">
            A look at the food, the events, and the people that make T&N Homemade Kitchen special.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Gallery Grid */}
      <section className="py-24 md:py-32 bg-light-card">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            title="Our Food & Events"
            subtitle="Follow us on Instagram @tnhomemadekitchen for the latest photos."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="group relative aspect-square overflow-hidden border border-light-border"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-sm font-semibold text-cream block">{item.label}</span>
                  <span className="text-xs text-cream/50">{item.category}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.instagram.com/tnhomemadekitchen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white px-8 py-3 font-semibold hover:opacity-90 transition-opacity"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Follow @tnhomemadekitchen
            </a>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-800 to-red-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,165,116,0.1),transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-cream">Like What You See?</h2>
          <p className="text-cream/60 mb-6">
            Let us bring the T&N experience to your next event.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-gold hover:bg-gold-light text-dark px-8 py-3 font-semibold transition-colors"
            >
              Order Catering
            </Link>
            <Link
              href="/food-truck"
              className="border-2 border-cream/20 hover:border-gold text-cream hover:text-gold px-8 py-3 font-semibold transition-all"
            >
              Book the Food Truck
            </Link>
          </div>
        </div>
      </section>

      <div className="h-16 md:hidden" />
    </>
  );
}
