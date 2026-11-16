export interface SkillGroup {
  id: string;
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    label: "Front-end",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Vue 2",
      "Vue 3",
      "Angular",
      "HTML & CSS",
    ],
  },
  {
    id: "backend",
    label: "Back-end",
    items: ["Node.js", "Node.js API design", "Express", "REST APIs"],
  },
  {
    id: "ai-automation",
    label: "AI & Automation",
    items: [
      "LLM / AI API integration (Anthropic Claude)",
      "AI-assisted development workflows",
      "Playwright",
    ],
  },
  {
    id: "data",
    label: "Data",
    items: ["MongoDB", "Firebase", "MySQL"],
  },
  {
    id: "cms-commerce",
    label: "CMS & Commerce",
    items: ["Drupal", "WordPress", "Craft CMS", "Shopify", "HubSpot"],
  },
  {
    id: "tooling",
    label: "Tooling",
    items: [
      "Git",
      "Git-based CI/CD and deployment (WP Engine, Vercel)",
      "Vite",
      "Figma",
    ],
  },
];
