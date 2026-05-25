import Link from "next/link";
import { Clock, CheckCircle2, ChevronRight, Mic, Camera, Video } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { TugasIcon } from "@/components/icons";
import { TUGAS } from "@/lib/dummy";
import { NAV_SISWA } from "@/lib/nav";

const jenisLabel = {
  "rekam-suara": { label: "Rekam Suara", Icon: Mic },
  foto: { label: "Kirim Foto", Icon: Camera },
  video: { label: "Kirim Video", Icon: Video },
} as const;

export default function DaftarTugas() {
  return (
    <AppShell peran="Siswa" warna="bg-sun text-ink" nav={NAV_SISWA}>
      <h1 className="text-3xl font-extrabold text-ink">Tugasku</h1>
      <p className="text-ink-soft mt-1">Pilih cara kamu menjawab: rekam suara, foto, atau video</p>

      <div className="mt-6 grid gap-4">
        {TUGAS.map((t) => {
          const jl = jenisLabel[t.jenis];
          return (
            <Link
              key={t.id}
              href={`/siswa/evaluasi/${t.id}`}
              className={`card-ceria flex items-center gap-5 ${t.selesai ? "opacity-60" : "hover:-translate-y-1"} transition`}
            >
              <div className="h-16 w-16 rounded-2xl bg-coral/20 flex items-center justify-center shrink-0">
                <TugasIcon jenis={t.jenis} className="text-coral" size={32} />
              </div>
              <div className="flex-1">
                <p className="text-xl font-extrabold text-ink">{t.judul}</p>
                <p className="text-sm text-ink-soft mt-1 inline-flex items-center gap-1">
                  <Clock size={14} aria-hidden /> {t.tenggat}
                </p>
                <p className="text-sm font-bold mt-1 text-ink-soft inline-flex items-center gap-1.5">
                  Cara jawab: <jl.Icon size={14} aria-hidden /> {jl.label}
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
          );
        })}
      </div>
    </AppShell>
  );
}
