export default function BeforeAfterSection() {
  return (
    <section id="vorher-nachher" className="bg-sand pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[4px] uppercase text-sage mb-4">
            Ergebnisse
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-charcoal mb-6">
            Vorher <span className="italic text-sage-dark">/</span> Nachher
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-charcoal-light max-w-xl mx-auto text-sm leading-relaxed">
            Sichtbare Fortschritte durch individuelle Behandlungskonzepte –
            dokumentiert bei echten Kundinnen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-lg">
            <img
              src="/images/vorher-nachher-akne.jpg"
              alt="Vorher-Nachher Ergebnis bei Akne und allergischer Reaktion mit Cold Plasma"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-heading text-2xl text-charcoal mb-4">
              Akne & Rötungen – behandelt mit Cold Plasma
            </h3>
            <p className="text-charcoal-light leading-relaxed mb-4">
              Durch gezielte, dermazeutische Wirkstoffkosmetik in Kombination mit
              effektiver Gerätetechnologie lassen sich Unreinheiten, Rötungen und
              Pickelmale sichtbar reduzieren – Schritt für Schritt und individuell
              auf den Hautzustand abgestimmt.
            </p>
            <p className="text-charcoal-light/70 text-xs italic">
              Ergebnisse sind individuell und nicht standardisiert. Die Behandlungen
              ersetzen keine medizinische Therapie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
