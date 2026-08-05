import { Award, Sparkles, ScanFace } from "lucide-react";

const usps = [
  {
    icon: Award,
    title: "Meisterhand & Zertifiziert",
    text: "Kosmetikmeisterin (Handwerkskammer zu Leipzig) und TÜV-zertifizierte Gesundheitsberaterin – 12 Jahre Erfahrung in Hautgesundheit.",
  },
  {
    icon: Sparkles,
    title: "Dermazeutische Wirkstoffkosmetik",
    text: "Moderne, wirkstoffbasierte Kosmetik kombiniert mit effektiver Gerätetechnologie für sichtbare, nachhaltige Ergebnisse.",
  },
  {
    icon: ScanFace,
    title: "Analyse statt Zufall",
    text: "Digitale Hautanalyse und ganzheitliche Gesundheitsberatung als Basis für einen klaren, individuellen Behandlungsplan.",
  },
];

export default function USPSection() {
  return (
    <section id="usp" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {usps.map(({ icon: Icon, title, text }) => (
            <div key={title} className="text-center group">
              <div className="w-16 h-16 rounded-full bg-sand flex items-center justify-center mx-auto mb-6 group-hover:bg-sage/20 transition-colors">
                <Icon size={24} className="text-sage-dark" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                {title}
              </h3>
              <p className="text-charcoal-light text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
