import { Plus, Cloud, Clock } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { MateriIcon } from "@/components/icons";
import { MATERI } from "@/lib/dummy";
import { NAV_GURU } from "@/lib/nav";

export default function GuruMateri() {
  return (
    <AppShell peran="Guru" warna="bg-mint text-ink" nav={NAV_GURU}>
      <header className="flex flex-wrap justify-between items-end gap-3">
        <div>
          <h1 className="text-3xl font-extrabold text-ink">Bank Materi</h1>
          <p className="text-ink-soft">Kelola materi multisensori (video SIBI, gambar, audio TTS)</p>
        </div>
        <button className="btn-ceria btn-primary">
          <Plus size={20} strokeWidth={2.5} aria-hidden /> Materi Baru
        </button>
      </header>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {MATERI.map((m) => (
          <article key={m.id} className="card-ceria">
            <div className="flex items-start gap-3">
              <div className="h-14 w-14 rounded-2xl bg-mint/20 flex items-center justify-center shrink-0">
                <MateriIcon id={m.id} className="text-mint-dark" size={28} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-extrabold text-ink truncate">{m.judul}</p>
                <p className="text-sm text-ink-soft inline-flex items-center gap-1">
                  <Clock size={12} aria-hidden /> {m.durasiMenit} min · {m.jenis}
                </p>
              </div>
              {m.offline && <Cloud className="text-lavender-dark" size={20} aria-label="Tersedia offline" />}
            </div>
            <p className="mt-3 text-sm text-ink-soft line-clamp-2">{m.ringkasan}</p>
            <div className="mt-4 flex gap-2">
              <button className="btn-ceria btn-ghost !min-h-[44px] !py-2 !px-3 text-sm flex-1">Edit</button>
              <button className="btn-ceria btn-primary !min-h-[44px] !py-2 !px-3 text-sm flex-1">Bagikan</button>
            </div>
          </article>
        ))}
      </div>
    </AppShell>
  );
}
