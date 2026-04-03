import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

const featuredItems = [
  {
    name: "Frankie Five Stents",
    price: "$15",
    description: "Our legendary signature sandwich that keeps 'em coming back. A South Philly classic you won't find anywhere else.",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=600&q=80",
  },
  {
    name: "Sunday Gravy",
    price: "$10",
    description: "Homemade Sunday gravy the way nonna used to make it. Slow-cooked, rich, and full of love.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
  },
  {
    name: "Cubano Paesano",
    price: null,
    description: "Our award-winning Cuban sandwich with an Italian twist. Available as a hot sandwich tray for catering.",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=600&q=80",
  },
  {
    name: "Breakfast Italiano",
    price: null,
    description: "Start your morning the South Philly way. Fresh eggs, Italian meats, and everything made from scratch.",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&q=80",
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

      {/* Hero - Full Screen Image (Ember & Oak Style) */}
      <section className="relative h-screen overflow-hidden">
        {/* Full-screen background image */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-ingredients.jpg"
            alt="Fresh Italian ingredients - pasta, tomatoes, garlic, basil, olives on rustic wood"
            className="w-full h-full object-cover"
          />
          {/* Dark overlays for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/40 to-dark/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
        </div>

        {/* Centered text overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center px-4">
            <h1
              className="font-serif text-6xl md:text-8xl lg:text-9xl text-cream tracking-wider"
              style={{ textShadow: "0 4px 20px rgba(0,0,0,0.8), 0 0 40px rgba(212,165,116,0.3)" }}
            >
              T&N
            </h1>
            <h2
              className="font-serif text-3xl md:text-5xl lg:text-6xl text-cream tracking-wide mt-2"
              style={{ textShadow: "0 4px 20px rgba(0,0,0,0.8)" }}
            >
              Homemade Kitchen
            </h2>
            <p className="text-gold tracking-[0.3em] uppercase text-sm md:text-lg mt-6 drop-shadow-lg bg-black/30 px-6 py-2 inline-block backdrop-blur-sm">
              Breakfast &middot; Lunch &middot; Catering
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Link
                href="/catering"
                className="bg-gold hover:bg-gold-light text-dark px-10 py-4 text-lg font-medium tracking-wider uppercase transition-colors shadow-2xl"
              >
                Order Catering
              </Link>
              <Link
                href="/food-truck"
                className="border-2 border-cream/30 hover:border-gold text-cream hover:text-gold px-10 py-4 text-lg font-medium tracking-wider uppercase transition-all backdrop-blur-sm"
              >
                Book Food Truck
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
          <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center shadow-lg">
            <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shadow-lg animate-bounce-dot" />
          </div>
        </div>
      </section>

      {/* Gradient divider */}
      <div className="section-divider" />

      {/* Featured Menu Items */}
      <section className="py-24 md:py-32 bg-dark">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Fan Favorites"
            subtitle="The sandwiches and plates that made us famous. Made fresh daily, the way we've been doing it since 1980."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredItems.map((item) => (
              <div
                key={item.name}
                className="bg-dark-card overflow-hidden border border-dark-border hover:border-gold/30 transition-all group"
              >
                <div className="w-full h-48 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-serif text-lg font-bold text-cream">{item.name}</h3>
                    {item.price && (
                      <span className="text-gold font-bold text-lg whitespace-nowrap">{item.price}</span>
                    )}
                  </div>
                  <p className="text-sm text-cream/50 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-semibold text-lg transition-colors"
            >
              View Full Menu
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Why Choose Us */}
      <section className="py-24 md:py-32 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Why Choose T&N?"
            subtitle="Four decades of feeding South Philly. Here's what makes us different."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 bg-gold/10 text-gold flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl font-bold mb-2 text-cream">{item.title}</h3>
                <p className="text-cream/50 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Catering Showcase */}
      <section className="py-24 md:py-32 bg-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden h-80 md:h-[500px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80"
                alt="T&N Homemade Kitchen catering spread"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
            </div>
            <div>
              <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-4">
                Full-Service Catering
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-cream">
                From 10 to 500 Guests
              </h2>
              <p className="text-cream/60 text-lg leading-relaxed mb-6">
                Whether it&apos;s an intimate dinner party or a 500-person corporate event,
                T&N Homemade Kitchen brings the homemade difference to every catering order.
                Pick-up, drop-off, or full service with tables, chairs, linens, and staff.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/catering"
                  className="bg-gold hover:bg-gold-light text-dark px-8 py-3 font-semibold transition-colors"
                >
                  View Catering Menu
                </Link>
                <a
                  href="tel:2677670073"
                  className="border border-cream/20 hover:border-gold text-cream hover:text-gold px-8 py-3 font-semibold transition-all"
                >
                  Call Michael
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Food Truck CTA */}
      <section className="py-24 md:py-32 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-4">
                The Jeet? Mobile
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-cream">
                Bring T&N to Your Event
              </h2>
              <p className="text-cream/60 text-lg leading-relaxed mb-6">
                Our food truck, the &ldquo;Jeet? Mobile,&rdquo; brings the full T&N Homemade Kitchen
                experience right to your doorstep. Perfect for weddings, corporate events, festivals,
                block parties, and private celebrations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/food-truck"
                  className="bg-gold hover:bg-gold-light text-dark px-8 py-3 font-semibold transition-colors"
                >
                  Book the Food Truck
                </Link>
                <a
                  href="tel:2677670073"
                  className="border border-cream/20 hover:border-gold text-cream hover:text-gold px-8 py-3 font-semibold transition-all"
                >
                  Call Michael
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative overflow-hidden h-80 md:h-[450px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=800&q=80"
                alt="T&N Homemade Kitchen Jeet? Mobile food truck"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-dark">
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
                className="bg-dark-card p-6 border border-dark-border"
              >
                <div className="flex gap-1 text-gold mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-cream/70 text-sm leading-relaxed mb-4 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-cream text-sm">{testimonial.name}</p>
                  <p className="text-xs text-cream/40">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Quick Contact / CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-800 to-red-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,165,116,0.1),transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-cream">
            Ready to Place Your Order?
          </h2>
          <p className="text-cream/60 text-lg mb-8 max-w-xl mx-auto">
            Whether it&apos;s a sandwich for one or catering for 500, we&apos;re here to feed you right.
            Call us or order online today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:2154621095"
              className="bg-cream text-dark hover:bg-cream-dark px-8 py-4 text-lg font-semibold transition-colors"
            >
              Call 215-462-1095
            </a>
            <a
              href="https://slicelife.com/restaurants/pa/philadelphia/19145/t-n-homemade-kitchen/menu"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-light text-dark px-8 py-4 text-lg font-semibold transition-colors"
            >
              Order Online
            </a>
            <Link
              href="/contact"
              className="border-2 border-cream/20 hover:border-gold text-cream hover:text-gold px-8 py-4 text-lg font-semibold transition-all"
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
