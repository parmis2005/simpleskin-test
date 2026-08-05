import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Kontakt | Simple Skin Leipzig",
  description:
    "Zschockersche Straße 57, 04229 Leipzig-Plagwitz. WhatsApp: 0176 / 70314898. Termine online buchen.",
};

export default function Kontakt() {
  return (
    <>
      <Navigation />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
