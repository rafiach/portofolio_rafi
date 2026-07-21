import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "digicoop",
    companyName: "DigiCoop",
    type: "Personal",
    category: ["Full Stack", "Mobile Dev", "AI Integration"],
    shortDescription:
      "Kasir koperasi jadi otomatis — cukup arahkan kamera, produk langsung terdeteksi.",
    websiteLink: "",
    githubLink: "https://github.com/rafiach/Digicoop",
    techStack: ["Kotlin", "Machine Learning", "Django", "MySQL"],
    startDate: new Date("2025-01-20"),
    endDate: new Date("2025-07-17"),
    companyLogoImg: "/projects/digicoop/logo.png",
    pagesInfoArr: [
      {
        title: "Tampilan Aplikasi",
        description:
          "Kamera mendeteksi produk secara real-time dan otomatis mencatatnya ke sistem transaksi kasir.",
        imgArr: ["/projects/digicoop/screenshot-1.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Koperasi kampus mengalami kesulitan dalam proses transaksi dan pendataan pembeli — kasir manual yang mencari produk satu per satu memakan waktu dan rawan human error, terutama saat jam ramai.",
        "Sebagai proyek skripsi, saya membangun aplikasi Android yang mendeteksi produk secara otomatis lewat kamera real-time menggunakan model AI (YOLO). Produk yang terdeteksi langsung dicocokkan ke database dan tercatat ke sistem transaksi, dengan data tersimpan lokal maupun tersinkronisasi ke server (Django REST API) sehingga tetap berjalan meski koneksi terputus.",
      ],
      bullets: [
        "Membangun sistem deteksi produk real-time berbasis YOLO yang terbukti akurat saat pengujian skripsi.",
        "Mengintegrasikan sistem kasir dengan backend Django REST API dan database MySQL.",
        "Merancang penyimpanan data lokal + sinkronisasi server agar aplikasi tetap bisa dipakai saat koneksi internet terputus.",
        "Diuji langsung oleh pihak koperasi yang mengonfirmasi sistem berjalan sesuai fungsinya.",
      ],
    },
  },
  {
    id: "danamoo",
    companyName: "Danamoo",
    type: "Personal",
    category: ["Mobile Dev", "Full Stack"],
    shortDescription:
      "Catat pemasukan-pengeluaran, lihat insight lewat grafik, data aman tersimpan offline maupun cloud.",
    websiteLink: "",
    githubLink: "",
    techStack: ["Flutter", "Firebase"],
    startDate: new Date("2026-06-10"), 
    endDate: new Date(), 
    companyLogoImg: "/projects/danamoo/logo.png",
    pagesInfoArr: [
      {
        title: "Dashboard & Insight",
        description:
          "Ringkasan pemasukan-pengeluaran dengan visualisasi grafik dan sistem backup/restore data.",
        imgArr: ["/projects/danamoo/screenshot-1.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Banyak orang butuh cara sederhana mencatat pemasukan dan pengeluaran harian tanpa harus terhubung langsung ke rekening bank atau e-wallet, yang seringkali terasa rumit atau menimbulkan kekhawatiran soal keamanan data.",
        "Danamoo saya kembangkan end-to-end — dari frontend, arsitektur, sampai backend — sebagai budget tracker Flutter dengan ringkasan visual berupa grafik pengeluaran, sistem backup/restore, serta penyimpanan ganda: lokal (offline) dan Firestore (cloud), sehingga data tetap aman dan bisa diakses tanpa koneksi internet.",
      ],
      bullets: [
        "Mengembangkan aplikasi secara full-cycle, dari UI, arsitektur state management, sampai integrasi backend.",
        "Membangun visualisasi grafik (chart insight) untuk membantu pengguna memahami pola keuangannya.",
        "Merancang sistem backup & restore data dengan penyimpanan ganda lokal + Firestore (cloud).",
      ],
    },
  },
  {
    id: "sisapi",
    companyName: "SiSapi",
    type: "Personal",
    category: ["Mobile Dev", "AI Integration"],
    shortDescription:
      "Kelola data sapi dan cek kandungan nutrisi pakan, langsung dari HP — lewat sensor yang terhubung real-time.",
    websiteLink: "",
    githubLink: "",
    techStack: ["Kotlin", "Firebase", "Machine Learning"],
    startDate: new Date("2025-07-15"), 
    endDate: new Date("2025-09-21"), 
    companyLogoImg: "/projects/sisapi/logo.png",
    pagesInfoArr: [
      {
        title: "Dashboard Manajemen Ternak",
        description:
          "Data sapi dan hasil analisis nutrisi pakan dari sensor NIR ditampilkan real-time.",
        imgArr: ["/projects/sisapi/screenshot-1.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Komunitas peternak sapi kesulitan mengelola data ternak (jenis, berat, riwayat penyakit) secara terorganisir, serta tidak punya cara mudah untuk mengetahui kandungan nutrisi pakan yang diberikan — padahal ini penting untuk kesehatan ternak dan efisiensi biaya pakan.",
        "Sebagai bagian dari program pengabdian masyarakat, saya membangun sisi Android dari sistem ini: aplikasi manajemen data sapi yang terhubung ke sensor NIR (Near Infrared) via Firebase Realtime Database, lalu menjalankan model prediksi nutrisi langsung on-device sehingga peternak bisa langsung melihat hasil analisis tanpa menunggu proses di server terpisah. Aplikasi juga memberi rekomendasi harga jual sapi berdasarkan berat, biaya operasional, dan harga pasar.",
      ],
      bullets: [
        "Membangun aplikasi Android yang terhubung real-time ke sensor NIR melalui Firebase Realtime Database.",
        "Menjalankan model prediksi nutrisi pakan on-device di Android, tanpa bergantung pada server terpisah.",
        "Menambahkan fitur rekomendasi harga jual sapi berdasarkan data berat dan harga pasar.",
        "Diuji langsung di lapangan oleh komunitas peternak, dengan sebagian merasa terbantu untuk mencatat data ternak dan mengecek nutrisi pakan lebih praktis.",
      ],
    },
  },
  {
    id: "danukerti",
    companyName: "Danukerti",
    type: "Professional",
    category: ["Mobile Dev"],
    shortDescription:
      "Pantau dan kendalikan akuarium pintar dari HP — real-time, otomatis maupun manual.",
    websiteLink: "",
    githubLink: "",
    techStack: ["Kotlin", "Firebase"],
    startDate: new Date("2025-01-17"), 
    endDate: new Date("2025-03-01"),
    companyLogoImg: "/projects/danukerti/logo.png",
    pagesInfoArr: [
      {
        title: "Monitoring & Kontrol Akuarium",
        description:
          "Dashboard real-time untuk Auto Mode dan Manual Mode kontrol akuarium pintar.",
        imgArr: ["/projects/danukerti/screenshot-1.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Mengelola akuarium pintar berbasis IoT dengan banyak sensor (kejernihan air, pemberi pakan, buka-tutup pipa ganti air, deteksi ikan mati) butuh aplikasi yang bisa menampilkan kondisi sensor secara real-time sekaligus memungkinkan kontrol langsung, tanpa risiko perintah dobel yang bisa merusak alat.",
        "Aplikasi Android yang saya kembangkan terhubung ke sistem IoT via Firebase Realtime Database, mendukung Auto Mode (berjalan otomatis sesuai jadwal/kondisi sensor) dan Manual Mode (kontrol langsung oleh pengguna). Setiap aksi kontrol memakai pendekatan one-shot trigger, sehingga satu perintah hanya diproses satu kali — mencegah spam perintah ke perangkat maupun notifikasi berulang ke pengguna.",
      ],
      bullets: [
        "Membangun dua mode kontrol (Auto & Manual) yang tetap sinkron secara real-time lewat Firebase Realtime Database.",
        "Merancang pola one-shot trigger untuk mencegah perintah/notifikasi ganda ke perangkat IoT.",
        "Menggunakan arsitektur ViewModel + reactive state agar tampilan selalu sesuai kondisi data terbaru.",
      ],
    },
  },
  {
    id: "tessa",
    companyName: "Tessa",
    type: "Professional",
    category: ["Mobile Dev", "AI Integration"],
    shortDescription:
      "Tong sampah pintar yang mendeteksi jenis sampah dan mengubahnya jadi poin — konsep awal menuju bank sampah digital.",
    websiteLink: "",
    githubLink: "",
    techStack: ["Kotlin", "Firebase", "Machine Learning"],
    startDate: new Date("202-04-12"), 
    endDate: new Date("2025-05-27"), 
    companyLogoImg: "/projects/tessa/logo.png",
    pagesInfoArr: [
      {
        title: "Dashboard Kapasitas & Deteksi Sampah",
        description:
          "Monitoring kapasitas tong sampah dan jenis sampah secara real-time.",
        imgArr: ["/projects/tessa/screenshot-1.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Pengelolaan sampah konvensional sulit dipantau kapasitasnya secara real-time, dan kurang ada insentif langsung bagi masyarakat untuk aktif memilah/membuang sampah dengan benar.",
        "Aplikasi Android yang saya kembangkan terhubung ke perangkat IoT tong sampah pintar, menampilkan deteksi jenis sampah dan monitoring kapasitas secara real-time lewat Firebase, lengkap dengan smart alert anti-spam dan riwayat pengisian. Sebagai pengembangan lanjutan, hasil deteksi sampah dirancang bisa dikonversi menjadi poin — konsep awal menuju sistem bank sampah digital.",
      ],
      bullets: [
        "Mengembangkan dashboard monitoring kapasitas tong sampah secara real-time via Firebase.",
        "Menambahkan smart alert anti-spam agar notifikasi tidak berulang untuk kondisi yang sama.",
        "Merancang konsep konversi deteksi sampah menjadi poin sebagai fondasi menuju bank sampah digital.",
      ],
    },
  },
  {
    id: "eyeguard",
    companyName: "EyeGuard",
    type: "Professional",
    category: ["Mobile Dev"],
    shortDescription:
      "Jaga kesehatan mata sehari-hari — dari tips, tes ketajaman, sampai cari klinik terdekat, semua dalam satu aplikasi.",
    websiteLink: "",
    githubLink: "",
    techStack: ["Flutter"],
    startDate: new Date("2026-02-10"), 
    endDate: new Date("2026-03-09"), 
    companyLogoImg: "/projects/eyeguard/logo.png",
    pagesInfoArr: [
      {
        title: "Edukasi & Monitoring Kesehatan Mata",
        description:
          "Tips kesehatan mata, tes ketajaman, monitoring screen time, dan pencarian klinik terdekat.",
        imgArr: ["/projects/eyeguard/screenshot-1.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Banyak orang kurang sadar soal dampak penggunaan HP berlebihan terhadap kesehatan mata, dan tidak punya cara mudah untuk memantau screen time, mengecek ketajaman mata mandiri, maupun menemukan layanan kesehatan mata terdekat.",
        "EyeGuard menggabungkan edukasi dan monitoring kesehatan mata dalam satu aplikasi Flutter: konten tips kesehatan mata, tes ketajaman mata sederhana, pemantauan penggunaan aplikasi HP dengan notifikasi batas waktu yang bisa diatur, serta pencarian klinik mata terdekat berdasarkan lokasi pengguna.",
      ],
      bullets: [
        "Membangun fitur tes ketajaman mata sederhana langsung di dalam aplikasi.",
        "Mengembangkan sistem monitoring screen time dengan notifikasi batas waktu yang bisa dikustomisasi pengguna.",
        "Menambahkan fitur pencarian klinik mata terdekat berdasarkan kalkulasi jarak lokasi pengguna.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
