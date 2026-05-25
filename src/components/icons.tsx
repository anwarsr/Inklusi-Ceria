import {
  Hash,
  Cat,
  Palette,
  Triangle,
  Mic,
  Camera,
  Video,
  type LucideIcon,
} from "lucide-react";

export const MATERI_ICON: Record<string, LucideIcon> = {
  "angka-1-5": Hash,
  "suara-hewan": Cat,
  "warna-pelangi": Palette,
  "bentuk-dasar": Triangle,
};

export const TUGAS_ICON: Record<string, LucideIcon> = {
  "rekam-suara": Mic,
  foto: Camera,
  video: Video,
};

export function MateriIcon({ id, className, size = 28 }: { id: string; className?: string; size?: number }) {
  const Icon = MATERI_ICON[id] ?? Hash;
  return <Icon className={className} size={size} strokeWidth={2.2} aria-hidden />;
}

export function TugasIcon({ jenis, className, size = 28 }: { jenis: string; className?: string; size?: number }) {
  const Icon = TUGAS_ICON[jenis] ?? Mic;
  return <Icon className={className} size={size} strokeWidth={2.2} aria-hidden />;
}
