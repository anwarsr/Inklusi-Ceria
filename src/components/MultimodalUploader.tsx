"use client";

import { useEffect, useRef, useState } from "react";
import { Mic, Camera, Video, Square, RotateCcw, Send, CheckCircle2, Circle } from "lucide-react";

type Mode = "rekam-suara" | "foto" | "video";

export function MultimodalUploader({ mode }: { mode: Mode }) {
  const [status, setStatus] = useState<"idle" | "recording" | "done">("idle");
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    return () => {
      if (blobUrl) URL.revokeObjectURL(blobUrl);
      if (photo) URL.revokeObjectURL(photo);
      if (mediaRecorderRef.current?.state === "recording") {
        mediaRecorderRef.current.stop();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startAudio = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mr = new MediaRecorder(stream);
      chunksRef.current = [];
      mr.ondataavailable = (e) => chunksRef.current.push(e.data);
      mr.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        setBlobUrl(URL.createObjectURL(blob));
        setStatus("done");
        stream.getTracks().forEach((t) => t.stop());
      };
      mr.start();
      mediaRecorderRef.current = mr;
      setStatus("recording");
    } catch {
      alert("Tidak bisa akses mikrofon. Mohon beri izin di pengaturan browser.");
    }
  };

  const stopAudio = () => {
    mediaRecorderRef.current?.stop();
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const url = URL.createObjectURL(f);
    if (mode === "foto") setPhoto(url);
    else setBlobUrl(url);
    setStatus("done");
  };

  const reset = () => {
    if (blobUrl) URL.revokeObjectURL(blobUrl);
    if (photo) URL.revokeObjectURL(photo);
    setBlobUrl(null);
    setPhoto(null);
    setStatus("idle");
  };

  if (mode === "rekam-suara") {
    return (
      <div className="card-ceria text-center">
        {status === "idle" && (
          <>
            <div className="mx-auto h-28 w-28 rounded-full bg-sun/30 flex items-center justify-center mb-4" aria-hidden>
              <Mic className="text-sun-dark" size={56} strokeWidth={2} />
            </div>
            <p className="text-lg text-ink mb-6">Tekan tombol bawah lalu mulai bicara</p>
            <button type="button" onClick={startAudio} className="btn-ceria btn-primary text-xl !min-h-[72px] px-10">
              <Mic size={24} strokeWidth={2.5} aria-hidden /> Mulai Rekam
            </button>
          </>
        )}
        {status === "recording" && (
          <>
            <div className="mx-auto h-28 w-28 rounded-full bg-coral/40 flex items-center justify-center mb-4 animate-pulse" aria-hidden>
              <Circle className="text-coral" size={56} strokeWidth={3} fill="currentColor" />
            </div>
            <p className="text-lg text-coral font-bold mb-6">Sedang merekam...</p>
            <button type="button" onClick={stopAudio} className="btn-ceria !bg-coral text-white text-xl !min-h-[72px] px-10">
              <Square size={24} strokeWidth={2.5} aria-hidden /> Selesai
            </button>
          </>
        )}
        {status === "done" && blobUrl && (
          <>
            <div className="mx-auto h-28 w-28 rounded-full bg-mint/40 flex items-center justify-center mb-4" aria-hidden>
              <CheckCircle2 className="text-mint-dark" size={56} strokeWidth={2.2} />
            </div>
            <p className="text-lg font-bold text-mint-dark mb-4">Rekaman selesai!</p>
            <audio src={blobUrl} controls className="mx-auto" />
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <button type="button" onClick={reset} className="btn-ceria btn-ghost">
                <RotateCcw size={20} strokeWidth={2.5} aria-hidden /> Rekam Ulang
              </button>
              <button type="button" onClick={() => alert("Tugas terkirim ke guru!")} className="btn-ceria btn-primary">
                <Send size={20} strokeWidth={2.5} aria-hidden /> Kirim ke Guru
              </button>
            </div>
          </>
        )}
      </div>
    );
  }

  if (mode === "foto") {
    return (
      <div className="card-ceria text-center">
        {!photo ? (
          <>
            <div className="mx-auto h-28 w-28 rounded-full bg-sun/30 flex items-center justify-center mb-4" aria-hidden>
              <Camera className="text-sun-dark" size={56} strokeWidth={2} />
            </div>
            <p className="text-lg text-ink mb-6">Pilih foto dari galeri atau ambil pakai kamera</p>
            <label className="btn-ceria btn-primary cursor-pointer text-xl !min-h-[72px] px-10">
              <Camera size={24} strokeWidth={2.5} aria-hidden /> Pilih / Ambil Foto
              <input type="file" accept="image/*" capture="environment" onChange={handleFile} className="sr-only" />
            </label>
          </>
        ) : (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photo} alt="Pratinjau foto tugas" className="mx-auto max-h-80 rounded-2xl border-2 border-cream-dark" />
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <button type="button" onClick={reset} className="btn-ceria btn-ghost">
                <RotateCcw size={20} strokeWidth={2.5} aria-hidden /> Ganti Foto
              </button>
              <button type="button" onClick={() => alert("Tugas terkirim ke guru!")} className="btn-ceria btn-primary">
                <Send size={20} strokeWidth={2.5} aria-hidden /> Kirim ke Guru
              </button>
            </div>
          </>
        )}
      </div>
    );
  }

  // video
  return (
    <div className="card-ceria text-center">
      {!blobUrl ? (
        <>
          <div className="mx-auto h-28 w-28 rounded-full bg-sun/30 flex items-center justify-center mb-4" aria-hidden>
            <Video className="text-sun-dark" size={56} strokeWidth={2} />
          </div>
          <p className="text-lg text-ink mb-6">Pilih video dari galeri atau rekam langsung</p>
          <label className="btn-ceria btn-primary cursor-pointer text-xl !min-h-[72px] px-10">
            <Video size={24} strokeWidth={2.5} aria-hidden /> Pilih / Rekam Video
            <input type="file" accept="video/*" capture="environment" onChange={handleFile} className="sr-only" />
          </label>
        </>
      ) : (
        <>
          <video src={blobUrl} controls className="mx-auto max-h-80 rounded-2xl border-2 border-cream-dark" />
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <button type="button" onClick={reset} className="btn-ceria btn-ghost">
              <RotateCcw size={20} strokeWidth={2.5} aria-hidden /> Ganti Video
            </button>
            <button type="button" onClick={() => alert("Tugas terkirim ke guru!")} className="btn-ceria btn-primary">
              <Send size={20} strokeWidth={2.5} aria-hidden /> Kirim ke Guru
            </button>
          </div>
        </>
      )}
    </div>
  );
}
