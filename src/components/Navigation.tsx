"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react";
import { useBookingModal } from "./BookingModalContext";

type NavItem = { href: string; label: string };
type NavEntry = { label: string; href?: string; items?: NavItem[] };

const navEntries: NavEntry[] = [
  {
    label: "Behandlungen",
    items: [
      { href: "/behandlungen", label: "Alle Behandlungen" },
      { href: "/analysen", label: "Analysen & Beratung" },
    ],
  },
  { label: "Über Mich", href: "/ueber-mich" },
  {
    label: "Ergebnisse",
    items: [
      { href: "/vorher-nachher", label: "Vorher / Nachher" },
      { href: "/erfahrungsberichte", label: "Erfahrungsberichte" },
      { href: "/galerie", label: "Galerie" },
    ],
  },
  { label: "Produkte", href: "/produkte" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Navigation() {
  const { openBookingModal } = useBookingModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const solid = isScrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isEntryActive = (entry: NavEntry) =>
    entry.href
      ? pathname === entry.href
      : entry.items?.some((i) => i.href === pathname) ?? false;

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
        <nav className="hidden lg:flex items-center gap-9">
          {navEntries.map((entry) => {
            const active = isEntryActive(entry);
            const linkClass = `text-xs font-body tracking-[2px] uppercase whitespace-nowrap transition-colors hover:text-sage ${
              active ? "text-sage" : solid ? "text-charcoal-light" : "text-white/90"
            }`;

            if (!entry.items) {
              return (
                <Link key={entry.label} href={entry.href!} className={linkClass}>
                  {entry.label}
                </Link>
              );
            }

            return (
              <div
                key={entry.label}
                className="relative"
                onMouseEnter={() => setOpenGroup(entry.label)}
                onMouseLeave={() => setOpenGroup(null)}
              >
                <button className={`flex items-center gap-1 ${linkClass}`}>
                  {entry.label}
                  <ChevronDown size={12} />
                </button>
                {openGroup === entry.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                    <div className="bg-white shadow-xl rounded-sm py-2 min-w-[200px]">
                      {entry.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`block px-5 py-3 text-xs tracking-[1px] uppercase whitespace-nowrap transition-colors hover:bg-cream hover:text-sage ${
                            pathname === item.href ? "text-sage" : "text-charcoal-light"
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <button
            onClick={() => openBookingModal()}
            className="btn-primary text-xs whitespace-nowrap"
          >
            Termin buchen
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden"
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
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl py-8 px-6 max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col gap-1">
            {navEntries.map((entry) => {
              if (!entry.items) {
                return (
                  <Link
                    key={entry.label}
                    href={entry.href!}
                    onClick={() => setMenuOpen(false)}
                    className={`py-3 text-xs tracking-[2px] uppercase transition-colors hover:text-sage ${
                      pathname === entry.href ? "text-sage" : "text-charcoal-light"
                    }`}
                  >
                    {entry.label}
                  </Link>
                );
              }

              const expanded = openMobileGroup === entry.label;
              return (
                <div key={entry.label}>
                  <button
                    onClick={() =>
                      setOpenMobileGroup(expanded ? null : entry.label)
                    }
                    className={`w-full flex items-center justify-between py-3 text-xs tracking-[2px] uppercase transition-colors ${
                      isEntryActive(entry) ? "text-sage" : "text-charcoal-light"
                    }`}
                  >
                    {entry.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${expanded ? "rotate-180" : ""}`}
                    />
                  </button>
                  {expanded && (
                    <div className="flex flex-col pl-4 pb-2">
                      {entry.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className={`py-2 text-xs tracking-[1px] uppercase transition-colors hover:text-sage ${
                            pathname === item.href ? "text-sage" : "text-charcoal-light/70"
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <button
              onClick={() => {
                setMenuOpen(false);
                openBookingModal();
              }}
              className="btn-primary text-center text-xs mt-4"
            >
              Termin buchen
            </button>
            <div className="flex items-center gap-2 text-charcoal-light pt-4 mt-2 border-t border-gray-100">
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
