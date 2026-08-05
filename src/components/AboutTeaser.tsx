import Link from "next/link";

export default function AboutTeaser() {
  return (
    <section className="bg-cream py-24 px-6 overflow-hidden">
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
          <div className="absolute -bottom-6 -right-6 w-40 h-40 border border-gold/30 rounded-sm -z-10" />
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

          <p className="text-charcoal-light leading-relaxed mb-8">
            Kosmetikmeisterin und TÜV-zertifizierte Gesundheitsberaterin mit 12 Jahren
            Erfahrung in Leipzig-Plagwitz. Meine Arbeitsweise verbindet moderne
            Wirkstoffkosmetik, digitale Hautanalysen und ganzheitliche Beratung – seriös,
            respektvoll und individuell auf dich abgestimmt.
          </p>

          <Link href="/ueber-mich" className="btn-primary">
            Mehr über mich
          </Link>
        </div>
      </div>
    </section>
  );
}
