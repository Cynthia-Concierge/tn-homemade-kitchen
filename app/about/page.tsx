import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "T&N Homemade Kitchen — a family-owned South Philly deli, sandwich shoppe, and luncheonette since 1980. Michael Tuono carries on the family tradition with fresh, homemade food and full-service catering.",
  openGraph: {
    title: "About Us | T&N Homemade Kitchen",
    description: "Family-owned South Philly deli since 1980. Three generations of homemade food, fresh ingredients, and community love.",
  },
};

const timeline = [
  {
    year: "1980",
    title: "The Beginning",
    description: "T&N Homemade Kitchen opens its doors at 1820 W. Moyamensing Ave in the heart of South Philadelphia. A small, family-run deli with big Italian flavor and a commitment to made-from-scratch cooking.",
  },
  {
    year: "1980s-2000s",
    title: "Becoming a Neighborhood Staple",
    description: "For over two decades, T&N becomes the go-to spot in South Philly for breakfast, lunch, and the best deli sandwiches in the neighborhood. Regulars become family.",
  },
  {
    year: "2012",
    title: "Michael Takes the Reins",
    description: "Michael Tuono takes over the family business from his father, bringing fresh energy and new ideas while keeping the soul of what made T&N special. He expands into catering and launches the food truck.",
  },
  {
    year: "Today",
    title: "Still Cooking, Still Growing",
    description: "T&N Homemade Kitchen continues to serve South Philly with the same dedication to quality. Now offering full-service catering, the Jeet? Mobile food truck, and preparing for an exciting renovation.",
  },
];

const values = [
  {
    title: "Everything Made In-House",
    description: "From our signature sandwich sauces to our breakfast platters, every single item is made fresh in our kitchen. No pre-packaged anything. No frozen entrees. No preservatives. Just real food.",
  },
  {
    title: "Fresh, Local Ingredients",
    description: "We source ingredients from local suppliers whenever possible. Fresh bread from local bakeries, quality meats from trusted purveyors, and seasonal produce from nearby farms.",
  },
  {
    title: "No Shortcuts, Ever",
    description: "There's a reason our customers have been coming back for over 40 years. We do things the right way — the way they've always been done in Italian kitchens. It takes longer, but you can taste the difference.",
  },
  {
    title: "Community First",
    description: "South Philly raised us. This neighborhood is our home, our family, and our inspiration. We give back every chance we get — from sponsoring local teams to feeding first responders.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(122,0,0,0.2),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-4">
              Our Story
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-cream">
              A South Philly Family<br />
              <span className="text-gold">Since 1980</span>
            </h1>
            <p className="text-cream/60 text-lg leading-relaxed">
              T&N Homemade Kitchen isn&apos;t just a restaurant — it&apos;s a South Philadelphia institution.
              For over four decades, we&apos;ve been the neighborhood&apos;s kitchen, serving up homemade food
              with the kind of warmth and authenticity you can only find in a family-run spot.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Michael's Story */}
      <section className="py-24 md:py-32 bg-dark-light">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden h-80 shadow-2xl shadow-black/40">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80"
                alt="Kitchen cooking at T&N Homemade Kitchen"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-cream/70 text-sm font-serif italic">Michael Tuono, Owner</span>
              </div>
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold mb-4 text-cream">Meet Michael Tuono</h2>
              <div className="w-12 h-1 bg-gold rounded-full mb-6" />
              <div className="space-y-4 text-cream/60 leading-relaxed">
                <p>
                  Michael Tuono grew up in the kitchen of T&N Homemade Kitchen. As a kid, he watched
                  his father run the deli — learning the recipes, the work ethic, and the deep respect
                  for quality food that defines T&N to this day.
                </p>
                <p>
                  In 2012, Michael took over the family business and immediately brought new energy to
                  a beloved institution. He expanded into full-service catering, launched the
                  &ldquo;Jeet? Mobile&rdquo; food truck, and introduced new menu items — all while
                  keeping the original recipes and the family atmosphere that customers have loved since 1980.
                </p>
                <p>
                  Today, Michael is the co-owner and business manager, overseeing everything from the
                  kitchen to catering logistics to food truck events. His philosophy is simple:
                  use the best ingredients, make everything from scratch, and treat every customer like family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Timeline */}
      <section className="py-24 md:py-32 bg-dark">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading
            title="Our Journey"
            subtitle="Over 40 years of feeding South Philly."
          />
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div key={item.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gold/20 text-gold rounded-full flex items-center justify-center text-xs font-bold shrink-0 border border-gold/30">
                    {item.year.length > 4 ? "..." : item.year}
                  </div>
                  {i < timeline.length - 1 && <div className="w-0.5 flex-1 bg-dark-border mt-2" />}
                </div>
                <div className="pb-8">
                  <div className="text-gold font-semibold text-sm mb-1">{item.year}</div>
                  <h3 className="font-serif text-xl font-bold mb-2 text-cream">{item.title}</h3>
                  <p className="text-cream/50 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Values */}
      <section className="py-24 md:py-32 bg-dark-light">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeading
            title="What We Stand For"
            subtitle="The principles that guide everything we do."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-dark-card p-6 border border-dark-border"
              >
                <h3 className="font-serif text-lg font-bold mb-2 text-cream">{value.title}</h3>
                <p className="text-sm text-cream/50 leading-relaxed">{value.description}</p>
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
            Come Be Part of the Family
          </h2>
          <p className="text-cream/60 text-lg mb-8 max-w-xl mx-auto">
            Whether you&apos;re stopping by for breakfast, ordering catering for 200, or booking the food
            truck for your wedding — you&apos;re family to us.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-gold hover:bg-gold-light text-dark px-8 py-4 text-lg font-semibold transition-colors"
            >
              Get in Touch
            </Link>
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
