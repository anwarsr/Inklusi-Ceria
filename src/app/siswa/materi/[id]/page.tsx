import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, BookOpen, Cloud, Hand, Play, Volume2, Target } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { TTSPlayer } from "@/components/TTSPlayer";
import { MateriIcon } from "@/components/icons";
import { MATERI } from "@/lib/dummy";
import { NAV_SISWA } from "@/lib/nav";

export default async function MateriDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const m = MATERI.find((x) => x.id === id);
  if (!m) notFound();

  return (
    <AppShell peran="Siswa" warna="bg-sun text-ink" nav={NAV_SISWA}>
      <Link href="/siswa/materi" className="inline-flex items-center gap-2 text-ink-soft hover:text-ink font-semibold">
        <ArrowLeft size={18} strokeWidth={2.5} aria-hidden /> Kembali ke Daftar Materi
      </Link>

      <header className="mt-4 flex flex-col sm:flex-row gap-5 items-start">
        <div className="h-28 w-28 rounded-3xl bg-sun/20 flex items-center justify-center">
          <MateriIcon id={m.id} className="text-sun-dark" size={56} />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-ink">{m.judul}</h1>
          <p className="mt-2 text-ink-soft text-lg">{m.ringkasan}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Chip Icon={Clock} text={`${m.durasiMenit} menit`} tone="bg-sun/30 text-sun-dark" />
            <Chip Icon={BookOpen} text={m.jenis.toUpperCase()} tone="bg-mint/30 text-mint-dark" />
            {m.offline && <Chip Icon={Cloud} text="Offline" tone="bg-lavender/30 text-lavender-dark" />}
          </div>
        </div>
      </header>

      {/* Video Multisensori */}
      <section className="mt-8">
        <h2 className="text-xl font-extrabold text-ink mb-3">Video Bahasa Isyarat (SIBI)</h2>
        <div className="card-ceria !p-0 overflow-hidden">
          <div
            className="aspect-video w-full flex items-center justify-center text-ink"
            style={{
              background:
                "radial-gradient(circle at 20% 20%, #FFE0B2 0%, transparent 45%), radial-gradient(circle at 80% 30%, #C7F1E0 0%, transparent 50%), radial-gradient(circle at 50% 90%, #E0D4FA 0%, transparent 55%), linear-gradient(135deg, #FFF6E5 0%, #F0FAF7 100%)",
            }}
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-white shadow-pop mb-4" aria-hidden>
                <Hand className="text-coral" size={48} strokeWidth={2} />
              </div>
              <p className="text-xl font-extrabold text-ink">Video SIBI: {m.judul}</p>
              <p className="text-sm text-ink-soft mt-1">Klik tombol untuk mulai menonton</p>
              <button type="button" className="btn-ceria btn-primary mt-5 text-lg">
                <Play size={22} strokeWidth={2.5} aria-hidden /> Putar Video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TTS */}
      <section className="mt-8">
        <h2 className="text-xl font-extrabold text-ink mb-3 inline-flex items-center gap-2">
          <Volume2 size={22} strokeWidth={2.2} aria-hidden /> Dengar Cerita
        </h2>
        <p className="text-ink-soft mb-4">Tap tombol di samping kalimat untuk mendengarkan satu-satu.</p>
        <TTSPlayer paragraphs={m.paragrafTTS} />
      </section>

      {/* CTA evaluasi */}
      <section className="mt-10 card-ceria !bg-mint/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-extrabold text-ink">Sudah selesai belajar?</h3>
          <p className="text-ink-soft">Yuk, kerjakan tugasnya sekarang!</p>
        </div>
        <Link href="/siswa/evaluasi" className="btn-ceria btn-primary">
          <Target size={18} strokeWidth={2.5} aria-hidden /> Ke Tugasku
        </Link>
      </section>
    </AppShell>
  );
}

import type { LucideIcon } from "lucide-react";

function Chip({ Icon, text, tone }: { Icon: LucideIcon; text: string; tone: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-bold text-sm ${tone}`}>
      <Icon size={14} strokeWidth={2.5} aria-hidden /> {text}
    </span>
  );
}
