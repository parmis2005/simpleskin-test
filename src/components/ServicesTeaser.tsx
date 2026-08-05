import Link from "next/link";

const featured = [
  {
    image: "/images/behandlung-celljet-ultraschall.jpg",
    tag: "Für Neukunden",
    title: "First-Time-Behandlung",
    subtitle: "Ab 165 € · 90 Minuten",
  },
  {
    image: "/images/digitale-hautanalyse.jpg",
    tag: "Analyse",
    title: "Digitale Hautanalyse",
    subtitle: "Der klare Blick auf deine Haut",
  },
  {
    image: "/images/anti-aging-falten-pigmentflecken.jpg",
    tag: "Anti-Aging",
    title: "Anti-Aging",
    subtitle: "Falten & Pigmentflecken",
  },
];

export default function ServicesTeaser() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[4px] uppercase text-sage mb-4">
            Unsere Leistungen
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-charcoal mb-6">
            Behandlungen, die <span className="italic text-sage-dark">wirken</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {featured.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden bg-cream cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1">
                <span className="text-xs tracking-[1px] uppercase text-sage-dark font-semibold">
                  {s.tag}
                </span>
              </div>
              <div className="p-5">
                <p className="text-xs tracking-[2px] uppercase text-sage mb-1">
                  {s.subtitle}
                </p>
                <h3 className="font-heading text-xl font-semibold text-charcoal">
                  {s.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/behandlungen" className="btn-primary">
            Alle Behandlungen ansehen
          </Link>
        </div>
      </div>
    </section>
  );
}
