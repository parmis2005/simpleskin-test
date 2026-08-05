const galleryImages = [
  1, 2, 4, 5, 9, 10, 16, 19, 21, 22, 25, 26, 28, 30, 34, 37, 39, 41, 42, 44, 48, 49, 50, 51, 54, 55, 58, 62,
];

export default function GallerySection() {
  return (
    <section id="galerie" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[4px] uppercase text-sage mb-4">Galerie</p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-charcoal mb-6">
            Einblicke ins <span className="italic text-sage-dark">Studio</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-charcoal-light max-w-xl mx-auto text-sm leading-relaxed">
            Behandlungen, Produkte und Momente aus dem Alltag bei Simple Skin Leipzig.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((n) => (
            <div
              key={n}
              className="aspect-square overflow-hidden rounded-sm group cursor-pointer"
            >
              <img
                src={`/images/gallery-${n}.jpg`}
                alt="Simple Skin Leipzig – Studio Impression"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
