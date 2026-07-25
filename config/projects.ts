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
      "Firebase",
      "IoT",
    ],
    startDate: new Date("2025-01-17"), 
    endDate: new Date("2025-03-01"),
    companyLogoImg: "/projects/danukerti/image_2.png",

    pagesInfoArr: [
      {
        title: "Smart Aquarium Dashboard",
        description:
          "Monitor water conditions and remotely control aquarium devices through automatic or manual operation modes.",
        imgArr: [
          "/projects/danukerti/image_1.png"
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
    category: ["Mobile Dev", "IoT"],
    shortDescription:
      "A smart waste management application that monitors IoT-enabled waste bins, detects waste types, and introduces a reward point concept to encourage responsible waste disposal.",
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
      description:
        "Monitor waste bin capacity, reward points, and real-time device status from a centralized dashboard.",
      imgArr: [
        "/projects/tessa/image_1.png"
      ],
    },
    {
      title: "Waste Detection",
      description:
        "Scan and identify waste through the smart waste bin, then automatically record the detected waste type.",
      imgArr: [
        "/projects/tessa/image_2.png"
      ],
    },
        {
      title: "Disposal History",
      description:
        "Review previous waste disposal activities, collected points, and transaction history in one place.",
      imgArr: [
        "/projects/tessa/image_3.png"
      ],
    },
    {
      title: "Reward Points",
      description:
        "Earn reward points from every successful waste disposal and redeem them to encourage sustainable habits.",
      imgArr: [
        "/projects/tessa/image_4.png"
      ],
    },
  ],

    descriptionDetails: {
      paragraphs: [
        "Tessa is an Android application developed to support a smart waste bin system by providing real-time monitoring and waste detection through IoT integration. The application enables users to monitor waste bin conditions while promoting more responsible waste disposal practices.",
        "As the Android Developer, I built the mobile application and integrated it with Firebase Realtime Database to synchronize waste detection results, bin capacity, and device status in real time. The application also implements smart notifications to prevent repeated alerts for the same condition, creating a cleaner and more reliable user experience.",
        "Beyond monitoring, the project introduces a reward point concept where detected waste can be converted into points, providing a foundation for a future digital waste bank ecosystem that encourages community participation in waste management."
      ],

      bullets: [
        "Developed a native Android application for real-time smart waste monitoring.",
        "Integrated Firebase Realtime Database for live synchronization with IoT devices.",
        "Implemented smart alert logic to prevent duplicate notifications.",
        "Built dashboards for waste detection, bin capacity, and disposal history.",
        "Designed a reward point concept to support future digital waste bank integration."
      ],
    },
  },
    {
    id: "eyeguard",
    companyName: "EyeGuard",
    type: "Professional",
    category: ["Mobile Dev"],
    shortDescription:
      "A mobile application that helps users maintain eye health through educational content, vision screening, screen time monitoring, and nearby eye clinic recommendations.",
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
        description:
          "Access eye care tips, educational content, and daily health insights from a centralized dashboard.",
        imgArr: [
          "/projects/eyeguard/image_1.png"
        ],
      },
      {
        title: "Vision Test & Screen Time",
        description:
          "Perform a simple vision screening and monitor application usage with customizable screen time reminders.",
        imgArr: [
          "/projects/eyeguard/image_2.png",
        ],
      },
      {
        title: "Nearby Eye Clinics",
        description:
          "Locate nearby eye clinics based on your current location with estimated travel distances.",
        imgArr: [
          "/projects/eyeguard/image_3.png"
        ],
      },
    ],

    descriptionDetails: {
      paragraphs: [
        "EyeGuard is a Flutter-based mobile application designed to encourage healthier digital habits and improve awareness of eye health. It combines educational resources, self-assessment tools, and location-based services into a single, user-friendly platform.",
        "As the Flutter Developer, I developed the mobile application and implemented features including eye health education, a simple vision screening tool, screen time monitoring with configurable reminders, and nearby eye clinic recommendations based on the user's location.",
        "By integrating preventive education with practical daily tools, EyeGuard helps users better understand their eye health while encouraging healthier smartphone usage habits."
      ],

      bullets: [
        "Developed a cross-platform mobile application using Flutter.",
        "Implemented screen time monitoring with customizable usage reminders.",
        "Built a simple vision screening feature for basic eye health self-assessment.",
        "Integrated location-based clinic recommendations with distance calculation.",
        "Combined educational content and practical tools to promote healthier digital habits."
      ],
    },
  },
  
];

export const featuredProjects = Projects.slice(0, 3);
