export interface EducationInterface {
  institution: string;
  degree: string;
  startYear: string;
  endYear: string;
  gpa?: string;
  description?: string;
}

export interface CertificateInterface {
  title: string;
  issuer: string;
  year: string;
  link?: string;
}

export const aboutConfig = {
  photo: "/about-img.jpg",
  paragraphs: [
        "I am a Mobile Application Developer with experience in building mobile applications using Flutter and Kotlin (Android Native). Through academic, freelance, and professional projects, I have developed applications with a focus on functionality, usability, and performance.",
        "I enjoy creating clean, reliable, and user-friendly software while continuously improving my skills in mobile development, software quality, and modern development practices."
    ],
  education: [
    {
      institution: "Universitas Nusantara PGRI Kediri",
      degree: "S1 Teknik Informatika",
      startYear: "2021", 
      endYear: "2025", 
      gpa: "3.84",
      description: "Studied software engineering, mobile application development, database systems, artificial intelligence, and software testing throughout the Informatics Engineering program.",
    },
  ],
  certificates: [
    {
      title: "TOEFL ITP",
      issuer: "Royal English",
      year: "2025",
      link: "https://drive.google.com/file/d/1eLGdHE7N2_p9zbXtZb-OdaepfvhagREm/view?usp=sharing",
    },
    {
        title: "Microsoft Office Specialist",
      issuer: "Trust Training Partners",
      year: "2024",
      link: "https://drive.google.com/file/d/1z9qYNU_uz_hi3HN4ftzVQnjyW3SbgiQu/view?usp=sharing",
    },
  ],
};