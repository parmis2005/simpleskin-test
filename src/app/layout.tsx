import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Simple Skin Leipzig | Dermazeutische Kosmetik & Hautgesundheit",
  description:
    "Carmen Däbritz, Kosmetikmeisterin mit über 12 Jahren Erfahrung in Leipzig-Plagwitz. Dermazeutische Wirkstoffkosmetik, digitale Hautanalyse und ganzheitliche Gesundheitsberatung für nachhaltige Hautgesundheit.",
  keywords:
    "Kosmetik Leipzig, Simple Skin, Carmen Däbritz, Hautanalyse, Anti-Aging, Akne Behandlung, Rosazea, dermazeutische Kosmetik, Gesundheitsberatung",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${playfair.variable} ${lato.variable}`}>
      <body>{children}</body>
    </html>
  );
}
