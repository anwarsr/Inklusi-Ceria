import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, ClipboardCheck } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { MultimodalUploader } from "@/components/MultimodalUploader";
import { TugasIcon } from "@/components/icons";
import { TUGAS } from "@/lib/dummy";
import { NAV_SISWA } from "@/lib/nav";

const instruksi: Record<string, string> = {
  "rekam-suara": "Tekan tombol mikrofon yang besar, lalu sebutkan jawabannya dengan suara keras dan jelas.",
  foto: "Ambil foto karyamu atau pilih dari galeri. Foto bisa lebih dari satu kali jika kurang pas.",
  video: "Rekam video pendek (maksimal 1 menit) atau pilih video yang sudah ada di HP.",
};

export default async function TugasDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const t = TUGAS.find((x) => x.id === id);
  if (!t) notFound();

  return (
    <AppShell peran="Siswa" warna="bg-sun text-ink" nav={NAV_SISWA}>
      <Link href="/siswa/evaluasi" className="inline-flex items-center gap-2 text-ink-soft hover:text-ink font-semibold">
        <ArrowLeft size={18} strokeWidth={2.5} aria-hidden /> Kembali ke Tugasku
      </Link>

      <header className="mt-4 flex flex-col sm:flex-row gap-5 items-start">
        <div className="h-24 w-24 rounded-3xl bg-coral/20 flex items-center justify-center">
          <TugasIcon jenis={t.jenis} className="text-coral" size={48} />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-ink">{t.judul}</h1>
          <p className="mt-2 text-ink-soft text-lg inline-flex items-center gap-2">
            <Calendar size={18} aria-hidden /> Tenggat: {t.tenggat}
          </p>
        </div>
      </header>

      <section className="mt-8">
        <div className="card-ceria !bg-mint/15">
          <h2 className="text-lg font-extrabold text-ink mb-2 inline-flex items-center gap-2">
            <ClipboardCheck size={20} strokeWidth={2.2} aria-hidden /> Cara Mengerjakan
          </h2>
          <p className="text-ink">{instruksi[t.jenis]}</p>
        </div>
      </section>

      <section className="mt-6">
        <MultimodalUploader mode={t.jenis} />
      </section>
    </AppShell>
  );
}
