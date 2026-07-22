import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "ruang-robot",
    position: "Freelance Mobile App Developer",
    company: "Ruang Robot",
    location: "Kediri, Indonesia",
    startDate: new Date("2025-01-10"),
    endDate: new Date("2026-05-17"),
    description: [
      "Mengembangkan aplikasi Android untuk solusi Internet of Things (IoT) dan robotika menggunakan Kotlin dan Jetpack Compose.",
      "Berkolaborasi dengan klien untuk menerjemahkan kebutuhan bisnis menjadi aplikasi mobile yang fungsional.",
      "Mengintegrasikan aplikasi dengan Firebase dan REST API untuk mendukung pemantauan serta pengendalian perangkat secara real-time.",
      "Melakukan pemeliharaan, pengembangan fitur baru, serta perbaikan bug guna meningkatkan kualitas dan performa aplikasi."
    ],
    achievements: [
      "Mengembangkan aplikasi monitoring perangkat IoT dan sistem kontrol robot.",
      "Mengimplementasikan Firebase Realtime Database untuk sinkronisasi data secara real-time.",
      "Menyelesaikan beberapa proyek aplikasi mobile sesuai kebutuhan klien.",
      "Melakukan presentasi dan pendampingan penggunaan aplikasi kepada klien setelah implementasi."
    ],
    skills: [
      "Kotlin",
      "Jetpack Compose",
      "Firebase",
      "REST API",
      "Flutter",
      "Machine Learning"
    ],
    companyUrl: "https://ruangrobot.com/",
    logo: "/experience/rr_logo.jpg",
  },
  {
    id: "xenopati",
    position: "Mobile Developer Intern",
    company: "PT Xeno Persada Teknologi (Xenopati)",
    location: "Surabaya, Indonesia",
    startDate: new Date("2025-11-24"),
    endDate: new Date("2026-05-23"),
    description: [
      "Mengembangkan dan memelihara aplikasi mobile berbasis Flutter yang digunakan dalam lingkungan produksi.",
      "Mengimplementasikan antarmuka pengguna berdasarkan desain UI/UX serta memastikan pengalaman pengguna yang konsisten di berbagai perangkat.",
      "Mengintegrasikan REST API dan mengelola alur data aplikasi untuk mendukung kebutuhan bisnis dan operasional klien.",
      "Berkolaborasi dengan tim backend, UI/UX designer, dan project manager dalam proses pengembangan, pengujian, serta deployment aplikasi."
    ],
    achievements: [
      "Mengembangkan berbagai fitur pada aplikasi manajemen gym, termasuk membership, booking class, check-in/check-out, dan riwayat kehadiran.",
      "Mengimplementasikan fitur notifikasi, integrasi peta, navigasi eksternal, dan berbagai proses CRUD.",
      "Melakukan refactoring kode dan perbaikan bug untuk meningkatkan stabilitas serta maintainability aplikasi.",
      "Berpartisipasi dalam proses pengujian aplikasi untuk kebutuhan distribusi di Google Play Store dan Apple App Store.",
      "Mengintegrasikan thermal printer dan menyesuaikan implementasi native Android ke dalam proyek Flutter.",
      "Mempresentasikan progres pengembangan kepada klien dan berkontribusi dalam diskusi kebutuhan fitur."
    ],
    skills: [
      "Flutter",
      "Dart",
      "REST API",
      "Git",
      "Firebase",
    ],
    companyUrl: "https://xenopati.id/",
    logo: "/experience/xeno_logo.jpg",
  },
];
