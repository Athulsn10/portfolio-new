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
    src: "/images/athul.webp?v=2",
    alt: "Portrait of Athul S Nair",
    captionYear: "2026",
  },
  resume: {
    href: "/resume/athul-s-nair-resume.pdf",
    downloadName: "athul-s-nair-resume.pdf",
    label: "Resume",
  },
  hero: {
    leadBefore: "Software engineer building ",
    leadEmphasis: "production web platforms",
    leadAfter:
      " with Next.js, React and TypeScript, and integrating AI into real development workflows. Currently at White Rabbit Group, delivering CMS and commerce solutions for international clients.",
    primaryCta: { label: "View selected work", href: "#work" },
    secondaryCta: { label: "Get in touch", href: "#contact" },
    scrollCue: "Scroll to explore",
    footNote: "Building for the web since 2023",
  },
  about: {
    index: "01 / 05",
    asideLabel: "Background",
    paragraphs: [
      "I'm a software engineer with nearly three years of experience shipping production web applications, from MERN-stack products to multi-platform CMS and commerce builds. I studied Computer Science at the University of Calicut.",
      "My path started with an internship where I shipped and deployed my first real applications. Since then I've worked across product and client delivery teams building interfaces that stay quick under load and readable under pressure.",
      "These days I care most about the boring parts that users actually feel: perceived performance, keyboard access, and layouts that don't fall apart on a small screen.",
      "Lately I've been building AI-assisted tooling that removes repetitive work from content and development pipelines.",
    ],
  },
  contact: {
    index: "05 / 05 · Contact",
    heading: ["Let's build", "something"],
    email: "athulsn32@gmail.com",
  },
  marquee: [
    "nextjs",
    "react",
    "typescript",
    "node",
    "llm",
    "playwright",
    "vue",
    "express",
    "mongodb",
    "drupal",
    "wordpress",
    "craftcms",
    "shopify",
    "hubspot",
    "angular",
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
  ],
  githubProfile: "https://github.com/Athulsn10",
  seo: {
    title: "Athul S Nair, Software Engineer in Kochi | Next.js, React & AI",
    description:
      "Kochi-based software engineer building production web platforms with Next.js, React and TypeScript, and integrating AI into real development workflows.",
    url: "https://portfolio-athul.vercel.app/",
  },
  footer: {
    copyright: "© 2026 Athul S Nair",
    timezone: "Asia/Kolkata",
    timezoneLabel: "IST",
  },
};
