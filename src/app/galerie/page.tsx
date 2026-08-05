import Navigation from "@/components/Navigation";
import GallerySection from "@/components/GallerySection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Galerie | Simple Skin Leipzig",
  description: "Einblicke ins Studio, Behandlungen und Produkte von Simple Skin Leipzig.",
};

export default function Galerie() {
  return (
    <>
      <Navigation />
      <main>
        <GallerySection />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
