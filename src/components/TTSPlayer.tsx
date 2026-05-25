"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, Square, Play, Pause } from "lucide-react";

interface Props {
  paragraphs: string[];
}

export function TTSPlayer({ paragraphs }: Props) {
  const [active, setActive] = useState<number | null>(null);
  const [supported, setSupported] = useState(true);
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setSupported(false);
    }
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const speak = (idx: number, text: string) => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "id-ID";
    u.rate = 0.95;
    u.pitch = 1.05;
    u.onend = () => setActive(null);
    u.onerror = () => setActive(null);
    utterRef.current = u;
    window.speechSynthesis.speak(u);
    setActive(idx);
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setActive(null);
  };

  const playAll = () => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    paragraphs.forEach((text, i) => {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "id-ID";
      u.rate = 0.95;
      u.pitch = 1.05;
      u.onstart = () => setActive(i);
      if (i === paragraphs.length - 1) u.onend = () => setActive(null);
      window.speechSynthesis.speak(u);
    });
  };

  if (!supported) {
    return (
      <div className="card-ceria !bg-cream-dark/40 text-ink-soft">
        Browser kamu belum mendukung pembaca suara. Coba pakai Chrome, Edge, atau Safari terbaru.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        <button type="button" onClick={playAll} className="btn-ceria btn-primary" aria-label="Putar semua narasi">
          <Volume2 size={20} strokeWidth={2.5} aria-hidden /> Dengar Semua
        </button>
        <button
          type="button"
          onClick={stop}
          className="btn-ceria btn-ghost"
          aria-label="Hentikan suara"
          disabled={active === null}
        >
          <Square size={20} strokeWidth={2.5} aria-hidden /> Berhenti
        </button>
      </div>

      <ol className="space-y-3">
        {paragraphs.map((p, i) => {
          const isActive = active === i;
          return (
            <li
              key={i}
              className={`card-ceria flex items-start gap-4 transition ${
                isActive ? "!bg-sun/30 ring-4 ring-sun" : ""
              }`}
            >
              <button
                type="button"
                onClick={() => (isActive ? stop() : speak(i, p))}
                aria-label={isActive ? `Hentikan kalimat ${i + 1}` : `Dengar kalimat ${i + 1}`}
                className="shrink-0 h-14 w-14 rounded-full bg-sun text-ink flex items-center justify-center hover:bg-sun-dark transition"
              >
                {isActive ? <Pause size={22} strokeWidth={2.5} aria-hidden /> : <Play size={22} strokeWidth={2.5} aria-hidden />}
              </button>
              <p className="text-lg leading-relaxed text-ink pt-2">{p}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
