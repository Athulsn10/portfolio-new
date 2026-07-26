import type { BrandLogoId } from "./brandLogos";

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
}

export interface SiteContent {
  name: string;
  shortName: string;
  role: string;
  location: string;
  availability: string;
  portrait: {
    src: string;
    alt: string;
    captionYear: string;
  };
  resume: {
    href: string;
    downloadName: string;
    label: string;
  };
  hero: {
    leadBefore: string;
    leadEmphasis: string;
    leadAfter: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    scrollCue: string;
    footNote: string;
  };
  about: {
    index: string;
    asideLabel: string;
    paragraphs: string[];
  };
  contact: {
    index: string;
    heading: [string, string];
    email: string;
  };
  marquee: BrandLogoId[];
  navigation: NavItem[];
  socials: SocialLink[];
  githubProfile: string;
  seo: {
    title: string;
    description: string;
    url: string;
  };
  footer: {
    copyright: string;
    timezone: string;
    timezoneLabel: string;
  };
}

export const site: SiteContent = {
  name: "Athul S Nair",
  shortName: "Athul",
  role: "Software Engineer",
  location: "Kochi, India",
  availability: "Open to opportunities",
  portrait: {
    src: "/images/athul.jpg",
    alt: "Portrait of Athul S Nair",
    captionYear: "2026",
  },
  resume: {
    href: "/resume/ATHUL S NAIR _RESUME.pdf",
    downloadName: "ATHUL S NAIR _RESUME.pdf",
    label: "Resume ↓",
  },
  hero: {
    leadBefore: "I build ",
    leadEmphasis: "fast, accessible web products",
    leadAfter:
      " — currently shipping production interfaces at White Rabbit Group with React, TypeScript and Node.",
    primaryCta: { label: "View selected work", href: "#work" },
    secondaryCta: { label: "Get in touch", href: "#contact" },
    scrollCue: "Scroll to explore",
    footNote: "Building for the web since 2023",
  },
  about: {
    index: "01 / 05",
    asideLabel: "Background",
    paragraphs: [
      "I'm a software engineer with a Computer Science background from the University of Calicut, specialised in the MERN stack.",
      "My path started with an internship where I shipped and deployed my first real applications. Since then I've worked across product teams building interfaces that stay quick under load and readable under pressure.",
      "These days I care most about the boring parts that users actually feel — perceived performance, keyboard access, and layouts that don't fall apart on a small screen.",
    ],
  },
  contact: {
    index: "05 / 05 — Contact",
    heading: ["Let's build", "something"],
    email: "athulsn32@gmail.com",
  },
  marquee: [
    "react",
    "typescript",
    "node",
    "angular",
    "vue",
    "express",
    "mongodb",
    "wordpress",
    "craftcms",
    "shopify",
    "hubspot",
  ],
  navigation: [
    { id: "about", label: "About", href: "#about" },
    { id: "work", label: "Work", href: "#work" },
    { id: "experience", label: "Experience", href: "#experience" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "contact", label: "Contact", href: "#contact" },
  ],
  socials: [
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/Athulsn10",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/athul-nair123/",
    },
    {
      id: "instagram",
      label: "Instagram",
      href: "https://www.instagram.com/_athul.s.nair/",
    },
  ],
  githubProfile: "https://github.com/Athulsn10",
  seo: {
    title: "Athul S Nair — Software Engineer",
    description:
      "Software engineer based in Kochi, India. Building fast, accessible web products with React, TypeScript, and Node.",
    url: "https://portfolio-athul.vercel.app/",
  },
  footer: {
    copyright: "© 2026 Athul S Nair",
    timezone: "Asia/Kolkata",
    timezoneLabel: "IST",
  },
};
