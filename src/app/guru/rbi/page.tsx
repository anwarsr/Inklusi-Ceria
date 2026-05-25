import { Eye, Pencil, Target, Clock } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { SISWA_KELOLAAN } from "@/lib/dummy";
import { NAV_GURU } from "@/lib/nav";

export default function GuruRBI() {
  return (
    <AppShell peran="Guru" warna="bg-mint text-ink" nav={NAV_GURU}>
      <header>
        <h1 className="text-3xl font-extrabold text-ink">Rencana Belajar Individual</h1>
        <p className="text-ink-soft">Atur target & strategi belajar per siswa</p>
      </header>

      <div className="mt-6 space-y-4">
        {SISWA_KELOLAAN.map((s) => {
          const initials = s.nama
            .split(" ")
            .map((p) => p[0])
            .slice(0, 2)
            .join("")
            .toUpperCase();
          return (
            <article key={s.id} className="card-ceria">
              <div className="flex flex-wrap items-start gap-4">
                <span className="h-14 w-14 rounded-2xl bg-gradient-to-br from-sun via-coral to-lavender text-white font-extrabold flex items-center justify-center shrink-0" aria-hidden>
                  {initials}
                </span>
                <div className="flex-1 min-w-[200px]">
                  <p className="font-extrabold text-ink">{s.nama}</p>
                  <p className="text-sm text-ink-soft">{s.kelas} · {s.kategori}</p>
                </div>
                <div className="flex gap-2">
                  <button className="btn-ceria btn-ghost !min-h-[44px] !py-2 !px-3 text-sm">
                    <Eye size={16} strokeWidth={2.5} aria-hidden /> Lihat
                  </button>
                  <button className="btn-ceria btn-primary !min-h-[44px] !py-2 !px-3 text-sm">
                    <Pencil size={16} strokeWidth={2.5} aria-hidden /> Edit RBI
                  </button>
                </div>
              </div>
              <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-sm">
                <li className="rounded-xl bg-cream-dark/40 p-3 inline-flex items-center gap-2">
                  <Target size={16} className="text-mint-dark" aria-hidden />
                  Target: Mengenal {s.kategori === "Tunarungu" ? "isyarat dasar" : "angka 1–5"}
                </li>
                <li className="rounded-xl bg-cream-dark/40 p-3 inline-flex items-center gap-2">
                  <Clock size={16} className="text-mint-dark" aria-hidden />
                  Frekuensi: 3× seminggu, 15 menit
                </li>
              </ul>
            </article>
          );
        })}
      </div>
    </AppShell>
  );
}
