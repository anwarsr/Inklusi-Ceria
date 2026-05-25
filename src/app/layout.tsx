import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { AccessibilityProvider } from "@/components/AccessibilityProvider";
import { AccessibilityBar } from "@/components/AccessibilityBar";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Inklusi Ceria — LMS Ramah ABK",
  description:
    "Platform belajar inklusif untuk Anak Berkebutuhan Khusus. Menghubungkan guru, siswa, dan orang tua dalam satu ekosistem yang aksesibel.",
  applicationName: "Inklusi Ceria",
  keywords: ["LMS", "ABK", "SLB", "inklusif", "pendidikan khusus"],
};

export const viewport: Viewport = {
  themeColor: "#FFB84D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${nunito.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <a href="#main" className="skip-link">Lewati ke konten utama</a>
        <AccessibilityProvider>
          {children}
          <AccessibilityBar />
        </AccessibilityProvider>
      </body>
    </html>
  );
}
