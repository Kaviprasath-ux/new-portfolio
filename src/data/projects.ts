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
  confidential?: boolean; // NDA / gov work shown without real screenshots
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
    id: "enterprise-tax-platform",
    title: "Enterprise Tax Administration Platform",
    client: "Confidential · Government",
    category: "GovTech · Product Design",
    description:
      "Four connected surfaces for taxpayers, agents, officers and administrators — ~130 routes, EN/AR with full RTL.",
    longDescription:
      "A four-surface enterprise tax administration platform serving taxpayers, agents, officers and administrators — roughly 130 routes, bilingual EN/AR with full RTL. UX architecture, UI design and AI-assisted frontend prototyping.",
    image: "/projects/enterprise-tax-platform/cover.png",
    tags: ["GovTech", "Enterprise", "RTL", "Design Systems"],
    year: "2026",
    role: "Product Designer",
    externalUrl:
      "https://www.behance.net/gallery/253319867/Enterprise-Tax-Administration-Platform-Product-Design",
  },
  {
    id: "glimmora-aether",
    title: "Glimmora Aether",
    client: "Glimmora",
    category: "Enterprise · SAP Infrastructure",
    description:
      "From infrastructure intent to defensible evidence — a multi-role platform for requesting, approving, executing and governing SAP infrastructure operations, with approval chains, policy gates and audit-ready evidence.",
    longDescription:
      "SAP lifecycle intelligence for regulated infrastructure operations — an approval-, request- and evidence-driven system spanning multiple roles and approval chains, designed so every change carries a defensible, audit-ready trail from intent to execution.",
    image: "/projects/glimmora-aether/cover.png",
    tags: ["Enterprise", "SAP", "Governance", "RBAC"],
    year: "2026",
    duration: "Functional prototype · four weeks",
    role: "Product Designer",
    externalUrl: "https://www.behance.net/gallery/254267155/Glimmora-Aether",
  },
  {
    id: "glimmora-aurix",
    title: "AURIX™",
    client: "Glimmora · Central Bank of Astoria",
    category: "AI-Native · Central Bank Supervision",
    description:
      "Sovereign supervisory intelligence — from institution-level risk to national financial-system oversight. A supervisory command center spanning institution intelligence, systemic risk, policy simulation, CBDC and AI governance.",
    longDescription:
      "An AI-native supervisory platform for a central bank — turning institution-level exposure and risk signals into national financial-system intelligence. Supervisory inbox, institution intelligence, systemic-risk monitoring, stress-testing and policy simulation, CBDC oversight and AI governance, unified around explainable, confidence-scored risk.",
    image: "/projects/glimmora-aurix/cover.png",
    tags: ["AI-Native", "Central Bank", "Systemic Risk", "Data Viz"],
    year: "2026",
    role: "Product Designer",
    externalUrl:
      "https://www.behance.net/gallery/254191621/AURIX-AI-Native-Central-Bank-Supervisory",
  },
  {
    id: "glimmora-autonova",
    title: "Glimmora Autonova",
    client: "Glimmora",
    category: "Automotive · Workforce Intelligence",
    description:
      "From training to verified competency — an AI-powered automotive platform connecting technical learning, digital-twin simulation, diagnostic evidence and competency verification across technician and trainer experiences.",
    longDescription:
      "An automotive workforce intelligence and training platform — pairing an interactive EV digital twin with guided learning, evidence-driven reinforcement, independent assessment and certification. Designed across technician and trainer experiences so skill development is traceable from first exposure to verified, defensible competency.",
    image: "/projects/glimmora-autonova/cover.png",
    tags: ["Automotive", "AI", "Digital Twin", "Workforce"],
    year: "2026",
    role: "Product Designer",
    externalUrl:
      "https://www.behance.net/gallery/254156603/GLIMMORA-AUTONOVA-Product-Design-Case-Study",
  },
  {
    id: "glimmora-relocate",
    title: "Glimmora Relocate",
    client: "Glimmora",
    category: "Product Design",
    description:
      "A multi-portal operating system for international relocation — turning fragmented jobs, visas, documents, finances and family needs into one trusted plan.",
    longDescription:
      "A multi-portal operating system for international relocation, turning fragmented jobs, visas, documents, finances, family needs, services and responsibilities into one trusted plan.",
    image: "/projects/glimmora-relocate/cover.png",
    tags: ["Product Design", "UX Strategy", "Systems Design"],
    year: "2026",
    duration: "Discovery to functional prototype",
    role: "Product Designer",
    externalUrl: "https://www.behance.net/gallery/252614099/Glimmora-Relocate",
  },
  {
    id: "glimmora-relocate-case-study",
    title: "Glimmora Relocate — Case Study",
    client: "Glimmora",
    category: "Relocation · UX Case Study",
    description:
      "From relocation uncertainty to execution confidence — the full UX case study: research, strategy, experience and visual design.",
    longDescription:
      "The written case study behind Glimmora Relocate — how research, strategy and interaction design turned a fragmented international-relocation journey into one trusted, guided plan.",
    image: "/projects/glimmora-relocate/case-cover.png",
    tags: ["UX Case Study", "Research", "Strategy"],
    year: "2026",
    role: "Product Designer",
    externalUrl:
      "https://medium.com/@kaviprasanth666/glimmora-relocate-from-relocation-uncertainty-to-execution-confidence-3a72e336f5cc",
  },
  {
    id: "flaimed",
    title: "Flaimed",
    client: "Flaimed Dating App",
    category: "UI Design",
    description:
      "Modern dating app design with focus on authentic connections and engaging user experience.",
    longDescription:
      "A fresh take on dating app design, focusing on creating meaningful connections through thoughtful UX patterns and a vibrant visual identity.",
    image: "/projects/flaimed/cover.png",
    tags: ["UI Design", "Mobile App", "Dating"],
    year: "2024",
    duration: "2 months",
    role: "UI Designer",
    externalUrl: "https://www.behance.net/gallery/200926651/Flaimed-Dating-Mobile-App-Design",
  },
  {
    id: "pocket-giving-case-study",
    title: "Pocket — Charitable Giving",
    client: "Pocket Giving Ltd",
    category: "FinTech · UX Case Study",
    description:
      "Scaling impact through UX — a transparent, engaging mobile giving experience across 220+ screens. Full case study on Medium.",
    longDescription:
      "A comprehensive UX redesign of a charitable giving platform — a mobile app for donors, a web dashboard for charities and an admin panel — designed around trust signals and a frictionless giving journey.",
    image: "/projects/pocket-giving/medium-cover.png",
    tags: ["FinTech", "Mobile Design", "UX Case Study"],
    year: "2023",
    role: "Product Designer",
    externalUrl:
      "https://medium.com/@kaviprasanth666/scaling-impact-through-ux-the-pocket-giving-design-case-study-4c130edb3eae",
  },
];

export const projectCategories = [
  "All",
  "UI/UX Design",
  "Branding",
  "Product Design",
  "Mobile Design",
];
