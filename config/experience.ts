import { Bilingual } from "@/providers/language-provider";
import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: Bilingual[];
  achievements: Bilingual[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "xenopati",
    position: "Mobile Developer Intern",
    company: "PT Xeno Persada Teknologi (Xenopati)",
    location: "Surabaya, Indonesia",
    startDate: new Date("2025-11-24"),
    endDate: new Date("2026-05-23"),
    description: [
      {
        en: "Contributed to the development and maintenance of a production-ready Flutter application used by real clients, delivering scalable features and continuous product improvements.",
        id: "Berkontribusi dalam pengembangan dan pemeliharaan aplikasi Flutter yang digunakan oleh pengguna nyata dengan menghadirkan fitur baru serta peningkatan produk secara berkelanjutan.",
      },
      {
        en: "Translated UI/UX designs into responsive, user-friendly interfaces while ensuring a consistent experience across Android and iOS devices.",
        id: "Mengimplementasikan desain UI/UX menjadi antarmuka yang responsif dan nyaman digunakan dengan pengalaman yang konsisten di perangkat Android maupun iOS.",
      },
      {
        en: "Integrated REST APIs and collaborated closely with backend engineers to deliver reliable business workflows and seamless data synchronization.",
        id: "Mengintegrasikan REST API serta berkolaborasi dengan backend engineer untuk membangun alur bisnis dan sinkronisasi data yang andal.",
      },
      {
        en: "Worked in an agile development environment alongside designers, backend engineers, and project managers from feature planning through production release.",
        id: "Bekerja dalam lingkungan pengembangan agile bersama UI/UX Designer, Backend Engineer, dan Project Manager mulai dari perencanaan fitur hingga proses rilis aplikasi.",
      },
    ],
    achievements: [
      {
        en: "Delivered multiple production features for a gym management platform, including memberships, class bookings, attendance tracking, and check-in/check-out workflows.",
        id: "Mengembangkan berbagai fitur utama pada aplikasi manajemen gym, seperti membership, booking kelas, absensi, serta proses check-in dan check-out.",
      },
      {
        en: "Implemented notifications, interactive maps, external navigation, and complete CRUD workflows to improve the overall user experience.",
        id: "Mengimplementasikan notifikasi, integrasi peta, navigasi eksternal, serta alur CRUD untuk meningkatkan pengalaman pengguna.",
      },
      {
        en: "Improved application quality through code refactoring, bug fixing, and performance optimization.",
        id: "Meningkatkan kualitas aplikasi melalui refactoring kode, perbaikan bug, dan optimalisasi performa.",
      },
      {
        en: "Supported production releases by participating in testing and deployment for both Google Play Store and Apple App Store.",
        id: "Mendukung proses rilis aplikasi melalui pengujian dan deployment ke Google Play Store serta Apple App Store.",
      },
      {
        en: "Integrated a native Android thermal printer into Flutter by adapting an existing Java implementation.",
        id: "Mengintegrasikan thermal printer native Android ke dalam Flutter dengan mengadaptasi implementasi berbasis Java.",
      },
      {
        en: "Presented development progress to clients and contributed to feature discussions throughout the project lifecycle.",
        id: "Mempresentasikan progres pengembangan kepada klien serta berkontribusi dalam diskusi kebutuhan dan pengembangan fitur.",
      },
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
  {
    id: "ruang-robot",
    position: "Freelance Mobile App Developer",
    company: "Ruang Robot",
    location: "Kediri, Indonesia",
    startDate: new Date("2025-01-10"),
    endDate: new Date("2026-05-17"),
    description: [
      {
        en: "Developed custom Android applications for IoT, robotics, and machine learning solutions tailored to client requirements.",
        id: "Mengembangkan aplikasi Android kustom untuk solusi IoT, robotika, dan machine learning sesuai kebutuhan klien.",
      },
      {
        en: "Worked directly with clients to transform ideas and operational needs into intuitive mobile applications.",
        id: "Berkolaborasi langsung dengan klien untuk menerjemahkan kebutuhan bisnis dan operasional menjadi aplikasi mobile yang mudah digunakan.",
      },
      {
        en: "Integrated mobile applications with Firebase and REST APIs to enable reliable real-time communication between devices and cloud services.",
        id: "Mengintegrasikan aplikasi dengan Firebase dan REST API untuk menghadirkan komunikasi real-time antara perangkat dan layanan cloud.",
      },
      {
        en: "Maintained existing applications while continuously delivering new features, improvements, and performance enhancements.",
        id: "Melakukan pemeliharaan aplikasi sekaligus mengembangkan fitur baru, perbaikan, dan peningkatan performa secara berkelanjutan.",
      },
    ],
    achievements: [
      {
        en: "Delivered multiple mobile applications for IoT monitoring, smart automation, and robotics projects.",
        id: "Menyelesaikan berbagai aplikasi mobile untuk monitoring IoT, otomasi pintar, dan sistem robotika.",
      },
      {
        en: "Implemented Firebase Realtime Database to provide live synchronization between mobile applications and connected devices.",
        id: "Mengimplementasikan Firebase Realtime Database untuk sinkronisasi data secara real-time antara aplikasi dan perangkat IoT.",
      },
      {
        en: "Successfully delivered freelance projects that matched client requirements and project objectives.",
        id: "Menyelesaikan berbagai proyek freelance sesuai kebutuhan klien dan target pengembangan.",
      },
      {
        en: "Provided project demonstrations and post-deployment support to ensure successful client adoption.",
        id: "Melakukan presentasi hasil pengembangan serta memberikan pendampingan kepada klien setelah implementasi aplikasi.",
      },
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
    id: "lookspace",
    position: "Web Developer (Vocational Internship)",
    company: "LookSpace Production",
    location: "Kediri, Jawa Timur, Indonesia",
    startDate: new Date("2024-02-16"), 
    endDate: new Date("2024-03-17"),
    description: [
      {
        en: "Contributed to the development of an event ticketing website during a vocational internship using WordPress.",
        id: "Berkontribusi dalam pengembangan website event ticketing berbasis WordPress selama program magang kejuruan.",
      },
      {
        en: "Collaborated with the development team to build responsive pages and user-friendly interfaces for event management.",
        id: "Berkolaborasi dengan tim untuk membangun halaman website yang responsif dan mudah digunakan dalam pengelolaan informasi acara.",
      },
      {
        en: "Supported the implementation of website features, including event information pages, galleries, and email notifications.",
        id: "Membantu implementasi berbagai fitur website, termasuk halaman informasi acara, galeri, dan notifikasi email.",
      },
    ],
    achievements: [
      {
        en: "Built several key pages for an event ticketing website, including the event dashboard and gallery.",
        id: "Mengembangkan beberapa halaman utama website event ticketing, termasuk dashboard informasi acara dan galeri.",
      },
      {
        en: "Designed interface components that improved the overall visual consistency of the website.",
        id: "Merancang berbagai komponen antarmuka yang meningkatkan konsistensi tampilan website.",
      },
      {
        en: "Assisted in integrating email notifications to streamline event information delivery.",
        id: "Membantu mengintegrasikan notifikasi email untuk mempermudah penyampaian informasi acara.",
      },
    ],
    skills: ["WordPress", "HTML 5", "CSS 3"],
    companyUrl: "https://studiolookspace.com/",
    logo: "/experience/lp-logo.png",
  },
];
