"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import BookingModal from "./BookingModal";

type BookingModalContextValue = {
  isOpen: boolean;
  presetTreatment: string | null;
  openBookingModal: (treatment?: string) => void;
  closeBookingModal: () => void;
};

const BookingModalContext = createContext<BookingModalContextValue | null>(null);

export function BookingModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [presetTreatment, setPresetTreatment] = useState<string | null>(null);

  const openBookingModal = useCallback((treatment?: string) => {
    setPresetTreatment(treatment ?? null);
    setIsOpen(true);
  }, []);

  const closeBookingModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo(
    () => ({ isOpen, presetTreatment, openBookingModal, closeBookingModal }),
    [isOpen, presetTreatment, openBookingModal, closeBookingModal]
  );

  return (
    <BookingModalContext.Provider value={value}>
      {children}
      <BookingModal
        isOpen={isOpen}
        presetTreatment={presetTreatment}
        onClose={closeBookingModal}
      />
    </BookingModalContext.Provider>
  );
}

export function useBookingModal() {
  const ctx = useContext(BookingModalContext);
  if (!ctx) {
    throw new Error("useBookingModal must be used within a BookingModalProvider");
  }
  return ctx;
}
