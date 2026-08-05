import Navigation from "@/components/Navigation";
import ServicesSection from "@/components/ServicesSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Behandlungen | Simple Skin Leipzig",
  description:
    "First-Time-Behandlung, digitale Hautanalyse, Akne & Narben, empfindliche Haut, Anti-Aging und Wedding Countdown bei Simple Skin Leipzig.",
};

export default function Behandlungen() {
  return (
    <>
      <Navigation />
      <main>
        <ServicesSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
