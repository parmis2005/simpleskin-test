import Navigation from "@/components/Navigation";
import AnalysenSection from "@/components/AnalysenSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Analysen & Gesundheitsberatung | Simple Skin Leipzig",
  description:
    "Darm-Check, Nährstoffanalyse und Kombi-Analyse als Grundlage für ganzheitliche Hautgesundheit bei Simple Skin Leipzig.",
};

export default function Analysen() {
  return (
    <>
      <Navigation />
      <main>
        <AnalysenSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
