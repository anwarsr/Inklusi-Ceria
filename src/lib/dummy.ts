export type Materi = {
  id: string;
  judul: string;
  emoji: string;
  durasiMenit: number;
  jenis: "video" | "gambar" | "audio";
  ringkasan: string;
  offline: boolean;
  paragrafTTS: string[];
};

export type Tugas = {
  id: string;
  judul: string;
  emoji: string;
  jenis: "rekam-suara" | "foto" | "video";
  tenggat: string;
  selesai: boolean;
};

export type Siswa = {
  id: string;
  nama: string;
  emoji: string;
  kategori: "Autisme" | "Tunarungu" | "Low Vision" | "Tunagrahita";
  kelas: string;
  progressMingguIni: number;
  pengaturan: { fontBesar: boolean; piktogram: boolean; kontrasTinggi: boolean };
};

export const MATERI: Materi[] = [
  {
    id: "angka-1-5",
    judul: "Mengenal Angka 1–5",
    emoji: "🔢",
    durasiMenit: 10,
    jenis: "video",
    offline: true,
    ringkasan: "Belajar mengenal angka satu sampai lima dengan bantuan video bahasa isyarat.",
    paragrafTTS: [
      "Selamat datang! Hari ini kita akan belajar angka.",
      "Angka satu. Lihat satu apel di gambar.",
      "Angka dua. Lihat dua kucing yang sedang bermain.",
      "Angka tiga. Hitung tiga bintang di langit.",
      "Angka empat. Empat balon warna-warni di tangan adik.",
      "Angka lima. Tangan kamu punya lima jari. Coba goyangkan!",
    ],
  },
  {
    id: "suara-hewan",
    judul: "Suara Hewan",
    emoji: "🐱",
    durasiMenit: 5,
    jenis: "audio",
    offline: true,
    ringkasan: "Mendengarkan suara kucing, anjing, sapi, dan ayam.",
    paragrafTTS: [
      "Mari kita dengar suara hewan!",
      "Kucing berbunyi meong meong.",
      "Anjing berbunyi guk guk.",
      "Sapi berbunyi moo.",
      "Ayam berbunyi petok petok.",
    ],
  },
  {
    id: "warna-pelangi",
    judul: "Warna Pelangi",
    emoji: "🎨",
    durasiMenit: 8,
    jenis: "gambar",
    offline: false,
    ringkasan: "Tujuh warna pelangi: merah, jingga, kuning, hijau, biru, nila, ungu.",
    paragrafTTS: [
      "Pelangi punya tujuh warna yang indah.",
      "Merah seperti tomat yang segar.",
      "Jingga seperti buah jeruk.",
      "Kuning seperti pisang matang.",
      "Hijau seperti daun yang sehat.",
      "Biru seperti langit yang cerah.",
      "Nila dan ungu seperti bunga anggrek.",
    ],
  },
  {
    id: "bentuk-dasar",
    judul: "Bentuk Dasar",
    emoji: "🔺",
    durasiMenit: 7,
    jenis: "gambar",
    offline: true,
    ringkasan: "Mengenal lingkaran, persegi, dan segitiga.",
    paragrafTTS: [
      "Ini lingkaran, bulat seperti bola.",
      "Ini persegi, empat sisi sama panjang.",
      "Ini segitiga, punya tiga sudut.",
    ],
  },
];

export const TUGAS: Tugas[] = [
  { id: "t1", judul: "Rekam: Sebutkan Angka 1–5", emoji: "🎤", jenis: "rekam-suara", tenggat: "Hari ini", selesai: false },
  { id: "t2", judul: "Foto: Hewan Peliharaan", emoji: "📸", jenis: "foto", tenggat: "Besok", selesai: false },
  { id: "t3", judul: "Video: Tarian Warna", emoji: "🎬", jenis: "video", tenggat: "Lusa", selesai: true },
];

export const SISWA_AKTIF: Siswa = {
  id: "s-adi",
  nama: "Adi Pratama",
  emoji: "👦",
  kategori: "Autisme",
  kelas: "Kelas 3",
  progressMingguIni: 72,
  pengaturan: { fontBesar: true, piktogram: true, kontrasTinggi: false },
};

export const SISWA_KELOLAAN: Siswa[] = [
  SISWA_AKTIF,
  {
    id: "s-rina",
    nama: "Rina Sari",
    emoji: "👧",
    kategori: "Tunarungu",
    kelas: "Kelas 3",
    progressMingguIni: 88,
    pengaturan: { fontBesar: false, piktogram: false, kontrasTinggi: false },
  },
  {
    id: "s-budi",
    nama: "Budi Hartono",
    emoji: "🧒",
    kategori: "Low Vision",
    kelas: "Kelas 4",
    progressMingguIni: 54,
    pengaturan: { fontBesar: true, piktogram: false, kontrasTinggi: true },
  },
  {
    id: "s-mira",
    nama: "Mira Anggraini",
    emoji: "👧🏻",
    kategori: "Tunagrahita",
    kelas: "Kelas 2",
    progressMingguIni: 41,
    pengaturan: { fontBesar: true, piktogram: true, kontrasTinggi: false },
  },
];

export const PROGRESS_HARIAN = [
  { hari: "Sen", nilai: 60 },
  { hari: "Sel", nilai: 75 },
  { hari: "Rab", nilai: 70 },
  { hari: "Kam", nilai: 85 },
  { hari: "Jum", nilai: 80 },
  { hari: "Sab", nilai: 72 },
  { hari: "Min", nilai: 0 },
];

export const PANDUAN_ORTU = [
  {
    emoji: "🥕",
    judul: "Latihan Mengenal Sayur",
    durasi: "10 menit",
    desc: "Ajak Adi ke dapur. Tunjukkan 3 sayur, sebutkan namanya, dan minta Adi mengulang.",
  },
  {
    emoji: "🎵",
    judul: "Bernyanyi Lagu Pelangi",
    durasi: "5 menit",
    desc: "Putar lagu pelangi sambil menunjuk warna di sekitar rumah.",
  },
  {
    emoji: "✏️",
    judul: "Menulis Angka 1 di Pasir/Tepung",
    durasi: "8 menit",
    desc: "Latihan motorik halus. Beri pujian setiap percobaan, jangan koreksi ejaan.",
  },
];
