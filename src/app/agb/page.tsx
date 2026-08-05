import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "AGB | Simple Skin Leipzig",
};

const sections = [
  {
    title: "1. Geltungsbereich & Angebote",
    text: "Diese Allgemeinen Geschäftsbedingungen gelten für alle Behandlungen und Terminvereinbarungen bei Simple Skin Kosmetik, Carmen Däbritz. Unsere Angebote sind freibleibend und unverbindlich.",
  },
  {
    title: "2. Terminvergabe",
    text: "Behandlungen sind für Personen ab 18 Jahren verfügbar. Minderjährige benötigen die Zustimmung eines Erziehungsberechtigten. Ein vereinbarter Termin ist für beide Seiten verbindlich.",
  },
  {
    title: "3. Stornierungen & Nichterscheinen",
    text: "Terminabsagen müssen mindestens einen Werktag vorher erfolgen. Bei Absagen innerhalb von 24 Stunden vor dem Termin wird eine Ausfallgebühr in Höhe von 50 % des Behandlungspreises berechnet. Bei Nichterscheinen ohne Absage wird die volle Behandlungsgebühr fällig.",
  },
  {
    title: "4. Zahlung",
    text: "Rechnungen sind unmittelbar nach der Behandlung fällig – wahlweise in bar oder per EC-Karte.",
  },
  {
    title: "5. Gewährleistung",
    text: "Eine Garantie bezüglich Verträglichkeit und Behandlungserfolg kann nicht gegeben werden, da Hautreaktionen individuell verschieden sind. Mängel sind innerhalb von 10 Tagen nach der Behandlung anzuzeigen.",
  },
  {
    title: "6. Haftung",
    text: "Die Haftung ist auf Vorsatz und grobe Fahrlässigkeit beschränkt. Schadensersatzansprüche verjähren nach drei Jahren.",
  },
  {
    title: "7. Gutscheine & Aktionen",
    text: "Gutscheine können nicht bar ausgezahlt werden und verjähren nach drei Jahren ab Kaufdatum.",
  },
];

export default function AGB() {
  return (
    <>
      <Navigation />
      <main className="bg-cream pt-40 pb-24 px-6 min-h-screen">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl font-light text-charcoal mb-10">
            Allgemeine Geschäftsbedingungen
          </h1>

          <div className="space-y-8 text-charcoal-light leading-relaxed text-sm">
            {sections.map((s) => (
              <section key={s.title}>
                <h2 className="font-heading text-lg text-charcoal mb-2">{s.title}</h2>
                <p>{s.text}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
