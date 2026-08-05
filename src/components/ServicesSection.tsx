import Link from "next/link";

const services = [
  {
    image: "/images/behandlung-celljet-ultraschall.jpg",
    tag: "Für Neukunden",
    title: "First-Time-Behandlung",
    subtitle: "Ab 165 € · 90 Minuten",
    description:
      "Ausführliche Anamnese, digitale Hautanalyse mit dem OBSERV®-System, individuelle dermazeutische Gesichtsbehandlung, Produktempfehlungen und ein persönlicher Hautfahrplan als PDF.",
    treatments: [],
  },
  {
    image: "/images/digitale-hautanalyse.jpg",
    tag: "Analyse",
    title: "Digitale Hautanalyse",
    subtitle: "OBSERV®-Technologie",
    description:
      "Bildbasierte Hautanalyse mit mehreren Lichtmodi – macht Pigmentierung, Porenstruktur, Gefäßzeichnung und Talgaktivität sichtbar. Schmerzfrei, rein fotografisch, ersetzt keine medizinische Diagnose.",
    treatments: [],
  },
  {
    image: "/images/behandlung-akne.jpg",
    tag: "Problemhaut",
    title: "Unreine Haut, Akne & Narben",
    subtitle: "Gezielte Wirkstoffkosmetik",
    description:
      "Von aktiver Akne über Unreinheiten bis hin zu Narben und unruhiger Hautstruktur – nachhaltige Verbesserung statt schneller Lösungen.",
    treatments: [
      { name: "CellJET clear skin", detail: "70 Min.", price: "ab 145 €" },
      { name: "Clear skin, cool down (Cold Plasma)", detail: "60 Min.", price: "ab 122 €" },
      { name: "Clear skin micro needling", detail: "60 Min.", price: "ab 159 €" },
      { name: "Derma Konzept S.O.S.", detail: "6 Behandlungen", price: "ab 510 €" },
    ],
  },
  {
    image: "/images/trockene-haut-neurodermitis.jpg",
    tag: "Sensible Haut",
    title: "Empfindliche Haut, Rosazea & Neurodermitis",
    subtitle: "Beruhigend & schonend",
    description:
      "Die Haut wird zunächst stabilisiert und geschützt – und anschließend gezielt aktiviert, um ihre Belastbarkeit langfristig zu fördern.",
    treatments: [
      { name: "CellJET calm skin", detail: "70 Min. · Neu", price: "ab 145 €" },
      { name: "Gentle skin, calm down", detail: "70 Min.", price: "ab 122 €" },
      { name: "Gentle skin, supermoist", detail: "60 Min.", price: "ab 122 €" },
      { name: "Derma Konzept S.O.S. „Gentle skin“", detail: "6 Behandlungen", price: "ab 490 €" },
    ],
  },
  {
    image: "/images/anti-aging-falten-pigmentflecken.jpg",
    tag: "Anti-Aging",
    title: "Anti-Aging",
    subtitle: "Falten & Pigmentflecken",
    description:
      "Haut verjüngen, ohne sie zu überfordern – Fokus auf strukturellen Aufbau und langfristige Stabilisierung statt kurzfristiger Effekte.",
    treatments: [
      { name: "CellJET Glow Skin", detail: "70 Min. · Neues 5-Wochen-Programm", price: "ab 145 €" },
      { name: "Renew Skin, Brightness", detail: "Fruchtsäure + Vitamin C", price: "ab 127 €" },
      { name: "Renew Skin Complete+", detail: "70 Min.", price: "ab 147 €" },
      { name: "Micro Needling Intense", detail: "60–80 Min.", price: "ab 159–183 €" },
    ],
  },
  {
    image: "/images/wedding-countdown.jpg",
    tag: "Anlass",
    title: "Wedding Countdown",
    subtitle: "3-Monats-Programm · ab 710 €",
    description:
      "Ein individuell geplantes Behandlungsprogramm über drei Monate, damit deine Haut zur Hochzeit – und nachhaltig darüber hinaus – in Bestform erstrahlt.",
    treatments: [],
  },
];

export default function ServicesSection() {
  return (
    <section id="behandlungen" className="bg-white pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[4px] uppercase text-sage mb-4">
            Unsere Leistungen
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-charcoal mb-6">
            Behandlungen, die{" "}
            <span className="italic text-sage-dark">wirken</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-charcoal-light max-w-xl mx-auto text-sm leading-relaxed">
            Jede Behandlung ist individuell auf deinen Hautzustand abgestimmt – für
            nachhaltige Ergebnisse statt kurzfristiger Effekte. Alle Preise verstehen
            sich als Richtwerte, Details besprechen wir im Vorgespräch.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden bg-cream cursor-pointer flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1">
                <span className="text-xs tracking-[1px] uppercase text-sage-dark font-semibold">
                  {service.tag}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <p className="text-xs tracking-[2px] uppercase text-sage mb-1">
                  {service.subtitle}
                </p>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                  {service.title}
                </h3>
                <p className="text-charcoal-light text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {service.treatments.length > 0 && (
                  <div className="mt-auto pt-4 border-t border-sand space-y-2">
                    {service.treatments.map((t) => (
                      <div key={t.name} className="flex justify-between gap-3 text-xs">
                        <span className="text-charcoal-light">
                          {t.name}
                          <span className="block text-charcoal-light/60">{t.detail}</span>
                        </span>
                        <span className="text-sage-dark font-semibold whitespace-nowrap">
                          {t.price}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/5 transition-colors pointer-events-none" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#termin" className="btn-primary">
            Behandlung reservieren
          </a>
          <Link href="/analysen" className="btn-outline-dark">
            Analysen & Gesundheitsberatung
          </Link>
        </div>
      </div>
    </section>
  );
}
