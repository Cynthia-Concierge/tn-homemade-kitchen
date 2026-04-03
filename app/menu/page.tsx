import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "View the full T&N Homemade Kitchen menu. Signature sandwiches, breakfast platters, Italian classics, and more. Gluten-free options available. South Philly since 1980.",
  openGraph: {
    title: "Menu | T&N Homemade Kitchen",
    description: "Signature sandwiches, breakfast platters, and Italian classics. Made fresh daily in South Philly since 1980.",
  },
};

interface MenuItem {
  name: string;
  price?: string;
  description?: string;
}

interface MenuSection {
  title: string;
  note?: string;
  items: MenuItem[];
}

const menuSections: MenuSection[] = [
  {
    title: "Signature Sandwiches",
    note: "What we're famous for. Made fresh on artisan bread, every day.",
    items: [
      { name: "Frankie Five Stents", price: "$15", description: "Our legendary signature sandwich. A South Philly original you won't find anywhere else." },
      { name: "Sunday Gravy", price: "$10", description: "Slow-cooked homemade gravy on fresh bread. Just like nonna used to make." },
      { name: "J.B. Killa", description: "A killer combo of premium Italian meats and fresh toppings." },
      { name: "Cubano Paesano", description: "Our award-winning Cuban sandwich with an Italian twist. A fan favorite." },
      { name: "Mikey Likes It", description: "Mike's personal favorite. If Mikey likes it, you will too." },
      { name: "Old Fashioned Italian", description: "Classic Italian hoagie done the traditional South Philly way." },
      { name: "Breakfast Italiano", description: "Start your morning Italian-style with fresh eggs and premium meats." },
    ],
  },
  {
    title: "Breakfast Platters",
    note: "Served all day. 3 eggs any style with your choice of home fries, tater tots, or toast. Sub egg whites +$1.25. Add cheese +$0.50.",
    items: [
      { name: "Bacon & Eggs", description: "Three eggs any style with crispy bacon and your choice of side." },
      { name: "Ham & Eggs", description: "Three eggs any style with thick-cut ham and your choice of side." },
      { name: "Pork Roll & Eggs", description: "Three eggs any style with classic pork roll and your choice of side." },
    ],
  },
  {
    title: "Sides & Add-Ons",
    items: [
      { name: "Home Fries", description: "Golden, crispy home fries made fresh." },
      { name: "Tater Tots", description: "Crispy tater tots, perfectly seasoned." },
      { name: "Toast", description: "Fresh toasted bread." },
      { name: "Sub Egg Whites", price: "+$1.25", description: "Substitute egg whites on any platter." },
      { name: "Add Cheese", price: "+$0.50", description: "Add cheese to any item." },
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(122,0,0,0.2),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-4">
                Breakfast &bull; Lunch &bull; Catering
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-cream">Our Menu</h1>
              <p className="text-cream/60 text-lg max-w-xl mx-auto lg:mx-0">
                Everything made in-house, from scratch, every single day. Fresh ingredients, no preservatives, no shortcuts.
              </p>
            </div>
            <div className="relative overflow-hidden h-64 md:h-80 shadow-2xl shadow-black/40">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80"
                alt="Delicious food platter from T&N Homemade Kitchen"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* GF Notice */}
      <div className="bg-gold/10 border-y border-gold/20 py-3 px-4 text-center text-sm">
        <span className="font-semibold text-gold">Gluten-Free Available:</span>{" "}
        <span className="text-cream/70">
          Gluten-free hoagie and kaiser rolls available on any sandwich for{" "}
          <span className="font-semibold text-cream">+$2.50</span>
        </span>
      </div>

      <div className="section-divider" />

      {/* Menu Sections */}
      <section className="py-24 md:py-32 bg-dark">
        <div className="max-w-5xl mx-auto px-4 space-y-16">
          {menuSections.map((section) => (
            <div key={section.title}>
              <SectionHeading title={section.title} subtitle={section.note} />
              <div className="space-y-4">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="bg-dark-card p-5 border border-dark-border hover:border-gold/30 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-serif text-lg font-bold text-cream">{item.name}</h3>
                        {item.description && (
                          <p className="text-sm text-cream/50 mt-1">{item.description}</p>
                        )}
                      </div>
                      {item.price && (
                        <span className="text-gold font-bold text-lg whitespace-nowrap">{item.price}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* Order CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-800 to-red-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,165,116,0.1),transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-cream">Hungry Yet?</h2>
          <p className="text-cream/60 mb-6">
            Order online for pickup or check out our full catering menu for your next event.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://slicelife.com/restaurants/pa/philadelphia/19145/t-n-homemade-kitchen/menu"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-light text-dark px-8 py-3 font-semibold transition-colors"
            >
              Order Online (Slice)
            </a>
            <Link
              href="/catering"
              className="border-2 border-cream/20 hover:border-gold text-cream hover:text-gold px-8 py-3 font-semibold transition-all"
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
