const testimonials = [
  {
    name: "L.L.",
    location: "Leipzig",
    topic: "Dreimonatige ganzheitliche Hautbegleitung",
    quote:
      "Sichtliche Verbesserung meines Hautbildes – und durch die Ernährungsumstellung fühlte ich mich insgesamt energiegeladener.",
  },
  {
    name: "J.S.",
    location: "Gera",
    topic: "Akne und Pickelmale",
    quote:
      "Carmen bietet nicht nur kosmetische Beratung, sondern gibt auch wertvolle ganzheitliche Impulse – inklusive Hormonbetrachtung und Symptom-Tagebuch.",
  },
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
    name: "S.T.",
    location: "Leipzig",
    topic: "Hautunreinheiten",
    quote:
      "Schon nach kurzer Zeit hat sich mein Hautbild deutlich verbessert. Sehr fachkundiger Umgang mit sensibler Haut.",
  },
  {
    name: "S.P.",
    location: "Leipzig",
    topic: "Gerötete, trockene, sensible Haut",
    quote:
      "Ich hatte zuvor Probleme mit trockener und geröteter Haut – nach rund sechs Monaten Behandlung hat sich das deutlich verbessert.",
  },
  {
    name: "M.C.",
    location: "Leipzig",
    topic: "Anti-Aging / Hautzustand erhalten",
    quote:
      "Das Ergebnis ist sichtbar. Als langjährige Kundin schätze ich besonders die individuelle Beratung.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-sand pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[4px] uppercase text-sage mb-4">
            Erfahrungsberichte
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-charcoal mb-6">
            Was Kundinnen <span className="italic text-sage-dark">berichten</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-charcoal-light max-w-xl mx-auto text-sm leading-relaxed">
            Echte Stimmen von Kundinnen und Kunden – geteilt, um anderen bei der
            Entscheidung für ihre eigene Hautbegleitung zu helfen.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name + t.topic}
              className="bg-white p-6 rounded-sm shadow-sm flex flex-col"
            >
              <p className="text-xs tracking-[2px] uppercase text-sage mb-3">
                {t.topic}
              </p>
              <p className="text-charcoal-light text-sm leading-relaxed italic mb-6 flex-1">
                „{t.quote}"
              </p>
              <p className="text-charcoal text-sm font-semibold">
                {t.name} <span className="text-charcoal-light font-normal">aus {t.location}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
