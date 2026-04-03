import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Food Trucks Are the Hottest Wedding Trend in Philadelphia",
  description:
    "More Philly couples are choosing food truck catering for their weddings. Learn why the Jeet? Mobile from T&N Homemade Kitchen is the perfect choice for your big day.",
};

export default function BlogPost() {
  return (
    <>
      <article className="pt-32 pb-16 md:pt-40 md:pb-24 bg-dark">
        <div className="max-w-3xl mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-semibold text-sm mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-gold bg-gold/10 px-3 py-1 rounded-full">Events</span>
            <span className="text-xs text-cream/30">February 10, 2026</span>
            <span className="text-xs text-cream/30">6 min read</span>
          </div>

          <h1 className="font-serif text-3xl md:text-4xl font-bold text-cream mb-6 leading-tight">
            Why Food Trucks Are the Hottest Wedding Trend in Philadelphia
          </h1>

          <div className="space-y-6 text-cream/60 leading-relaxed">
            <p>
              The traditional sit-down wedding dinner with its rubber chicken and overcooked salmon
              is finally getting the competition it deserves. More and more couples in the
              Philadelphia area are ditching the plated dinner for something their guests will
              actually remember: a food truck.
            </p>

            <h2 className="font-serif text-2xl font-bold text-cream mt-8 mb-4">
              It&apos;s Not Just a Trend &mdash; It&apos;s a Better Experience
            </h2>
            <p>
              Think about the best meals you&apos;ve ever had at a wedding. Chances are, they weren&apos;t
              the ones where you sat down and someone placed a plate in front of you. The best
              food memories come from interaction &mdash; choosing what you want, watching it being
              made, getting exactly the thing that makes you happy.
            </p>
            <p>
              That&apos;s what a food truck delivers. It turns the meal into an experience. Guests
              get to walk up, see the menu, chat with the crew, and get food made to order. It&apos;s
              social. It&apos;s fun. And the food is better because it&apos;s fresh off the grill, not
              sitting under a heat lamp.
            </p>

            <h2 className="font-serif text-2xl font-bold text-cream mt-8 mb-4">
              The Late-Night Snack That Steals the Show
            </h2>
            <p>
              One of the most popular food truck moves for weddings is the late-night snack.
              The ceremony is done, dinner is over, the dancing is in full swing &mdash; and then
              around 10pm, a food truck rolls up with hot sandwiches, loaded tots, and comfort
              food. Your guests go absolutely wild.
            </p>
            <p>
              At T&N, our Jeet? Mobile has become the go-to for this exact scenario. Nothing says
              &ldquo;best wedding ever&rdquo; like a Cubano Paesano at 11pm while your guests are
              still dancing. The photos alone are worth it.
            </p>

            <h2 className="font-serif text-2xl font-bold text-cream mt-8 mb-4">
              Budget-Friendly Without Feeling Cheap
            </h2>
            <p>
              Let&apos;s be honest &mdash; traditional wedding catering is expensive. Food truck catering
              often comes in at a fraction of the cost, and your guests won&apos;t just tolerate it,
              they&apos;ll prefer it. You&apos;re not cutting corners, you&apos;re making a better choice.
            </p>
            <p>
              Plus, food trucks can handle volume. We&apos;ve served hundreds of guests at a single
              event. The line moves fast, the food is hot, and everyone gets exactly what they want.
            </p>

            <h2 className="font-serif text-2xl font-bold text-cream mt-8 mb-4">
              Perfect for Outdoor Venues
            </h2>
            <p>
              Philadelphia has some incredible outdoor wedding venues &mdash; from Bartram&apos;s Garden to
              Fairmount Park to dozens of beautiful estate grounds in the surrounding counties. A
              food truck is the natural fit for these settings. No need for a full kitchen on-site.
              No complicated logistics. The truck pulls up, the crew sets up, and you&apos;re ready to feed
              your guests.
            </p>

            <h2 className="font-serif text-2xl font-bold text-cream mt-8 mb-4">
              How to Book a Food Truck for Your Wedding
            </h2>
            <p>
              If you&apos;re considering a food truck for your wedding, here are a few tips:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-cream/50">
              <li>Book early &mdash; 6 to 8 weeks minimum for peak season (April through November).</li>
              <li>Confirm the venue allows food trucks and check on any power or parking requirements.</li>
              <li>Do a tasting beforehand so you know exactly what your guests will experience.</li>
              <li>Consider timing &mdash; food trucks are great as the main meal OR as a late-night addition.</li>
              <li>Ask about package deals that include setup, service, and cleanup.</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-cream mt-8 mb-4">
              The Jeet? Mobile: Wedding-Ready
            </h2>
            <p>
              T&N Homemade Kitchen&apos;s Jeet? Mobile food truck has been rolling to weddings across the
              Philadelphia area since Michael Tuono launched it. We bring the same made-from-scratch,
              family-recipe food that has made T&N a South Philly institution since 1980 &mdash; just on wheels.
            </p>
            <p>
              From signature sandwiches to hors d&apos;oeuvres to late-night comfort food, we customize
              the menu for your day. And yes, we&apos;ve been told more than once that our food was the
              best part of the wedding. (Don&apos;t worry, we won&apos;t tell the bride.)
            </p>
          </div>

          <div className="mt-12 p-6 bg-dark-card rounded-2xl border border-dark-border">
            <h3 className="font-serif text-lg font-bold mb-2 text-cream">Book the Jeet? Mobile for Your Wedding</h3>
            <p className="text-sm text-cream/50 mb-4">
              Let&apos;s make your big day delicious. Call Michael or fill out our booking form to get started.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/food-truck"
                className="bg-gold hover:bg-gold-light text-dark px-6 py-2.5 rounded-full text-sm font-semibold transition-colors"
              >
                Book the Food Truck
              </Link>
              <a
                href="tel:2677670073"
                className="border border-cream/20 text-cream hover:border-gold hover:text-gold px-6 py-2.5 rounded-full text-sm font-semibold transition-all"
              >
                Call Michael: 267-767-0073
              </a>
            </div>
          </div>
        </div>
      </article>

      <div className="h-16 md:hidden" />
    </>
  );
}
