import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark-light border-t border-dark-border">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h3 className="font-serif text-xl font-bold text-cream mb-3">T&N Homemade Kitchen</h3>
          <p className="text-gold text-sm tracking-widest uppercase mb-4">
            Breakfast &bull; Lunch &bull; Catering
          </p>
          <p className="text-sm leading-relaxed text-cream/60">
            Family-owned South Philly deli and catering service since 1980. Everything made
            in-house with fresh, local ingredients.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href="https://www.instagram.com/tnhomemadekitchen"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="w-9 h-9 bg-white/10 hover:bg-gold flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-lg font-semibold text-cream mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-cream/60">
            <li><Link href="/menu" className="hover:text-gold transition-colors">Menu</Link></li>
            <li><Link href="/catering" className="hover:text-gold transition-colors">Catering</Link></li>
            <li><Link href="/corporate-catering" className="hover:text-gold transition-colors">Corporate Catering</Link></li>
            <li><Link href="/food-truck" className="hover:text-gold transition-colors">Jeet? Mobile Food Truck</Link></li>
            <li><Link href="/reservations" className="hover:text-gold transition-colors">Reservations</Link></li>
            <li><Link href="/about" className="hover:text-gold transition-colors">About Us</Link></li>
            <li><Link href="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
            <li><Link href="/blog" className="hover:text-gold transition-colors">Blog</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-serif text-lg font-semibold text-cream mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm text-cream/60">
            <li className="flex gap-2">
              <svg className="w-4 h-4 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>1820 W. Moyamensing Ave<br />Philadelphia, PA 19145</span>
            </li>
            <li className="flex gap-2">
              <svg className="w-4 h-4 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <a href="tel:2154621095" className="hover:text-gold transition-colors block">215-462-1095 (Restaurant)</a>
                <a href="tel:2677670073" className="hover:text-gold transition-colors block">267-767-0073 (Catering)</a>
                <span className="text-cream/30">215-462-7090 (Fax)</span>
              </div>
            </li>
            <li className="flex gap-2">
              <svg className="w-4 h-4 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:michael@tnhomemadekitchen.com" className="hover:text-gold transition-colors">
                michael@tnhomemadekitchen.com
              </a>
            </li>
          </ul>
        </div>

        {/* Hours & Order */}
        <div>
          <h4 className="font-serif text-lg font-semibold text-cream mb-4">Hours</h4>
          <div className="text-sm space-y-1 mb-6 text-cream/60">
            <div className="flex justify-between">
              <span>Mon - Fri</span>
              <span className="text-gold">6:30am - 2:00pm</span>
            </div>
            <div className="flex justify-between">
              <span>Sat - Sun</span>
              <span className="text-gold">8:00am - 2:00pm</span>
            </div>
          </div>
          <div className="space-y-2">
            <a
              href="https://slicelife.com/restaurants/pa/philadelphia/19145/t-n-homemade-kitchen/menu"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gold hover:bg-gold-light text-dark text-center px-4 py-2.5 text-sm font-semibold transition-colors"
            >
              Order Online (Slice)
            </a>
            <a
              href="https://www.ezcater.com/brand/pvt/t-and-n-homemade-kitchen"
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-gold/40 hover:border-gold text-gold text-center px-4 py-2.5 text-sm font-semibold transition-colors"
            >
              Order on ezCater
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-dark-border py-4 px-4 text-center text-xs text-cream/30">
        <p>&copy; {new Date().getFullYear()} T&N Homemade Kitchen. All rights reserved. Family owned since 1980.</p>
      </div>
    </footer>
  );
}
