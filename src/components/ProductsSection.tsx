const ingredients = [
  "Dermazeutische Wirkstoffe",
  "REVIDERM Produktlinie",
  "CNC Kosmetik",
  "Hautidentische Komplexe",
  "Individuell dosiert",
  "Auf Analyse abgestimmt",
];

export default function ProductsSection() {
  return (
    <section id="produkte" className="bg-charcoal pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <p className="text-xs tracking-[4px] uppercase text-gold mb-4">
            Unser Onlineshop
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-white leading-tight mb-6">
            REVIDERM
            <span className="block italic text-sage text-3xl mt-1">
              & CNC Kosmetik
            </span>
          </h2>
          <div className="section-divider mb-8 ml-0" />

          <p className="text-white/70 leading-relaxed mb-6">
            Für zuhause führe ich die professionellen Pflegelinien REVIDERM und CNC –
            dermazeutische Wirkstoffkosmetik, die perfekt auf die Behandlungen im
            Studio abgestimmt ist.
          </p>
          <p className="text-white/70 leading-relaxed mb-8">
            Jedes Produkt wird individuell nach deiner Hautanalyse empfohlen, damit
            deine Pflege zuhause die Ergebnisse aus dem Studio unterstützt und
            langfristig sichert.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-10">
            {ingredients.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-1 h-4 bg-gradient-to-b from-gold to-sage flex-shrink-0" />
                <span className="text-sm text-white/70">{item}</span>
              </div>
            ))}
          </div>

          <a href="#kontakt" className="btn-primary">
            Produkte anfragen
          </a>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src="/images/produkte-cnc-kosmetik.jpg"
              alt="REVIDERM und CNC Kosmetik Produkte bei Simple Skin Leipzig"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gold/10 border border-gold/20 rounded-sm -z-10" />
        </div>
      </div>
    </section>
  );
}
