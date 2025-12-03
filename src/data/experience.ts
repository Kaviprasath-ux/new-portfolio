export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  locationType: "Remote" | "On-site" | "Hybrid";
  period: string;
  description: string;
  achievements: string[];
  technologies?: string[];
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    id: "baarez",
    role: "UI/UX Designer",
    company: "Baarez Technology Solutions",
    companyUrl: "https://baarez.com",
    location: "Doha, Qatar",
    locationType: "Remote",
    period: "Oct 2024 - Present",
    description:
      "Leading end-to-end UI/UX design for hospitality and enterprise solutions, including PMS platforms and dashboards.",
    achievements: [
      "Collaborating cross-functionally with remote teams to deliver scalable, user-centered product experiences",
      "Designing comprehensive hospitality management systems and enterprise dashboards",
    ],
    technologies: ["Figma", "Design Systems", "Prototyping"],
    current: true,
  },
  {
    id: "bis-technology",
    role: "Product Designer",
    company: "BIS Technology",
    location: "United Arab Emirates",
    locationType: "Remote",
    period: "Apr 2024 - Oct 2024",
    description:
      "Owned product design for AI-driven platforms, shaping user flows and interface systems from concept to delivery.",
    achievements: [
      "Established design system foundations and contributed to strategic product decisions",
      "Delivered end-to-end design solutions for UAE-based AI initiatives",
    ],
    technologies: ["Figma", "AI Platforms", "Design Systems"],
    current: false,
  },
  {
    id: "digimeta",
    role: "UI/UX Designer",
    company: "Digimeta.dev",
    companyUrl: "https://digimeta.dev",
    location: "Bengaluru, India",
    locationType: "On-site",
    period: "Jan 2023 - Apr 2024",
    description:
      "Designed mobile apps, web platforms, and fundraiser dashboards for Web3 startups—including Pocket Donation App and Flaimed dating ecosystem.",
    achievements: [
      "Delivered high-impact landing pages and motion design assets that elevated user engagement",
      "Created visual systems and product designs for donation platforms and dating apps",
    ],
    technologies: ["Figma", "Motion Design", "Web3", "Mobile Apps"],
    current: false,
  },
];

export const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Anna University",
    location: "Chennai, India",
    period: "2016 - 2020",
    description:
      "Background in Software Engineering with focus on Human-Computer Interaction.",
  },
];
