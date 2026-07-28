import { ValidCategory, ValidExpType, ValidSkills } from "./constants";
import { Bilingual } from "@/providers/language-provider";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: Bilingual;
}

interface DescriptionDetailsInterface {
  paragraphs: Bilingual[];
  bullets: Bilingual[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: Bilingual;
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
    shortDescription: {
      en: "Transforms traditional cooperative checkout into a faster, AI-powered experience using image and voice recognition.",
      id: "Mengubah proses transaksi koperasi menjadi lebih cepat dan modern melalui teknologi AI berbasis deteksi gambar dan pengenalan suara.",
    },
    websiteLink: "",
    githubLink: "https://github.com/rafiach/Digicoop",
    techStack: ["Kotlin", "Machine Learning", "Django", "MySQL"],
    startDate: new Date("2025-01-20"),
    endDate: new Date("2025-07-17"),
    companyLogoImg: "/projects/digicoop/image_1.png",
    pagesInfoArr: [
      {
        title: "Aplication Overview",
        description: {
          en: "Speed up checkout with AI-powered image and voice recognition.",
          id: "Percepat proses transaksi dengan deteksi gambar dan pengenalan suara berbasis AI.",
        },
        imgArr: ["/projects/digicoop/image_2.png", "/projects/digicoop/image_3.png", "/projects/digicoop/image_4.png",],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        {
          en: "DigiCoop reimagines the checkout experience for university cooperatives by replacing manual product entry with AI-powered image and voice recognition. Cashiers can identify products, process transactions, and complete payments more efficiently while reducing human error.",
          id: "DigiCoop menghadirkan pengalaman transaksi yang lebih modern bagi koperasi kampus dengan menggantikan input produk secara manual menggunakan deteksi gambar dan pengenalan suara berbasis AI. Proses transaksi menjadi lebih cepat, praktis, dan minim kesalahan.",
        },
        {
          en: "I designed and developed the Android application using Kotlin and Jetpack Compose, while integrating computer vision, speech recognition, and a backend service. The application automatically retrieves product information, calculates totals, generates receipts, and synchronizes every completed transaction with the cooperative database.",
          id: "Saya merancang dan mengembangkan aplikasi Android menggunakan Kotlin dan Jetpack Compose, serta mengintegrasikan computer vision, pengenalan suara, dan layanan backend. Aplikasi secara otomatis mengambil data produk, menghitung total transaksi, membuat struk, dan menyinkronkan setiap transaksi ke database koperasi.",
        },
        {
          en: "More than an academic project, DigiCoop demonstrates how mobile development, artificial intelligence, and backend integration can work together to build a practical solution that improves everyday retail operations.",
          id: "Lebih dari sekadar proyek akademik, DigiCoop menunjukkan bagaimana pengembangan aplikasi mobile, kecerdasan buatan, dan integrasi backend dapat menghasilkan solusi nyata yang membantu meningkatkan efisiensi operasional sehari-hari.",
        },
      ],
      bullets: [
        {
          en: "Combined image and voice recognition into a seamless checkout experience.",
          id: "Menggabungkan deteksi gambar dan pengenalan suara dalam satu alur transaksi yang praktis.",
        },
        {
          en: "Built an end-to-end mobile cashier system from product detection to payment confirmation.",
          id: "Membangun sistem kasir mobile end-to-end mulai dari deteksi produk hingga konfirmasi pembayaran.",
        },
        {
          en: "Automatically synchronized completed transactions with the cooperative database.",
          id: "Menyinkronkan setiap transaksi secara otomatis ke database koperasi.",
        },
        {
          en: "Integrated Kotlin, Django REST API, MySQL, and YOLO into a unified AI-powered solution.",
          id: "Mengintegrasikan Kotlin, Django REST API, MySQL, dan YOLO menjadi solusi transaksi berbasis AI yang terintegrasi.",
        },
        {
          en: "Developed as an undergraduate capstone project focused on practical AI applications.",
          id: "Dikembangkan sebagai proyek skripsi yang berfokus pada penerapan AI untuk kebutuhan nyata.",
        },
      ],
    },
  },
  {
    id: "danamoo",
    companyName: "Danamoo",
    type: "Personal",
    category: ["Mobile Dev", "Full Stack"],
    shortDescription: {
      en: "Helps users take control of their finances with intuitive expense tracking, visual insights, and secure cloud backup.",
      id: "Membantu pengguna mengelola keuangan dengan pencatatan transaksi yang sederhana, insight visual, dan penyimpanan cloud yang aman.",
    },
    websiteLink: "",
    githubLink: "",
    techStack: ["Flutter", "Firebase"],
    startDate: new Date("2026-06-10"), 
    endDate: new Date(), 
    companyLogoImg: "/projects/danamoo/image_1.png",
    pagesInfoArr: [
      {
        title: "Aplication Overview",
        description: {
          en: "Track spending, understand your finances, and keep your data safe.",
          id: "Catat transaksi, pahami kondisi keuangan, dan simpan data dengan aman.",
        },
        imgArr: ["/projects/danamoo/image_2.png", "/projects/danamoo/image_3.png", "/projects/danamoo/image_4.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        {
          en: "Danamoo is a personal finance application designed to make managing daily income and expenses simple, organized, and accessible. With offline support and optional cloud backup, users can keep track of their finances anytime without worrying about losing important data.",
          id: "Danamoo adalah aplikasi keuangan pribadi yang dirancang untuk membantu pengguna mengelola pemasukan dan pengeluaran dengan cara yang sederhana, terorganisir, dan mudah diakses. Dukungan offline serta backup cloud opsional memastikan data tetap aman dan tersedia kapan pun dibutuhkan.",
        },
        {
          en: "Built as a full-cycle personal project, I independently handled every stage of development—from application architecture and user interface design to local storage, Firebase integration, and financial data visualization. It became an opportunity to explore the complete mobile development lifecycle beyond frontend implementation.",
          id: "Sebagai proyek personal yang dikembangkan secara end-to-end, saya menangani seluruh proses pengembangan mulai dari perancangan arsitektur, desain antarmuka, implementasi penyimpanan lokal, integrasi Firebase, hingga visualisasi data keuangan. Proyek ini menjadi sarana untuk memahami siklus pengembangan aplikasi mobile secara menyeluruh.",
        },
        {
          en: "Danamoo continues to evolve as I refine the user experience, explore new technologies, and experiment with features that make personal finance management simpler and more meaningful.",
          id: "Danamoo terus dikembangkan sebagai media eksplorasi teknologi dan penyempurnaan pengalaman pengguna, dengan tujuan menghadirkan aplikasi pengelola keuangan yang semakin praktis dan bermanfaat.",
        },
      ],
      bullets: [
        {
          en: "Designed and developed as a full-cycle Flutter application.",
          id: "Dirancang dan dikembangkan sebagai aplikasi Flutter secara end-to-end.",
        },
        {
          en: "Supports offline-first storage with optional Firebase cloud synchronization.",
          id: "Mendukung penyimpanan offline dengan sinkronisasi cloud menggunakan Firebase.",
        },
        {
          en: "Transforms financial records into clear and interactive visual insights.",
          id: "Mengubah data transaksi menjadi insight keuangan melalui visualisasi yang interaktif.",
        },
        {
          en: "Includes backup and restore features to keep financial data secure.",
          id: "Menyediakan fitur backup dan restore untuk menjaga keamanan data pengguna.",
        },
        {
          en: "Continuously improved as an active long-term personal project.",
          id: "Terus dikembangkan sebagai proyek personal jangka panjang untuk eksplorasi dan peningkatan fitur.",
        },
      ],  
    },
  },
  {
    id: "sisapi",
    companyName: "SiSapi",
    type: "Personal",
    category: ["Mobile Dev", "IoT", "Machine Learning"],
    shortDescription: {
      en: "Empowers cattle farmers with digital livestock management and real-time feed nutrition analysis powered by IoT and on-device AI.",
      id: "Membantu peternak mengelola data ternak dan menganalisis nutrisi pakan secara real-time melalui integrasi IoT dan AI.",
    },
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
        description: {
          en: "Monitor livestock health and analyze feed quality in real time.",
          id: "Pantau kondisi ternak dan analisis kualitas pakan secara real-time.",
        },
        imgArr: [
          "/projects/sisapi/image_2.png",
          "/projects/sisapi/image_3.png",
          "/projects/sisapi/image_4.png",
        ],
      },
      {
        title: "Feed Nutrition Detection",
        description:{
          en: "Analyze livestock feed nutrition in real time using data collected from an integrated NIR sensor.",
          id: "Menganalisis kualitas pakan ternak secara real-time menggunakan data yang dikumpulkan dari sensor NIR yang terintegrasi.",
        },
        imgArr: [
          "/projects/sisapi/image_5.png"
        ],
      },
    ],

    descriptionDetails: {
      paragraphs: [
        {
          en: "SiSapi helps cattle farmers manage livestock more efficiently by combining digital record management with real-time feed nutrition analysis. Instead of relying on manual notes and separate tools, farmers can monitor cattle information, health records, and feed quality from a single mobile application.",
          id: "SiSapi membantu peternak mengelola ternak dengan lebih efisien melalui penggabungan pencatatan digital dan analisis nutrisi pakan secara real-time. Seluruh informasi penting, mulai dari data ternak hingga kualitas pakan, dapat diakses dalam satu aplikasi mobile.",
        },
        {
          en: "As the Android Developer, I designed and developed the mobile application using Kotlin while integrating Firebase Realtime Database with an external NIR sensor. The application processes sensor data directly on the device to deliver instant feed nutrition analysis without relying on a dedicated backend server.",
          id: "Sebagai Android Developer, saya merancang dan mengembangkan aplikasi menggunakan Kotlin serta mengintegrasikan Firebase Realtime Database dengan sensor NIR. Data dari sensor diproses langsung di perangkat sehingga hasil analisis nutrisi pakan dapat ditampilkan secara instan tanpa memerlukan server terpisah.",
        },
        {
          en: "Beyond livestock management, SiSapi also supports operational expense tracking, cattle health records, and selling price estimation, providing farmers with a practical digital companion for daily farm management.",
          id: "Selain membantu pengelolaan ternak, SiSapi juga menyediakan pencatatan biaya operasional, riwayat kesehatan sapi, dan estimasi harga jual sehingga menjadi pendamping digital yang praktis untuk aktivitas peternakan sehari-hari.",
        },
      ],
      bullets: [
        {
          en: "Digitized livestock management into a centralized mobile platform.",
          id: "Mendigitalisasi pengelolaan data ternak dalam satu platform mobile.",
        },
        {
          en: "Integrated Firebase Realtime Database with IoT sensors for live data synchronization.",
          id: "Mengintegrasikan Firebase Realtime Database dengan sensor IoT untuk sinkronisasi data secara real-time.",
        },
        {
          en: "Implemented on-device machine learning for instant feed nutrition analysis.",
          id: "Mengimplementasikan machine learning di perangkat untuk analisis nutrisi pakan secara instan.",
        },
        {
          en: "Built comprehensive features for cattle records, operational expenses, and health management.",
          id: "Membangun fitur lengkap untuk data ternak, biaya operasional, dan riwayat kesehatan.",
        },
        {
          en: "Contributed to a community service initiative promoting digital transformation in livestock farming.",
          id: "Berkontribusi dalam program pengabdian masyarakat yang mendorong transformasi digital di sektor peternakan.",
        },
      ],
    },
  },
  {
    id: "danukerti",
    companyName: "Danukerti",
    type: "Professional",
    category: ["Mobile Dev", "IoT"],
    shortDescription: {
      en: "Simplifies smart aquarium management with real-time monitoring and reliable remote control through IoT integration.",
      id: "Mempermudah pengelolaan akuarium pintar melalui monitoring real-time dan kontrol perangkat berbasis IoT.",
    },
    websiteLink: "",
    githubLink: "",
    techStack: [
      "Kotlin",
      "Firebase",
      "IoT",
    ],
    startDate: new Date("2025-01-17"), 
    endDate: new Date("2025-03-01"),
    companyLogoImg: "/projects/danukerti/image_2.png",

    pagesInfoArr: [
      {
        title: "Smart Aquarium Dashboard",
        description: {
          en: "Monitor and control your smart aquarium from anywhere in real time.",
          id: "Pantau dan kendalikan akuarium pintar kapan saja secara real-time.",
        },
        imgArr: [
          "/projects/danukerti/image_1.png"
        ],
      },
    ],

    descriptionDetails: {
      paragraphs: [
        {
          en: "Danukerti makes smart aquarium management more convenient by bringing real-time monitoring and remote device control into a single mobile dashboard. Users can monitor water conditions, automate daily routines, or manually operate connected devices whenever needed.",
          id: "Danukerti mempermudah pengelolaan akuarium pintar dengan menghadirkan monitoring real-time dan kontrol perangkat dalam satu dashboard mobile. Pengguna dapat memantau kondisi akuarium, menjalankan proses otomatis, maupun mengendalikan perangkat secara manual kapan pun dibutuhkan.",
        },
        {
          en: "As the Android Developer, I built the mobile application using Kotlin and integrated Firebase Realtime Database to synchronize sensor readings and control commands. The application keeps the interface updated with live device status while supporting both automatic and manual operation modes.",
          id: "Sebagai Android Developer, saya mengembangkan aplikasi menggunakan Kotlin dan mengintegrasikan Firebase Realtime Database untuk menyinkronkan data sensor serta perintah kontrol. Aplikasi selalu menampilkan kondisi perangkat secara real-time sekaligus mendukung mode otomatis maupun manual.",
        },
        {
          en: "To improve reliability, I implemented a one-shot trigger mechanism that prevents duplicate commands and repeated notifications, ensuring safer communication between the application and IoT devices.",
          id: "Untuk meningkatkan keandalan sistem, saya menerapkan mekanisme one-shot trigger yang mencegah perintah maupun notifikasi terkirim berulang, sehingga komunikasi antara aplikasi dan perangkat IoT menjadi lebih aman dan stabil.",
        },
      ],

      bullets: [
        {
          en: "Built a real-time mobile dashboard for monitoring and controlling IoT devices.",
          id: "Membangun dashboard mobile untuk monitoring dan kontrol perangkat IoT secara real-time.",
        },
        {
          en: "Integrated Firebase Realtime Database for seamless device synchronization.",
          id: "Mengintegrasikan Firebase Realtime Database untuk sinkronisasi perangkat secara real-time.",
        },
        {
          en: "Supported both automatic scheduling and manual device control.",
          id: "Mendukung mode otomatis maupun kontrol perangkat secara manual.",
        },
        {
          en: "Implemented a one-shot trigger mechanism to prevent duplicate commands and notification spam.",
          id: "Menerapkan mekanisme one-shot trigger untuk mencegah perintah ganda dan spam notifikasi.",
        },
        {
          en: "Designed with a reactive architecture to keep the interface synchronized with live device status.",
          id: "Menggunakan arsitektur reaktif agar tampilan selalu sinkron dengan kondisi perangkat secara langsung.",
        },
      ],
    },
  },
  {
    id: "tessa",
    companyName: "Tessa",
    type: "Professional",
    category: ["Mobile Dev", "IoT"],
    shortDescription: {
      en: "Encourages smarter waste management through IoT-powered monitoring, waste recognition, and a reward-based recycling experience.",
      id: "Mendorong pengelolaan sampah yang lebih cerdas melalui monitoring berbasis IoT, deteksi sampah, dan sistem penghargaan untuk meningkatkan kebiasaan daur ulang.",
    },
    websiteLink: "",
    githubLink: "",
    techStack: [
      "Kotlin",
      "Firebase",
      "IoT",
      "Jetpack Compose",
      "Machine Learning"
    ],
    startDate: new Date("202-04-12"), 
    endDate: new Date("2025-05-27"), 
    companyLogoImg: "/projects/tessa/image_1.png",

    pagesInfoArr: [
    {
      title: "Dashboard Overview",
      description: {
        en: "Monitor waste bins, recycling activity, and reward points in real time.",
        id: "Pantau kondisi tempat sampah, aktivitas daur ulang, dan poin secara real-time.",
      },
      imgArr: [
        "/projects/tessa/image_1.png"
      ],
    },
    {
      title: "Waste Detection",
      description: {
        en: "Identify waste automatically and record every disposal with the smart waste bin.",
        id: "Identifikasi jenis sampah secara otomatis dan catat setiap aktivitas pembuangan.",
      },
      imgArr: [
        "/projects/tessa/image_2.png"
      ],
    },
      {
        title: "Disposal History",
        description: {
          en: "Review recycling activities and track every completed disposal in one timeline.",
          id: "Lihat riwayat aktivitas daur ulang dan seluruh proses pembuangan dalam satu tempat.",
        },
        imgArr: [
          "/projects/tessa/image_3.png"
        ],
      },
    {
      title: "Reward Points",
      description: {
        en: "Turn everyday recycling into reward points that encourage sustainable habits.",
        id: "Ubah setiap aktivitas daur ulang menjadi poin sebagai bentuk apresiasi terhadap kebiasaan ramah lingkungan.",
      },
      imgArr: [
        "/projects/tessa/image_4.png"
      ],
    },
  ],

    descriptionDetails: {
      paragraphs: [
        {
          en: "Tessa transforms a conventional waste bin into a smart recycling experience by combining IoT monitoring, automatic waste recognition, and real-time mobile interaction. Users can monitor waste bin status, track recycling activities, and stay engaged through a reward point system that promotes responsible waste disposal.",
          id: "Tessa mengubah tempat sampah konvensional menjadi solusi daur ulang yang lebih cerdas melalui monitoring berbasis IoT, deteksi sampah otomatis, dan interaksi mobile secara real-time. Pengguna dapat memantau kondisi tempat sampah, melihat aktivitas daur ulang, serta memperoleh poin sebagai bentuk apresiasi atas kebiasaan membuang sampah dengan benar.",
        },
        {
          en: "As the Android Developer, I designed and developed the mobile application using Kotlin while integrating Firebase Realtime Database for live communication with IoT devices. The application synchronizes waste detection, bin capacity, and recycling history to provide an up-to-date user experience.",
          id: "Sebagai Android Developer, saya merancang dan mengembangkan aplikasi menggunakan Kotlin serta mengintegrasikan Firebase Realtime Database untuk komunikasi real-time dengan perangkat IoT. Aplikasi menyinkronkan hasil deteksi sampah, kapasitas tempat sampah, dan riwayat aktivitas agar pengguna selalu mendapatkan informasi terbaru.",
        },
        {
          en: "Beyond real-time monitoring, the project explores a digital reward ecosystem where recycling activities are converted into points, creating a foundation for future smart waste bank solutions that encourage long-term community participation.",
          id: "Selain menyediakan monitoring secara real-time, proyek ini juga memperkenalkan konsep ekosistem penghargaan digital, di mana aktivitas daur ulang dikonversi menjadi poin sebagai langkah awal menuju sistem bank sampah digital yang mendorong partisipasi masyarakat secara berkelanjutan.",
        },
      ],

      bullets: [
        {
          en: "Built a real-time mobile dashboard for monitoring smart waste bins.",
          id: "Membangun dashboard mobile untuk memantau kondisi smart waste bin secara real-time.",
        },
        {
          en: "Connected IoT devices through Firebase Realtime Database for live synchronization.",
          id: "Menghubungkan perangkat IoT menggunakan Firebase Realtime Database untuk sinkronisasi data secara langsung.",
        },
        {
          en: "Designed a reward-based recycling experience to encourage sustainable habits.",
          id: "Merancang sistem penghargaan berbasis poin untuk mendorong kebiasaan daur ulang yang berkelanjutan.",
        },
        {
          en: "Implemented smart notification logic to eliminate duplicate alerts.",
          id: "Mengimplementasikan logika smart notification untuk menghindari notifikasi yang berulang.",
        },
        {
          en: "Laid the foundation for a future digital waste bank ecosystem.",
          id: "Membangun fondasi awal menuju ekosistem bank sampah digital.",
        },
      ],
    },
  },
    {
    id: "eyeguard",
    companyName: "EyeGuard",
    type: "Professional",
    category: ["Mobile Dev"],
    shortDescription: {
      en: "Promotes healthier digital habits through eye care education, vision screening, and personalized screen time monitoring.",
      id: "Mendorong kebiasaan digital yang lebih sehat melalui edukasi kesehatan mata, tes penglihatan, dan pemantauan waktu penggunaan perangkat.",
    },
    websiteLink: "",
    githubLink: "",
    techStack: [
      "Flutter",
      "Geolocator",
    ],
    startDate: new Date("2026-02-10"), 
    endDate: new Date("2026-03-09"), 
    companyLogoImg: "/projects/eyeguard/image_1.png",

    pagesInfoArr: [
      {
        title: "Eye Health Dashboard",
        description: {
          en: "Discover eye care tips and access essential eye health features from one dashboard.",
          id: "Temukan tips kesehatan mata dan akses seluruh fitur utama dalam satu dashboard.",
        },
        imgArr: [
          "/projects/eyeguard/image_1.png"
        ],
      },
      {
        title: "Vision Test & Screen Time",
        description: {
          en: "Check your vision and build healthier screen time habits with personalized reminders.",
          id: "Lakukan tes penglihatan sederhana dan bangun kebiasaan penggunaan perangkat yang lebih sehat.",
        },
        imgArr: [
          "/projects/eyeguard/image_2.png",
        ],
      },
      {
        title: "Nearby Eye Clinics",
        description: {
          en: "Find nearby eye clinics based on your location whenever professional care is needed.",
          id: "Temukan klinik mata terdekat berdasarkan lokasi saat membutuhkan penanganan lebih lanjut.",
        },
        imgArr: [
          "/projects/eyeguard/image_3.png"
        ],
      },
    ],

    descriptionDetails: {
      paragraphs: [
        {
          en: "EyeGuard helps users build healthier digital habits by combining eye care education, vision screening, and screen time awareness in one mobile application. Rather than simply providing information, it encourages users to take better care of their eye health through practical daily tools.",
          id: "EyeGuard membantu pengguna membangun kebiasaan digital yang lebih sehat dengan menggabungkan edukasi kesehatan mata, tes penglihatan, dan pemantauan screen time dalam satu aplikasi. Tidak hanya memberikan informasi, aplikasi ini juga mendorong pengguna untuk menjaga kesehatan mata melalui fitur yang dapat digunakan setiap hari.",
        },
        {
          en: "As the Flutter Developer, I built the application and implemented educational content, a simple vision test, customizable screen time reminders, and location-based eye clinic recommendations. Together, these features provide users with a complete eye health companion in a single experience.",
          id: "Sebagai Flutter Developer, saya mengembangkan aplikasi serta mengimplementasikan fitur edukasi, tes penglihatan sederhana, pengingat screen time yang dapat disesuaikan, dan rekomendasi klinik mata berdasarkan lokasi pengguna. Seluruh fitur tersebut dirancang untuk menghadirkan pengalaman yang lengkap dalam menjaga kesehatan mata.",
        },
        {
          en: "By combining preventive education with practical mobile features, EyeGuard demonstrates how technology can support healthier lifestyles and raise awareness of digital well-being.",
          id: "Dengan menggabungkan edukasi preventif dan fitur mobile yang praktis, EyeGuard menunjukkan bagaimana teknologi dapat membantu membangun gaya hidup yang lebih sehat sekaligus meningkatkan kesadaran terhadap kesehatan mata di era digital.",
        },
      ],
      bullets: [
        {
          en: "Developed a cross-platform mobile application with Flutter.",
          id: "Mengembangkan aplikasi mobile lintas platform menggunakan Flutter.",
        },
        {
          en: "Built personalized screen time monitoring with configurable reminders.",
          id: "Membangun fitur pemantauan screen time dengan pengingat yang dapat disesuaikan.",
        },
        {
          en: "Implemented a simple vision screening feature for daily eye health awareness.",
          id: "Mengimplementasikan fitur tes penglihatan sederhana untuk meningkatkan kesadaran terhadap kesehatan mata.",
        },
        {
          en: "Integrated location-based eye clinic recommendations with distance calculation.",
          id: "Mengintegrasikan rekomendasi klinik mata berbasis lokasi lengkap dengan perhitungan jarak.",
        },
        {
          en: "Combined education and practical tools into a single digital eye health experience.",
          id: "Menggabungkan edukasi dan fitur praktis dalam satu pengalaman digital untuk menjaga kesehatan mata.",
        },
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
