import Link from "next/link";
import { GraduationCap, Heart, Users, ArrowRight, type LucideIcon } from "lucide-react";
import { PublicNav } from "@/components/PublicNav";

type PeranOption = {
  href: string;
  judul: string;
  Icon: LucideIcon;
  desc: string;
  warna: string;
  contoh: string;
};

const peran: PeranOption[] = [
  {
    href: "/guru",
    judul: "Guru",
    Icon: GraduationCap,
    desc: "Buat materi, atur RBI, pantau siswa",
    warna: "from-mint to-mint-dark",
    contoh: "bu.sari@slb-mawar.sch.id",
  },
  {
    href: "/siswa",
    judul: "Siswa",
    Icon: Heart,
    desc: "Belajar dengan gambar & suara",
    warna: "from-sun to-sun-dark",
    contoh: "adi (kelas 3)",
  },
  {
    href: "/orangtua",
    judul: "Orang Tua",
    Icon: Users,
    desc: "Lihat progres anak & panduan",
    warna: "from-lavender to-lavender-dark",
    contoh: "ibu.adi@gmail.com",
  },
];

export default function LoginPage() {
  return (
    <>
      <PublicNav />
      <main id="main" className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-4xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-ink">Pilih Peran Kamu</h1>
            <p className="mt-3 text-lg text-ink-soft">
              Tampilan & fitur akan menyesuaikan secara otomatis
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {peran.map((p) => (
              <Link
                key={p.judul}
                href={p.href}
                aria-label={`Masuk sebagai ${p.judul}`}
                className="group card-ceria text-center hover:-translate-y-2 transition focus-visible:ring-4 focus-visible:ring-sun"
              >
                <div
                  className={`bg-gradient-to-br ${p.warna} mx-auto h-24 w-24 rounded-3xl flex items-center justify-center mb-4 shadow-md text-white`}
                  aria-hidden
                >
                  <p.Icon size={52} strokeWidth={2} />
                </div>
                <h2 className="text-2xl font-extrabold text-ink">{p.judul}</h2>
                <p className="mt-2 text-ink-soft">{p.desc}</p>
                <div className="mt-4 rounded-xl bg-cream-dark/50 px-3 py-2 text-xs text-ink-soft">
                  Contoh akun: <strong className="font-mono">{p.contoh}</strong>
                </div>
                <span className="mt-5 btn-ceria btn-primary w-full group-hover:bg-sun-dark">
                  Masuk
                  <ArrowRight size={20} strokeWidth={2.5} aria-hidden />
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-ink-soft">
            Ini mode demo — klik salah satu peran untuk masuk langsung tanpa password.
          </p>
        </div>
      </main>
    </>
  );
}
