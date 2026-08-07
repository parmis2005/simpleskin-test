export type BookableTreatment = {
  name: string;
  price: string;
  duration?: string;
};

export const bookableTreatments: BookableTreatment[] = [
  { name: "First-Time-Behandlung (Neukunden)", price: "ab 165 €", duration: "90 Min." },
  { name: "Digitale Hautanalyse (OBSERV®)", price: "auf Anfrage" },
  { name: "CellJET clear skin", price: "ab 145 €", duration: "70 Min." },
  { name: "Clear skin, cool down (Cold Plasma)", price: "ab 122 €", duration: "60 Min." },
  { name: "Clear skin micro needling", price: "ab 159 €", duration: "60 Min." },
  { name: "Derma Konzept S.O.S.", price: "ab 510 €", duration: "6 Behandlungen" },
  { name: "CellJET calm skin", price: "ab 145 €", duration: "70 Min." },
  { name: "Gentle skin, calm down", price: "ab 122 €", duration: "70 Min." },
  { name: "Gentle skin, supermoist", price: "ab 122 €", duration: "60 Min." },
  { name: "Derma Konzept S.O.S. „Gentle skin“", price: "ab 490 €", duration: "6 Behandlungen" },
  { name: "CellJET Glow Skin", price: "ab 145 €", duration: "70 Min." },
  { name: "Renew Skin, Brightness", price: "ab 127 €" },
  { name: "Renew Skin Complete+", price: "ab 147 €", duration: "70 Min." },
  { name: "Micro Needling Intense", price: "ab 159–183 €", duration: "60–80 Min." },
  { name: "Wedding Countdown (3-Monats-Programm)", price: "ab 710 €" },
  { name: "Sonstiges / Beratungstermin", price: "auf Anfrage" },
];
