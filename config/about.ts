import { Bilingual } from "@/providers/language-provider";

export interface EducationInterface {
  institution: string;
  degree?: Bilingual;
  startYear: string;
  endYear: string;
  gpa?: Bilingual;
  description?: Bilingual;
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
    {
      en: "I'm a software engineer with a strong interest in building reliable, user-friendly, and high-quality digital products. My experience spans mobile application development, from designing intuitive user experiences to integrating backend services and modern technologies into production-ready solutions.",
      id: "Saya adalah seorang software engineer yang memiliki ketertarikan dalam membangun produk digital yang andal, mudah digunakan, dan berkualitas. Pengalaman saya mencakup pengembangan aplikasi mobile, mulai dari merancang pengalaman pengguna hingga mengintegrasikan layanan backend dan teknologi modern menjadi solusi yang siap digunakan.",
    },
    {
      en: "Beyond development, I'm equally interested in software quality, testing, and continuous improvement. I enjoy understanding how software works end-to-end, solving real-world problems through technology, and continuously learning new tools and practices to deliver better products.",
      id: "Selain pengembangan aplikasi, saya juga memiliki minat pada kualitas perangkat lunak, pengujian, dan peningkatan berkelanjutan. Saya menikmati proses memahami bagaimana sebuah sistem bekerja secara menyeluruh, menyelesaikan permasalahan nyata melalui teknologi, serta terus mempelajari berbagai tools dan praktik baru untuk menghasilkan produk yang lebih baik.",
    },
  ],
  education: [
    {
      institution: "Universitas Nusantara PGRI Kediri",
      degree: {
        en: "Bachelor of Computer Science",
        id: "S1 Teknik Informatika",
      },
      startYear: "2021", 
      endYear: "2025", 
      gpa: {
        en: "GPA: 3.84",
        id: "IPK: 3.84",
      },
      description: {
        en: "Built a strong foundation in software engineering through coursework and hands-on projects covering mobile application development, software architecture, databases, artificial intelligence, software testing, and system analysis.",
        id: "Membangun dasar yang kuat di bidang rekayasa perangkat lunak melalui perkuliahan dan berbagai proyek praktik yang mencakup pengembangan aplikasi mobile, arsitektur perangkat lunak, basis data, kecerdasan buatan, pengujian perangkat lunak, serta analisis sistem.",
      },  
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