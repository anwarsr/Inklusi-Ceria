export type NavItem = { href: string; label: string; icon: string };

export const NAV_SISWA: NavItem[] = [
  { href: "/siswa", label: "Beranda", icon: "Home" },
  { href: "/siswa/materi", label: "Materi", icon: "BookOpen" },
  { href: "/siswa/evaluasi", label: "Tugasku", icon: "Target" },
];

export const NAV_GURU: NavItem[] = [
  { href: "/guru", label: "Beranda", icon: "Home" },
  { href: "/guru/siswa", label: "Siswa", icon: "GraduationCap" },
  { href: "/guru/materi", label: "Materi", icon: "BookMarked" },
  { href: "/guru/rbi", label: "RBI", icon: "ClipboardList" },
];

export const NAV_ORTU: NavItem[] = [
  { href: "/orangtua", label: "Beranda", icon: "Home" },
  { href: "/orangtua/panduan", label: "Panduan", icon: "BookOpen" },
  { href: "/orangtua/pesan", label: "Pesan Guru", icon: "MessageCircle" },
];
