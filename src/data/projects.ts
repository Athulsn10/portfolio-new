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
    id: "teachify",
    name: "Teachify",
    description:
      "A notes platform where BSc CS students under Calicut University find and share course material.",
    liveUrl: "https://teachify-swart.vercel.app/",
    screenshot: "/projectImage/teachify.png",
    techStack: ["Angular", "Node.js", "Express", "MongoDB"],
    featured: true,
  },
  {
    id: "chatify",
    name: "Chatify",
    description:
      "Real-time chat over WebSockets, with Socket.IO handling presence and instant message delivery.",
    liveUrl: "https://chatify-brown.vercel.app/",
    screenshot: "/projectImage/chatify.png",
    techStack: ["React", "Socket.IO", "Express", "MongoDB"],
    featured: true,
  },
  {
    id: "enigma",
    name: "Enigma Docs",
    description:
      "Document CRUD app backed by Firebase, with live sync across sessions.",
    liveUrl: "https://enigma-doc-app.vercel.app/",
    screenshot: "/projectImage/enigma.png",
    techStack: ["React", "Firebase"],
    featured: true,
  },
  {
    id: "contact-manager",
    name: "Contact Manager",
    description:
      "A compact CRUD interface built to practise clean form state and optimistic updates.",
    liveUrl: "https://contact-manager-crud.vercel.app/",
    screenshot: "/projectImage/contact-manager.png",
    techStack: ["React", "JSON Server"],
    featured: true,
  },
  {
    id: "netflix-clone",
    name: "Netflix Clone",
    description: "Clone app of Netflix created using React.",
    liveUrl: "https://netflix-clone-reactjs-athul.netlify.app/",
    screenshot: "/projectImage/netflix.png",
    techStack: ["React", "Axios"],
    featured: false,
  },
  {
    id: "google-translate-clone",
    name: "Google Translate Clone",
    description: "Google Translate clone using LibreTranslate API.",
    liveUrl: "https://google-translate-clone-reactjs.netlify.app/",
    screenshot: "/projectImage/google-translate.png",
    techStack: ["React", "Axios"],
    featured: false,
  },
  {
    id: "nike-parallax",
    name: "Nike webpage clone",
    description: "Parallax landing page clone.",
    liveUrl: "https://athulsn10.github.io/Beki-parallax/",
    screenshot: "/projectImage/beki.png",
    techStack: ["HTML", "CSS"],
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const archivedProjects = projects.filter((project) => !project.featured);
