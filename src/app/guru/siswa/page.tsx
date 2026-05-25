import Link from "next/link";
import { Plus, ChevronRight } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { SISWA_KELOLAAN } from "@/lib/dummy";
import { NAV_GURU } from "@/lib/nav";

export default function DaftarSiswa() {
  return (
    <AppShell peran="Guru" warna="bg-mint text-ink" nav={NAV_GURU}>
      <header className="flex flex-wrap justify-between items-end gap-3">
        <div>
          <h1 className="text-3xl font-extrabold text-ink">Daftar Siswa</h1>
          <p className="text-ink-soft">Atur profil aksesibilitas tiap siswa</p>
        </div>
        <button className="btn-ceria btn-primary">
          <Plus size={20} strokeWidth={2.5} aria-hidden /> Tambah Siswa
        </button>
      </header>

      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        {SISWA_KELOLAAN.map((s) => {
          const initials = s.nama
            .split(" ")
            .map((p) => p[0])
            .slice(0, 2)
            .join("")
            .toUpperCase();
          return (
            <Link
              key={s.id}
              href={`/guru/siswa/${s.id}`}
              className="card-ceria flex items-center gap-4 hover:-translate-y-1 transition"
            >
              <span className="h-16 w-16 rounded-2xl bg-gradient-to-br from-sun via-coral to-lavender text-white font-extrabold flex items-center justify-center shrink-0 text-lg" aria-hidden>
                {initials}
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-extrabold text-ink truncate">{s.nama}</p>
                <p className="text-sm text-ink-soft">{s.kelas} · {s.kategori}</p>
                <div className="mt-2 h-2 rounded-full bg-cream-dark overflow-hidden">
                  <div
                    className={`h-full ${s.progressMingguIni >= 70 ? "bg-mint-dark" : s.progressMingguIni >= 50 ? "bg-sun" : "bg-coral"}`}
                    style={{ width: `${s.progressMingguIni}%` }}
                  />
                </div>
              </div>
              <ChevronRight className="text-sun-dark" size={24} strokeWidth={2.5} aria-hidden />
            </Link>
          );
        })}
      </div>
    </AppShell>
  );
}
