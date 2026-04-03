import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Your Event",
  description:
    "Book catering, the Jeet? Mobile food truck, or a custom event with T&N Homemade Kitchen. Call Michael at 267-767-0073 or fill out our quick form.",
  openGraph: {
    title: "Book Your Event | T&N Homemade Kitchen",
    description: "Book catering or the Jeet? Mobile for your next event. South Philly's favorite caterer since 1980.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(122,0,0,0.2),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-cream">Book Your Event</h1>
          <p className="text-cream/60 text-lg max-w-xl mx-auto">
            Tell us about your event and we&apos;ll take care of the rest.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Booking Form + Contact Info */}
      <section className="py-16 md:py-24 bg-light-card">
        <div className="max-w-3xl mx-auto px-4">
          {/* Call Michael CTA */}
          <div className="text-center mb-12">
            <p className="text-charcoal/60 text-lg mb-3">Prefer to talk? Call Michael directly:</p>
            <a
              href="tel:2677670073"
              className="inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-dark px-8 py-4 text-xl font-semibold transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              267-767-0073
            </a>
          </div>

          <div className="flex items-center gap-4 mb-12">
            <div className="flex-1 h-px bg-light-border" />
            <span className="text-charcoal/40 text-sm uppercase tracking-widest">or fill out the form</span>
            <div className="flex-1 h-px bg-light-border" />
          </div>

          {/* Simple Booking Form */}
          <form className="bg-white p-6 md:p-10 border border-light-border space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="b-name" className="block text-sm font-semibold text-charcoal mb-1.5">
                  Your Name *
                </label>
                <input
                  id="b-name"
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-white border border-light-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-charcoal placeholder:text-charcoal/30"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label htmlFor="b-phone" className="block text-sm font-semibold text-charcoal mb-1.5">
                  Phone Number *
                </label>
                <input
                  id="b-phone"
                  type="tel"
                  required
                  className="w-full px-4 py-3 bg-white border border-light-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-charcoal placeholder:text-charcoal/30"
                  placeholder="(215) 555-0123"
                />
              </div>
            </div>

            <div>
              <label htmlFor="b-email" className="block text-sm font-semibold text-charcoal mb-1.5">
                Email
              </label>
              <input
                id="b-email"
                type="email"
                className="w-full px-4 py-3 bg-white border border-light-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-charcoal placeholder:text-charcoal/30"
                placeholder="you@email.com"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="b-type" className="block text-sm font-semibold text-charcoal mb-1.5">
                  Event Type *
                </label>
                <select
                  id="b-type"
                  required
                  className="w-full px-4 py-3 bg-white border border-light-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-charcoal"
                >
                  <option value="">What kind of event?</option>
                  <option>Wedding</option>
                  <option>Corporate Event</option>
                  <option>Private Party</option>
                  <option>Block Party</option>
                  <option>Festival</option>
                  <option>Birthday / Celebration</option>
                  <option>Funeral / Memorial</option>
                  <option>Holiday Party</option>
                  <option>Food Truck (Jeet? Mobile)</option>
                  <option>Tray / Pick-up Order</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="b-guests" className="block text-sm font-semibold text-charcoal mb-1.5">
                  Estimated Guests *
                </label>
                <select
                  id="b-guests"
                  required
                  className="w-full px-4 py-3 bg-white border border-light-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-charcoal"
                >
                  <option value="">How many people?</option>
                  <option>Under 25</option>
                  <option>25 - 50</option>
                  <option>50 - 100</option>
                  <option>100 - 200</option>
                  <option>200 - 500</option>
                  <option>500+</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="b-date" className="block text-sm font-semibold text-charcoal mb-1.5">
                Event Date *
              </label>
              <input
                id="b-date"
                type="date"
                required
                className="w-full px-4 py-3 bg-white border border-light-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-charcoal"
              />
            </div>

            <div>
              <label htmlFor="b-details" className="block text-sm font-semibold text-charcoal mb-1.5">
                Tell Us About Your Event
              </label>
              <textarea
                id="b-details"
                rows={4}
                className="w-full px-4 py-3 bg-white border border-light-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-charcoal resize-y placeholder:text-charcoal/30"
                placeholder="Location, menu preferences, any special requests..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gold hover:bg-gold-light text-dark py-4 text-lg font-semibold transition-colors tracking-wide uppercase"
            >
              Request a Quote
            </button>

            <p className="text-center text-charcoal/40 text-sm">
              We&apos;ll get back to you within 24 hours. For urgent requests, call Michael at{" "}
              <a href="tel:2677670073" className="text-gold hover:underline">267-767-0073</a>.
            </p>
          </form>
        </div>
      </section>

      <div className="section-divider" />

      {/* Quick Info */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-gold/10 text-gold flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-charcoal mb-1">Location</h3>
              <p className="text-charcoal/60 text-sm">
                1820 W. Moyamensing Ave<br />Philadelphia, PA 19145
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-gold/10 text-gold flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-charcoal mb-1">Call Michael</h3>
              <a href="tel:2677670073" className="text-gold hover:text-gold-light text-sm font-medium transition-colors">
                267-767-0073
              </a>
            </div>
            <div>
              <div className="w-12 h-12 bg-gold/10 text-gold flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-charcoal mb-1">Email</h3>
              <a href="mailto:michael@tnhomemadekitchen.com" className="text-gold hover:text-gold-light text-sm font-medium transition-colors">
                michael@tnhomemadekitchen.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="h-16 md:hidden" />
    </>
  );
}
