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
                Carmen Däbritz, Simple Skin Kosmetik, Zschochersche Straße 57, 04229
                Leipzig. E-Mail: carmen-daebritz@web.de
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg text-charcoal mb-2">
                Kontaktaufnahme
              </h2>
              <p>
                Wenn du per WhatsApp, Telefon oder über das Online-Buchungssystem
                Kontakt aufnimmst, werden deine Angaben ausschließlich zur Bearbeitung
                deiner Anfrage bzw. Terminbuchung verwendet.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg text-charcoal mb-2">
                Spamschutz mit Google reCAPTCHA
              </h2>
              <p>
                Diese Website nutzt Google reCAPTCHA, um Formulareingaben vor Missbrauch
                zu schützen. Dabei werden u. a. IP-Adresse, Aufenthaltsdauer und
                Mausbewegungen analysiert. Rechtsgrundlage ist unser berechtigtes
                Interesse gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO. Anbieter: Google Ireland
                Ltd, Gordon House, Barrow Street, Dublin 4, Irland (
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-sage"
                >
                  Datenschutzerklärung von Google
                </a>
                ).
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg text-charcoal mb-2">
                Webseitenanalyse
              </h2>
              <p>
                Unser Hosting-Anbieter stellt ein Webanalyse-Tool bereit, das anonymisiert
                Besucherdaten erfasst (Seitenaufrufe, Verweildauer, Browsertyp,
                Betriebssystem). IP-Adresse und User-Agent werden dabei verkürzt und
                mittels Hash-Funktion gespeichert. Rechtsgrundlage ist unser berechtigtes
                Interesse gemäß Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden auf
                EU-Servern verarbeitet.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg text-charcoal mb-2">
                Deine Rechte
              </h2>
              <p>
                Du hast jederzeit das Recht auf Auskunft, Berichtigung, Löschung und
                Einschränkung der Verarbeitung deiner personenbezogenen Daten sowie ein
                Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
