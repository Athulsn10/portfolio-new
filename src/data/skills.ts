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
      "React",
      "TypeScript",
      "JavaScript",
      "Angular",
      "Vue 2",
      "Vue 3",
      "HTML & CSS",
    ],
  },
  {
    id: "backend",
    label: "Back-end",
    items: ["Node.js", "Express", "REST APIs"],
  },
  {
    id: "data",
    label: "Data",
    items: ["MongoDB", "Firebase", "MySQL"],
  },
  {
    id: "cms-commerce",
    label: "CMS & Commerce",
    items: ["WordPress", "Craft CMS", "Shopify", "HubSpot"],
  },
  {
    id: "tooling",
    label: "Tooling",
    items: ["Git", "Vite", "Vercel", "Figma"],
  },
];
