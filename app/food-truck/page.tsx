import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Jeet? Mobile Food Truck",
  description:
    "Book the Jeet? Mobile food truck from T&N Homemade Kitchen for your next event. Weddings, corporate events, festivals, block parties, and private celebrations in Philadelphia. Call 267-767-0073.",
  openGraph: {
    title: "Jeet? Mobile Food Truck | T&N Homemade Kitchen",
    description: "Book the Jeet? Mobile food truck for weddings, corporate events, festivals, and private parties in Philadelphia.",
  },
};

const eventTypes = [
  {
    title: "Weddings",
    description: "Make your reception unforgettable with South Philly's best food truck. Late-night snack service is our specialty.",
    icon: "💍",
  },
  {
    title: "Corporate Events",
    description: "Team building, company picnics, product launches — bring something different to your next corporate event.",
    icon: "🏢",
  },
  {
    title: "Festivals & Fairs",
    description: "We've served thousands at local festivals. High volume, fast service, amazing food. The crowd will line up.",
    icon: "🎪",
  },
  {
    title: "Block Parties",
    description: "Be the hero of your block. The Jeet? Mobile pulls up and feeds the whole neighborhood.",
    icon: "🏘",
  },
  {
    title: "Private Parties",
    description: "Birthdays, graduations, anniversaries — whatever the celebration, we bring the party.",
    icon: "🎉",
  },
  {
    title: "Fundraisers",
    description: "We love supporting the community. Let the Jeet? Mobile help you raise funds for your cause.",
    icon: "❤",
  },
];

export default function FoodTruckPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,165,116,0.1),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-4">
                The Jeet? Mobile
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-cream">
                South Philly&apos;s Favorite<br />
                <span className="text-gold">Food Truck</span>
              </h1>
              <p className="text-cream/60 text-lg mb-8 leading-relaxed">
                &ldquo;Jeet?&rdquo; — It&apos;s how we say &ldquo;Did you eat?&rdquo; in South Philly.
                Our food truck brings the full T&N Homemade Kitchen experience to your event, wherever
                you are. Same fresh, homemade food. Same family recipes. Just on wheels.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:2677670073"
                  className="bg-gold hover:bg-gold-light text-dark px-8 py-3 font-semibold transition-colors"
                >
                  Book the Truck: 267-767-0073
                </a>
                <a
                  href="mailto:michael@tnhomemadekitchen.com?subject=Food%20Truck%20Booking%20Inquiry"
                  className="border-2 border-cream/20 hover:border-gold text-cream hover:text-gold px-8 py-3 font-semibold transition-all"
                >
                  Email Michael
                </a>
              </div>
            </div>
            <div className="relative overflow-hidden h-64 md:h-96 shadow-2xl shadow-black/40">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=800&q=80"
                alt="Jeet? Mobile food truck from T&N Homemade Kitchen"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="text-cream/70 text-lg font-serif italic">Jeet? Mobile</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Event Types */}
      <section className="py-24 md:py-32 bg-dark-light">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            title="Perfect for Every Event"
            subtitle="The Jeet? Mobile is ready to roll to your next celebration."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventTypes.map((event) => (
              <div
                key={event.title}
                className="bg-dark-card p-6 border border-dark-border hover:border-gold/30 transition-colors"
              >
                <span className="text-3xl block mb-3">{event.icon}</span>
                <h3 className="font-serif text-lg font-bold mb-2 text-cream">{event.title}</h3>
                <p className="text-sm text-cream/50 leading-relaxed">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Photo Gallery */}
      <section className="py-24 md:py-32 bg-dark">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            title="The Jeet? Mobile in Action"
            subtitle="Check out scenes from our recent events."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=600&q=80", alt: "Food truck event" },
              { src: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=600&q=80", alt: "Fresh sandwiches" },
              { src: "https://images.unsplash.com/photo-1530062845289-9109b2c9c868?w=600&q=80", alt: "Event catering" },
              { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80", alt: "Food platter" },
              { src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80", alt: "Kitchen cooking" },
              { src: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&q=80", alt: "Breakfast spread" },
            ].map((photo, i) => (
              <div
                key={i}
                className="aspect-square overflow-hidden border border-dark-border"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Booking Form */}
      <section className="py-24 md:py-32 bg-dark-light" id="book">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading
            title="Book the Jeet? Mobile"
            subtitle="Fill out the form below and Michael will get back to you within 24 hours."
          />
          <form className="bg-dark-card p-6 md:p-8 border border-dark-border space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="ft-name" className="block text-sm font-semibold text-cream mb-1.5">
                  Your Name *
                </label>
                <input
                  id="ft-name"
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-dark border border-dark-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-cream placeholder:text-cream/30"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="ft-event" className="block text-sm font-semibold text-cream mb-1.5">
                  Event Type *
                </label>
                <select
                  id="ft-event"
                  required
                  className="w-full px-4 py-3 bg-dark border border-dark-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-cream"
                >
                  <option value="">Select event type</option>
                  <option>Wedding</option>
                  <option>Corporate Event</option>
                  <option>Festival / Fair</option>
                  <option>Block Party</option>
                  <option>Private Party</option>
                  <option>Fundraiser</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="ft-date" className="block text-sm font-semibold text-cream mb-1.5">
                  Event Date *
                </label>
                <input
                  id="ft-date"
                  type="date"
                  required
                  className="w-full px-4 py-3 bg-dark border border-dark-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-cream"
                />
              </div>
              <div>
                <label htmlFor="ft-guests" className="block text-sm font-semibold text-cream mb-1.5">
                  Number of People *
                </label>
                <input
                  id="ft-guests"
                  type="number"
                  required
                  min="10"
                  className="w-full px-4 py-3 bg-dark border border-dark-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-cream placeholder:text-cream/30"
                  placeholder="50"
                />
              </div>
            </div>
            <div>
              <label htmlFor="ft-location" className="block text-sm font-semibold text-cream mb-1.5">
                Event Location *
              </label>
              <input
                id="ft-location"
                type="text"
                required
                className="w-full px-4 py-3 bg-dark border border-dark-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-cream placeholder:text-cream/30"
                placeholder="Address or venue name"
              />
            </div>
            <div>
              <label htmlFor="ft-message" className="block text-sm font-semibold text-cream mb-1.5">
                Tell Us More
              </label>
              <textarea
                id="ft-message"
                rows={4}
                className="w-full px-4 py-3 bg-dark border border-dark-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-cream resize-y placeholder:text-cream/30"
                placeholder="Any special requests, dietary needs, or additional details..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gold hover:bg-gold-light text-dark py-4 rounded-full text-lg font-semibold transition-colors"
            >
              Request a Quote
            </button>
            <p className="text-xs text-cream/30 text-center">
              Or call Michael directly at{" "}
              <a href="tel:2677670073" className="text-gold hover:underline">267-767-0073</a>
            </p>
          </form>
        </div>
      </section>

      <div className="h-16 md:hidden" />
    </>
  );
}
