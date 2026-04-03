"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/catering", label: "Catering" },
  { href: "/corporate-catering", label: "Corporate" },
  { href: "/food-truck", label: "Food Truck" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-red-900 shadow-lg">
      {/* Top bar */}
      <div className="bg-charcoal text-cream text-xs py-1.5 px-4 hidden md:flex justify-between items-center">
        <span>1820 W. Moyamensing Ave, Philadelphia, PA 19145</span>
        <div className="flex gap-4 items-center">
          <a href="tel:2154621095" className="hover:text-gold transition-colors">
            215-462-1095
          </a>
          <span className="text-cream/40">|</span>
          <span>Mon-Fri 6:30am-2pm &bull; Sat-Sun 8am-2pm</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="http://www.tnhomemadekitchen.com/wp-content/uploads/2018/03/TN-Logo.png"
            alt="T&N Homemade Kitchen Logo"
            className="h-12 w-12 rounded-full bg-cream p-0.5"
            width={48}
            height={48}
          />
          <div className="hidden sm:block">
            <div className="text-cream font-serif font-bold text-lg leading-tight">
              T&N Homemade Kitchen
            </div>
            <div className="text-gold text-xs tracking-widest uppercase">
              Breakfast &bull; Lunch &bull; Catering
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-cream/90 hover:text-gold px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-white/5"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/catering"
            className="ml-3 bg-gold hover:bg-gold-light text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors"
          >
            Order Catering
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-cream p-2"
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-red-900 border-t border-white/10 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-cream/90 hover:text-gold hover:bg-white/5 px-6 py-3 text-base font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="px-6 pt-3 flex flex-col gap-2">
            <Link
              href="/catering"
              onClick={() => setMobileOpen(false)}
              className="bg-gold hover:bg-gold-light text-white px-5 py-3 rounded-full text-center text-sm font-semibold transition-colors"
            >
              Order Catering
            </Link>
            <a
              href="tel:2154621095"
              className="border border-cream/30 text-cream px-5 py-3 rounded-full text-center text-sm font-semibold hover:bg-white/5 transition-colors"
            >
              Call 215-462-1095
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
