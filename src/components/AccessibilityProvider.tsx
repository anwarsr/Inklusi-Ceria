"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

type TextSize = "normal" | "large" | "xlarge";
type Contrast = "normal" | "high";
type Pictogram = "off" | "on";

interface A11yState {
  textSize: TextSize;
  contrast: Contrast;
  pictogram: Pictogram;
  setTextSize: (v: TextSize) => void;
  setContrast: (v: Contrast) => void;
  setPictogram: (v: Pictogram) => void;
  cycleTextSize: () => void;
  toggleContrast: () => void;
  togglePictogram: () => void;
}

const Ctx = createContext<A11yState | null>(null);

const STORAGE_KEY = "inklusi-ceria-a11y";

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [textSize, setTextSize] = useState<TextSize>("normal");
  const [contrast, setContrast] = useState<Contrast>("normal");
  const [pictogram, setPictogram] = useState<Pictogram>("off");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const s = JSON.parse(raw);
        if (s.textSize) setTextSize(s.textSize);
        if (s.contrast) setContrast(s.contrast);
        if (s.pictogram) setPictogram(s.pictogram);
      }
    } catch {}
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.textsize = textSize;
    root.dataset.contrast = contrast;
    root.dataset.pictogram = pictogram;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ textSize, contrast, pictogram }));
    } catch {}
  }, [textSize, contrast, pictogram]);

  const cycleTextSize = useCallback(() => {
    setTextSize((s) => (s === "normal" ? "large" : s === "large" ? "xlarge" : "normal"));
  }, []);
  const toggleContrast = useCallback(() => {
    setContrast((c) => (c === "normal" ? "high" : "normal"));
  }, []);
  const togglePictogram = useCallback(() => {
    setPictogram((p) => (p === "off" ? "on" : "off"));
  }, []);

  return (
    <Ctx.Provider
      value={{ textSize, contrast, pictogram, setTextSize, setContrast, setPictogram, cycleTextSize, toggleContrast, togglePictogram }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useA11y() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useA11y must be used inside AccessibilityProvider");
  return ctx;
}
