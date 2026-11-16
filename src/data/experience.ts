export interface ExperienceRole {
  id: string;
  title: string;
  company: string;
  companyUrl: string;
  employmentType: string;
  startLabel: string;
  endLabel: string;
  /** Optional static duration label for completed roles. */
  durationLabel?: string;
  /** Month (1–12) and year for computing “present” tenure. */
  start: { month: number; year: number };
  end?: { month: number; year: number } | "present";
  location: string;
  bullets?: string[];
  highlight?: boolean;
}

export const experience: ExperienceRole[] = [
  {
    id: "wr-swe",
    title: "Software Engineer",
    company: "White Rabbit Group",
    companyUrl: "https://whiterabbit.group/",
    employmentType: "Full-time",
    startLabel: "Oct 2025",
    endLabel: "Present",
    start: { month: 10, year: 2025 },
    end: "present",
    location: "Kochi, India · On-site",
    bullets: [
      "Engineered and maintained production websites and commerce platforms across WordPress, Drupal, Craft CMS, Shopify and HubSpot for international clients in tourism, education and nonprofit sectors.",
      "Developed responsive, component-driven front-end interfaces using Next.js, React, Vue 2 and Vue 3, integrated with headless and traditional CMS back ends.",
      "Architected an AI-assisted Figma-to-Drupal content automation tool (Node.js, React, Anthropic Claude API, Playwright) that uses LLM-based field mapping to reduce manual CMS data entry.",
      "Drove adoption of AI-assisted development workflows within the team to speed up delivery and reduce repetitive engineering work.",
      "Worked directly with international clients and project managers through requirements analysis, QA and release cycles in an Agile delivery setup.",
    ],
    highlight: true,
  },
  {
    id: "panapps-swe",
    title: "Software Engineer",
    company: "Panapps International",
    companyUrl: "https://panapps.co/",
    employmentType: "Full-time",
    startLabel: "Mar 2024",
    endLabel: "Sep 2025",
    durationLabel: "1 yr 6 mos",
    start: { month: 3, year: 2024 },
    end: { month: 9, year: 2025 },
    location: "Kochi, India · Remote",
  },
  {
    id: "panapps-intern",
    title: "Software Engineer Intern",
    company: "Panapps International",
    companyUrl: "https://panapps.co/",
    employmentType: "Internship",
    startLabel: "Jan 2024",
    endLabel: "Mar 2024",
    durationLabel: "3 mos",
    start: { month: 1, year: 2024 },
    end: { month: 3, year: 2024 },
    location: "Remote",
  },
  {
    id: "luminar-intern",
    title: "MERN Stack Intern",
    company: "Luminar Technolab",
    companyUrl: "https://www.luminartechnolab.com/",
    employmentType: "Internship",
    startLabel: "Jun 2023",
    endLabel: "Dec 2023",
    durationLabel: "7 mos",
    start: { month: 6, year: 2023 },
    end: { month: 12, year: 2023 },
    location: "Remote",
  },
];

export function formatTenure(startMonth: number, startYear: number): string {
  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();
  const monthsSince = currentYear * 12 + currentMonth - (startYear * 12 + startMonth);

  if (monthsSince <= 0) return "Present";

  if (monthsSince > 12) {
    const years = Math.floor(monthsSince / 12);
    const months = monthsSince % 12;
    if (months === 0) return `${years} yr${years > 1 ? "s" : ""}`;
    return `${years} yr${years > 1 ? "s" : ""} ${months} mos`;
  }

  return `${monthsSince} mos`;
}
