export const siteConfig = {
  name: "Azis",
  fullName: "Azis Yudi Setiawan",
  copyrightYear: 2026,
  role: "Full-Stack Developer · Spesialis Sistem Kesehatan & Perusahaan",
  headline: "Sistem digital yang rapi, aman, dan siap dipakai tim Anda setiap hari",
  headlineAccent: "Kesehatan · POS Online & Inventori · HR & Gaji",
  elevatorPitch:
    "Saya membantu klinik, apotek, dan perusahaan membangun aplikasi internal: data pasien, POS online terintegrasi inventori, hingga absensi dan payroll—semua terhubung dan mudah dikelola.",
  profile: {
    photoSrc: "/images/profile.jpg",
    /** Sumber asli foto (untuk referensi / update manual) */
    photoRemote:
      "https://hc.riaindahmandiri.com/upload/images/karyawan/202208047481.jpg",
    intro:
      "Saya Azis Yudi Setiawan—developer yang fokus membangun sistem nyata untuk operasional kesehatan dan perusahaan, bukan sekadar demo di layar.",
    paragraphs: [
      "Pengalaman saya terutama di proyek live: database pasien, POS online (kasir) yang langsung terhubung ke inventori obat & barang, poli gigi, platform HR & gaji untuk beberapa perusahaan, plus website profil perusahaan. Saya biasa duduk di tengah kebutuhan bisnis dan tim di lapangan—supaya aplikasi enak dipakai resepsionis, kasir, HR, maupun manajemen.",
      "Saya percaya sistem yang bagus itu jelas alurnya, data tidak dobel, dan setiap orang hanya melihat bagian yang memang menjadi tanggung jawabnya. Itu yang saya bawa ke setiap proyek: tampilan modern, fondasi data rapi, dan integrasi antar modul.",
    ],
    highlights: [
      "Lebih dari 6 sistem sudah online & dipakai operasional",
      "POS online + inventori: stok berkurang otomatis saat transaksi",
      "HR & payroll multi-perusahaan dalam satu fondasi sistem",
      "Komunikasi jelas—cocok untuk presentasi ke klien & manajemen",
    ],
  },
  /** Google Analytics 4 — ID publik (bukan rahasia) */
  analytics: {
    measurementId: "G-TQC0D698PQ",
  },
  contact: {
    email: "azis.pbr@gmail.com",
    phoneDisplay: "0858-9165-8046",
    github: "https://github.com/azisyudi",
    linkedin: "https://www.linkedin.com/in/azis-yudi-setiawan-72439a1a5/",
    whatsapp: "https://wa.me/6285891658046",
  },
  nav: {
    profile: "Tentang",
    projects: "Proyek",
    skills: "Keahlian",
    contact: "Hubungi",
    cta: "Diskusi Proyek",
  },
  hero: {
    ctaPrimary: "Lihat Proyek",
    ctaSecondary: "Hubungi Saya",
    scrollHint: "Gulir untuk melihat portofolio",
  },
  sections: {
    profile: {
      eyebrow: "Tentang saya",
      title: "Partner teknis yang paham operasional di lapangan",
      description:
        "Ringkasan singkat untuk klien—siapa saya, apa yang saya kerjakan, dan mengapa proyek saya layak dipercaya untuk skala bisnis nyata.",
    },
    impact: {
      eyebrow: "Bukti nyata",
      title: "Bukan mockup—sistem ini sudah jalan",
      description:
        "Beberapa platform di bawah dipakai operasional harian: registrasi pasien, POS online + inventori, dan HR multi-perusahaan.",
    },
    projects: {
      eyebrow: "Portofolio",
      title: "Proyek yang bisa Anda buka langsung",
      description:
        "Pilih kategori, baca manfaat bisnisnya, lalu klik tombol untuk melihat sistem live.",
    },
    skills: {
      eyebrow: "Keahlian",
      title: "Dari tampilan depan sampai data di belakang layar",
      description:
        "Saya merancang alur kerja yang enak dipakai staf, plus fondasi data dan keamanan yang cocok untuk operasional serius.",
    },
    contact: {
      eyebrow: "Hubungi",
      title: "Ceritakan kebutuhan bisnis Anda",
      description:
        "Klinik baru butuh rekam medis? Perusahaan ingin absensi & gaji otomatis? Kirim pesan ke email atau WhatsApp—saya akan balas dengan langkah awal dan estimasi kasar.",
    },
  },
} as const;

export const metrics = [
  {
    value: "6+",
    label: "Sistem live",
    description: "Aplikasi yang sudah dipakai klien di lapangan",
  },
  {
    value: "3",
    label: "Ekosistem kesehatan",
    description: "Data pasien, kasir pusat, dan klinik gigi terintegrasi",
  },
  {
    value: "3",
    label: "Perusahaan HR",
    description: "Platform gaji & absensi dengan login terpisah per perusahaan",
  },
] as const;
