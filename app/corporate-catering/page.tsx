import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Corporate Catering",
  description:
    "Corporate catering in Philadelphia from T&N Homemade Kitchen. Recurring lunch programs, office parties, team events, and executive dining. Consistent, customizable, budget-friendly. Call 267-767-0073.",
  openGraph: {
    title: "Corporate Catering | T&N Homemade Kitchen",
    description: "Corporate catering in Philadelphia. Recurring lunch programs, office parties, and team events since 1980.",
  },
};

const benefits = [
  {
    title: "Consistent Quality",
    description: "Your team gets the same amazing food every time. We've been perfecting our recipes for over 40 years. No surprises, just consistently great food.",
    icon: "✓",
  },
  {
    title: "Fully Customizable",
    description: "Build a menu that works for your team. Dietary restrictions, allergies, vegetarian options — we accommodate it all. Your menu, your way.",
    icon: "⚙",
  },
  {
    title: "Budget-Friendly",
    description: "Corporate pricing that makes sense. Volume discounts on recurring orders. We'll work with any budget to create a program that feeds your team right.",
    icon: "$",
  },
  {
    title: "Reliable Delivery",
    description: "On-time, every time. We know your meetings and events run on a schedule, and we make sure the food is there before your team sits down.",
    icon: "⏰",
  },
  {
    title: "Zero Hassle",
    description: "From ordering to cleanup, we handle everything. One point of contact, simple invoicing, and a dedicated team that knows your preferences.",
    icon: "★",
  },
  {
    title: "Local & Fresh",
    description: "Everything is made in-house with fresh, local ingredients. No preservatives, no frozen entrees, no corporate catering shortcuts.",
    icon: "♥",
  },
];

const eventTypes = [
  "Weekly team lunches",
  "Monthly all-hands meetings",
  "Board meetings & executive dining",
  "Office holiday parties",
  "Employee appreciation events",
  "Training sessions & workshops",
  "Client meetings & dinners",
  "Product launches",
  "Company picnics & outings",
  "After-hours networking events",
];

export default function CorporateCateringPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,165,116,0.08),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-4">
              Corporate Catering
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-cream">
              Feed Your Team<br />
              <span className="text-gold">the Homemade Way</span>
            </h1>
            <p className="text-cream/60 text-lg mb-8 leading-relaxed">
              Tired of the same boring corporate lunch? T&N Homemade Kitchen brings South Philly&apos;s
              best to your office. From recurring lunch programs to one-time team events, we make
              corporate catering that people actually look forward to.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:2677670073"
                className="bg-gold hover:bg-gold-light text-dark px-8 py-3 font-semibold transition-colors"
              >
                Call Michael: 267-767-0073
              </a>
              <a
                href="mailto:michael@tnhomemadekitchen.com?subject=Corporate%20Catering%20Inquiry"
                className="border-2 border-cream/20 hover:border-gold text-cream hover:text-gold px-8 py-3 font-semibold transition-all"
              >
                Email for a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Why Choose T&N */}
      <section className="py-24 md:py-32 bg-dark-light">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            title="Why Companies Choose T&N"
            subtitle="We're not your average corporate caterer. We're a family."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-dark-card p-6 border border-dark-border"
              >
                <div className="w-12 h-12 bg-gold/10 text-gold flex items-center justify-center mb-4 text-xl font-bold">
                  {benefit.icon}
                </div>
                <h3 className="font-serif text-lg font-bold mb-2 text-cream">{benefit.title}</h3>
                <p className="text-sm text-cream/50 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Event Types */}
      <section className="py-24 md:py-32 bg-dark">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeading
            title="We Cater Every Type of Event"
            subtitle="No matter the occasion, we've got you covered."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
            {eventTypes.map((event) => (
              <div
                key={event}
                className="flex items-center gap-3 bg-dark-card p-4 border border-dark-border"
              >
                <div className="w-8 h-8 bg-gold/10 text-gold rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium text-cream">{event}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* How It Works */}
      <section className="py-24 md:py-32 bg-dark-light">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeading
            title="How It Works"
            subtitle="Getting started with T&N corporate catering is easy."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Tell Us About Your Needs",
                description: "Call Michael or send us an email with your event details — headcount, dietary needs, budget, and date. We'll put together a custom proposal.",
              },
              {
                step: "2",
                title: "We Build Your Menu",
                description: "Choose from our catering menu or let us create something custom. We'll work with you to build the perfect spread for your team.",
              },
              {
                step: "3",
                title: "Sit Back & Enjoy",
                description: "We handle everything — preparation, delivery, setup, and cleanup. You just focus on your event while your team enjoys amazing food.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-gold/20 text-gold rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-serif border border-gold/30">
                  {item.step}
                </div>
                <h3 className="font-serif text-xl font-bold mb-2 text-cream">{item.title}</h3>
                <p className="text-sm text-cream/50 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-800 to-red-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,165,116,0.1),transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-cream">
            Get a Corporate Catering Quote
          </h2>
          <p className="text-cream/60 text-lg mb-8 max-w-xl mx-auto">
            Let&apos;s talk about feeding your team. Whether it&apos;s a one-time event or a recurring program,
            we&apos;ll create a custom plan that works for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:2677670073"
              className="bg-gold hover:bg-gold-light text-dark px-8 py-4 text-lg font-semibold transition-colors"
            >
              Call Michael: 267-767-0073
            </a>
            <a
              href="mailto:michael@tnhomemadekitchen.com?subject=Corporate%20Catering%20Quote"
              className="bg-cream text-dark hover:bg-cream-dark px-8 py-4 text-lg font-semibold transition-colors"
            >
              Email for a Quote
            </a>
            <Link
              href="/catering"
              className="border-2 border-cream/20 hover:border-gold text-cream hover:text-gold px-8 py-4 text-lg font-semibold transition-all"
            >
              View Catering Menu
            </Link>
          </div>
        </div>
      </section>

      <div className="h-16 md:hidden" />
    </>
  );
}
