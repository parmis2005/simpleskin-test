export default function AboutSection() {
  return (
    <section id="ueber-mich" className="bg-cream pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative">
          <div className="aspect-[4/5] relative overflow-hidden rounded-sm">
            <img
              src="/images/carmen-daebritz-portrait.jpg"
              alt="Carmen Däbritz – Kosmetikmeisterin bei Simple Skin Leipzig"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-gold/30 rounded-sm -z-10" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-sand rounded-sm -z-10" />
          <div className="absolute bottom-8 -right-4 bg-white shadow-lg px-6 py-5 text-center">
            <span className="block font-heading text-4xl font-light text-sage-dark">12+</span>
            <span className="block text-xs tracking-[2px] uppercase text-charcoal-light mt-1">
              Jahre Erfahrung
            </span>
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="text-xs tracking-[4px] uppercase text-sage mb-4">Über Mich</p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-charcoal leading-tight mb-6">
            Carmen Däbritz –
            <span className="block italic font-normal text-sage-dark">Hautexpertin aus Leidenschaft</span>
          </h2>
          <div className="section-divider mb-8 ml-0" />

          <p className="text-charcoal-light leading-relaxed mb-6">
            Mein Weg zur Hautgesundheit begann mit einer sehr persönlichen Erfahrung: der
            Suche nach wirklicher Hautgesundheit – verstanden und langfristig unterstützt,
            statt rein oberflächlicher Schönheit.
          </p>
          <p className="text-charcoal-light leading-relaxed mb-10">
            Meine Arbeitsweise verbindet drei Säulen: moderne Wirkstoffkosmetik, umfangreiche
            Hautanalysen und ganzheitliche Gesundheitsberatung. Seriös, respektvoll und ohne
            medizinische Diagnostik – dafür mit Vertrauen, Wissen und echter Orientierung für
            deinen individuellen Weg.
          </p>

          <div className="grid grid-cols-2 gap-6 mb-10">
            {[
              "Staatl. gepr. Kosmetikerin",
              "Kosmetikmeisterin (HWK Leipzig)",
              "TÜV-zert. Gesundheitsberaterin",
              "Innungsbetrieb Leipzig",
            ].map((label) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-sage rounded-full flex-shrink-0" />
                <span className="text-sm text-charcoal-light">{label}</span>
              </div>
            ))}
          </div>

          <a href="#kontakt" className="btn-primary">
            Mehr erfahren
          </a>
        </div>
      </div>

      {/* Certificates */}
      <div className="max-w-6xl mx-auto mt-20 grid grid-cols-3 gap-6">
        {[
          { src: "/images/zertifikat-kosmetikmeisterin.jpg", alt: "Meisterabschluss im Kosmetikhandwerk" },
          { src: "/images/zertifikat-gesundheitsberaterin.jpg", alt: "TÜV-zertifizierte Gesundheitsberaterin" },
          { src: "/images/zertifikat-innungsbetrieb.jpg", alt: "Innungsbetrieb der Kosmetiker-Innung Region Leipzig" },
        ].map((cert) => (
          <div key={cert.src} className="aspect-[4/3] overflow-hidden rounded-sm bg-white shadow-sm">
            <img src={cert.src} alt={cert.alt} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
