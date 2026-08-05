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
                Simple Skin – Kosmetik & Hautgesundheit
                <br />
                Zschockersche Straße 57
                <br />
                04229 Leipzig
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg text-charcoal mb-2">Kontakt</h2>
              <p>WhatsApp / Telefon: 0176 / 70314898</p>
            </section>

            <section>
              <h2 className="font-heading text-lg text-charcoal mb-2">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p>Carmen Däbritz, Anschrift wie oben.</p>
            </section>

            <p className="text-xs text-charcoal-light/60 pt-6">
              Bitte ergänze diese Seite um deine vollständigen, rechtlich erforderlichen
              Angaben (z. B. USt-IdNr., Berufsbezeichnung, zuständige Kammer, EU-Streitschlichtung).
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
