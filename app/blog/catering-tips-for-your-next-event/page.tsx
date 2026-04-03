import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "7 Catering Tips That Will Make Your Next Event Unforgettable",
  description:
    "Planning a catered event? After 40+ years of feeding South Philly, T&N Homemade Kitchen shares top tips for making your next event a hit.",
};

const tips = [
  {
    number: 1,
    title: "Know Your Headcount (and Add 10%)",
    body: "Nothing ruins an event faster than running out of food. Get a firm headcount, then add 10% as a buffer. It's always better to have a little extra than to run short. Your caterer can help you estimate portions based on the type of event.",
  },
  {
    number: 2,
    title: "Ask About Dietary Restrictions Early",
    body: "Vegetarian, gluten-free, nut allergies — collect this information when you send invitations, not the day of the event. A good caterer (like us) can accommodate almost anything with enough lead time. At T&N, we offer gluten-free rolls and can customize most items.",
  },
  {
    number: 3,
    title: "Match the Food to the Event Style",
    body: "A casual block party calls for a different menu than a corporate board meeting. Sandwich trays and a tot bar are perfect for relaxed gatherings. For something more formal, consider hors d'oeuvres like bacon-wrapped scallops and artisan cheese displays. Your caterer should help you match the menu to the vibe.",
  },
  {
    number: 4,
    title: "Don't Forget the Setup and Breakdown",
    body: "Food is only part of the equation. Who's setting up the chafing racks? Who's clearing the tables? When you're comparing caterers, ask about service levels. At T&N, we offer everything from simple drop-off ($25) to full-service with servers ($100/server), tables, chairs, tents, and linens in any color.",
  },
  {
    number: 5,
    title: "Taste Before You Commit",
    body: "If you're ordering catering for a major event — a wedding, a corporate gala, a milestone celebration — ask for a tasting first. Any caterer worth their salt will be happy to let you try the food before you commit to a big order. We stand behind every dish we make.",
  },
  {
    number: 6,
    title: "Consider a Food Truck for Something Different",
    body: "Food trucks are not just for street fairs anymore. They're one of the hottest trends in event catering. Our Jeet? Mobile food truck brings the full T&N experience to your doorstep — weddings, corporate events, private parties, you name it. Guests love the interactive experience of ordering from a truck.",
  },
  {
    number: 7,
    title: "Book Early, Especially for Peak Season",
    body: "Spring and fall are the busiest catering seasons in Philadelphia. If your event is between April and November, book your caterer at least 4-6 weeks in advance. For the Jeet? Mobile food truck, we recommend 6-8 weeks during peak season. The earlier you book, the more flexibility you'll have with your menu.",
  },
];

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
            <span className="text-xs font-semibold text-gold bg-gold/10 px-3 py-1 rounded-full">Catering Tips</span>
            <span className="text-xs text-charcoal/30">February 28, 2026</span>
            <span className="text-xs text-charcoal/30">4 min read</span>
          </div>

          <h1 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6 leading-tight">
            7 Catering Tips That Will Make Your Next Event Unforgettable
          </h1>

          <div className="space-y-4 text-charcoal/60 leading-relaxed mb-10">
            <p>
              After more than 40 years of catering events across the Philadelphia area, we&apos;ve seen
              it all &mdash; the good, the great, and the &ldquo;we should have planned that better.&rdquo;
              Whether you&apos;re hosting 20 people or 500, these tips will help make sure your next
              catered event goes off without a hitch.
            </p>
          </div>

          <div className="space-y-8">
            {tips.map((tip) => (
              <div key={tip.number} className="bg-white rounded-2xl p-6 border border-light-border">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gold/20 text-gold rounded-full flex items-center justify-center text-lg font-bold font-serif shrink-0 border border-gold/30">
                    {tip.number}
                  </div>
                  <div>
                    <h2 className="font-serif text-xl font-bold text-charcoal mb-2">{tip.title}</h2>
                    <p className="text-charcoal/60 leading-relaxed">{tip.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-white rounded-2xl border border-light-border">
            <h3 className="font-serif text-lg font-bold mb-2 text-charcoal">Ready to Plan Your Event?</h3>
            <p className="text-sm text-charcoal/60 mb-4">
              Let T&N Homemade Kitchen handle the food so you can focus on everything else. We&apos;ve
              been doing this since 1980 — we know how to make your event special.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/catering"
                className="bg-gold hover:bg-gold-light text-dark px-6 py-2.5 rounded-full text-sm font-semibold transition-colors"
              >
                View Catering Menu
              </Link>
              <Link
                href="/food-truck"
                className="border border-light-border text-charcoal hover:border-gold hover:text-gold px-6 py-2.5 rounded-full text-sm font-semibold transition-all"
              >
                Book the Jeet? Mobile
              </Link>
            </div>
          </div>
        </div>
      </article>

      <div className="h-16 md:hidden" />
    </>
  );
}
