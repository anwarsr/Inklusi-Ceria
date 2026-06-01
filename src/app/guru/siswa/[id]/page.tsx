import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Type,
  Contrast,
  ImageIcon,
  Target,
  BookOpen,
  TrendingUp,
  Users as ParentsIcon,
  Pencil,
  Accessibility,
  type LucideIcon,
} from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { SISWA_KELOLAAN } from "@/lib/dummy";
import { NAV_GURU } from "@/lib/nav";

// Pra-render satu halaman statis untuk setiap siswa (wajib untuk output: "export").
export function generateStaticParams() {
  return SISWA_KELOLAAN.map((s) => ({ id: s.id }));
}

export default async function DetailSiswa({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const s = SISWA_KELOLAAN.find((x) => x.id === id);
  if (!s) notFound();

  const initials = s.nama
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const rbiItems: { Icon: LucideIcon; t: string }[] = [
    { Icon: Target, t: "Tujuan minggu ini: Mengenal angka 1–5 dengan suara" },
    { Icon: BookOpen, t: "Materi pendamping: Suara Hewan, Warna Pelangi" },
    { Icon: TrendingUp, t: "Indikator keberhasilan: dapat menyebut 5 dari 5 angka" },
    { Icon: ParentsIcon, t: "Catatan untuk orang tua: ulang latihan 10 menit/hari" },
  ];

  return (
    <AppShell peran="Guru" warna="bg-mint text-ink" nav={NAV_GURU}>
      <Link href="/guru/siswa" className="inline-flex items-center gap-2 text-ink-soft hover:text-ink font-semibold">
        <ArrowLeft size={18} strokeWidth={2.5} aria-hidden /> Kembali ke Daftar Siswa
      </Link>

      <header className="mt-4 card-ceria flex flex-col sm:flex-row items-start gap-5">
        <span className="h-24 w-24 rounded-3xl bg-gradient-to-br from-sun via-coral to-lavender text-white font-extrabold flex items-center justify-center shrink-0 text-2xl" aria-hidden>
          {initials}
        </span>
        <div className="flex-1">
          <h1 className="text-3xl font-extrabold text-ink">{s.nama}</h1>
          <p className="text-ink-soft mt-1">{s.kelas} · Kategori: <strong>{s.kategori}</strong></p>
          <div className="mt-3 flex items-center gap-3">
            <div className="h-3 w-48 rounded-full bg-cream-dark overflow-hidden">
              <div className="h-full bg-sun" style={{ width: `${s.progressMingguIni}%` }} />
            </div>
            <span className="font-bold text-ink">{s.progressMingguIni}% minggu ini</span>
          </div>
        </div>
      </header>

      {/* Aksesibilitas — REQ-02 */}
      <section className="mt-6 card-ceria">
        <h2 className="text-xl font-extrabold text-ink mb-1 inline-flex items-center gap-2">
          <Accessibility size={22} strokeWidth={2.2} aria-hidden /> Pengaturan Aksesibilitas
        </h2>
        <p className="text-ink-soft text-sm mb-5">Pengaturan ini akan diterapkan otomatis saat siswa masuk</p>

        <div className="grid sm:grid-cols-3 gap-4">
          <Toggle Icon={Type} label="Font Besar" desc="Cocok untuk low vision" on={s.pengaturan.fontBesar} tone="text-sun-dark" />
          <Toggle Icon={Contrast} label="Kontras Tinggi" desc="Hitam-putih tegas" on={s.pengaturan.kontrasTinggi} tone="text-ink" />
          <Toggle Icon={ImageIcon} label="Mode Piktogram" desc="Ikon di samping teks (autisme)" on={s.pengaturan.piktogram} tone="text-lavender-dark" />
        </div>
      </section>

      {/* RBI */}
      <section className="mt-6 card-ceria">
        <h2 className="text-xl font-extrabold text-ink mb-3">Rencana Belajar Individual (RBI)</h2>
        <ul className="space-y-3">
          {rbiItems.map(({ Icon, t }) => (
            <li key={t} className="flex items-start gap-3 rounded-2xl bg-cream-dark/40 p-3">
              <span className="h-9 w-9 rounded-xl bg-white border border-cream-dark flex items-center justify-center shrink-0">
                <Icon className="text-mint-dark" size={18} strokeWidth={2.2} aria-hidden />
              </span>
              <span className="text-ink pt-1">{t}</span>
            </li>
          ))}
        </ul>
        <button className="mt-5 btn-ceria btn-primary">
          <Pencil size={18} strokeWidth={2.5} aria-hidden /> Edit RBI
        </button>
      </section>
    </AppShell>
  );
}

function Toggle({
  Icon,
  label,
  desc,
  on,
  tone,
}: {
  Icon: LucideIcon;
  label: string;
  desc: string;
  on: boolean;
  tone: string;
}) {
  return (
    <div className={`rounded-2xl border-2 p-4 ${on ? "border-sun bg-sun/15" : "border-cream-dark bg-white"}`}>
      <div className="flex items-center justify-between">
        <Icon className={tone} size={28} strokeWidth={2.2} aria-hidden />
        <span
          role="switch"
          aria-checked={on}
          className={`h-7 w-12 rounded-full ${on ? "bg-mint-dark" : "bg-cream-dark"} relative transition`}
        >
          <span
            className={`absolute top-0.5 h-6 w-6 rounded-full bg-white transition ${on ? "left-5" : "left-0.5"}`}
          />
        </span>
      </div>
      <p className="mt-2 font-bold text-ink">{label}</p>
      <p className="text-xs text-ink-soft mt-1">{desc}</p>
    </div>
  );
}
