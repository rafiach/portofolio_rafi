
import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Rafi Achmad Fachrudi's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Key skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description:
        "Rafi Achmad Fachrudi's key skills that define his professional identity.",
    },
  },
  projects: {
    title: "Projects",
    description: "Showcasing impactful projects and technical achievements.",
    metadata: {
      title: "Projects",
      description: "Rafi Achmad Fachrudi's projects in building web applications.",
    },
  },
  contact: {
    title: "Get In Touch",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Rafi Achmad Fachrudi",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Open-source contributions and community involvement.",
    metadata: {
      title: "Contributions",
      description:
        "Rafi Achmad Fachrudi's open-source contributions and community involvement.",
    },
  },
  resume: {
    title: "Resume",
    description: "Rafi Achmad Fachrudi's resume.",
    metadata: {
      title: "Resume",
      description: "Rafi Achmad Fachrudi's resume.",
    },
  },
  blogs: {
    title: "Blogs",
    description:
      "Thoughts on AI, software engineering, and building in public.",
    metadata: {
      title: "Blogs",
      description:
        "Rafi Achmad Fachrudi's blog — thoughts on AI, software engineering, and building in public.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional journey and career timeline.",
    metadata: {
      title: "Experience",
      description:
        "Rafi Achmad Fachrudi's professional journey and experience timeline.",
    },
  },
  about: {
    title: "About",
    description: "Learn more about me.",
    metadata: {
        title: "About",
      description: "Learn more about Rafi Achmad Fachrudi.",
    },
  
    }
    
};