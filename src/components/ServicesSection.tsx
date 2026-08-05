const services = [
  {
    image: "/images/behandlung-celljet-ultraschall.jpg",
    tag: "Für Neukunden",
    title: "First-Time-Behandlung",
    subtitle: "Ab 165 € · 90 Minuten",
    description:
      "Ausführliche Anamnese und Hautanalyse, individuelle Produktberatung sowie eine auf dich abgestimmte Gesichtsbehandlung.",
  },
  {
    image: "/images/digitale-hautanalyse.jpg",
    tag: "Analyse",
    title: "Digitale Hautanalyse",
    subtitle: "Der klare Blick auf deine Haut",
    description:
      "Mit moderner Analysetechnologie erfassen wir Hautfeuchtigkeit, Talg, Poren und Pigmentierung – die Basis für deinen individuellen Plan.",
  },
  {
    image: "/images/behandlung-akne.jpg",
    tag: "Problemhaut",
    title: "Unreine Haut, Akne & Narben",
    subtitle: "Gezielte Wirkstoffkosmetik",
    description:
      "Spezialisierte Behandlungen bei unreiner Haut, Akne und Pickelmalen – für ein klareres, ebenmäßigeres Hautbild.",
  },
  {
    image: "/images/trockene-haut-neurodermitis.jpg",
    tag: "Sensible Haut",
    title: "Empfindliche Haut, Rosazea & Neurodermitis",
    subtitle: "Beruhigend & schonend",
    description:
      "Sanfte, dermazeutische Pflegekonzepte für gereizte, empfindliche Haut, Rosazea und Neurodermitis.",
  },
  {
    image: "/images/anti-aging-falten-pigmentflecken.jpg",
    tag: "Anti-Aging",
    title: "Anti-Aging",
    subtitle: "Falten & Pigmentflecken",
    description:
      "Altersgerechte Hautpflege gegen feine Linien, Falten und Pigmentflecken mit wirkstoffbasierter Gerätetechnologie.",
  },
  {
    image: "/images/wedding-countdown.jpg",
    tag: "Anlass",
    title: "Wedding Countdown",
    subtitle: "Strahlend zum großen Tag",
    description:
      "Ein individuell geplantes Behandlungsprogramm, damit deine Haut zur Hochzeit in Bestform erstrahlt.",
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
            nachhaltige Ergebnisse statt kurzfristiger Effekte.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden bg-cream cursor-pointer"
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

              <div className="p-5">
                <p className="text-xs tracking-[2px] uppercase text-sage mb-1">
                  {service.subtitle}
                </p>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                  {service.title}
                </h3>
                <p className="text-charcoal-light text-sm leading-relaxed line-clamp-3">
                  {service.description}
                </p>
              </div>

              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/5 transition-colors pointer-events-none" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#termin" className="btn-primary">
            Behandlung reservieren
          </a>
        </div>
      </div>
    </section>
  );
}
