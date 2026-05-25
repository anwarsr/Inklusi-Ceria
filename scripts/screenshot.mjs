import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";

const BASE = process.env.BASE_URL || "http://localhost:3000";

const ROUTES = [
  { path: "/", name: "01-landing" },
  { path: "/login", name: "02-login" },
  { path: "/siswa", name: "03-siswa-dashboard" },
  { path: "/siswa/materi", name: "04-siswa-materi-list" },
  { path: "/siswa/materi/angka-1-5", name: "05-siswa-materi-detail" },
  { path: "/siswa/evaluasi", name: "06-siswa-evaluasi-list" },
  { path: "/siswa/evaluasi/t1", name: "07-siswa-evaluasi-suara" },
  { path: "/siswa/evaluasi/t2", name: "08-siswa-evaluasi-foto" },
  { path: "/guru", name: "09-guru-dashboard" },
  { path: "/guru/siswa", name: "10-guru-siswa-list" },
  { path: "/guru/siswa/s-adi", name: "11-guru-siswa-detail" },
  { path: "/guru/materi", name: "12-guru-materi" },
  { path: "/guru/rbi", name: "13-guru-rbi" },
  { path: "/orangtua", name: "14-orangtua-dashboard" },
  { path: "/orangtua/panduan", name: "15-orangtua-panduan" },
  { path: "/orangtua/pesan", name: "16-orangtua-pesan" },
];

const VIEWPORTS = [
  { name: "desktop", w: 1440, h: 900 },
  { name: "mobile", w: 390, h: 844 },
];

const onlyMobile = process.argv.includes("--mobile-only");
const onlyDesktop = process.argv.includes("--desktop-only");
const viewports = VIEWPORTS.filter((v) =>
  onlyMobile ? v.name === "mobile" : onlyDesktop ? v.name === "desktop" : true,
);

const outDir = join(process.cwd(), "screenshots");
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
console.log(`📸 Screenshotting ${ROUTES.length} routes × ${viewports.length} viewport(s)...`);

for (const vp of viewports) {
  const ctx = await browser.newContext({
    viewport: { width: vp.w, height: vp.h },
    deviceScaleFactor: 1,
  });
  const page = await ctx.newPage();

  for (const r of ROUTES) {
    const url = `${BASE}${r.path}`;
    try {
      await page.goto(url, { waitUntil: "networkidle", timeout: 20000 });
      await page.waitForTimeout(400); // beri waktu animasi/font
      const file = join(outDir, `${r.name}_${vp.name}.png`);
      await page.screenshot({ path: file, fullPage: true });
      console.log(`  ✓ ${vp.name.padEnd(7)} ${r.path}`);
    } catch (e) {
      console.log(`  ✗ ${vp.name.padEnd(7)} ${r.path} — ${e.message}`);
    }
  }
  await ctx.close();
}

await browser.close();
console.log(`\n✅ Done. Screenshots di: ${outDir}`);
