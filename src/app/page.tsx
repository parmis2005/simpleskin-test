import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import USPSection from "@/components/USPSection";
import AboutTeaser from "@/components/AboutTeaser";
import ServicesTeaser from "@/components/ServicesTeaser";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <USPSection />
        <AboutTeaser />
        <ServicesTeaser />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
