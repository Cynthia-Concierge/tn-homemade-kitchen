import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The South Philly Food Scene: Why This Neighborhood Still Has the Best Eats",
  description:
    "From Italian markets to corner delis, South Philadelphia remains the undisputed food capital of the city. Explore why the neighborhood's food culture is more vibrant than ever.",
};

export default function BlogPost() {
  return (
    <>
      <article className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white">
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
            <span className="text-xs font-semibold text-gold bg-gold/10 px-3 py-1 rounded-full">Food Culture</span>
            <span className="text-xs text-charcoal/30">March 15, 2026</span>
            <span className="text-xs text-charcoal/30">5 min read</span>
          </div>

          <h1 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6 leading-tight">
            The South Philly Food Scene: Why This Neighborhood Still Has the Best Eats in the City
          </h1>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 text-charcoal/60 leading-relaxed">
              <p>
                There&apos;s a reason people from all over Philadelphia &mdash; and far beyond &mdash; make the
                trip to South Philly when they want real food. This isn&apos;t a neighborhood of trends and
                pop-ups. It&apos;s a neighborhood of tradition, family recipes, and a deep respect for
                doing things the right way.
              </p>

              <h2 className="font-serif text-2xl font-bold text-charcoal mt-8 mb-4">
                The Italian Market: Where It All Starts
              </h2>
              <p>
                The Italian Market on 9th Street is the oldest continuously operating open-air market
                in the United States. Walk down the street on any given morning and you&apos;ll find fresh
                produce, imported cheeses, handmade pasta, and butchers who know your name. This isn&apos;t
                a farmers market that shows up on Saturdays &mdash; this is everyday life in South Philly.
              </p>

              <h2 className="font-serif text-2xl font-bold text-charcoal mt-8 mb-4">
                The Corner Deli: A Dying Art?
              </h2>
              <p>
                Walk a few blocks in any direction in South Philly and you&apos;ll find a deli. Not a
                chain sandwich shop. A real deli, with a guy behind the counter who&apos;s been slicing
                meat for 30 years. Places like T&N Homemade Kitchen &mdash; family-owned since 1980 &mdash;
                where the recipes have been passed down through generations and everything is still
                made from scratch, in-house, every single day.
              </p>
              <p>
                These places are the backbone of the neighborhood. They&apos;re where you grab your
                morning coffee, your lunchtime hoagie, and your Friday night antipasto tray. They
                know your order before you open your mouth.
              </p>

              <h2 className="font-serif text-2xl font-bold text-charcoal mt-8 mb-4">
                New Energy, Same Soul
              </h2>
              <p>
                What makes South Philly special in 2026 is the blend of old and new. Young chefs
                are opening restaurants alongside 40-year-old delis. Food trucks like the Jeet?
                Mobile are bringing classic deli food to weddings and festivals across the region.
                The energy is there, but the soul hasn&apos;t changed.
              </p>
              <p>
                At T&N, Michael Tuono represents this perfectly. He took over his father&apos;s deli in
                2012 and brought it into the modern era with catering services, a food truck, and a
                focus on events &mdash; all while keeping the recipes and the standards that made T&N a
                neighborhood institution in the first place.
              </p>

              <h2 className="font-serif text-2xl font-bold text-charcoal mt-8 mb-4">
                Come Taste the Difference
              </h2>
              <p>
                If you haven&apos;t been to South Philly for a meal lately, you&apos;re missing out. And if
                you&apos;re planning an event anywhere in the Philadelphia area, consider bringing a piece
                of South Philly to your guests with catering from a place that&apos;s been doing it right
                for over four decades.
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-light-card rounded-2xl border border-light-border">
            <p className="text-sm text-charcoal/60 mb-4">
              Want to bring the South Philly experience to your next event?
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/catering"
                className="bg-gold hover:bg-gold-light text-dark px-6 py-2.5 rounded-full text-sm font-semibold transition-colors"
              >
                View Catering Menu
              </Link>
              <a
                href="tel:2677670073"
                className="border border-light-border text-charcoal hover:border-gold hover:text-gold px-6 py-2.5 rounded-full text-sm font-semibold transition-all"
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
