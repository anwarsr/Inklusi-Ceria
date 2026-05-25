import Link from "next/link";
import { LogIn } from "lucide-react";
import { Logo } from "./Logo";

export function PublicNav() {
  return (
    <header className="sticky top-0 z-40 bg-cream/85 backdrop-blur border-b border-cream-dark">
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3"
      >
        <Link href="/" aria-label="Beranda Inklusi Ceria" className="rounded-2xl">
          <Logo />
        </Link>
        <div className="flex items-center gap-2">
          <Link
            href="/#fitur"
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-full font-semibold text-ink hover:bg-cream-dark"
          >
            Fitur
          </Link>
          <Link
            href="/#tentang"
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-full font-semibold text-ink hover:bg-cream-dark"
          >
            Tentang
          </Link>
          <Link href="/login" className="btn-ceria btn-primary">
            <LogIn size={18} strokeWidth={2.5} aria-hidden />
            Masuk
          </Link>
        </div>
      </nav>
    </header>
  );
}
