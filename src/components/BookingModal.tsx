"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { bookableTreatments } from "@/lib/treatments";

const SALON_EMAIL = "carmen-daebritz@web.de";

type BookingModalProps = {
  isOpen: boolean;
  presetTreatment: string | null;
  onClose: () => void;
};

function todayISO() {
  const d = new Date();
  const offset = d.getTimezoneOffset();
  const local = new Date(d.getTime() - offset * 60 * 1000);
  return local.toISOString().slice(0, 10);
}

export default function BookingModal({ isOpen, presetTreatment, onClose }: BookingModalProps) {
  const [treatment, setTreatment] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTreatment(presetTreatment ?? "");
      setSent(false);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, presetTreatment]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const selected = bookableTreatments.find((t) => t.name === treatment);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const dateLabel = date
      ? new Date(`${date}T00:00:00`).toLocaleDateString("de-DE", {
          weekday: "long",
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
      : "-";

    const bodyLines = [
      `Behandlung: ${treatment}${selected ? ` (${selected.price})` : ""}`,
      `Wunschtermin: ${dateLabel}, ${time || "-"} Uhr`,
      "",
      `Name: ${name}`,
      `Telefon: ${phone}`,
      `E-Mail: ${email}`,
      message ? `\nNachricht:\n${message}` : "",
    ];

    const subject = `Terminanfrage – ${treatment || "Simple Skin"}`;
    const body = bodyLines.join("\n");
    const mailtoUrl = `mailto:${SALON_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setSent(true);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-charcoal/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative bg-cream w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl rounded-sm">
        <button
          onClick={onClose}
          aria-label="Schließen"
          className="absolute top-4 right-4 text-charcoal-light hover:text-charcoal transition-colors"
        >
          <X size={22} />
        </button>

        <div className="p-8 sm:p-10">
          {!sent ? (
            <>
              <p className="text-xs tracking-[4px] uppercase text-sage mb-3">
                Terminanfrage
              </p>
              <h2
                id="booking-modal-title"
                className="font-heading text-3xl font-light text-charcoal mb-2"
              >
                Termin <span className="italic text-sage-dark">buchen</span>
              </h2>
              <p className="text-charcoal-light text-sm leading-relaxed mb-8">
                Wähle Behandlung, Tag und Uhrzeit sowie deine Kontaktdaten. Nach dem
                Absenden öffnet sich eine E-Mail an Simple Skin – wir bestätigen deinen
                Wunschtermin so schnell wie möglich.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="bm-treatment"
                    className="block text-xs tracking-[2px] uppercase text-charcoal-light mb-2"
                  >
                    Behandlung
                  </label>
                  <select
                    id="bm-treatment"
                    required
                    value={treatment}
                    onChange={(e) => setTreatment(e.target.value)}
                    className="w-full bg-white border border-sand px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-sage"
                  >
                    <option value="" disabled>
                      Behandlung wählen …
                    </option>
                    {bookableTreatments.map((t) => (
                      <option key={t.name} value={t.name}>
                        {t.name} — {t.price}
                        {t.duration ? ` · ${t.duration}` : ""}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="bm-date"
                      className="block text-xs tracking-[2px] uppercase text-charcoal-light mb-2"
                    >
                      Tag
                    </label>
                    <input
                      id="bm-date"
                      type="date"
                      required
                      min={todayISO()}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-white border border-sand px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-sage"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="bm-time"
                      className="block text-xs tracking-[2px] uppercase text-charcoal-light mb-2"
                    >
                      Uhrzeit
                    </label>
                    <input
                      id="bm-time"
                      type="time"
                      required
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-white border border-sand px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-sage"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="bm-name"
                    className="block text-xs tracking-[2px] uppercase text-charcoal-light mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="bm-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Vor- und Nachname"
                    className="w-full bg-white border border-sand px-4 py-3 text-sm text-charcoal placeholder:text-charcoal-light/40 focus:outline-none focus:border-sage"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="bm-phone"
                      className="block text-xs tracking-[2px] uppercase text-charcoal-light mb-2"
                    >
                      Telefon
                    </label>
                    <input
                      id="bm-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="0176 / …"
                      className="w-full bg-white border border-sand px-4 py-3 text-sm text-charcoal placeholder:text-charcoal-light/40 focus:outline-none focus:border-sage"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="bm-email"
                      className="block text-xs tracking-[2px] uppercase text-charcoal-light mb-2"
                    >
                      E-Mail
                    </label>
                    <input
                      id="bm-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="du@beispiel.de"
                      className="w-full bg-white border border-sand px-4 py-3 text-sm text-charcoal placeholder:text-charcoal-light/40 focus:outline-none focus:border-sage"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="bm-message"
                    className="block text-xs tracking-[2px] uppercase text-charcoal-light mb-2"
                  >
                    Nachricht (optional)
                  </label>
                  <textarea
                    id="bm-message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Anmerkungen zu deinem Anliegen …"
                    className="w-full bg-white border border-sand px-4 py-3 text-sm text-charcoal placeholder:text-charcoal-light/40 focus:outline-none focus:border-sage resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full text-center">
                  Terminanfrage abschicken
                </button>
                <p className="text-charcoal-light/60 text-xs text-center leading-relaxed">
                  Die Anfrage wird per E-Mail an {SALON_EMAIL} gesendet. Dein Termin
                  gilt erst nach Bestätigung durch Simple Skin als fest gebucht.
                </p>
              </form>
            </>
          ) : (
            <div className="text-center py-6">
              <p className="text-xs tracking-[4px] uppercase text-sage mb-3">
                Fast geschafft
              </p>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">
                Dein E-Mail-Programm öffnet sich …
              </h2>
              <p className="text-charcoal-light text-sm leading-relaxed mb-8">
                Bitte sende die vorausgefüllte E-Mail ab, um deine Terminanfrage für{" "}
                <span className="text-sage-dark font-semibold">{treatment}</span> am{" "}
                {date && new Date(`${date}T00:00:00`).toLocaleDateString("de-DE")}
                {time ? `, ${time} Uhr` : ""} zu übermitteln. Falls sich nichts
                geöffnet hat, schreib uns direkt an{" "}
                <a href={`mailto:${SALON_EMAIL}`} className="text-sage underline">
                  {SALON_EMAIL}
                </a>{" "}
                oder per{" "}
                <a
                  href="https://wa.me/4917670314898"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage underline"
                >
                  WhatsApp
                </a>
                .
              </p>
              <button onClick={onClose} className="btn-outline-dark">
                Schließen
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
