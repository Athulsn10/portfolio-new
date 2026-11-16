export interface Project {
  id: string;
  name: string;
  description: string;
  liveUrl: string;
  screenshot: string;
  techStack: string[];
  featured: boolean;
  outcome?: string;
}

export const projects: Project[] = [
  {
    id: "glance-kit",
    name: "Glance Kit",
    description:
      "Minimal Android home screen widgets for day progress, steps, battery, data, focus and live sky, plus a compass, spirit level and barometer.",
    outcome:
      "Reads everything on-device: no accounts, no sign-in, no internet access.",
    liveUrl: "https://athulsn10.github.io/glance-kit/",
    screenshot: "/projectImage/glance-kit.webp",
    techStack: ["Kotlin", "Android", "WorkManager", "Coroutines"],
    featured: true,
  },
  {
    id: "teachify",
    name: "Teachify",
    description:
      "A notes platform where BSc CS students under Calicut University find and share course material.",
    liveUrl: "https://teachify-swart.vercel.app/",
    screenshot: "/projectImage/teachify.webp",
    techStack: ["Angular", "Node.js", "Express", "MongoDB"],
    featured: true,
  },
  {
    id: "chatify",
    name: "Chatify",
    description:
      "Real-time chat over WebSockets, with Socket.IO handling presence and instant message delivery.",
    liveUrl: "https://chatify-brown.vercel.app/",
    screenshot: "/projectImage/chatify.webp",
    techStack: ["React", "Socket.IO", "Express", "MongoDB"],
    featured: true,
  },
  {
    id: "enigma",
    name: "Enigma Docs",
    description:
      "Document CRUD app backed by Firebase, with live sync across sessions.",
    liveUrl: "https://enigma-doc-app.vercel.app/",
    screenshot: "/projectImage/enigma.webp",
    techStack: ["React", "Firebase"],
    featured: true,
  },
  {
    id: "contact-manager",
    name: "Contact Manager",
    description:
      "A compact CRUD interface built to practise clean form state and optimistic updates.",
    liveUrl: "https://contact-manager-crud.vercel.app/",
    screenshot: "/projectImage/contact-manager.webp",
    techStack: ["React", "JSON Server"],
    featured: true,
  },
  {
    id: "netflix-clone",
    name: "Netflix Clone",
    description: "Clone app of Netflix created using React.",
    liveUrl: "https://netflix-clone-reactjs-athul.netlify.app/",
    screenshot: "/projectImage/netflix.webp",
    techStack: ["React", "Axios"],
    featured: false,
  },
  {
    id: "google-translate-clone",
    name: "Google Translate Clone",
    description: "Google Translate clone using LibreTranslate API.",
    liveUrl: "https://google-translate-clone-reactjs.netlify.app/",
    screenshot: "/projectImage/google-translate.webp",
    techStack: ["React", "Axios"],
    featured: false,
  },
  {
    id: "nike-parallax",
    name: "Nike webpage clone",
    description: "Parallax landing page clone.",
    liveUrl: "https://athulsn10.github.io/Beki-parallax/",
    screenshot: "/projectImage/beki.webp",
    techStack: ["HTML", "CSS"],
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const archivedProjects = projects.filter((project) => !project.featured);
