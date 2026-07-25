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
    id: "xenopati",
    position: "Mobile Developer Intern",
    company: "PT Xeno Persada Teknologi (Xenopati)",
    location: "Surabaya, Indonesia",
    startDate: new Date("2025-11-24"),
    endDate: new Date("2026-05-23"),
    description: [
      "Developed and maintained a production Flutter mobile application.",
      "Implemented user interfaces based on UI/UX designs and ensured a consistent user experience across devices.",
      "Integrated REST APIs and managed application data flow to support the client's business and operational needs.",
      "Collaborated with backend engineers, UI/UX designers, and project managers throughout development, testing, and deployment.",
    ],
    achievements: [
      "Built multiple features for a gym management app, including membership, class booking, check-in/check-out, and attendance history.",
      "Implemented notifications, map integration, external navigation, and various CRUD flows.",
      "Refactored code and fixed bugs to improve app stability and maintainability.",
      "Took part in app testing for release on the Google Play Store and Apple App Store.",
      "Integrated a thermal printer by adapting native Android implementation into the Flutter project.",
      "Presented development progress to clients and contributed to feature requirement discussions.",
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
      "Developed Android applications for IoT and robotics solutions using Kotlin and Jetpack Compose.",
      "Collaborated with clients to translate business requirements into functional mobile applications.",
      "Integrated apps with Firebase and REST APIs to support real-time device monitoring and control.",
      "Maintained apps, built new features, and fixed bugs to improve app quality and performance.",
    ],
    achievements: [
      "Built IoT device monitoring apps and robot control systems.",
      "Implemented Firebase Realtime Database for real-time data synchronization.",
      "Delivered several mobile app projects according to client requirements.",
      "Presented and supported clients in using the apps after implementation.",
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
      "Took part in a vocational internship team building an event ticketing website with WordPress, from building pages to designing UI elements.",
      "Worked collaboratively with the team on several website pages, including the event info dashboard and gallery sections.",
      "Helped integrate email notifications into the website's event information flow (no payment system involved).",
    ],
    achievements: [
      "Built several pages of an event ticketing website (including an event info dashboard and gallery) using WordPress.",
      "Designed several UI elements used on the website, collaboratively with the internship team.",
      "Assisted with integrating email notifications into the event information flow.",
    ],
    skills: ["WordPress", "HTML 5", "CSS 3"],
    companyUrl: "https://ruangrobot.com/",
    logo: "/experience/lp-logo.png",
  },
];
