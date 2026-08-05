import Navigation from "@/components/Navigation";
import ProductsSection from "@/components/ProductsSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Produkte | Simple Skin Leipzig",
  description: "REVIDERM & CNC Kosmetik – dermazeutische Wirkstoffkosmetik für zuhause.",
};

export default function Produkte() {
  return (
    <>
      <Navigation />
      <main>
        <ProductsSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
