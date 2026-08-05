import Navigation from "@/components/Navigation";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Vorher / Nachher | Simple Skin Leipzig",
  description: "Sichtbare Behandlungsergebnisse bei echten Kundinnen von Simple Skin Leipzig.",
};

export default function VorherNachher() {
  return (
    <>
      <Navigation />
      <main>
        <BeforeAfterSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
