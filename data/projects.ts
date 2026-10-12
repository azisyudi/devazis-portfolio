export type ProjectFilterCategory =
  | "all"
  | "healthcare-pos"
  | "hr-payroll"
  | "websites";

export type ProjectCategory = Exclude<ProjectFilterCategory, "all">;

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  /** Label singkat untuk klien (bukan jargon teknis) */
  techStack: string[];
  category: ProjectCategory;
  url?: string;
  links?: ProjectLink[];
  imageGradient: string;
}

export const projectFilters: { id: ProjectFilterCategory; label: string }[] = [
  { id: "all", label: "Semua" },
  { id: "healthcare-pos", label: "Kesehatan & Kasir" },
  { id: "hr-payroll", label: "HR & Gaji" },
  { id: "websites", label: "Website & Aplikasi Web" },
];

export const projects: Project[] = [
  {
    id: "alkindi-patient-db",
    title: "Database Pasien Alkindi",
    description:
      "Pendaftaran pasien, rekam medis digital, riwayat kunjungan, dan layar antrian di lobby—semua sinkron dengan ekosistem Alkindi.",
    highlights: [
      "Registrasi pasien cepat",
      "Rekam medis & riwayat",
      "Antrian lobby",
      "Terhubung sistem Alkindi",
    ],
    techStack: ["Rekam medis", "Antrian", "Integrasi klinik", "Akses per role"],
    category: "healthcare-pos",
    url: "https://alkindikasir.com/dbpasien/",
    imageGradient: "from-stone-800/80 via-stone-900/90 to-black",
  },
  {
    id: "alkindi-pos-pharmacy",
    title: "Kasir & Stok Apotek Alkindi",
    description:
      "Kasir untuk konsultasi dan penjualan obat, dengan stok apotek ter-update otomatis saat transaksi.",
    highlights: [
      "Kasir konsultasi & obat",
      "Stok real-time",
      "Satu data dengan apotek",
      "Laporan penjualan",
    ],
    techStack: ["Kasir (POS)", "Inventori obat", "Integrasi apotek", "Laporan"],
    category: "healthcare-pos",
    url: "https://alkindikasir.com/Pusat/",
    imageGradient: "from-neutral-800/80 via-zinc-900/90 to-black",
  },
  {
    id: "alkindi-dental-pos",
    title: "Kasir Klinik Gigi Alkindi",
    description:
      "Alur khusus poli gigi: pemeriksaan, catatan tindakan, resep, dan stok obat klinik dalam satu aplikasi.",
    highlights: [
      "Alur pemeriksaan gigi",
      "Catatan tindakan",
      "Penjualan obat",
      "Kelola stok klinik",
    ],
    techStack: ["Kasir poli gigi", "Stok klinik", "Resep", "Hak akses staf"],
    category: "healthcare-pos",
    url: "https://alkindikasir.com/poligigi/",
    imageGradient: "from-zinc-800/80 via-stone-900/90 to-black",
  },
  {
    id: "multi-tenant-hr",
    title: "Platform HR & Payroll Multi-Perusahaan",
    description:
      "Absensi, data karyawan, hitung gaji, dan login terpisah untuk beberapa perusahaan dalam satu fondasi sistem.",
    highlights: [
      "Hitung gaji otomatis",
      "Absensi karyawan",
      "Database karyawan",
      "Login per perusahaan",
    ],
    techStack: ["Payroll", "Absensi", "Multi-perusahaan", "Keamanan login"],
    category: "hr-payroll",
    links: [
      { label: "Ria Busana", url: "https://hc.riaindahmandiri.com/" },
      { label: "Tasima Hotel", url: "https://hc.tasimahotel.com/" },
      { label: "Pikuland RSP", url: "https://hc.pikuland.id/" },
    ],
    imageGradient: "from-amber-950/50 via-stone-900/90 to-black",
  },
  {
    id: "alkindi-herbal",
    title: "Website Perusahaan Alkindi Herbal",
    description:
      "Profil perusahaan herbal, artikel edukasi, arsip jurnal, dan tombol booking langsung ke WhatsApp.",
    highlights: [
      "Profil & branding",
      "Artikel & jurnal",
      "Booking WhatsApp",
      "Tampilan mobile rapi",
    ],
    techStack: ["Website company profile", "Konten & SEO", "WhatsApp", "Mobile-first"],
    category: "websites",
    url: "https://alkindiherbal.com/",
    imageGradient: "from-emerald-950/40 via-stone-900/90 to-black",
  },
  {
    id: "cardiac-save",
    title: "Portal Edukasi Cardiac Save",
    description:
      "Website edukasi kesehatan jantung: materi mudah dibaca, studi kasus, dan jalur konsultasi dengan dokter.",
    highlights: [
      "Edukasi kesehatan jantung",
      "Studi kasus medis",
      "Konsultasi ahli",
      "Konten terpercaya",
    ],
    techStack: ["Portal edukasi", "Studi kasus", "Konsultasi", "Aksesibilitas"],
    category: "websites",
    url: "https://cardiacsave.com/",
    imageGradient: "from-rose-950/35 via-stone-900/90 to-black",
  },
  {
    id: "voting-gaes-rt08",
    title: "E-Voting RT 08 (VotingGaes)",
    description:
      "Aplikasi voting online untuk RT: warga login, memilih calon, dan pengurus RT mengelola data—praktis menggantikan voting manual.",
    highlights: [
      "Login warga & registrasi akun",
      "Voting digital aman",
      "Panel pengurus RT",
      "Siap dipakai di HP",
    ],
    techStack: ["Aplikasi web", "Login & role", "E-voting", "Domain .my.id"],
    category: "websites",
    url: "https://www.votinggaes.my.id/",
    imageGradient: "from-indigo-950/45 via-stone-900/90 to-black",
  },
];
