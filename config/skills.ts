import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Flutter",
    description:
      "Build cross-platform mobile apps for Android and iOS from a single Dart codebase.",
    rating: 5,
    icon: Icons.flutter,
  },
  {
    name: "Kotlin",
    description:
      "Develop native Android apps with modern, concise, and null-safe language features.",
    rating: 5,
    icon: Icons.kotlin,
  },
  {
    name: "Dart",
    description:
      "Write clean, strongly-typed code that powers Flutter's UI and app logic.",
    rating: 4,
    icon: Icons.dart,
  },
  {
    name: "Android SDK",
    description:
      "Build native Android apps using platform APIs, Activities, and Fragments.",
    rating: 4,
    icon: Icons.android,
  },
  {
    name: "Jetpack Compose",
    description:
      "Build modern, declarative Android UIs without XML layouts.",
    rating: 3,
    icon: Icons.jetpackCompose,
  },
  {
    name: "Firebase",
    description:
      "Integrate real-time database, authentication, and cloud storage into mobile apps.",
    rating: 5,
    icon: Icons.firebase,
  },
  {
    name: "SQLite",
    description:
      "Store and query structured data locally for offline-first mobile apps.",
    rating: 4,
    icon: Icons.sqlite,
  },
  {
    name: "Room",
    description:
      "Manage local Android databases with a clean, type-safe abstraction over SQLite.",
    rating: 3,
    icon: Icons.room,
  },
  {
    name: "Retrofit",
    description:
      "Consume REST APIs on Android with type-safe HTTP requests and easy parsing.",
    rating: 4,
    icon: Icons.retrofit,
  },
  {
    name: "Provider",
    description:
      "Manage app-wide state in Flutter with a clean Model-Provider-View architecture.",
    rating: 5,
    icon: Icons.provider,
  },
  {
    name: "REST API",
    description:
      "Design and consume RESTful endpoints to connect mobile apps with backend services.",
    rating: 5,
    icon: Icons.restApi,
  },
  {
    name: "Django",
    description:
      "Build robust backend APIs and services with Python's batteries-included framework.",
    rating: 3,
    icon: Icons.django,
  },
  {
    name: "MySQL",
    description:
      "Design relational schemas and write queries for structured, scalable data storage.",
    rating: 4,
    icon: Icons.mysql,
  },
  {
    name: "Git",
    description:
      "Track changes and collaborate on code using branches, commits, and pull requests.",
    rating: 5,
    icon: Icons.git,
  },
  {
    name: "Machine Learning",
    description:
      "Apply object detection and predictive models to solve real-world mobile use cases.",
    rating: 3,
    icon: Icons.machineLearning,
  },
  
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
