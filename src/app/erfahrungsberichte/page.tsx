import Navigation from "@/components/Navigation";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Erfahrungsberichte | Simple Skin Leipzig",
  description:
    "Echte Erfahrungsberichte von Kundinnen und Kunden zu Behandlungen bei Simple Skin Leipzig.",
};

export default function Erfahrungsberichte() {
  return (
    <>
      <Navigation />
      <main>
        <TestimonialsSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
