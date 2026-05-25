import Link from "next/link";
import {
  Users,
  TrendingUp,
  BookMarked,
  AlertCircle,
  Plus,
  Type,
  Contrast,
  ImageIcon,
  Cloud,
  Clock,
  type LucideIcon,
} from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { MateriIcon } from "@/components/icons";
import { SISWA_KELOLAAN, MATERI } from "@/lib/dummy";
import { NAV_GURU } from "@/lib/nav";

export default function DashboardGuru() {
  const totalSiswa = SISWA_KELOLAAN.length;
  const avg = Math.round(SISWA_KELOLAAN.reduce((s, x) => s + x.progressMingguIni, 0) / totalSiswa);
  const perluPerhatian = SISWA_KELOLAAN.filter((s) => s.progressMingguIni < 60);

  return (
    <AppShell peran="Guru" warna="bg-mint text-ink" nav={NAV_GURU}>
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-ink-soft">Selamat pagi,</p>
          <h1 className="text-3xl font-extrabold text-ink">Bu Sari</h1>
          <p className="text-ink-soft mt-1">Berikut ringkasan kelas hari ini</p>
        </div>
        <button className="btn-ceria btn-primary">
          <Plus size={20} strokeWidth={2.5} aria-hidden /> Buat Materi Baru
        </button>
      </header>

      <section className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Stat Icon={Users} label="Total Siswa" value={String(totalSiswa)} tone="bg-mint/30 text-mint-dark" />
        <Stat Icon={TrendingUp} label="Rata-rata Progres" value={`${avg}%`} tone="bg-sun/30 text-sun-dark" />
        <Stat Icon={BookMarked} label="Materi Aktif" value={String(MATERI.length)} tone="bg-lavender/30 text-lavender-dark" />
        <Stat Icon={AlertCircle} label="Perlu Perhatian" value={String(perluPerhatian.length)} tone="bg-coral/20 text-coral" />
      </section>

      {/* Siswa kelolaan */}
      <section className="mt-8">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-2xl font-extrabold text-ink">Siswa Kelolaan</h2>
          <Link href="/guru/siswa" className="text-sun-dark font-bold hover:underline">Lihat semua →</Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-y-2 min-w-[640px]">
            <thead>
              <tr className="text-left text-sm text-ink-soft">
                <th className="px-4 py-2">Siswa</th>
                <th className="px-4 py-2">Kategori</th>
                <th className="px-4 py-2">Progres</th>
                <th className="px-4 py-2">Aksesibilitas</th>
                <th className="px-4 py-2 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {SISWA_KELOLAAN.map((s) => (
                <tr key={s.id} className="bg-white border border-cream-dark">
                  <td className="px-4 py-3 rounded-l-2xl">
                    <div className="flex items-center gap-3">
                      <Avatar nama={s.nama} />
                      <div>
                        <p className="font-bold text-ink">{s.nama}</p>
                        <p className="text-sm text-ink-soft">{s.kelas}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-3 py-1 rounded-full bg-cream-dark/50 text-ink text-sm font-bold">
                      {s.kategori}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-3 w-32 rounded-full bg-cream-dark overflow-hidden">
                        <div
                          className={`h-full ${s.progressMingguIni >= 70 ? "bg-mint-dark" : s.progressMingguIni >= 50 ? "bg-sun" : "bg-coral"}`}
                          style={{ width: `${s.progressMingguIni}%` }}
                        />
                      </div>
                      <span className="text-sm font-bold text-ink">{s.progressMingguIni}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-1.5">
                      {s.pengaturan.fontBesar && <Pill Icon={Type} text="A+" tone="bg-sun/30 text-sun-dark" />}
                      {s.pengaturan.kontrasTinggi && <Pill Icon={Contrast} text="Kontras" tone="bg-ink text-white" />}
                      {s.pengaturan.piktogram && <Pill Icon={ImageIcon} text="Pikto" tone="bg-lavender/30 text-lavender-dark" />}
                    </div>
                  </td>
                  <td className="px-4 py-3 rounded-r-2xl text-right">
                    <Link href={`/guru/siswa/${s.id}`} className="font-bold text-sun-dark hover:underline">
                      Atur →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Materi terbaru */}
      <section className="mt-10">
        <h2 className="text-2xl font-extrabold text-ink mb-3">Materi Terbaru</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {MATERI.slice(0, 3).map((m) => (
            <article key={m.id} className="card-ceria">
              <div className="flex items-start gap-3">
                <div className="h-14 w-14 rounded-2xl bg-mint/20 flex items-center justify-center shrink-0">
                  <MateriIcon id={m.id} className="text-mint-dark" size={28} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-ink">{m.judul}</p>
                  <p className="text-sm text-ink-soft inline-flex items-center gap-1">
                    <Clock size={12} aria-hidden /> {m.durasiMenit} min · {m.jenis}
                  </p>
                </div>
                {m.offline && <Cloud className="text-lavender-dark" size={18} aria-label="Tersedia offline" />}
              </div>
              <p className="mt-3 text-sm text-ink-soft line-clamp-2">{m.ringkasan}</p>
              <div className="mt-4 flex gap-2">
                <button className="btn-ceria btn-ghost !min-h-[44px] !py-2 !px-3 text-sm">Edit</button>
                <button className="btn-ceria btn-primary !min-h-[44px] !py-2 !px-3 text-sm">Bagikan</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </AppShell>
  );
}

function Stat({ Icon, label, value, tone }: { Icon: LucideIcon; label: string; value: string; tone: string }) {
  return (
    <div className="card-ceria">
      <div className="flex items-center gap-3">
        <div className={`h-12 w-12 rounded-2xl ${tone} flex items-center justify-center shrink-0`} aria-hidden>
          <Icon size={24} strokeWidth={2.2} />
        </div>
        <div>
          <p className="text-2xl font-extrabold text-ink">{value}</p>
          <p className="text-sm text-ink-soft font-bold">{label}</p>
        </div>
      </div>
    </div>
  );
}

function Pill({ Icon, text, tone }: { Icon: LucideIcon; text: string; tone: string }) {
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold ${tone}`}>
      <Icon size={11} strokeWidth={2.5} aria-hidden /> {text}
    </span>
  );
}

function Avatar({ nama }: { nama: string }) {
  const initials = nama
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <span className="h-12 w-12 rounded-2xl bg-gradient-to-br from-sun via-coral to-lavender text-white font-extrabold flex items-center justify-center shrink-0" aria-hidden>
      {initials}
    </span>
  );
}
