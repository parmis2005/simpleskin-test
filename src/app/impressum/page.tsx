import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Impressum | Simple Skin Leipzig",
};

export default function Impressum() {
  return (
    <>
      <Navigation />
      <main className="bg-cream pt-40 pb-24 px-6 min-h-screen">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl font-light text-charcoal mb-10">
            Impressum
          </h1>

          <div className="space-y-6 text-charcoal-light leading-relaxed text-sm">
            <section>
              <h2 className="font-heading text-lg text-charcoal mb-2">Angaben gemäß § 5 TMG</h2>
              <p>
                Carmen Däbritz
                <br />
                Simple Skin Kosmetik
                <br />
                Zschochersche Straße 57
                <br />
                04229 Leipzig
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg text-charcoal mb-2">Kontakt</h2>
              <p>
                Telefon: 0341 4926110
                <br />
                WhatsApp: 0176 / 70314898
                <br />
                E-Mail: carmen-daebritz@web.de
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg text-charcoal mb-2">
                Berufsbezeichnung und berufsrechtliche Regelungen
              </h2>
              <p>
                Berufsbezeichnung: Kosmetikerin
                <br />
                Zuständige Kammer: Handwerkskammer zu Leipzig
                <br />
                Verliehen in: Deutschland
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg text-charcoal mb-2">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p>Carmen Däbritz, Anschrift wie oben.</p>
            </section>

            <section>
              <h2 className="font-heading text-lg text-charcoal mb-2">
                EU-Streitschlichtung
              </h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
                (OS) bereit. Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                teilzunehmen.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
