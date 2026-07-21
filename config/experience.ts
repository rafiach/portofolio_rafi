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
    id: "ubs",
    position: "Software Development Engineer",
    company: "UBS",
    location: "Mumbai, India",
    startDate: new Date("2024-08-01"),
    endDate: "Present",
    description: [
      "Shipped production features within the first month for a trader-facing P&L dashboard used by global stakeholders.",
      "Led the migration from Kendo UI to UBS’s internal design system to reduce UI inconsistencies and improve render performance.",
      "Designed and automated a daily FX rate ingestion pipeline using Databricks (Python, Spark SQL) and Java services.",
    ],
    achievements: [
      "Shipped production features within the first month for a trader-facing P&L dashboard used by global stakeholders.",
      "Led migration from Kendo UI to UBS’s internal design system, reducing UI inconsistencies and improving render performance across core dashboards.",
      "Designed and automated a daily FX rate ingestion pipeline using Databricks (Python, Spark SQL) and Java services, eliminating manual rate updates.",
      "Won UBS AI Venture Challenge by building data transformation and anomaly detection pipelines on trading datasets.",
      "Led a 12-member team in an internal hackathon to build an AI-powered tool that generates GitLab tickets, test cases, and requirement summaries.",
    ],
    skills: ["Typescript", "React", "Databricks", "Java", "Python"],
    companyUrl: "https://www.ubs.com",
    logo: "/experience/keys-logo.png",
  },
];
