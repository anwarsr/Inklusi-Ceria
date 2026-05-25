import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Users,
  GraduationCap,
  Heart,
  Video,
  Mic,
  WifiOff,
  Accessibility,
  PaintRoller,
  Smartphone,
  HardDrive,
  Hash,
  Cat,
  Palette,
  Play,
  Clock,
} from "lucide-react";
import { PublicNav } from "@/components/PublicNav";

const fitur = [
  {
    icon: GraduationCap,
    judul: "Dasbor Guru",
    desc: "Atur Rencana Belajar Individual (RBI), bagikan materi sesuai kategori siswa, pantau hasil tanpa administrasi rumit.",
    bg: "bg-mint/30",
    iconColor: "text-mint-dark",
  },
  {
    icon: Heart,
    judul: "Belajar Anak",
    desc: "Antarmuka super sederhana: ikon besar, warna kontras tinggi, dan minim teks panjang.",
    bg: "bg-sun/30",
    iconColor: "text-sun-dark",
  },
  {
    icon: Users,
    judul: "Dasbor Orang Tua",
    desc: "Grafik progres harian + panduan aktivitas pendampingan belajar di rumah.",
    bg: "bg-lavender/30",
    iconColor: "text-lavender-dark",
  },
  {
    icon: Video,
    judul: "Materi Multisensori",
    desc: "Video Bahasa Isyarat (SIBI), narasi suara (Text-to-Speech), dan gambar beresolusi tinggi.",
    bg: "bg-sky/30",
    iconColor: "text-sky-700",
  },
  {
    icon: Mic,
    judul: "Evaluasi Multimodal",
    desc: "Anak bisa menjawab dengan rekam suara, foto karya, atau video — tanpa wajib mengetik.",
    bg: "bg-coral/30",
    iconColor: "text-coral",
  },
  {
    icon: WifiOff,
    judul: "Mode Offline",
    desc: "Materi tersimpan di perangkat. Tetap belajar walau jaringan internet tidak stabil.",
    bg: "bg-mint/30",
    iconColor: "text-mint-dark",
  },
];

const heroTasks = [
  { Icon: Hash, t: "Mengenal Angka 1–5", w: "10 menit", bg: "bg-sky/30", c: "text-sky-700" },
  { Icon: Cat, t: "Suara Hewan", w: "5 menit", bg: "bg-coral/30", c: "text-coral" },
  { Icon: Palette, t: "Warna Pelangi", w: "8 menit", bg: "bg-lavender/30", c: "text-lavender-dark" },
];

const aboutPoints: { Icon: typeof Accessibility; t: string }[] = [
  { Icon: Accessibility, t: "Sesuai standar WCAG 2.1 AA" },
  { Icon: PaintRoller, t: "Warna lembut, tidak ada animasi berkedip" },
  { Icon: Smartphone, t: "Berjalan di HP entry-level, tablet, atau desktop" },
  { Icon: HardDrive, t: "Mode offline untuk daerah terpencil" },
];

const roles = [
  { Icon: GraduationCap, l: "Guru", c: "bg-mint/30 text-mint-dark" },
  { Icon: Heart, l: "Siswa", c: "bg-sun/30 text-sun-dark" },
  { Icon: Users, l: "Orang Tua", c: "bg-lavender/30 text-lavender-dark" },
];

export default function Landing() {
  return (
    <>
      <PublicNav />
      <main id="main" className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(900px 500px at 20% 0%, #FFD9A8 0%, transparent 60%), radial-gradient(700px 400px at 90% 30%, #C7F1E0 0%, transparent 65%)",
            }}
          />
          <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-sun-dark shadow-sm border border-cream-dark">
                <Sparkles size={16} strokeWidth={2.5} aria-hidden />
                Untuk SLB & Anak Berkebutuhan Khusus
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-ink">
                Belajar Itu <span className="text-sun-dark">Menyenangkan</span> Buat Semua Anak
              </h1>
              <p className="mt-5 text-lg sm:text-xl text-ink-soft max-w-xl">
                <strong>Inklusi Ceria</strong> adalah platform pembelajaran digital yang dirancang khusus untuk Anak
                Berkebutuhan Khusus. Menghubungkan guru, siswa, dan orang tua dalam satu ekosistem yang
                <em> aksesibel</em>, <em>multisensori</em>, dan <em>tetap berjalan walau internet lambat</em>.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/login" className="btn-ceria btn-primary">
                  Mulai Sekarang
                  <ArrowRight size={20} strokeWidth={2.5} aria-hidden />
                </Link>
                <Link href="/#fitur" className="btn-ceria btn-ghost">
                  Lihat Fitur
                </Link>
              </div>
              <p className="mt-6 text-sm text-ink-soft">
                Mendukung <strong>SDG 4</strong> · Pendidikan inklusif & berkualitas setara
              </p>
            </div>

            <div className="relative">
              <div className="card-ceria !p-6 max-w-md mx-auto">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-ink">Tugas Hari Ini</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-mint/40 font-bold text-mint-dark">3 Aktivitas</span>
                </div>
                <ul className="mt-4 space-y-3">
                  {heroTasks.map((x) => (
                    <li
                      key={x.t}
                      className="flex items-center gap-3 rounded-2xl bg-cream-dark/60 p-3 border border-cream-dark"
                    >
                      <span className={`h-12 w-12 rounded-2xl ${x.bg} flex items-center justify-center shrink-0`}>
                        <x.Icon className={x.c} size={26} strokeWidth={2.2} aria-hidden />
                      </span>
                      <div className="flex-1">
                        <p className="font-bold text-ink">{x.t}</p>
                        <p className="text-sm text-ink-soft inline-flex items-center gap-1">
                          <Clock size={14} aria-hidden /> {x.w}
                        </p>
                      </div>
                      <Play className="text-sun-dark" size={24} strokeWidth={2.5} aria-hidden />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Fitur */}
        <section id="fitur" className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink">Fitur yang Kami Sediakan</h2>
            <p className="mt-3 text-lg text-ink-soft">Dirancang berdasarkan kebutuhan nyata SLB & ABK di Indonesia</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {fitur.map((f) => (
              <article key={f.judul} className="card-ceria hover:-translate-y-1 transition">
                <div
                  className={`${f.bg} h-16 w-16 rounded-2xl flex items-center justify-center mb-4`}
                  aria-hidden
                >
                  <f.icon className={f.iconColor} size={32} strokeWidth={2.2} />
                </div>
                <h3 className="font-extrabold text-xl text-ink">{f.judul}</h3>
                <p className="mt-2 text-ink-soft">{f.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Tentang */}
        <section id="tentang" className="bg-cream-dark/40 border-y border-cream-dark">
          <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-ink">Kenapa Inklusi Ceria?</h2>
              <p className="mt-4 text-lg text-ink-soft">
                LMS yang ada saat ini belum sepenuhnya ramah terhadap siswa berkebutuhan khusus, terutama
                di jenjang pendidikan dasar. Kami hadir untuk <strong>meratakan akses belajar</strong> bagi
                anak-anak disabilitas di seluruh Indonesia.
              </p>
              <ul className="mt-6 space-y-3">
                {aboutPoints.map(({ Icon, t }) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="h-9 w-9 rounded-xl bg-white border border-cream-dark flex items-center justify-center shrink-0">
                      <Icon className="text-sun-dark" size={20} strokeWidth={2.2} aria-hidden />
                    </span>
                    <span className="text-ink pt-1">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-ceria">
              <h3 className="font-extrabold text-2xl text-ink">3 Peran, 1 Ekosistem</h3>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {roles.map(({ Icon, l, c }) => (
                  <div key={l} className="rounded-2xl bg-cream p-4 text-center border border-cream-dark">
                    <div className={`mx-auto h-14 w-14 rounded-2xl ${c} flex items-center justify-center mb-2`} aria-hidden>
                      <Icon size={28} strokeWidth={2.2} />
                    </div>
                    <p className="font-bold text-ink">{l}</p>
                  </div>
                ))}
              </div>
              <Link href="/login" className="btn-ceria btn-primary mt-6 w-full">
                Coba Sekarang
                <ArrowRight size={20} strokeWidth={2.5} aria-hidden />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ink text-cream py-8">
        <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-bold">Inklusi Ceria — Belajar untuk Semua</p>
          <p className="text-sm opacity-80">© 2026 · Tugas Mata Kuliah Pengelolaan Kelas Digital</p>
        </div>
      </footer>
    </>
  );
}
