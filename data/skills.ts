import {
  Building2,
  HeartPulse,
  Lock,
  MonitorSmartphone,
  Server,
  ShoppingCart,
  Users,
  type LucideIcon,
} from "lucide-react";

export interface SkillGroup {
  title: string;
  icon: LucideIcon;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Tampilan & pengalaman pengguna",
    icon: MonitorSmartphone,
    items: [
      "Website & dashboard yang enak di HP dan laptop",
      "Alur kerja sederhana untuk staf non-teknis",
      "Desain modern, rapi, dan konsisten",
      "Animasi halus agar terasa premium",
    ],
  },
  {
    title: "Sistem & data",
    icon: Server,
    items: [
      "Penyimpanan data pasien, stok, dan gaji yang terstruktur",
      "Koneksi antar modul (kasir, apotek, HR)",
      "Login aman & hak akses per jabatan",
      "Satu aplikasi untuk banyak cabang/perusahaan",
    ],
  },
  {
    title: "Bidang yang sering saya garap",
    icon: Building2,
    items: [
      "Klinik, apotek, dan rekam medis",
      "POS online terintegrasi inventori (stok real-time)",
      "HR, absensi, dan payroll",
      "Website profil perusahaan",
    ],
  },
];

export const domainHighlights: {
  icon: LucideIcon;
  label: string;
  detail: string;
}[] = [
  {
    icon: HeartPulse,
    label: "Kesehatan",
    detail: "Pasien, antrian, dan riwayat medis dalam satu tempat",
  },
  {
    icon: ShoppingCart,
    label: "POS online & inventori",
    detail: "Kasir di browser/online—setiap jual, stok langsung update",
  },
  {
    icon: Users,
    label: "HR & gaji",
    detail: "Absensi dan slip gaji tanpa ribet spreadsheet",
  },
  {
    icon: Lock,
    label: "Keamanan",
    detail: "Hanya role yang berhak yang bisa lihat data sensitif",
  },
];
