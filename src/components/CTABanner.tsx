import OrchidIllustration from "./OrchidIllustration";

export default function CTABanner() {
  return (
    <section
      id="termin"
      className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-charcoal via-charcoal to-sage-dark"
    >
      {/* Decorative orchids */}
      <OrchidIllustration className="absolute -right-16 top-1/2 -translate-y-1/2 w-[380px] h-[380px] text-white/[0.06] hidden md:block" />
      <OrchidIllustration className="absolute -left-20 -bottom-16 w-[280px] h-[280px] text-sage/10 hidden lg:block rotate-[15deg]" />

      <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
        <p className="text-xs tracking-[5px] uppercase text-gold/90 mb-5">
          Dein nächster Schritt
        </p>
        <h2 className="font-heading text-4xl md:text-6xl font-light italic mb-6">
          Zeit für deine Haut
        </h2>
        <p className="text-white/80 text-base leading-relaxed mb-10 max-w-lg mx-auto">
          Buche jetzt bequem online deinen persönlichen Termin bei Simple Skin
          Leipzig – oder schreib mir direkt per WhatsApp für Fragen.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.studiobookr.com/simple-skin-kosmetik-69919#/book"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Online Termin buchen
          </a>
          <a
            href="https://wa.me/4917670314898"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            WhatsApp schreiben
          </a>
        </div>

        <p className="text-white/50 text-xs mt-8 tracking-wide">
          Tel/WhatsApp: 0176 / 70314898 · Zschochersche Straße 57, 04229 Leipzig
        </p>
      </div>
    </section>
  );
}
