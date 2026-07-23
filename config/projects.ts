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
      "DigiCoop is an AI-powered mobile cashier application developed as my undergraduate thesis project to modernize transaction workflows in a university cooperative.",
    websiteLink: "",
    githubLink: "https://github.com/rafiach/Digicoop",
    techStack: ["Kotlin", "Machine Learning", "Django", "MySQL"],
    startDate: new Date("2025-01-20"),
    endDate: new Date("2025-07-17"),
    companyLogoImg: "/projects/digicoop/image_1.png",
    pagesInfoArr: [
      {
        title: "Aplication Overview",
        description:
          "Smart mobile cashier using computer vision and speech recognition.",
        imgArr: ["/projects/digicoop/image_2.png", "/projects/digicoop/image_3.png", "/projects/digicoop/image_4.png",],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "DigiCoop is an AI-powered mobile cashier application developed as my undergraduate thesis project to modernize transaction workflows in a university cooperative. The application provides a faster and more convenient checkout experience by allowing cashiers to complete transactions using either image recognition or voice recognition.",
        "I designed and developed the Android application using Kotlin and Jetpack Compose, while integrating AI models for product identification and speech recognition. The application communicates with a backend service to process detections, retrieve product information, calculate transaction totals, and synchronize completed purchases with the cooperative's cashier database.",
        "By combining computer vision, voice-based interaction, and seamless backend integration, DigiCoop simplifies the checkout process and reduces manual product input while ensuring every completed transaction is automatically recorded in the cooperative's existing system."
      ],
      bullets: [
        "Integrated two AI interaction methods: Image Recognition & Voice Recognition.",
        "Developed a complete mobile cashier workflow from product detection to payment.",
        "Connected transaction results directly to the cooperative cashier database.",
        "Built using Kotlin, Jetpack Compose, Django REST API, and YOLOv8.",
        "Undergraduate thesis project focused on AI-assisted retail transactions."
      ],
    },
  },
  {
    id: "danamoo",
    companyName: "Danamoo",
    type: "Personal",
    category: ["Mobile Dev", "Full Stack"],
    shortDescription:
      "Danamoo is a personal budget tracking application that helps users manage their daily income and expenses through a simple, intuitive, and privacy-friendly experience.",
    websiteLink: "",
    githubLink: "",
    techStack: ["Flutter", "Firebase"],
    startDate: new Date("2026-06-10"), 
    endDate: new Date(), 
    companyLogoImg: "/projects/danamoo/image_1.png",
    pagesInfoArr: [
      {
        title: "Aplication Overview",
        description:
          "View your financial summary with interactive charts and recent transaction insights.",
        imgArr: ["/projects/danamoo/image_2.png", "/projects/danamoo/image_3.png", "/projects/danamoo/image_4.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Danamoo is a personal budget tracking application that helps users manage their daily income and expenses through a simple, intuitive, and privacy-friendly experience. The application is designed to work seamlessly both offline and online, ensuring financial records remain accessible anytime while providing optional cloud backup.",
        "As a full-cycle personal project, I independently designed the application architecture, developed the mobile interface, implemented local and cloud data storage, and built features for financial insights and data management. This project allows me to explore the complete application lifecycle beyond frontend development, from data modeling to backend integration.",
        "Danamoo continues to evolve as I experiment with new features and improve the overall user experience, making it both a practical personal finance tool and a platform for continuous learning.",
      ],
      bullets: [
        "Built as a full-cycle Flutter application from UI design to cloud integration.",
        "Supports offline-first data storage with optional cloud backup using Firebase.",
        "Provides visual financial insights through interactive charts.",
        "Implements backup and restore functionality for secure data management.",
        "Continuously improved as an active long-term personal project."
      ],
    },
  },
  {
    id: "sisapi",
    companyName: "SiSapi",
    type: "Personal",
    category: ["Mobile Dev", "IoT", "Machine Learning"],
    shortDescription:
      "An Android application for cattle management that integrates IoT sensors and on-device machine learning to analyze livestock feed nutrition in real time.",
    websiteLink: "",
    githubLink: "",
    techStack: [
      "Kotlin",
      "Firebase",
      "Machine Learning",
      "IoT"
    ],
    startDate: new Date("2025-07-15"), 
    endDate: new Date("2025-09-21"), 
    companyLogoImg: "/projects/sisapi/image_1.png",

    pagesInfoArr: [
      {
        title: "Dashboard Overview",
        description:
          "Monitor cattle information and access essential livestock management features from a centralized dashboard.",
        imgArr: [
          "/projects/sisapi/image_2.png",
        ],
      },
      {
        title: "Cattle Management",
        description:
          "Manage cattle profiles, operational records, health history, and estimated selling prices in one place.",
        imgArr: [
          "/projects/sisapi/image_3.png",
          "/projects/sisapi/image_4.png",
        ],
      },
      {
        title: "Feed Nutrition Detection",
        description:
          "Analyze livestock feed nutrition in real time using data collected from an integrated NIR sensor.",
        imgArr: [
          "/projects/sisapi/image_5.png"
        ],
      },
    ],

    descriptionDetails: {
      paragraphs: [
        "SiSapi is an Android application developed for a community service program to help cattle farmers manage livestock information and monitor feed quality through digital technology. The application simplifies daily record-keeping while providing valuable insights into cattle health and operational data.",
        "As the Android Developer, I designed and implemented the mobile application, integrating it with Firebase Realtime Database to receive data from an external Near Infrared (NIR) sensor. The application processes the incoming sensor data and displays feed nutrition analysis directly on the device, providing farmers with instant results without requiring a separate backend service.",
        "Beyond livestock management, the application also includes operational expense tracking, cattle health records, and selling price estimation, making it a comprehensive digital assistant for livestock management."
      ],

      bullets: [
        "Developed a native Android application using Kotlin for livestock management.",
        "Integrated Firebase Realtime Database for real-time communication with IoT devices.",
        "Implemented on-device machine learning inference for feed nutrition analysis.",
        "Built features for cattle records, operational expenses, disease history, and selling price estimation.",
        "Contributed to a community service project promoting digital transformation in livestock farming."
      ],
    },
  },
  {
    id: "danukerti",
    companyName: "Danukerti",
    type: "Professional",
    category: ["Mobile Dev", "IoT"],
    shortDescription:
      "A smart aquarium monitoring and control application that enables real-time device management through IoT integration.",
    websiteLink: "",
    githubLink: "",
    techStack: [
      "Kotlin",
      "Jetpack Compose",
      "Firebase",
      "IoT"
    ],
    startDate: new Date("2025-01-17"), 
    endDate: new Date("2025-03-01"),
    companyLogoImg: "/projects/danukerti/image_1.png",

    pagesInfoArr: [
      {
        title: "Smart Aquarium Dashboard",
        description:
          "Monitor water conditions and remotely control aquarium devices through automatic or manual operation modes.",
        imgArr: [
          "/projects/danukerti/image_dashboard.png"
        ],
      },
    ],

    descriptionDetails: {
      paragraphs: [
        "Danukerti is an Android application developed to support a smart aquarium IoT system by providing real-time monitoring and remote device control. The application allows users to monitor sensor data, automate routine operations, and manually control connected hardware from a single dashboard.",
        "As the Android Developer, I built the mobile application and integrated it with Firebase Realtime Database to synchronize sensor readings and control commands. The application supports both automatic scheduling and manual operation while ensuring the interface remains synchronized with live device status.",
        "To improve system reliability, the application implements a one-shot trigger mechanism that prevents duplicate commands and repeated notifications, reducing the risk of unintended device behavior during remote operation."
      ],

      bullets: [
        "Developed a native Android application for real-time IoT monitoring and remote control.",
        "Integrated Firebase Realtime Database for live sensor updates and device communication.",
        "Implemented automatic and manual control modes for aquarium management.",
        "Designed a one-shot trigger mechanism to prevent duplicate commands and notification spam.",
        "Built using a reactive architecture with ViewModel and StateFlow for synchronized real-time data."
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
