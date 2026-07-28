import { Icons } from "@/components/common/icons";

import { Bilingual } from "@/providers/language-provider";

export interface skillsInterface {
  name: string;
  description: Bilingual;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Flutter",
    description: {
      en: "Build cross-platform mobile apps for Android and iOS from a single Dart codebase.",
      id: "Membangun aplikasi mobile lintas platform untuk Android dan iOS dari satu basis kode Dart.",
    },
    rating: 5,
    icon: Icons.flutter,
  },
  {
    name: "Kotlin",
    description: {
      en: "Develop native Android apps with modern, concise, and null-safe language features.",
      id: "Mengembangkan aplikasi Android native dengan fitur bahasa yang modern, ringkas, dan aman dari null.",
    },
    rating: 5,
    icon: Icons.kotlin,
  },
  {
    name: "Dart",
    description: {
      en: "Write clean, strongly-typed code that powers Flutter's UI and app logic.",
      id: "Menulis kode yang rapi dan strongly-typed sebagai penggerak UI dan logika aplikasi Flutter.",
    },
    rating: 4,
    icon: Icons.dart,
  },
  {
    name: "Android SDK",
    description: {
      en: "Build native Android apps using platform APIs, Activities, and Fragments.",
      id: "Membangun aplikasi Android native menggunakan API platform, Activity, dan Fragment.",
    },
    rating: 4,
    icon: Icons.android,
  },
  {
    name: "Jetpack Compose",
    description: {
      en: "Build modern, declarative Android UIs without XML layouts.",
      id: "Membangun UI Android modern secara deklaratif tanpa perlu layout XML.",
    },
    rating: 3,
    icon: Icons.jetpackCompose,
  },
  {
    name: "Firebase",
    description: {
      en: "Integrate real-time database, authentication, and cloud storage into mobile apps.",
      id: "Mengintegrasikan database real-time, autentikasi, dan cloud storage ke aplikasi mobile.",
    },
    rating: 5,
    icon: Icons.firebase,
  },
  {
    name: "SQLite",
    description: {
      en: "Store and query structured data locally for offline-first mobile apps.",
      id: "Menyimpan dan mengelola data terstruktur secara lokal untuk aplikasi mobile yang offline-first.",
    },
    rating: 4,
    icon: Icons.sqlite,
  },
  {
    name: "Retrofit",
    description: {
      en: "Consume REST APIs on Android with type-safe HTTP requests and easy parsing.",
      id: "Mengonsumsi REST API di Android dengan request HTTP yang type-safe dan parsing yang mudah.",
    },
    rating: 4,
    icon: Icons.retrofit,
  },
  {
    name: "Provider",
    description: {
      en: "Manage app-wide state in Flutter with a clean Model-Provider-View architecture.",
      id: "Mengelola state aplikasi di Flutter dengan arsitektur Model-Provider-View yang rapi.",
    },
    rating: 5,
    icon: Icons.provider,
  },
  {
    name: "REST API",
    description: {
      en: "Design and consume RESTful endpoints to connect mobile apps with backend services.",
      id: "Merancang dan mengonsumsi endpoint RESTful untuk menghubungkan aplikasi mobile dengan layanan backend.",
    },
    rating: 5,
    icon: Icons.restApi,
  },
  {
    name: "Python",
    description: {
      en: "Develop AI and machine learning solutions, from data processing and model training to computer vision applications.",
      id: "Mengembangkan AI dan machine learning yang solutif, mulai dari pengolahan data, pelatihan model, hingga aplikasi computer vision.",
    },
    rating: 3,
    icon: Icons.python,
  },
  {
    name: "MySQL",
    description: {
      en: "Design relational schemas and write queries for structured, scalable data storage.",
      id: "Merancang skema relasional dan menulis query untuk penyimpanan data yang terstruktur dan scalable.",
    },
    rating: 4,
    icon: Icons.mysql,
  },
  {
    name: "Git",
    description: {
      en: "Track changes and collaborate on code using branches, commits, and pull requests.",
      id: "Melacak perubahan dan berkolaborasi lewat branch, commit, dan pull request.",
    },
    rating: 5,
    icon: Icons.git,
  },
  {
    name: "Machine Learning",
    description: {
      en: "Apply object detection and predictive models to solve real-world mobile use cases.",
      id: "Menerapkan deteksi objek dan model prediktif untuk menyelesaikan kasus penggunaan mobile di dunia nyata.",
    },
    rating: 3,
    icon: Icons.machineLearning,
  },
  
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
