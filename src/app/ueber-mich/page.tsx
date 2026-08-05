import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Über Mich | Simple Skin Leipzig",
  description:
    "Carmen Däbritz – Kosmetikmeisterin und TÜV-zertifizierte Gesundheitsberaterin mit 12 Jahren Erfahrung in Leipzig-Plagwitz.",
};

export default function UeberMich() {
  return (
    <>
      <Navigation />
      <main>
        <AboutSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
