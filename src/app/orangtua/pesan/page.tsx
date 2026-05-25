import { Reply, GraduationCap, Stethoscope, Clock, type LucideIcon } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { NAV_ORTU } from "@/lib/nav";

type Pesan = { dari: string; waktu: string; isi: string; Icon: LucideIcon };

const pesan: Pesan[] = [
  {
    dari: "Bu Sari (Wali Kelas)",
    waktu: "2 jam lalu",
    isi: "Adi sangat baik minggu ini! Tolong bantu latihan mengenal angka 1–5 di rumah ya.",
    Icon: GraduationCap,
  },
  {
    dari: "Pak Budi (Pendamping)",
    waktu: "1 hari lalu",
    isi: "Sesi terapi okupasi Senin ditunda jadi Selasa karena saya cuti. Mohon maklum.",
    Icon: Stethoscope,
  },
  {
    dari: "Bu Sari (Wali Kelas)",
    waktu: "3 hari lalu",
    isi: "Tugas video Adi minggu lalu sudah saya nilai. Hasilnya bagus, sudah saya unggah ke dasbor.",
    Icon: GraduationCap,
  },
];

export default function Pesan() {
  return (
    <AppShell peran="Orang Tua" warna="bg-lavender text-ink" nav={NAV_ORTU}>
      <header>
        <h1 className="text-3xl font-extrabold text-ink">Pesan dari Guru</h1>
        <p className="text-ink-soft">Komunikasi langsung dengan guru ananda</p>
      </header>

      <ul className="mt-6 space-y-3">
        {pesan.map((p, i) => (
          <li key={i} className="card-ceria flex items-start gap-4">
            <div className="h-12 w-12 rounded-2xl bg-lavender/20 flex items-center justify-center shrink-0" aria-hidden>
              <p.Icon className="text-lavender-dark" size={24} strokeWidth={2.2} />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-extrabold text-ink">{p.dari}</p>
                <p className="text-xs text-ink-soft inline-flex items-center gap-1">
                  <Clock size={11} aria-hidden /> {p.waktu}
                </p>
              </div>
              <p className="text-ink mt-1">{p.isi}</p>
              <button className="btn-ceria btn-ghost mt-3 !min-h-[40px] !py-2 text-sm">
                <Reply size={16} strokeWidth={2.5} aria-hidden /> Balas
              </button>
            </div>
          </li>
        ))}
      </ul>
    </AppShell>
  );
}
