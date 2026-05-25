import { Clock, CheckCircle2, Carrot, Music, Pencil, type LucideIcon } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { PANDUAN_ORTU } from "@/lib/dummy";
import { NAV_ORTU } from "@/lib/nav";

const ICONS: LucideIcon[] = [Carrot, Music, Pencil];

export default function PanduanLengkap() {
  return (
    <AppShell peran="Orang Tua" warna="bg-lavender text-ink" nav={NAV_ORTU}>
      <header>
        <h1 className="text-3xl font-extrabold text-ink">Panduan Aktivitas di Rumah</h1>
        <p className="text-ink-soft">Dibuat khusus untuk Adi sesuai RBI minggu ini</p>
      </header>

      <div className="mt-6 space-y-4">
        {[...PANDUAN_ORTU, ...PANDUAN_ORTU].map((p, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <article key={i} className="card-ceria flex flex-wrap gap-4 items-start">
              <div className="h-16 w-16 rounded-2xl bg-lavender/20 flex items-center justify-center shrink-0" aria-hidden>
                <Icon className="text-lavender-dark" size={32} strokeWidth={2.2} />
              </div>
              <div className="flex-1 min-w-[240px]">
                <p className="text-xl font-extrabold text-ink">{p.judul}</p>
                <p className="text-sm text-ink-soft mt-1 inline-flex items-center gap-1">
                  <Clock size={14} aria-hidden /> {p.durasi}
                </p>
                <p className="text-ink mt-2">{p.desc}</p>
              </div>
              <button className="btn-ceria btn-primary self-center">
                <CheckCircle2 size={18} strokeWidth={2.5} aria-hidden /> Selesai
              </button>
            </article>
          );
        })}
      </div>
    </AppShell>
  );
}
