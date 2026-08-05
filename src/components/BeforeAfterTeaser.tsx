import Link from "next/link";

export default function BeforeAfterTeaser() {
  return (
    <section className="bg-sand py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-lg order-2 md:order-1">
          <img
            src="/images/vorher-nachher-akne.jpg"
            alt="Vorher-Nachher Ergebnis bei Akne und allergischer Reaktion mit Cold Plasma"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="text-xs tracking-[4px] uppercase text-sage mb-4">Ergebnisse</p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-charcoal leading-tight mb-6">
            Vorher <span className="italic text-sage-dark">/</span> Nachher
          </h2>
          <div className="section-divider mb-8 ml-0" />
          <p className="text-charcoal-light leading-relaxed mb-8">
            Sichtbare Fortschritte durch individuelle Behandlungskonzepte – dokumentiert
            bei echten Kundinnen. Von Akne über Rosazea bis Pigmentflecken.
          </p>
          <Link href="/vorher-nachher" className="btn-primary">
            Alle Ergebnisse ansehen
          </Link>
        </div>
      </div>
    </section>
  );
}
