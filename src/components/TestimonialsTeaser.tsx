import Link from "next/link";

const featured = [
  {
    name: "M.H.",
    location: "Leipzig",
    topic: "Narben und Pickelmale durch Microneedling",
    quote:
      "Der absolute Game Changer für mich war das Microneedling – nach jahrelangen Pickelmalen endlich sichtbare Ergebnisse.",
  },
  {
    name: "T.B.",
    location: "Leipzig",
    topic: "Rosazea-Rötungen",
    quote:
      "Bereits nach sehr kurzer Zeit besserten sich die Symptome gravierend – durch die Kombination aus Behandlungen, Produkten und Ernährungsumstellung.",
  },
  {
    name: "L.L.",
    location: "Leipzig",
    topic: "Ganzheitliche Hautbegleitung",
    quote:
      "Sichtliche Verbesserung meines Hautbildes – und durch die Ernährungsumstellung fühlte ich mich insgesamt energiegeladener.",
  },
];

export default function TestimonialsTeaser() {
  return (
    <section className="bg-charcoal py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[4px] uppercase text-gold mb-4">
            Erfahrungsberichte
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-white mb-6">
            Was Kundinnen <span className="italic text-sage">berichten</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {featured.map((t) => (
            <div
              key={t.name}
              className="bg-white/5 border border-white/10 p-6 rounded-sm flex flex-col"
            >
              <p className="text-xs tracking-[2px] uppercase text-sage mb-3">
                {t.topic}
              </p>
              <p className="text-white/70 text-sm leading-relaxed italic mb-6 flex-1">
                „{t.quote}"
              </p>
              <p className="text-white text-sm font-semibold">
                {t.name}{" "}
                <span className="text-white/50 font-normal">aus {t.location}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/erfahrungsberichte" className="btn-outline">
            Alle Erfahrungsberichte lesen
          </Link>
        </div>
      </div>
    </section>
  );
}
