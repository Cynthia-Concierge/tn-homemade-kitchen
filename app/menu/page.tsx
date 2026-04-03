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
      <section className="bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-4">
            Breakfast &bull; Lunch &bull; Catering
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-cream/70 text-lg max-w-xl mx-auto">
            Everything made in-house, from scratch, every single day. Fresh ingredients, no preservatives, no shortcuts.
          </p>
        </div>
      </section>

      {/* GF Notice */}
      <div className="bg-gold/10 border-b border-gold/20 py-3 px-4 text-center text-sm">
        <span className="font-semibold text-gold-dark">Gluten-Free Available:</span>{" "}
        Gluten-free hoagie and kaiser rolls available on any sandwich for{" "}
        <span className="font-semibold">+$2.50</span>
      </div>

      {/* Menu Sections */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-4 space-y-16">
          {menuSections.map((section) => (
            <div key={section.title}>
              <SectionHeading title={section.title} subtitle={section.note} />
              <div className="space-y-4">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="bg-white rounded-xl p-5 shadow-sm border border-cream-dark hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-serif text-lg font-bold text-charcoal">{item.name}</h3>
                        {item.description && (
                          <p className="text-sm text-charcoal-light/70 mt-1">{item.description}</p>
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

      {/* Order CTA */}
      <section className="py-12 bg-red-900 text-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">Hungry Yet?</h2>
          <p className="text-cream/70 mb-6">
            Order online for pickup or check out our full catering menu for your next event.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://slicelife.com/restaurants/pa/philadelphia/19145/t-n-homemade-kitchen/menu"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-light text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Order Online (Slice)
            </a>
            <Link
              href="/catering"
              className="border-2 border-cream/30 hover:border-gold text-cream hover:text-gold px-8 py-3 rounded-full font-semibold transition-all"
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
