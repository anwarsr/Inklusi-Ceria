import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { MateriIcon } from "@/components/icons";
import { MATERI } from "@/lib/dummy";
import { NAV_SISWA } from "@/lib/nav";

export default function DaftarMateri() {
  return (
    <AppShell peran="Siswa" warna="bg-sun text-ink" nav={NAV_SISWA}>
      <h1 className="text-3xl font-extrabold text-ink">Semua Materi</h1>
      <p className="text-ink-soft mt-1">Pilih pelajaran yang mau kamu pelajari</p>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {MATERI.map((m) => (
          <Link
            key={m.id}
            href={`/siswa/materi/${m.id}`}
            className="card-ceria flex flex-col items-center text-center hover:-translate-y-1 transition"
          >
            <div className="h-24 w-24 rounded-3xl bg-sun/20 flex items-center justify-center">
              <MateriIcon id={m.id} className="text-sun-dark" size={44} />
            </div>
            <p className="mt-4 text-xl font-extrabold text-ink">{m.judul}</p>
            <p className="text-sm text-ink-soft mt-1 inline-flex items-center gap-1">
              <Clock size={14} aria-hidden /> {m.durasiMenit} menit
            </p>
            <span className="mt-4 btn-ceria btn-primary">
              Belajar
              <ArrowRight size={18} strokeWidth={2.5} aria-hidden />
            </span>
          </Link>
        ))}
      </div>
    </AppShell>
  );
}
