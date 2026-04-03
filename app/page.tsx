import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

const featuredItems = [
  {
    name: "Frankie Five Stents",
    price: "$15",
    description: "Our legendary signature sandwich that keeps 'em coming back. A South Philly classic you won't find anywhere else.",
  },
  {
    name: "Sunday Gravy",
    price: "$10",
    description: "Homemade Sunday gravy the way nonna used to make it. Slow-cooked, rich, and full of love.",
  },
  {
    name: "Cubano Paesano",
    price: null,
    description: "Our award-winning Cuban sandwich with an Italian twist. Available as a hot sandwich tray for catering.",
  },
  {
    name: "Breakfast Italiano",
    price: null,
    description: "Start your morning the South Philly way. Fresh eggs, Italian meats, and everything made from scratch.",
  },
];

const whyChooseUs = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Since 1980",
    description: "Over 40 years of serving South Philly. Three generations of family recipes made with love.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Made In-House",
    description: "Everything from scratch, every day. Fresh, local ingredients. No preservatives, no shortcuts.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Full-Service Catering",
    description: "From intimate gatherings to 500-person events. Pick-up, drop-off, or full service with rentals.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Jeet? Mobile",
    description: "Our food truck brings the full T&N experience to your event. Weddings, festivals, corporate, block parties.",
  },
];

export default function Home() {
  return (
    <>
      {/* Renovation Banner */}
      <div className="bg-gold text-white text-center py-3 px-4 text-sm font-medium">
        <span className="font-semibold">Renovation Update:</span> Our retail location is currently closed for renovations.
        We are <span className="font-semibold underline">fully open</span> for all catering orders, trays, and food truck events!{" "}
        <a href="tel:2677670073" className="underline font-semibold hover:text-cream transition-colors">
          Call Michael: 267-767-0073
        </a>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-cream overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(196,146,42,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.05),transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-4">
              Est. 1980 &bull; South Philadelphia
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Homemade Food.<br />
              <span className="text-gold">Unforgettable Catering.</span>
            </h1>
            <p className="text-lg md:text-xl text-cream/80 mb-8 max-w-xl leading-relaxed">
              Family-owned since 1980, T&N Homemade Kitchen has been the heart of South Philly dining.
              From signature sandwiches to full-service catering for up to 500 guests, we bring the
              homemade difference to every plate.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/catering"
                className="bg-gold hover:bg-gold-light text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg shadow-gold/20"
              >
                Order Catering
              </Link>
              <Link
                href="/food-truck"
                className="border-2 border-cream/30 hover:border-gold text-cream hover:text-gold px-8 py-4 rounded-full text-lg font-semibold transition-all"
              >
                Book the Food Truck
              </Link>
              <a
                href="tel:2154621095"
                className="flex items-center gap-2 text-cream/70 hover:text-gold px-4 py-4 text-lg font-medium transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                215-462-1095
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Items */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Fan Favorites"
            subtitle="The sandwiches and plates that made us famous. Made fresh daily, the way we've been doing it since 1980."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredItems.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-cream-dark"
              >
                <div className="w-full h-40 rounded-xl bg-gradient-to-br from-red-800/10 to-gold/10 mb-4 flex items-center justify-center">
                  <span className="text-4xl">🥪</span>
                </div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-serif text-lg font-bold text-charcoal">{item.name}</h3>
                  {item.price && (
                    <span className="text-gold font-bold text-lg whitespace-nowrap">{item.price}</span>
                  )}
                </div>
                <p className="text-sm text-charcoal-light/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 text-red-800 hover:text-red-900 font-semibold text-lg transition-colors"
            >
              View Full Menu
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Why Choose T&N?"
            subtitle="Four decades of feeding South Philly. Here's what makes us different."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 bg-red-800/5 text-red-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-charcoal-light/70 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Truck CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-charcoal to-charcoal-light text-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-4">
                The Jeet? Mobile
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Bring T&N to Your Event
              </h2>
              <p className="text-cream/70 text-lg leading-relaxed mb-6">
                Our food truck, the &ldquo;Jeet? Mobile,&rdquo; brings the full T&N Homemade Kitchen
                experience right to your doorstep. Perfect for weddings, corporate events, festivals,
                block parties, and private celebrations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/food-truck"
                  className="bg-gold hover:bg-gold-light text-white px-8 py-3 rounded-full font-semibold transition-colors"
                >
                  Book the Food Truck
                </Link>
                <a
                  href="tel:2677670073"
                  className="border border-cream/30 hover:border-gold text-cream hover:text-gold px-8 py-3 rounded-full font-semibold transition-all"
                >
                  Call Michael
                </a>
              </div>
            </div>
            <div className="w-full h-64 md:h-80 rounded-2xl bg-gradient-to-br from-red-800/30 to-gold/20 flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl block mb-3">🚚</span>
                <span className="text-cream/50 text-sm">Jeet? Mobile Food Truck</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="What Our Customers Say"
            subtitle="South Philly has spoken. Here's why people keep coming back."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Best sandwich I've ever had in my life. The Frankie Five Stents is worth the drive from anywhere in the city. This is South Philly at its finest.",
                name: "Tony R.",
                location: "South Philadelphia",
              },
              {
                quote: "T&N catered our company holiday party and everyone was raving about the food for weeks. Professional, delicious, and so easy to work with. Michael is the best.",
                name: "Sarah M.",
                location: "Center City, Philadelphia",
              },
              {
                quote: "We had the Jeet? Mobile at our wedding and it was the highlight of the reception. Our guests are still talking about those sandwiches!",
                name: "Mike & Lisa D.",
                location: "Swedesboro, NJ",
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white p-6 rounded-2xl shadow-sm border border-cream-dark"
              >
                <div className="flex gap-1 text-gold mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-charcoal-light/80 text-sm leading-relaxed mb-4 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-charcoal text-sm">{testimonial.name}</p>
                  <p className="text-xs text-charcoal-light/50">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact / CTA */}
      <section className="py-16 md:py-24 bg-red-900 text-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Ready to Place Your Order?
          </h2>
          <p className="text-cream/70 text-lg mb-8 max-w-xl mx-auto">
            Whether it&apos;s a sandwich for one or catering for 500, we&apos;re here to feed you right.
            Call us or order online today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:2154621095"
              className="bg-white text-red-900 hover:bg-cream px-8 py-4 rounded-full text-lg font-semibold transition-colors"
            >
              Call 215-462-1095
            </a>
            <a
              href="https://slicelife.com/restaurants/pa/philadelphia/19145/t-n-homemade-kitchen/menu"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-light text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
            >
              Order Online
            </a>
            <Link
              href="/contact"
              className="border-2 border-cream/30 hover:border-gold text-cream hover:text-gold px-8 py-4 rounded-full text-lg font-semibold transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom padding for mobile CTA bar */}
      <div className="h-16 md:hidden" />
    </>
  );
}
