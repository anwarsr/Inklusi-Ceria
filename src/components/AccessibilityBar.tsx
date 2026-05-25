"use client";

import { Type, Contrast, Image as ImageLucide } from "lucide-react";
import { useA11y } from "./AccessibilityProvider";

export function AccessibilityBar() {
  const { textSize, contrast, pictogram, cycleTextSize, toggleContrast, togglePictogram } = useA11y();

  const sizeLabel = textSize === "normal" ? "A" : textSize === "large" ? "A+" : "A++";

  return (
    <div
      role="region"
      aria-label="Pengaturan aksesibilitas"
      className="fixed bottom-4 right-4 z-50 flex gap-2 rounded-full bg-white p-2 shadow-lg border-2 border-cream-dark"
    >
      <button
        type="button"
        onClick={cycleTextSize}
        aria-label={`Ukuran teks saat ini ${textSize}. Klik untuk ubah ukuran teks.`}
        title="Ukuran teks"
        className="h-12 w-12 rounded-full bg-cream-dark text-ink hover:bg-sun transition flex items-center justify-center gap-0.5"
      >
        <Type size={16} strokeWidth={2.5} aria-hidden />
        <span className="font-extrabold text-xs">{sizeLabel}</span>
      </button>
      <button
        type="button"
        onClick={toggleContrast}
        aria-pressed={contrast === "high"}
        aria-label="Mode kontras tinggi"
        title="Mode kontras tinggi"
        className={`h-12 w-12 rounded-full transition flex items-center justify-center ${contrast === "high" ? "bg-ink text-white" : "bg-cream-dark text-ink hover:bg-sun"}`}
      >
        <Contrast size={22} strokeWidth={2.2} aria-hidden />
      </button>
      <button
        type="button"
        onClick={togglePictogram}
        aria-pressed={pictogram === "on"}
        aria-label="Mode piktogram (ikon di samping teks)"
        title="Mode piktogram"
        className={`h-12 w-12 rounded-full transition flex items-center justify-center ${pictogram === "on" ? "bg-lavender-dark text-white" : "bg-cream-dark text-ink hover:bg-sun"}`}
      >
        <ImageLucide size={22} strokeWidth={2.2} aria-hidden />
      </button>
    </div>
  );
}
