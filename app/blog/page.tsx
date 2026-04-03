import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "T&N Homemade Kitchen blog. Tips on catering, South Philly food culture, event planning, and food truck bookings. Philadelphia catering experts since 1980.",
  openGraph: {
    title: "Blog | T&N Homemade Kitchen",
    description: "Catering tips, South Philly food culture, and event planning from T&N Homemade Kitchen.",
  },
};

const posts = [
  {
    slug: "south-philly-food-scene",
    title: "The South Philly Food Scene: Why This Neighborhood Still Has the Best Eats in the City",
    excerpt:
      "From Italian markets to corner delis, South Philadelphia remains the undisputed food capital of the city. Here's why the neighborhood's food culture is more vibrant than ever.",
    date: "March 15, 2026",
    readTime: "5 min read",
    category: "Food Culture",
  },
  {
    slug: "catering-tips-for-your-next-event",
    title: "7 Catering Tips That Will Make Your Next Event Unforgettable",
    excerpt:
      "Planning a catered event? After 40+ years of feeding South Philly, we've learned a thing or two. Here are our top tips for making your next event a hit.",
    date: "February 28, 2026",
    readTime: "4 min read",
    category: "Catering Tips",
  },
  {
    slug: "food-truck-weddings",
    title: "Why Food Trucks Are the Hottest Wedding Trend in Philadelphia",
    excerpt:
      "Forget the stuffy plated dinner. More and more Philly couples are opting for food truck catering at their weddings, and here's why it works.",
    date: "February 10, 2026",
    readTime: "6 min read",
    category: "Events",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(122,0,0,0.2),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-cream">Blog</h1>
          <p className="text-cream/60 text-lg max-w-xl mx-auto">
            Food stories, catering tips, and South Philly culture from the T&N kitchen.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Posts */}
      <section className="py-24 md:py-32 bg-light-card">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading
            title="Latest Posts"
            subtitle="Stories from behind the counter and beyond."
          />
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white overflow-hidden border border-light-border hover:border-gold/30 transition-colors"
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-gold bg-gold/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-charcoal/30">{post.date}</span>
                    <span className="text-xs text-charcoal/30">{post.readTime}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="font-serif text-xl md:text-2xl font-bold text-charcoal mb-3 hover:text-gold transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-charcoal/60 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-semibold text-sm transition-colors"
                  >
                    Read More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="h-16 md:hidden" />
    </>
  );
}
