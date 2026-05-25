import Link from "next/link";
import {
  Bell,
  BarChart3,
  Target,
  ClipboardCheck,
  Clock,
  Home,
  Carrot,
  Music,
  Pencil,
  CheckCircle2,
  CircleDashed,
  type LucideIcon,
} from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { BarChart } from "@/components/BarChart";
import { SISWA_AKTIF, PROGRESS_HARIAN, PANDUAN_ORTU } from "@/lib/dummy";
import { NAV_ORTU } from "@/lib/nav";

const targetItems = [
  { Icon: Target, t: "Mengenal angka 1 sampai 5 lewat suara dan gambar", done: true },
  { Icon: Target, t: "Membedakan 7 warna pelangi", done: true },
  { Icon: Target, t: "Menyebut nama 4 hewan", done: false },
  { Icon: Target, t: "Mengenali bentuk lingkaran, segitiga, persegi", done: false },
];

const panduanIcons: LucideIcon[] = [Carrot, Music, Pencil];

export default function DashboardOrangTua() {
  const minggu = PROGRESS_HARIAN.filter((d) => d.nilai > 0);
  const rata = Math.round(minggu.reduce((s, x) => s + x.nilai, 0) / minggu.length);

  const initials = SISWA_AKTIF.nama
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <AppShell peran="Orang Tua" warna="bg-lavender text-ink" nav={NAV_ORTU}>
      <header className="card-ceria flex flex-col sm:flex-row items-start gap-5 !bg-gradient-to-br !from-lavender/20 !to-sky/20">
        <span className="h-20 w-20 rounded-3xl bg-gradient-to-br from-sun via-coral to-lavender text-white font-extrabold flex items-center justify-center shrink-0 text-2xl" aria-hidden>
          {initials}
        </span>
        <div className="flex-1">
          <p className="text-ink-soft">Perkembangan ananda</p>
          <h1 className="text-3xl font-extrabold text-ink">{SISWA_AKTIF.nama}</h1>
          <p className="text-ink-soft mt-1">{SISWA_AKTIF.kelas} · {SISWA_AKTIF.kategori}</p>
        </div>
        <div className="text-center sm:text-right">
          <p className="text-5xl font-extrabold text-lavender-dark">{rata}%</p>
          <p className="text-sm text-ink-soft font-bold">Rata-rata minggu ini</p>
        </div>
      </header>

      {/* Notifikasi */}
      <section className="mt-6 card-ceria !bg-sun/15 !border-sun">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-2xl bg-sun/40 flex items-center justify-center shrink-0" aria-hidden>
            <Bell className="text-sun-dark" size={24} strokeWidth={2.2} />
          </div>
          <div>
            <p className="font-extrabold text-ink">Pesan dari Bu Sari (Guru)</p>
            <p className="text-ink mt-1">
              &ldquo;Adi sangat baik minggu ini! Tolong bantu latihan mengenal angka 1–5 di rumah setiap pagi
              selama 10 menit ya, Bu/Pak. Saya kirim panduannya di bawah.&rdquo;
            </p>
            <p className="text-xs text-ink-soft mt-2 inline-flex items-center gap-1">
              <Clock size={12} aria-hidden /> Dikirim 2 jam yang lalu
            </p>
          </div>
        </div>
      </section>

      {/* Grafik progres */}
      <section className="mt-6 card-ceria">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-extrabold text-ink inline-flex items-center gap-2">
            <BarChart3 size={22} strokeWidth={2.2} aria-hidden /> Progres 7 Hari Terakhir
          </h2>
        </div>
        <BarChart data={PROGRESS_HARIAN} />
      </section>

      {/* Target */}
      <section className="mt-6 card-ceria">
        <h2 className="text-xl font-extrabold text-ink mb-3 inline-flex items-center gap-2">
          <ClipboardCheck size={22} strokeWidth={2.2} aria-hidden /> Target Belajar Minggu Ini
        </h2>
        <ul className="space-y-2">
          {targetItems.map((x) => (
            <li key={x.t} className="flex items-center gap-3 rounded-2xl bg-cream-dark/40 p-3">
              <span className={`h-9 w-9 rounded-xl flex items-center justify-center shrink-0 ${x.done ? "bg-mint/40" : "bg-cream-dark"}`}>
                <x.Icon className={x.done ? "text-mint-dark" : "text-ink-soft"} size={18} strokeWidth={2.2} aria-hidden />
              </span>
              <span className="flex-1 text-ink">{x.t}</span>
              {x.done ? (
                <CheckCircle2 className="text-mint-dark" size={24} strokeWidth={2.2} aria-label="Selesai" />
              ) : (
                <CircleDashed className="text-ink-soft" size={24} strokeWidth={2.2} aria-label="Belum" />
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Panduan */}
      <section className="mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-extrabold text-ink inline-flex items-center gap-2">
            <Home size={22} strokeWidth={2.2} aria-hidden /> Aktivitas Pendampingan di Rumah
          </h2>
          <Link href="/orangtua/panduan" className="text-lavender-dark font-bold hover:underline">Lihat semua →</Link>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {PANDUAN_ORTU.map((p, i) => {
            const Icon = panduanIcons[i] ?? Carrot;
            return (
              <article key={p.judul} className="card-ceria">
                <div className="h-14 w-14 rounded-2xl bg-lavender/20 flex items-center justify-center" aria-hidden>
                  <Icon className="text-lavender-dark" size={28} strokeWidth={2.2} />
                </div>
                <p className="font-extrabold text-ink mt-3">{p.judul}</p>
                <p className="text-xs text-ink-soft mt-1 inline-flex items-center gap-1">
                  <Clock size={12} aria-hidden /> {p.durasi}
                </p>
                <p className="text-sm text-ink-soft mt-2">{p.desc}</p>
              </article>
            );
          })}
        </div>
      </section>
    </AppShell>
  );
}
