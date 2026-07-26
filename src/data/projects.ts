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
    id: "enterprise-grc-migration",
    title: "Enterprise GRC Platform Migration",
    client: "Glimmora International",
    category: "Enterprise · GRC",
    description:
      "Restructured a live governance, risk & compliance platform from Mendix to Next.js — rebuilt around role-based tasks, with zero disruption to operations.",
    longDescription:
      "A live enterprise GRC application, re-architected from Mendix to Next.js. I audited every existing workflow, restructured the experience around auditor, risk-officer, compliance and executive roles rather than the legacy screen structure, and sequenced the redesign so business operations never broke during cutover — users could not be retrained mid-migration.",
    image: "",
    tags: ["GRC", "UX Architecture", "Migration", "Design Systems"],
    year: "2025",
    duration: "Ongoing · live migration",
    role: "Product Designer",
    confidential: true,
    caseStudy: {
      challenge:
        "A live governance, risk & compliance application had to move off Mendix to Next.js without interrupting a business that depended on it daily. The hardest constraint was continuity — users could not be retrained mid-migration, and operations could not break during cutover.",
      approach:
        "Audited every existing workflow, then restructured the experience around role-based tasks — auditor, risk officer, compliance and executive — rather than the legacy screen structure. Sequenced the redesign so each phase shipped without disrupting active operations.",
      solution:
        "Rebuilt navigation and information architecture around roles; documented approval logic, permissions and audit-trail behaviour so engineering could rebuild against a specification rather than screenshots.",
      outcome:
        "Operations continued uninterrupted through cutover, and engineering rebuilt against a role-based specification instead of legacy screens — reducing ambiguity at handoff. Detailed metrics and visuals available under NDA / on request.",
      process: [
        "Workflow audit",
        "Role mapping",
        "IA restructure",
        "Approval & permission spec",
        "Component system",
        "Handoff & QA",
      ],
    },
  },
  {
    id: "bahrain-tax-platform",
    title: "Bahrain Tax Administration Platform",
    client: "Confidential · Government",
    category: "GovTech · Tax",
    description:
      "Taxpayer services and internal officer workflows for corporate & withholding tax — registration, filing, assessment, payments, refunds and objections.",
    longDescription:
      "A government corporate & withholding-tax platform spanning taxpayer-facing services and internal officer workflows: registration, filing, assessment, payments, refunds, objections, evidence and compliance review. I translated dense statutory requirements into role maps, workflow diagrams, forms and status-driven screens with error prevention and traceability built in — in a context where a wrong submission carries legal consequences.",
    image: "/projects/bahrain-tax-platform/portal-dashboard.png",
    tags: ["GovTech", "Tax", "Workflow Design", "Enterprise"],
    year: "2025",
    duration: "Confidential engagement",
    role: "Product Designer",
    caseStudy: {
      challenge:
        "Dense statutory tax requirements had to become usable software for two very different audiences — taxpayers and internal officers — in a domain where a wrong submission carries legal consequences.",
      approach:
        "Translated statutory rules into role maps and workflow diagrams, then designed status-driven screens with error prevention and traceability across registration, filing, assessment, payments, refunds and objections.",
      solution:
        "Taxpayer-facing services and internal officer workbenches covering the full compliance lifecycle, with evidence handling and audit traceability throughout.",
      outcome:
        "A single platform spanning taxpayer and officer journeys for corporate & withholding tax, built around statutory accuracy and error prevention. Confidential government engagement — select screens shown.",
      process: [
        "Statutory analysis",
        "Role mapping",
        "Workflow diagrams",
        "Officer & taxpayer flows",
        "Error-prevention patterns",
        "Handoff",
      ],
    },
  },
  {
    id: "glimmora-aether",
    title: "Glimmora Aether",
    client: "Glimmora International",
    category: "Enterprise · SAP Lifecycle",
    description:
      "A multi-role platform for requesting, approving, executing and governing SAP infrastructure operations — six roles, approval chains and audit trails.",
    longDescription:
      "Glimmora Aether is a multi-role platform for requesting, approving, executing and governing SAP infrastructure operations. I mapped six distinct roles — requesters, SAP Basis engineers, cloud-infrastructure teams, approvers, auditors and administrators — across requests, blueprints, approval chains, execution jobs, evidence and landscape administration, documenting edge cases and audit behaviour alongside the interface.",
    image: "",
    tags: ["SAP", "RBAC", "Enterprise", "Workflow"],
    year: "2025",
    duration: "Discovery to specification",
    role: "Product Designer",
    confidential: true,
    caseStudy: {
      challenge:
        "SAP infrastructure operations span many hands — requesters, Basis engineers, cloud teams, approvers, auditors, admins — each needing a different view of the same request without losing governance or auditability.",
      approach:
        "Mapped six distinct roles across the full lifecycle: requests, blueprints, approval chains, execution jobs, evidence and landscape administration. Designed each role's surface around its decisions while preserving a single source of truth.",
      solution:
        "Role-based dashboards and approval flows with documented edge cases and audit behaviour, specified alongside the interface so engineering could build governance in from the start.",
      outcome:
        "A governed, auditable operating model for SAP lifecycle work with clear role boundaries and approval logic. Visuals available under NDA / on request.",
      process: [
        "Role mapping",
        "Approval-chain design",
        "Execution & evidence flows",
        "Audit behaviour spec",
        "Design system",
      ],
    },
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
        "Stakeholder collaboration, competitive analysis, pattern research, and iterative validation — grounding every mode-specific flow in how people actually give.",
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
