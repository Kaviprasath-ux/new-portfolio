export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  year: string;
  duration?: string;
  role: string;
  liveUrl?: string;
  externalUrl?: string; // For external portfolio links like Behance
  caseStudy?: {
    challenge: string;
    approach: string;
    solution: string;
    outcome: string;
    process: string[];
    metrics?: {
      label: string;
      value: string;
      description: string;
    }[];
    keyFeatures?: string[];
    learnings?: string[];
  };
}

export const projects: Project[] = [
  {
    id: "flaimed",
    title: "Flaimed",
    client: "Flaimed Dating App",
    category: "UI Design",
    description:
      "Modern dating app design with focus on authentic connections and engaging user experience.",
    longDescription:
      "A fresh take on dating app design, focusing on creating meaningful connections through thoughtful UX patterns and a vibrant visual identity.",
    image: "/projects/flaimed/thumbnail 3.png",
    tags: ["UI Design", "Mobile App", "Dating"],
    year: "2024",
    duration: "2 months",
    role: "UI Designer",
    externalUrl: "https://www.behance.net/gallery/200926651/Flaimed-Dating-Mobile-App-Design",
  },
  {
    id: "pocket-ui",
    title: "Pocket UI",
    client: "Pocket Giving Ltd",
    category: "UI Design",
    description:
      "Complete UI design system for a charitable giving app—40+ components, 220+ screens across mobile and web.",
    longDescription:
      "A comprehensive UI design showcase for the Pocket charitable giving platform. Designed from scratch with a focus on clean aesthetics, accessibility, and delightful micro-interactions.",
    image: "/projects/pocket-giving/thumbnail 1.png",
    tags: ["UI Design", "Design System", "Mobile App"],
    year: "2023",
    duration: "4 months",
    role: "UI Designer",
    externalUrl: "https://www.behance.net/gallery/200675867/Pocket-App-Design",
  },
  {
    id: "pocket-giving",
    title: "Pocket UX Case Study",
    client: "Pocket Giving Ltd",
    category: "Product Design",
    description:
      "A comprehensive UX redesign of a charitable giving platform—220+ screens across 3 platforms.",
    longDescription:
      "How I designed a complete charitable giving ecosystem—and what I learned about user research along the way. A mobile app for donors, a web dashboard for charities, and an admin panel for platform management.",
    image: "/projects/pocket-giving/thumbnail.png",
    tags: ["Mobile Design", "Web Design", "FinTech"],
    year: "2023",
    duration: "4 months",
    role: "Product Designer",
    liveUrl: "https://pocketgiving.co.uk",
    caseStudy: {
      challenge:
        "Traditional donation platforms required 7-10 steps to donate. Gift Aid had complex multi-page forms. No competitor offered social engagement features.",
      approach:
        "Stakeholder collaboration, competitive analysis, pattern research, and iterative validation. (Note: This project taught me the importance of user research—something I now prioritize in every project.)",
      solution:
        "Designed mode-specific experiences: Quick Donate (3 taps), One-off Donation (5-7 taps), and Recurring Donation (8-10 taps). Simplified Gift Aid to a single inline toggle.",
      outcome:
        "Shipped in 4 months (ahead of 6-month window). Product is live on iOS App Store and Google Play. First platform with social timeline feature.",
      process: [
        "Stakeholder Workshops",
        "Competitive Analysis",
        "Pattern Research",
        "Component Design",
        "Prototyping",
        "Design Reviews",
        "Handoff",
        "Launch",
      ],
      metrics: [
        { label: "Screens", value: "220+", description: "Across 3 platforms" },
        { label: "Quick Donate", value: "3 taps", description: "vs 7-10 industry average" },
        { label: "Gift Aid", value: "1 tap", description: "vs multi-page forms" },
      ],
      keyFeatures: [
        "3-tap quick donate",
        "Inline Gift Aid toggle",
        "Social donation timeline",
        "Fundraiser dashboard",
        "Admin panel",
      ],
      learnings: [
        "User research is non-negotiable—even 5 guerrilla tests beats no feedback",
        "Stakeholder expertise tells you what the business needs; user research tells you what people need",
        "Component-first approach enables faster iteration",
        "Progressive disclosure reduces cognitive load",
      ],
    },
  },
];

export const projectCategories = [
  "All",
  "UI/UX Design",
  "Branding",
  "Product Design",
  "Mobile Design",
];
