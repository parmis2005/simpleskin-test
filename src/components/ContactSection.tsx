import { MapPin, MessageCircle, Clock, Bus } from "lucide-react";

const hours = [
  { day: "Dienstag – Mittwoch", time: "13:00 – 19:00 Uhr" },
  { day: "Donnerstag", time: "10:00 – 18:00 Uhr" },
  { day: "Freitag", time: "09:00 – 17:00 Uhr" },
  { day: "Sonst", time: "Nach Vereinbarung" },
];

export default function ContactSection() {
  return (
    <section id="kontakt" className="bg-charcoal pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[4px] uppercase text-sage mb-4">
            Kontakt & Anfahrt
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-white mb-4">
            Ich freue mich{" "}
            <span className="italic text-gold/80">auf dich</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Address */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <MapPin size={18} className="text-sage flex-shrink-0" />
              <h3 className="font-heading text-lg text-white">Adresse</h3>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Zschockersche Straße 57
              <br />
              04229 Leipzig-Plagwitz
            </p>
            <div className="flex items-start gap-2 mt-4">
              <Bus size={14} className="text-sage/60 mt-0.5 flex-shrink-0" />
              <p className="text-white/50 text-xs leading-relaxed">
                Tram 3 / Bus 74 · Haltestelle Elsterpassage
                <br />
                Kostenloses Parken in der Elsterpassage
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Zschockersche+Str.+57+04229+Leipzig"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-xs tracking-[2px] uppercase text-sage hover:text-sage/70 transition-colors border-b border-sage/40 pb-0.5"
            >
              Route planen
            </a>
          </div>

          {/* Contact */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle size={18} className="text-sage flex-shrink-0" />
              <h3 className="font-heading text-lg text-white">Kontakt</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MessageCircle size={14} className="text-sage/60" />
                <a
                  href="https://wa.me/4917670314898"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 text-sm hover:text-white transition-colors"
                >
                  0176 / 70314898 (WhatsApp)
                </a>
              </div>
            </div>
            <p className="text-white/40 text-xs mt-4 leading-relaxed">
              Am besten erreichst du mich per WhatsApp. Terminvergabe bitte
              ausschließlich online über den Buchungslink.
            </p>
            <a
              href="https://www.studiobookr.com/simple-skin-kosmetik-69919#/book"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-xs tracking-[2px] uppercase text-sage hover:text-sage/70 transition-colors border-b border-sage/40 pb-0.5"
            >
              Online Termin buchen
            </a>
          </div>

          {/* Hours */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Clock size={18} className="text-sage flex-shrink-0" />
              <h3 className="font-heading text-lg text-white">Öffnungszeiten</h3>
            </div>
            <div className="space-y-3">
              {hours.map(({ day, time }) => (
                <div key={day} className="flex justify-between gap-4">
                  <span className="text-white/50 text-sm">{day}</span>
                  <span className="text-white/80 text-sm text-right">{time}</span>
                </div>
              ))}
            </div>
            <p className="text-white/40 text-xs mt-4 italic">
              Termine auch außerhalb der Öffnungszeiten nach Absprache möglich.
            </p>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 aspect-[16/6] bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden rounded-sm">
          <iframe
            src="https://www.google.com/maps?q=Zschockersche+Stra%C3%9Fe+57,+04229+Leipzig&output=embed"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Simple Skin Leipzig Standort"
          />
        </div>
      </div>
    </section>
  );
}
