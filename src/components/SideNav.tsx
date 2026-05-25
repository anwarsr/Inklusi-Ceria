"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  BookOpen,
  Target,
  GraduationCap,
  ClipboardList,
  BookMarked,
  MessageCircle,
  LogOut,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Home,
  BookOpen,
  Target,
  GraduationCap,
  ClipboardList,
  BookMarked,
  MessageCircle,
};

type NavItem = { href: string; label: string; icon: keyof typeof ICON_MAP };

export function SideNav({ items, accent }: { items: NavItem[]; accent: string }) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === pathname) return true;
    if (href !== "/" && pathname.startsWith(href + "/")) return true;
    return false;
  };

  return (
    <nav aria-label="Navigasi samping">
      <ul className="flex md:flex-col gap-2 overflow-x-auto">
        {items.map((n) => {
          const active = isActive(n.href);
          const Icon = ICON_MAP[n.icon];
          return (
            <li key={n.href}>
              <Link
                href={n.href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? `flex items-center gap-3 px-4 py-3 rounded-2xl font-extrabold whitespace-nowrap ${accent} shadow-sm`
                    : "flex items-center gap-3 px-4 py-3 rounded-2xl font-semibold text-ink hover:bg-cream-dark whitespace-nowrap"
                }
              >
                <Icon size={22} strokeWidth={2.2} aria-hidden />
                {n.label}
              </Link>
            </li>
          );
        })}
        <li className="md:mt-auto">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-2xl font-semibold text-ink-soft hover:bg-cream-dark whitespace-nowrap"
          >
            <LogOut size={22} strokeWidth={2.2} aria-hidden />
            Keluar
          </Link>
        </li>
      </ul>
    </nav>
  );
}
