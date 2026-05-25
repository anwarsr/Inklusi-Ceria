import Link from "next/link";
import { Star, CheckCircle2, Flame, Cloud, Clock, Play, ChevronRight, Hand } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { MateriIcon, TugasIcon } from "@/components/icons";
import { MATERI, TUGAS, SISWA_AKTIF } from "@/lib/dummy";
import { NAV_SISWA } from "@/lib/nav";

export default function DashboardSiswa() {
  const totalTugas = TUGAS.length;
  const selesai = TUGAS.filter((t) => t.selesai).length;

  return (
    <AppShell peran="Siswa" warna="bg-sun text-ink" nav={NAV_SISWA}>
      {/* Sapaan */}
      <section className="card-ceria !bg-gradient-to-br !from-sun/30 !to-coral/20">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-2xl bg-white shadow-sm flex items-center justify-center" aria-hidden>
            <Hand className="text-sun-dark" size={36} strokeWidth={2} />
          </div>
          <div>
            <p className="text-ink-soft">Halo,</p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-ink">{SISWA_AKTIF.nama.split(" ")[0]}!</h1>
            <p className="mt-1 text-ink">Yuk, kita belajar hari ini!</p>
          </div>
        </div>
      </section>

      {/* Stat */}
      <section className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
        <StatCard Icon={Star} value={String(SISWA_AKTIF.progressMingguIni)} label="Bintang Minggu Ini" tone="bg-sun/30 text-sun-dark" />
        <StatCard Icon={CheckCircle2} value={`${selesai}/${totalTugas}`} label="Tugas Selesai" tone="bg-mint/30 text-mint-dark" />
        <StatCard Icon={Flame} value="5" label="Hari Belajar Berturut" tone="bg-coral/30 text-coral" wide />
      </section>

      {/* Pelajaran hari ini */}
      <section className="mt-8">
        <h2 className="text-2xl font-extrabold text-ink mb-4">Pelajaran Hari Ini</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {MATERI.slice(0, 4).map((m) => (
            <Link
              key={m.id}
              href={`/siswa/materi/${m.id}`}
              className="card-ceria flex items-center gap-4 hover:-translate-y-1 transition focus-visible:ring-4 focus-visible:ring-sun"
              aria-label={`Buka materi ${m.judul}, durasi ${m.durasiMenit} menit`}
            >
              <div className="h-20 w-20 rounded-2xl bg-sun/20 flex items-center justify-center shrink-0">
                <MateriIcon id={m.id} className="text-sun-dark" size={36} />
              </div>
              <div className="flex-1">
                <p className="text-xl font-extrabold text-ink">{m.judul}</p>
                <p className="text-sm text-ink-soft mt-1 inline-flex items-center gap-1">
                  <Clock size={14} aria-hidden /> {m.durasiMenit} menit
                </p>
                {m.offline && (
                  <span className="inline-flex items-center gap-1 mt-2 text-xs font-bold text-mint-dark bg-mint/30 px-2 py-1 rounded-full">
                    <Cloud size={12} strokeWidth={2.5} aria-hidden /> Tersedia offline
                  </span>
                )}
              </div>
              <span className="h-12 w-12 rounded-full bg-sun flex items-center justify-center text-ink shrink-0">
                <Play size={22} strokeWidth={2.5} aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Tugas */}
      <section className="mt-8">
        <h2 className="text-2xl font-extrabold text-ink mb-4">Tugasku</h2>
        <div className="grid gap-3">
          {TUGAS.map((t) => (
            <Link
              key={t.id}
              href={`/siswa/evaluasi/${t.id}`}
              className={`card-ceria flex items-center gap-4 ${t.selesai ? "opacity-60" : "hover:-translate-y-1"} transition`}
            >
              <div className="h-14 w-14 rounded-2xl bg-coral/20 flex items-center justify-center shrink-0">
                <TugasIcon jenis={t.jenis} className="text-coral" size={28} />
              </div>
              <div className="flex-1">
                <p className="text-lg font-extrabold text-ink">{t.judul}</p>
                <p className="text-sm text-ink-soft inline-flex items-center gap-1">
                  <Clock size={14} aria-hidden /> {t.tenggat}
                </p>
              </div>
              {t.selesai ? (
                <CheckCircle2 className="text-mint-dark" size={32} strokeWidth={2.2} aria-label="Sudah selesai" />
              ) : (
                <span className="btn-ceria btn-primary">
                  Kerjakan
                  <ChevronRight size={20} strokeWidth={2.5} aria-hidden />
                </span>
              )}
            </Link>
          ))}
        </div>
      </section>
    </AppShell>
  );
}

import type { LucideIcon } from "lucide-react";

function StatCard({
  Icon,
  value,
  label,
  tone,
  wide,
}: {
  Icon: LucideIcon;
  value: string;
  label: string;
  tone: string;
  wide?: boolean;
}) {
  return (
    <div className={`card-ceria text-center ${wide ? "col-span-2 sm:col-span-1" : ""}`}>
      <div className={`mx-auto h-14 w-14 rounded-2xl ${tone} flex items-center justify-center`} aria-hidden>
        <Icon size={28} strokeWidth={2.2} />
      </div>
      <p className="mt-3 text-3xl font-extrabold text-ink">{value}</p>
      <p className="text-sm text-ink-soft font-bold">{label}</p>
    </div>
  );
}
