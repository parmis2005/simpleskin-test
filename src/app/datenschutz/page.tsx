import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Datenschutz | Simple Skin Leipzig",
};

export default function Datenschutz() {
  return (
    <>
      <Navigation />
      <main className="bg-cream pt-40 pb-24 px-6 min-h-screen">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl font-light text-charcoal mb-10">
            Datenschutzerklärung
          </h1>

          <div className="space-y-6 text-charcoal-light leading-relaxed text-sm">
            <section>
              <h2 className="font-heading text-lg text-charcoal mb-2">
                Verantwortlicher
              </h2>
              <p>
                Carmen Däbritz, Simple Skin – Kosmetik &amp; Hautgesundheit,
                Zschockersche Straße 57, 04229 Leipzig.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg text-charcoal mb-2">
                Kontaktaufnahme
              </h2>
              <p>
                Wenn du per WhatsApp oder über das Online-Buchungssystem Kontakt
                aufnimmst, werden deine Angaben ausschließlich zur Bearbeitung deiner
                Anfrage bzw. Terminbuchung verwendet.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg text-charcoal mb-2">
                Deine Rechte
              </h2>
              <p>
                Du hast jederzeit das Recht auf Auskunft, Berichtigung, Löschung und
                Einschränkung der Verarbeitung deiner personenbezogenen Daten.
              </p>
            </section>

            <p className="text-xs text-charcoal-light/60 pt-6">
              Bitte ergänze diese Seite um eine vollständige, rechtssichere
              Datenschutzerklärung (z. B. zu eingesetzten Diensten wie
              Terminbuchungssystem, Google Maps, Cookies etc.).
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
