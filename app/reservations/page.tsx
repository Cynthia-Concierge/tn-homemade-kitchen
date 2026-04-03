import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Make a reservation at T&N Homemade Kitchen in South Philly. Booth or counter seating available. Mon-Fri 6:30am-2pm, Sat-Sun 8am-2pm. Call 215-462-1095.",
  openGraph: {
    title: "Reservations | T&N Homemade Kitchen",
    description: "Reserve your spot at T&N Homemade Kitchen. Booth or counter seating in South Philly since 1980.",
  },
};

export default function ReservationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(122,0,0,0.2),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-cream">Reservations</h1>
          <p className="text-cream/60 text-lg max-w-xl mx-auto">
            Reserve your table at T&N Homemade Kitchen. Walk-ins are always welcome, but reservations
            help us save you the perfect spot.
          </p>
        </div>
      </section>

      {/* Notice */}
      <div className="bg-gold/10 border-y border-gold/20 py-4 px-4 text-center">
        <p className="text-sm text-cream/70 max-w-2xl mx-auto">
          <span className="font-semibold text-gold">Important:</span> Our retail location is currently undergoing renovations.
          Reservations will resume once renovations are complete. In the meantime, we are fully open for{" "}
          <a href="/catering" className="text-gold underline hover:text-gold-light font-semibold">catering orders</a>,{" "}
          <a href="/food-truck" className="text-gold underline hover:text-gold-light font-semibold">food truck bookings</a>, and tray orders.
          Call <a href="tel:2677670073" className="text-gold underline hover:text-gold-light font-semibold">267-767-0073</a> for details.
        </p>
      </div>

      <div className="section-divider" />

      {/* Reservation Form */}
      <section className="py-24 md:py-32 bg-dark-light">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading
            title="Reserve Your Table"
            subtitle="Choose booth or counter seating and let us know when you're coming."
          />

          <form className="bg-dark-card p-6 md:p-8 border border-dark-border space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="r-name" className="block text-sm font-semibold text-cream mb-1.5">
                  Name *
                </label>
                <input
                  id="r-name"
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-dark border border-dark-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-cream placeholder:text-cream/30"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="r-phone" className="block text-sm font-semibold text-cream mb-1.5">
                  Phone *
                </label>
                <input
                  id="r-phone"
                  type="tel"
                  required
                  className="w-full px-4 py-3 bg-dark border border-dark-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-cream placeholder:text-cream/30"
                  placeholder="(215) 555-0123"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-cream mb-3">
                Seating Preference *
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className="relative cursor-pointer">
                  <input type="radio" name="seating" value="booth" className="peer sr-only" defaultChecked />
                  <div className="p-4 border-2 border-dark-border peer-checked:border-gold peer-checked:bg-gold/5 text-center transition-all">
                    <span className="text-2xl block mb-1">🪑</span>
                    <span className="font-semibold text-cream">Booth</span>
                  </div>
                </label>
                <label className="relative cursor-pointer">
                  <input type="radio" name="seating" value="counter" className="peer sr-only" />
                  <div className="p-4 border-2 border-dark-border peer-checked:border-gold peer-checked:bg-gold/5 text-center transition-all">
                    <span className="text-2xl block mb-1">🍽</span>
                    <span className="font-semibold text-cream">Counter</span>
                  </div>
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="r-guests" className="block text-sm font-semibold text-cream mb-1.5">
                  Number of People *
                </label>
                <select
                  id="r-guests"
                  required
                  className="w-full px-4 py-3 bg-dark border border-dark-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-cream"
                >
                  <option value="">Select</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? "person" : "people"}</option>
                  ))}
                  <option value="9+">9+ (call us)</option>
                </select>
              </div>
              <div>
                <label htmlFor="r-date" className="block text-sm font-semibold text-cream mb-1.5">
                  Date *
                </label>
                <input
                  id="r-date"
                  type="date"
                  required
                  className="w-full px-4 py-3 bg-dark border border-dark-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-cream"
                />
              </div>
              <div>
                <label htmlFor="r-time" className="block text-sm font-semibold text-cream mb-1.5">
                  Time *
                </label>
                <select
                  id="r-time"
                  required
                  className="w-full px-4 py-3 bg-dark border border-dark-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-cream"
                >
                  <option value="">Select</option>
                  <option>6:30 AM</option>
                  <option>7:00 AM</option>
                  <option>7:30 AM</option>
                  <option>8:00 AM</option>
                  <option>8:30 AM</option>
                  <option>9:00 AM</option>
                  <option>9:30 AM</option>
                  <option>10:00 AM</option>
                  <option>10:30 AM</option>
                  <option>11:00 AM</option>
                  <option>11:30 AM</option>
                  <option>12:00 PM</option>
                  <option>12:30 PM</option>
                  <option>1:00 PM</option>
                  <option>1:30 PM</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="r-message" className="block text-sm font-semibold text-cream mb-1.5">
                Special Requests
              </label>
              <textarea
                id="r-message"
                rows={3}
                className="w-full px-4 py-3 bg-dark border border-dark-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-cream resize-y placeholder:text-cream/30"
                placeholder="Any special requests or notes..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gold hover:bg-gold-light text-dark py-4 rounded-full text-lg font-semibold transition-colors"
            >
              Request Reservation
            </button>

            <div className="bg-dark p-4 text-center border border-dark-border">
              <p className="text-xs text-cream/40">
                <span className="font-semibold text-cream/60">Please Note:</span> Please arrive promptly at your reserved time.
                We reserve the right to seat other guests during busy hours if you are more than 10 minutes late.
                For parties of 9 or more, please call us directly at{" "}
                <a href="tel:2154621095" className="text-gold hover:underline font-semibold">215-462-1095</a>.
              </p>
            </div>
          </form>
        </div>
      </section>

      <div className="h-16 md:hidden" />
    </>
  );
}
