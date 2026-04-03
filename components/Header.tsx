"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On homepage before scroll: transparent with light text (over dark hero)
  // On homepage after scroll OR on other pages: white bg with dark text
  const showTransparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showTransparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-md shadow-md"
      }`}
    >
      {/* Top bar - only visible when not scrolled on homepage */}
      <div
        className={`text-xs py-1.5 px-4 hidden md:flex justify-between items-center border-b transition-all duration-300 ${
          showTransparent
            ? "bg-dark-light text-cream/60 border-dark-border"
            : "bg-light-card text-charcoal/50 border-light-border"
        } ${scrolled ? "max-h-0 overflow-hidden py-0 border-0" : "max-h-10"}`}
      >
        <span>1820 W. Moyamensing Ave, Philadelphia, PA 19145</span>
        <div className="flex gap-4 items-center">
          <a href="tel:2154621095" className="hover:text-gold transition-colors">
            215-462-1095
          </a>
          <span className={showTransparent ? "text-cream/20" : "text-charcoal/20"}>|</span>
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
            className="h-12 w-12 bg-cream p-0.5"
            width={48}
            height={48}
          />
          <div className="hidden sm:block">
            <div className={`font-serif font-bold text-lg leading-tight ${showTransparent ? "text-cream" : "text-charcoal"}`}>
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
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                showTransparent
                  ? "text-cream/80 hover:text-gold hover:bg-white/5"
                  : "text-charcoal/70 hover:text-gold hover:bg-charcoal/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/catering"
            className="ml-3 bg-gold hover:bg-gold-light text-dark px-5 py-2 text-sm font-semibold transition-colors"
          >
            Order Catering
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 ${showTransparent ? "text-cream" : "text-charcoal"}`}
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
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-light-border pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-charcoal/70 hover:text-gold hover:bg-charcoal/5 px-6 py-3 text-base font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="px-6 pt-3 flex flex-col gap-2">
            <Link
              href="/catering"
              onClick={() => setMobileOpen(false)}
              className="bg-gold hover:bg-gold-light text-dark px-5 py-3 text-center text-sm font-semibold transition-colors"
            >
              Order Catering
            </Link>
            <a
              href="tel:2154621095"
              className="border border-light-border text-charcoal px-5 py-3 text-center text-sm font-semibold hover:bg-light-card transition-colors"
            >
              Call 215-462-1095
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
