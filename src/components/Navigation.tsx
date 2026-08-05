"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";

const navLinks = [
  { href: "/behandlungen", label: "Behandlungen" },
  { href: "/ueber-mich", label: "Über Mich" },
  { href: "/vorher-nachher", label: "Vorher / Nachher" },
  { href: "/galerie", label: "Galerie" },
  { href: "/produkte", label: "Produkte" },
  { href: "/kontakt", label: "Kontakt" },
];

const BOOKING_URL = "https://www.studiobookr.com/simple-skin-kosmetik-69919#/book";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const solid = isScrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span
            className={`font-heading text-2xl font-semibold tracking-wide transition-colors ${
              solid ? "text-charcoal" : "text-white"
            }`}
          >
            Simple Skin
          </span>
          <span
            className={`text-xs tracking-[3px] uppercase mt-0.5 transition-colors ${
              solid ? "text-sage-dark" : "text-sage/90"
            }`}
          >
            Leipzig · Plagwitz
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-body tracking-[2px] uppercase transition-colors hover:text-sage ${
                  active
                    ? "text-sage"
                    : solid
                    ? "text-charcoal-light"
                    : "text-white/90"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs"
          >
            Termin buchen
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü öffnen"
        >
          {menuOpen ? (
            <X className={solid ? "text-charcoal" : "text-white"} size={24} />
          ) : (
            <Menu className={solid ? "text-charcoal" : "text-white"} size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl py-8 px-6">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-xs tracking-[2px] uppercase transition-colors hover:text-sage ${
                  pathname === link.href ? "text-sage" : "text-charcoal-light"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="btn-primary text-center text-xs mt-2"
            >
              Termin buchen
            </a>
            <div className="flex items-center gap-2 text-charcoal-light pt-2 border-t border-gray-100">
              <MessageCircle size={14} className="text-sage" />
              <a
                href="https://wa.me/4917670314898"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-sage transition-colors"
              >
                0176 / 70314898 (WhatsApp)
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
