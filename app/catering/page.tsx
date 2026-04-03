import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Catering Menu & Packages",
  description:
    "Full-service catering from T&N Homemade Kitchen in South Philly. Hors d'oeuvres, sandwich trays, wrap trays, hot trays, and complete event services. Call 267-767-0073.",
  openGraph: {
    title: "Catering | T&N Homemade Kitchen",
    description: "Full-service South Philly catering. Hors d'oeuvres, sandwich trays, wrap trays, and complete event services since 1980.",
  },
};

interface CateringItem {
  name: string;
  price?: string;
  description?: string;
}

interface CateringSection {
  title: string;
  note?: string;
  items: CateringItem[];
}

const cateringSections: CateringSection[] = [
  {
    title: "Hors D'oeuvres",
    note: "Perfect starters for any event. All made fresh in-house.",
    items: [
      { name: "Bacon-Wrapped Scallops", price: "$35/12", description: "Plump sea scallops wrapped in crispy applewood bacon." },
      { name: "Chicken Hors D'oeuvres", price: "$30/12", description: "Tender chicken bites, perfectly seasoned." },
      { name: "Crab Cakes", description: "House-made crab cakes with premium lump crab." },
      { name: "Lemon Pepper Shrimp", price: "$25/12", description: "Zesty lemon pepper shrimp, cooked to perfection." },
      { name: "Hummus Bowl", description: "Smooth, creamy hummus served with warm pita." },
      { name: "Crudite Platter", price: "$50", description: "Fresh seasonal vegetables with house-made dips." },
      { name: "Fruit & Cheese Display", description: "Seasonal fruits paired with artisan cheeses." },
      { name: "Chicken Cutlet Tray", price: "$40", description: "Golden, crispy chicken cutlets served on a platter." },
      { name: "Mozzarella Wedges", description: "Crispy fried mozzarella wedges with marinara." },
      { name: "Spring Rolls", description: "Crispy spring rolls with dipping sauce." },
      { name: "Artisan Cheese Display", price: "$90", description: "Premium artisan cheeses with crackers, honey, and accompaniments." },
      { name: "Tri-Tip Toast Points", price: "$60", description: "Tender tri-tip on crispy toast points with horseradish cream." },
      { name: "Belgium Endives w/ Salmon", price: "$45", description: "Fresh endive leaves topped with smoked salmon and cream cheese." },
      { name: "Asian Chicken Satay", price: "$20", description: "Grilled chicken skewers with peanut dipping sauce." },
      { name: "Pretzel Tray", description: "Warm soft pretzels with mustard and cheese dips." },
      { name: "Bruschetta", description: "Fresh tomato and basil bruschetta on toasted ciabatta." },
      { name: "Antipasto Platter", price: "$75", description: "Italian meats, cheeses, olives, roasted peppers, and marinated vegetables." },
      { name: "Tot Bar", description: "Build-your-own loaded tater tot bar with all the toppings." },
    ],
  },
  {
    title: "Sandwich Trays",
    note: "Small serves 10-15 people. Large serves 20-25 people.",
    items: [
      { name: "Classic Sandwich Tray", price: "Sm $55 / Lg $55", description: "A mix of our most popular classic deli sandwiches." },
      { name: "Old World Sandwich Tray", price: "Sm $70 / Lg $95", description: "Premium Italian-style sandwiches with imported meats and cheeses." },
      { name: "Italiano Sandwich Tray", description: "All-Italian selection featuring our signature Italian hoagies." },
      { name: "Veggie Amore Tray", description: "Fresh vegetable sandwiches for the veggie lovers." },
      { name: "Pollo D'amore Tray", price: "Sm $85 / Lg $110", description: "Chicken lover's dream. Our best chicken sandwiches on one tray." },
    ],
  },
  {
    title: "Wrap Trays",
    items: [
      { name: "Land & Sea Wrap Tray", price: "$100", description: "A premium mix of meat and seafood wraps." },
      { name: "Faraona Wrap Tray", description: "A curated selection of our finest wraps." },
      { name: "Italia Wrap Tray", description: "Italian-inspired wraps with premium fillings." },
    ],
  },
  {
    title: "Hot Sandwich Trays",
    items: [
      { name: "Cubano Paesano Tray", description: "Our award-winning Cubano Paesano, hot and ready for your guests. A crowd favorite." },
    ],
  },
];

const serviceOptions = [
  { title: "Pick-Up", description: "Order ahead and pick up at our location. Ready when you are." },
  { title: "Drop-Off", description: "We deliver and set up your spread. Setup fee: $25." },
  { title: "Staging", description: "We deliver, set up, and arrange everything beautifully for your event." },
  { title: "Full Service", description: "Our team handles everything from setup to cleanup. The white-glove experience." },
];

const rentals = [
  { name: "Tables", description: "Round and rectangular tables for any layout" },
  { name: "Chairs", description: "Comfortable seating for your guests" },
  { name: "Tents", description: "Outdoor coverage for rain or shine" },
  { name: "Bar & Bartender", description: "Full bar setup with professional bartender" },
  { name: "Linens (Any Color)", description: "Tablecloths and napkins in your event colors" },
  { name: "Server to Stay", price: "$100", description: "Professional server for the duration of your event" },
  { name: "Drop-Off & Setup", price: "$25", description: "Delivery and professional setup" },
  { name: "Diningware", price: "$1/person", description: "Plates, utensils, and cups per guest" },
  { name: "Chafing Racks & Sterno", price: "$10/rack", description: "Keep hot items at perfect temperature" },
];

export default function CateringPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(122,0,0,0.2),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-4">
                Full-Service Catering
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-charcoal">Catering Menu</h1>
              <p className="text-charcoal/60 text-lg max-w-2xl mx-auto lg:mx-0 mb-8">
                From intimate dinners to 500-person events, T&N Homemade Kitchen brings the homemade
                difference to every catering order. Everything made fresh, in-house, with love.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a
                  href="tel:2677670073"
                  className="bg-gold hover:bg-gold-light text-dark px-8 py-3 font-semibold transition-colors"
                >
                  Call Michael: 267-767-0073
                </a>
                <a
                  href="https://www.ezcater.com/brand/pvt/t-and-n-homemade-kitchen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-light-border hover:border-gold text-charcoal hover:text-gold px-8 py-3 font-semibold transition-all"
                >
                  Order on ezCater
                </a>
              </div>
            </div>
            <div className="relative overflow-hidden h-64 md:h-96 shadow-2xl shadow-black/40">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80"
                alt="T&N Homemade Kitchen catering spread"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Menu Sections */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-16">
          {cateringSections.map((section) => (
            <div key={section.title}>
              <SectionHeading title={section.title} subtitle={section.note} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="bg-white p-5 border border-light-border hover:border-gold/30 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h3 className="font-serif text-base font-bold text-charcoal">{item.name}</h3>
                        {item.description && (
                          <p className="text-sm text-charcoal/60 mt-1">{item.description}</p>
                        )}
                      </div>
                      {item.price && (
                        <span className="text-gold font-bold text-sm whitespace-nowrap bg-gold/10 px-3 py-1 rounded-full">
                          {item.price}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* Service Options */}
      <section className="py-24 md:py-32 bg-light-card">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeading
            title="Service Options"
            subtitle="Choose the level of service that fits your event."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceOptions.map((option, i) => (
              <div key={option.title} className="text-center p-6 bg-white border border-light-border">
                <div className="w-12 h-12 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold font-serif">
                  {i + 1}
                </div>
                <h3 className="font-serif text-lg font-bold mb-2 text-charcoal">{option.title}</h3>
                <p className="text-sm text-charcoal/60">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Rentals */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeading
            title="Rentals & Add-Ons"
            subtitle="We can provide everything you need for a complete event."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rentals.map((item) => (
              <div
                key={item.name}
                className="bg-white p-5 border border-light-border"
              >
                <div className="flex justify-between items-start gap-2">
                  <h3 className="font-semibold text-charcoal">{item.name}</h3>
                  {item.price && (
                    <span className="text-gold font-bold text-sm whitespace-nowrap">{item.price}</span>
                  )}
                </div>
                <p className="text-sm text-charcoal/60 mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Quote CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-800 to-red-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,165,116,0.1),transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-charcoal">
            Ready to Get a Quote?
          </h2>
          <p className="text-charcoal/60 text-lg mb-8 max-w-xl mx-auto">
            Tell us about your event and we&apos;ll put together a custom catering package that fits your
            needs and budget. No event is too big or too small.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:2677670073"
              className="bg-gold hover:bg-gold-light text-dark px-8 py-4 text-lg font-semibold transition-colors"
            >
              Call Michael: 267-767-0073
            </a>
            <a
              href="mailto:michael@tnhomemadekitchen.com"
              className="border-2 border-light-border hover:border-gold text-charcoal hover:text-gold px-8 py-4 text-lg font-semibold transition-all"
            >
              Email for a Quote
            </a>
            <Link
              href="/corporate-catering"
              className="text-charcoal/40 hover:text-gold px-4 py-4 text-lg font-medium transition-colors underline"
            >
              Corporate Catering
            </Link>
          </div>
        </div>
      </section>

      <div className="h-16 md:hidden" />
    </>
  );
}
