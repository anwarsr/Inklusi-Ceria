import Link from "next/link";
import { Logo } from "./Logo";
import { SideNav } from "./SideNav";

type NavItem = { href: string; label: string; icon: string };

const ACCENT_BY_PERAN: Record<string, string> = {
  Guru: "bg-mint text-ink",
  Siswa: "bg-sun text-ink",
  "Orang Tua": "bg-lavender text-ink",
};

export function AppShell({
  peran,
  warna,
  nav,
  children,
}: {
  peran: "Guru" | "Siswa" | "Orang Tua";
  warna: string;
  nav: NavItem[];
  children: React.ReactNode;
}) {
  const accent = ACCENT_BY_PERAN[peran];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 bg-white border-b border-cream-dark">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <Link href="/" aria-label="Beranda Inklusi Ceria" className="rounded-2xl">
            <Logo size={40} />
          </Link>
          <span className={`px-4 py-2 rounded-full font-extrabold text-sm ${warna}`} aria-label={`Peran: ${peran}`}>
            {peran}
          </span>
        </div>
      </header>

      <div className="flex-1 grid md:grid-cols-[240px_1fr]">
        <aside
          aria-label="Panel navigasi"
          className="border-r border-cream-dark bg-white md:min-h-[calc(100vh-72px)] p-3"
        >
          <SideNav items={nav} accent={accent} />
        </aside>

        <main id="main" className="px-4 py-6 md:p-8 max-w-6xl w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
