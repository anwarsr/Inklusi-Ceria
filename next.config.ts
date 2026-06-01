import type { NextConfig } from "next";

// Situs di-deploy ke GitHub Pages sebagai static export pada subpath
// https://anwarsr.github.io/Inklusi-Ceria/. Variabel PAGES_BASE_PATH di-set oleh
// workflow GitHub Actions saat build produksi; saat `npm run dev` variabel ini
// kosong sehingga situs tetap berjalan normal di http://localhost:3000.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export", // hasilkan file statis (HTML/CSS/JS) ke folder out/
  trailingSlash: true, // tiap rute jadi folder/index.html — ramah GitHub Pages
  images: { unoptimized: true }, // wajib untuk static export (tanpa server optimizer)
  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
