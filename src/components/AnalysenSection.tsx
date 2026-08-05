import { CheckCircle2 } from "lucide-react";

const leistungen = [
  "Ausführliche und verständliche Auswertung deiner Laborergebnisse",
  "Einordnung der Zusammenhänge zwischen Haut, Ernährung, Darm und Lebensstil",
  "PDF-Gesundheitsfahrplan mit klaren, individuellen Empfehlungen",
  "Persönliche Ernährungs- und Alltagstipps",
  "Individuelle Mikronährstoffempfehlungen",
  "Kostenlose Auswertung vorhandener ärztlicher Blutwerte",
  "Persönliche Ergebnisbesprechung",
];

const analysen = [
  { name: "Darm-Check", price: "250 €", note: "inkl. Test" },
  { name: "Nährstoffe prüfen", price: "250 €", note: "inkl. Test" },
  { name: "Kombi-Analyse", price: "450 €", note: "Darm + Nährstoffe + Blutwerte, inkl. Tests" },
];

export default function AnalysenSection() {
  return (
    <section className="bg-cream pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[4px] uppercase text-sage mb-4">
            Ganzheitliche Hautbegleitung
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-charcoal mb-6">
            Verstehen statt <span className="italic text-sage-dark">Vermuten</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-charcoal-light max-w-2xl mx-auto text-sm leading-relaxed">
            Ich betrachte Haut nicht isoliert, sondern im Zusammenhang mit dem gesamten
            Körper. Analysen dienen dem besseren Verständnis innerer Prozesse als
            Grundlage für individuelle Empfehlungen – sie ersetzen keine medizinische
            Diagnose.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <h3 className="font-heading text-2xl text-charcoal mb-6">
              Das ist enthalten
            </h3>
            <div className="space-y-4">
              {leistungen.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-sage flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal-light text-sm leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 shadow-sm">
            <h3 className="font-heading text-2xl text-charcoal mb-6">Analyseangebote</h3>
            <div className="space-y-6">
              {analysen.map((a) => (
                <div key={a.name} className="flex justify-between items-start border-b border-sand pb-4 last:border-0 last:pb-0">
                  <div>
                    <p className="font-heading text-lg text-charcoal">{a.name}</p>
                    <p className="text-charcoal-light text-xs mt-1">{a.note}</p>
                  </div>
                  <span className="font-heading text-xl text-sage-dark whitespace-nowrap ml-4">
                    {a.price}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-charcoal-light/70 text-xs mt-6 italic">
              Ärztliche Blutbilder werden kostenlos ausgewertet und integriert.
            </p>
          </div>
        </div>

        <div className="bg-sage/10 border border-sage/30 rounded-sm p-8 text-center max-w-2xl mx-auto">
          <p className="text-xs tracking-[3px] uppercase text-sage-dark mb-2">
            Exklusiv-Gutschein
          </p>
          <p className="text-charcoal-light text-sm leading-relaxed">
            Für Analysen und Gesundheitsberatung ab 150 € erhältst du einen exklusiven
            Gutschein – frag einfach danach.
          </p>
        </div>
      </div>
    </section>
  );
}
