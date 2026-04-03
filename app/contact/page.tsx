import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact T&N Homemade Kitchen in South Philly. Call 215-462-1095 for the restaurant or 267-767-0073 for catering. Located at 1820 W. Moyamensing Ave, Philadelphia, PA 19145.",
  openGraph: {
    title: "Contact Us | T&N Homemade Kitchen",
    description: "Get in touch with T&N Homemade Kitchen. Restaurant: 215-462-1095. Catering: 267-767-0073. South Philly since 1980.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(122,0,0,0.2),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-cream">Contact Us</h1>
          <p className="text-cream/60 text-lg max-w-xl mx-auto">
            Have a question? Want to place a catering order? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Contact Info + Form */}
      <section className="py-24 md:py-32 bg-dark-light">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info Side */}
            <div>
              <SectionHeading title="Get in Touch" centered={false} />

              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold/10 text-gold rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-cream mb-1">Address</h3>
                    <p className="text-cream/50">
                      1820 W. Moyamensing Ave<br />
                      Philadelphia, PA 19145
                    </p>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold/10 text-gold rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-cream mb-1">Phone</h3>
                    <div className="space-y-1">
                      <a href="tel:2154621095" className="block text-cream/50 hover:text-gold transition-colors">
                        <span className="font-medium text-cream/70">Restaurant:</span> 215-462-1095
                      </a>
                      <a href="tel:2677670073" className="block text-cream/50 hover:text-gold transition-colors">
                        <span className="font-medium text-cream/70">Catering (Michael):</span> 267-767-0073
                      </a>
                      <p className="text-cream/30">
                        <span className="font-medium text-cream/40">Fax:</span> 215-462-7090
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold/10 text-gold rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-cream mb-1">Email</h3>
                    <a href="mailto:michael@tnhomemadekitchen.com" className="text-cream/50 hover:text-gold transition-colors">
                      michael@tnhomemadekitchen.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold/10 text-gold rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-cream mb-1">Hours</h3>
                    <div className="text-cream/50 space-y-0.5">
                      <p>Monday - Friday: 6:30am - 2:00pm</p>
                      <p>Saturday - Sunday: 8:00am - 2:00pm</p>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold/10 text-gold rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-cream mb-1">Follow Us</h3>
                    <a
                      href="https://www.instagram.com/tnhomemadekitchen"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cream/50 hover:text-gold transition-colors"
                    >
                      @tnhomemadekitchen on Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div>
              <SectionHeading title="Send Us a Message" centered={false} />
              <form className="bg-dark-card rounded-2xl p-6 md:p-8 border border-dark-border space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="c-name" className="block text-sm font-semibold text-cream mb-1.5">
                      Name *
                    </label>
                    <input
                      id="c-name"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-dark border border-dark-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-cream placeholder:text-cream/30"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="c-email" className="block text-sm font-semibold text-cream mb-1.5">
                      Email *
                    </label>
                    <input
                      id="c-email"
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-dark border border-dark-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-cream placeholder:text-cream/30"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="c-phone" className="block text-sm font-semibold text-cream mb-1.5">
                      Phone
                    </label>
                    <input
                      id="c-phone"
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl bg-dark border border-dark-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-cream placeholder:text-cream/30"
                      placeholder="(215) 555-0123"
                    />
                  </div>
                  <div>
                    <label htmlFor="c-topic" className="block text-sm font-semibold text-cream mb-1.5">
                      Topic *
                    </label>
                    <select
                      id="c-topic"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-dark border border-dark-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-cream"
                    >
                      <option value="">Select a topic</option>
                      <option>General Inquiry</option>
                      <option>Catering</option>
                      <option>Food Truck / Jeet Mobile</option>
                      <option>DJ Services</option>
                      <option>Packaged Deal</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="c-message" className="block text-sm font-semibold text-cream mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="c-message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-dark border border-dark-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-cream resize-y placeholder:text-cream/30"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-light text-dark py-4 rounded-full text-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Map */}
      <section className="bg-dark">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <SectionHeading title="Find Us" subtitle="1820 W. Moyamensing Ave, Philadelphia, PA 19145" />
          <div className="rounded-2xl overflow-hidden border border-dark-border shadow-lg shadow-black/30">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.123!2d-75.1775!3d39.9251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c62f3e60c73f%3A0x5c7c9c5c75f7c0!2s1820+W+Moyamensing+Ave%2C+Philadelphia%2C+PA+19145!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="T&N Homemade Kitchen Location"
            />
          </div>
        </div>
      </section>

      <div className="h-16 md:hidden" />
    </>
  );
}
