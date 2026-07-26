"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Check,
  CircleAlert,
  CircleDollarSign,
  ClipboardCheck,
  Clock3,
  Code2,
  Compass,
  Database,
  FileCheck2,
  FileText,
  Globe2,
  Home,
  LayoutDashboard,
  MapPinned,
  MessageSquareText,
  Network,
  Plane,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Users2,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";
import {
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Project } from "@/data/projects";

interface GlimmoraRelocateCaseStudyProps {
  project: Project;
  prevProject: Project | null;
  nextProject: Project | null;
}

type ProductView =
  | "Dashboard"
  | "My Plan"
  | "Documents"
  | "Family"
  | "Finance"
  | "Marketplace"
  | "Provider";

const ease = [0.16, 1, 0.3, 1] as const;

const previewScreens: Array<{
  label: ProductView;
  eyebrow: string;
  title: string;
  body: string;
}> = [
  {
    label: "Dashboard",
    eyebrow: "Orientation",
    title: "Know what matters now.",
    body: "Readiness, the next decision, current blocker, owner, and deadline sit above module navigation.",
  },
  {
    label: "My Plan",
    eyebrow: "Coordination",
    title: "Turn dependencies into a sequence.",
    body: "Every milestone carries an owner, status, date, and dependency so the plan can survive change.",
  },
  {
    label: "Documents",
    eyebrow: "Household readiness",
    title: "Track requirements by person.",
    body: "Documents connect to household members, expiry, translation status, and timeline risk.",
  },
  {
    label: "Marketplace",
    eyebrow: "Execution and trust",
    title: "See trust before booking.",
    body: "Verification, service scope, pricing, reviews, response time, and support paths stay visible.",
  },
];

const challengeInputs = [
  [BriefcaseBusiness, "Job platforms"],
  [Globe2, "Government sites"],
  [FileText, "Spreadsheets"],
  [MessageSquareText, "Recruiter chats"],
  [Home, "Agencies"],
  [FileCheck2, "Document folders"],
  [CircleDollarSign, "Cost calculators"],
  [Search, "School + housing sites"],
] as const;

const challengeEffects = [
  "Conflicting information",
  "Hidden dependencies",
  "Unclear ownership",
  "Financial uncertainty",
  "Family-related risk",
  "Provider trust concerns",
];

const discoveryInputs = [
  [FileText, "Statement of Work", "Business vision, portal scope, marketplace, trust, and dependencies."],
  [LayoutDashboard, "Existing prototype", "What was already visible, implied, missing, or only a surface state."],
  [Code2, "Code + route review", "Evidence that the product was a connected multi-portal system."],
  [MapPinned, "Current-state journey", "The move examined as a life event before it became an interface."],
  [Sparkles, "Structured scenario exploration", "Edge cases used to expose blockers, handoffs, and assumptions."],
] as const;

const journeyStages = [
  ["01", "Evaluate", "Is this move professionally and personally realistic?"],
  ["02", "Qualify", "Do the job, visa, salary, and household requirements align?"],
  ["03", "Prepare", "Which documents, services, money, and approvals are required?"],
  ["04", "Move", "What must happen before arrival and during the first weeks?"],
  ["05", "Stabilize", "How does the family reach long-term stability?"],
] as const;

const painClusters = [
  [Globe2, "Information fragmentation"],
  [Target, "Eligibility uncertainty"],
  [CircleDollarSign, "Financial ambiguity"],
  [Users2, "Family complexity"],
  [ShieldCheck, "Provider trust"],
  [Workflow, "Coordination failure"],
] as const;

const actors: Array<{
  title: string;
  icon: LucideIcon;
  responsibility: string;
  position: string;
  tone: string;
}> = [
  {
    title: "Consumer",
    icon: Users2,
    responsibility: "Personal context, household, documents, and decisions",
    position: "md:col-start-2 md:row-start-1",
    tone: "bg-[#e9f7df]",
  },
  {
    title: "Employer",
    icon: BriefcaseBusiness,
    responsibility: "Job, offer, sponsorship, and start date",
    position: "md:col-start-3 md:row-start-2",
    tone: "bg-[#e7efff]",
  },
  {
    title: "Corporate mobility",
    icon: Building2,
    responsibility: "Policy, budget, support, and approvals",
    position: "md:col-start-3 md:row-start-3",
    tone: "bg-[#f4ecff]",
  },
  {
    title: "Service partner",
    icon: Home,
    responsibility: "Relocation services and booking fulfilment",
    position: "md:col-start-1 md:row-start-3",
    tone: "bg-[#fff2d6]",
  },
  {
    title: "Admin operations",
    icon: ShieldCheck,
    responsibility: "Verification, disputes, escrow, and platform trust",
    position: "md:col-start-1 md:row-start-2",
    tone: "bg-[#ffe9e3]",
  },
];

const principles = [
  ["01", "One plan, many domains", "Jobs, visas, family, finance, documents, and services should feel connected."],
  ["02", "Action before information", "Every piece of guidance should support a decision or next action."],
  ["03", "Make uncertainty visible", "Show assumptions, missing information, blockers, and dependencies."],
  ["04", "Ownership should be obvious", "Every important step needs an owner, status, deadline, and next action."],
  ["05", "Trust must be designed", "Verification, reviews, security, payment status, and support paths should be visible."],
] as const;

const systemFlow = [
  "Entry point",
  "Relocation profile",
  "Shared case",
  "Personalized plan",
  "Prepare + execute",
  "Arrival",
  "Stabilization",
];

const handoffs = [
  {
    source: "Employer",
    icon: BriefcaseBusiness,
    event: "Offer accepted",
    effect: "Finance, visa, and timeline update",
    tone: "bg-[#e7efff]",
  },
  {
    source: "Corporate",
    icon: Building2,
    event: "Policy approved",
    effect: "Covered services appear in the plan",
    tone: "bg-[#f4ecff]",
  },
  {
    source: "Partner",
    icon: Home,
    event: "Booking accepted",
    effect: "Service status updates in the journey",
    tone: "bg-[#fff2d6]",
  },
  {
    source: "Admin",
    icon: ShieldCheck,
    event: "Provider verified",
    effect: "Trust status appears in the marketplace",
    tone: "bg-[#ffe9e3]",
  },
];

const workflow = [
  [Search, "Discovery"],
  [ClipboardCheck, "Product requirements"],
  [Workflow, "Interaction rules"],
  [Code2, "Claude Code build"],
  [Globe2, "Browser review"],
  [Target, "UX critique"],
  [Zap, "Code iteration"],
] as const;

const owned = [
  "Problem framing",
  "Journey and actor modelling",
  "Product strategy",
  "Flows and information architecture",
  "Interaction requirements",
  "Content hierarchy and UX writing",
  "Prioritization",
  "Final design review and QA",
];

const assisted = [
  "Component scaffolding",
  "Repetitive implementation",
  "Route and page generation",
  "Multi-file code changes",
  "Debugging and refactoring",
  "Responsive implementation support",
  "Technical iteration",
  "Execution acceleration",
];

const validationQuestions = [
  "Can people identify their next relocation action?",
  "Can they explain who owns a blocked task?",
  "Can they judge whether an offer is financially realistic?",
  "Do family users understand household-specific requirements?",
  "Do visible verification and support states improve provider trust?",
];

export default function GlimmoraRelocateCaseStudy({
  project,
  prevProject,
  nextProject,
}: GlimmoraRelocateCaseStudyProps) {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.3,
  });
  const heroY = useTransform(scrollYProgress, [0, 0.12], [0, reduceMotion ? 0 : -52]);
  const heroRotate = useTransform(scrollYProgress, [0, 0.12], [0, reduceMotion ? 0 : -1.5]);

  return (
    <article
      data-glimmora-presentation
      className="relative min-h-screen overflow-hidden bg-[#f8f6ef] text-[#161613]"
    >
      <style jsx global>{`
        body:has([data-glimmora-presentation]) > header,
        body:has([data-glimmora-presentation]) > footer {
          display: none;
        }

        body:has([data-glimmora-presentation]) {
          background: #f8f6ef;
        }
      `}</style>
      <motion.div
        className="fixed left-0 top-0 z-[80] h-1 origin-left bg-[#2459ff]"
        style={{ scaleX: progress }}
      />

      <section id="board-01" className="relative overflow-hidden border-b border-black/10 bg-[#f8f6ef]">
        <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-14">
          <GridTexture />
          <div className="relative flex items-center justify-between border-b border-black/10 py-5">
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase text-black/58 transition-colors hover:text-[#2459ff]"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              All work
            </Link>
            <p className="hidden text-xs font-semibold uppercase text-[#2459ff] sm:block">01 / Product design case study / 2026</p>
          </div>

          <div className="relative grid min-h-[calc(100vh-73px)] gap-10 py-12 lg:grid-cols-[0.73fr_1.27fr] lg:items-center lg:py-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.82, ease }}
              className="relative z-10"
            >
              <p className="text-xs font-semibold uppercase text-[#ff5a4e]">Relocation, reframed</p>
              <h1 aria-label="Glimmora Relocate" className="mt-6 text-[36px] font-semibold leading-[0.84] sm:text-8xl lg:text-[112px]">
                <span className="block">Glimmora</span>
                <span className="block text-[#2459ff]">Relocate</span>
              </h1>
              <p className="mt-8 max-w-xl text-2xl font-semibold leading-tight text-black/78 sm:text-3xl">
                From fragmented relocation tasks to one shared plan.
              </p>
              <div className="mt-10 border-l-2 border-[#2459ff] pl-5">
                <p className="max-w-md text-base leading-7 text-black/58">
                  A multi-portal product system connecting individuals, employers, mobility teams,
                  service providers, and platform operations around the same relocation case.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50, rotate: 1.8 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.12, ease }}
              style={{ y: heroY, rotate: heroRotate }}
              className="relative z-10 min-w-0"
            >
              <HeroCaseVisual />
            </motion.div>
          </div>

          <div className="relative z-10 grid gap-4 border-t border-black/10 py-6 text-xs font-semibold uppercase text-black/52 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr]">
            <p>Product Discovery · UX Strategy · Product Architecture</p>
            <p className="lg:text-right">Interaction Design · AI-Assisted Coded Prototyping</p>
          </div>
        </div>
      </section>

      <Board
        id="board-02"
        number="02"
        chapter="Product preview"
        title="One relocation plan, supported by an entire ecosystem"
        intro="Glimmora brings jobs, documents, finances, family needs, services, employer support, and operational responsibilities into one connected relocation case."
        tone="bg-[#f7f9ff]"
      >
        <ProductPreview />
      </Board>

      <Board
        id="board-03"
        number="03"
        chapter="Project snapshot"
        title="Reframing a broad relocation platform around one shared case"
        intro="A functional product concept for individuals, employers, mobility teams, service providers, and platform operations."
        tone="bg-[#f7f6f1]"
      >
        <ProjectSnapshot project={project} />
      </Board>

      <Board
        id="board-04"
        number="04"
        chapter="Understanding the problem"
        title="I started with the relocation journey—not the interface"
        intro="Before organising features or navigation, I mapped what someone experiences when moving internationally without Glimmora."
        tone="bg-[#f5f9f3]"
      >
        <JourneyMap />
      </Board>

      <Board
        id="board-05"
        number="05"
        chapter="Understanding the problem"
        title="The problem was not missing information. It was coordination under uncertainty."
        intro="The journey revealed that relocation breaks at the dependencies between jobs, visas, finance, family needs, and external actors."
        tone="bg-[#2459ff] text-white"
        inverted
      >
        <DefiningInsight />
      </Board>

      <Board
        id="board-06"
        number="06"
        chapter="Strategic product decisions"
        title="I stopped treating Glimmora as a collection of features"
        intro="Jobs, documents, finance, family, services, employer support, and platform operations were connected in the user’s life but separated in the initial scope."
        tone="bg-[#fafaf7]"
      >
        <SharedCaseDecision />
      </Board>

      <Board
        id="board-07"
        number="07"
        chapter="Strategic product decisions"
        title="The portals were designed as responsibilities—not separate products"
        intro="Each surface has a clear job, while meaningful data and state continue to update the same relocation case."
        tone="bg-[#f1f5ff]"
      >
        <PortalResponsibilities />
      </Board>

      <Board
        id="board-08"
        number="08"
        chapter="Strategic product decisions"
        title="The dashboard should answer “What should I do now?”"
        intro="I changed the dashboard from a feature directory into an orientation layer centred on stage, readiness, next action, blockers, ownership, and timeline risk."
        tone="bg-[#f7f9ff]"
      >
        <OrientationSolution />
      </Board>

      <Board
        id="board-09"
        number="09"
        chapter="Strategic product decisions"
        title="Adding a family member changes the plan"
        intro="Family, documents, and finance became connected product logic rather than isolated feature pages."
        tone="bg-[#f8f7f2]"
      >
        <ConnectedModulesBoard />
      </Board>

      <Board
        id="board-10"
        number="10"
        chapter="Strategic product decisions"
        title="A polished provider card is not a trust model"
        intro="Verification, scope, response expectations, booking state, payment visibility, support, and dispute paths have to operate together."
        tone="bg-[#f7f9ff]"
      >
        <TrustSolution />
      </Board>

      <Board
        id="board-11"
        number="11"
        chapter="Product strategy and execution"
        title="I prioritised the coordination backbone before advanced automation"
        intro="The prototype demonstrates interface intent; production trust still depends on backend systems, permissions, payments, governance, and operational workflows."
        tone="bg-[#f8f7f2]"
      >
        <MvpPrioritization />
      </Board>

      <Board
        id="board-12"
        number="12"
        chapter="Product strategy and execution"
        title="From product requirements to a functional prototype"
        intro="AI-assisted coded prototyping accelerated implementation while product logic, interaction rules, and final design quality remained designer-led."
        tone="bg-[#f1f5ff]"
      >
        <CodedPrototypeWorkflow />
      </Board>

      <Board
        id="board-13"
        number="13"
        chapter="Product outcome"
        title="One plan from evaluation to stability"
        intro="The consumer experience makes each screen explain a decision, not merely represent a feature."
        tone="bg-[#fafaf7]"
      >
        <ConsumerExperience />
      </Board>

      <Board
        id="board-14"
        number="14"
        chapter="Product outcome"
        title="The consumer sees one plan while multiple actors coordinate behind it"
        intro="The employer, corporate, partner, and admin surfaces are meaningful only when their actions create a visible consumer consequence."
        tone="bg-[#f7f9ff]"
      >
        <EcosystemExperience />
      </Board>

      <Board
        id="board-15"
        number="15"
        chapter="Product outcome"
        title="The project created product clarity—not invented impact"
        intro="The work established a coherent product model and a testable prototype. User comprehension, production feasibility, trust behaviour, and business impact remain future validation."
        tone="bg-[#2459ff] text-white"
        inverted
      >
        <OutcomeValidation />
      </Board>

      <ProjectNavigation prevProject={prevProject} nextProject={nextProject} />
    </article>
  );
}

function GridTexture() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-50"
      style={{
        backgroundImage:
          "linear-gradient(rgba(22,22,19,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(22,22,19,0.055) 1px, transparent 1px)",
        backgroundSize: "44px 44px",
      }}
    />
  );
}

function Board({
  id,
  number,
  chapter,
  title,
  intro,
  tone,
  inverted = false,
  children,
}: {
  id: string;
  number: string;
  chapter: string;
  title: string;
  intro: string;
  tone: string;
  inverted?: boolean;
  children: ReactNode;
}) {
  const accents: Record<string, string> = {
    "02": "#ff5a4e",
    "03": "#2459ff",
    "04": "#19905c",
    "05": "#d6f7ab",
    "06": "#ff5a4e",
    "07": "#2459ff",
    "08": "#ff5a4e",
    "09": "#19905c",
    "10": "#ff5a4e",
    "11": "#2459ff",
    "12": "#8f5aff",
    "13": "#19905c",
    "14": "#ff5a4e",
    "15": "#d6f7ab",
  };
  const accent = accents[number] ?? "#2459ff";

  return (
    <section id={id} className={`relative overflow-hidden border-b ${inverted ? "border-white/14" : "border-black/10"} ${tone}`}>
      <div className="relative mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:px-14 lg:py-24">
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute -right-3 top-3 hidden text-[180px] font-semibold leading-none lg:block ${
            inverted ? "text-white/[0.06]" : "text-black/[0.035]"
          }`}
        >
          {number}
        </span>
        <div className="relative grid gap-12 lg:grid-cols-[minmax(250px,0.34fr)_minmax(0,1fr)] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease }}
            className={`self-start border-l-2 pl-5 lg:sticky lg:top-10 ${inverted ? "border-white/52" : "border-black/20"}`}
            style={{ borderLeftColor: accent }}
          >
            <div className="flex items-end gap-4">
              <p className={`text-6xl font-semibold leading-none ${inverted ? "text-white" : "text-black"}`}>{number}</p>
              <p className={`pb-1 text-[10px] font-semibold uppercase ${inverted ? "text-white/62" : "text-black/46"}`}>
                {chapter}
              </p>
            </div>
            <h2 className="mt-8 text-4xl font-semibold leading-[0.98] sm:text-5xl lg:text-[56px]">
              {title}
            </h2>
            <p className={`mt-6 max-w-sm text-base leading-7 ${inverted ? "text-white/70" : "text-black/58"}`}>
              {intro}
            </p>
            <div className={`mt-8 hidden h-1 w-24 lg:block ${inverted ? "bg-white/22" : "bg-black/12"}`}>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease }}
                className="h-full origin-left"
                style={{ backgroundColor: accent }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.14 }}
            transition={{ duration: 0.75, delay: 0.08, ease }}
            className="min-w-0"
          >
            {children}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroCaseVisual() {
  return (
    <div className="relative mx-auto min-h-[500px] max-w-[860px] overflow-hidden border border-black/12 bg-[#e9efff] p-4 sm:min-h-[580px] sm:p-7 lg:min-h-[650px] lg:p-10">
      <div aria-hidden="true" className="absolute inset-y-0 left-0 w-[13%] bg-[#ff5a4e]" />
      <div aria-hidden="true" className="absolute right-0 top-0 h-[24%] w-[34%] bg-[#d6f7ab]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(22,22,19,0.11) 1px, transparent 1px), linear-gradient(90deg, rgba(22,22,19,0.11) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 36, rotate: -2.5 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.95, delay: 0.22, ease }}
        className="relative z-20 ml-auto w-[92%] pt-8 sm:w-[86%] lg:w-[82%]"
      >
        <ProductBrowser view="Dashboard" compact />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -32, y: 20, rotate: -5 }}
        animate={{ opacity: 1, x: 0, y: 0, rotate: -2 }}
        transition={{ duration: 0.8, delay: 0.52, ease }}
        className="absolute bottom-5 left-3 z-30 hidden w-[31%] sm:block lg:bottom-8 lg:left-5"
      >
        <HeroMiniScreen view="My Plan" label="Plan / ownership" tone="bg-[#ff5a4e]" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 28, y: 24, rotate: 4 }}
        animate={{ opacity: 1, x: 0, y: 0, rotate: 2 }}
        transition={{ duration: 0.8, delay: 0.62, ease }}
        className="absolute bottom-5 right-3 z-30 hidden w-[29%] sm:block lg:bottom-8 lg:right-5"
      >
        <HeroMiniScreen view="Marketplace" label="Trust / service" tone="bg-[#d6f7ab]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -18 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.65, delay: 0.8, ease }}
        className="absolute left-4 top-5 z-30 flex items-center gap-2 bg-[#161613] px-3 py-2 text-[10px] font-semibold uppercase text-white sm:left-7 sm:top-7"
      >
        <Network className="h-3.5 w-3.5 text-[#d6f7ab]" />
        One shared case
      </motion.div>
      <motion.div
        animate={{ x: [0, 34, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-4 left-[14%] z-30 hidden h-1 w-16 bg-[#ff5a4e] sm:block"
      />
    </div>
  );
}

function HeroMiniScreen({ view, label, tone }: { view: ProductView; label: string; tone: string }) {
  return (
    <div className="border border-black/18 bg-white p-2 shadow-[0_24px_45px_-32px_rgba(22,22,19,0.6)]">
      <div className="h-[136px] overflow-hidden sm:h-[164px]">
        <div className="w-[160%] origin-top-left scale-[0.62]">
          <ProductBrowser view={view} compact />
        </div>
      </div>
      <p className={`mt-2 px-2 py-1 text-[8px] font-semibold uppercase ${tone}`}>{label}</p>
    </div>
  );
}

function LaptopMockup({ view, compact = false }: { view: ProductView; compact?: boolean }) {
  return (
    <div className="relative px-3 pb-6 sm:px-6">
      <div className="relative rounded-lg bg-[#16171b] p-1.5 shadow-[0_40px_100px_-42px_rgba(17,20,42,0.78)] sm:p-2">
        <div className="absolute left-1/2 top-1 h-1 w-10 -translate-x-1/2 rounded-full bg-white/12" />
        <div className="overflow-hidden rounded-md bg-white">
          <ProductBrowser view={view} compact={compact} device />
        </div>
      </div>
      <div className="relative mx-auto h-4 w-[104%] -translate-x-[2%] rounded-b-lg bg-[linear-gradient(180deg,#eceef3_0%,#afb4bf_100%)] shadow-[0_16px_30px_-20px_rgba(0,0,0,0.8)]">
        <div className="mx-auto h-1.5 w-24 rounded-b-md bg-black/14" />
      </div>
      <div className="mx-auto h-2 w-[78%] rounded-b-[50%] bg-black/16 blur-[1px]" />
    </div>
  );
}

function PhoneMockup({ view }: { view: ProductView }) {
  const data: Record<ProductView, { label: string; metric: string; action: string; rows: string[] }> = {
    Dashboard: {
      label: "Readiness",
      metric: "72%",
      action: "Confirm school timeline",
      rows: ["Visa submission", "Housing shortlist", "Family documents"],
    },
    "My Plan": {
      label: "Current phase",
      metric: "Prepare",
      action: "Visa submission · 9 days",
      rows: ["Offer complete", "Documents active", "Arrival planned"],
    },
    Documents: {
      label: "Household files",
      metric: "18 / 26",
      action: "School record missing",
      rows: ["Priya · 80%", "Arun · 67%", "Maya · 57%"],
    },
    Family: {
      label: "Family impact",
      metric: "6 areas",
      action: "School timing at risk",
      rows: ["Documents", "Housing", "Insurance"],
    },
    Finance: {
      label: "Move feasibility",
      metric: "Viable",
      action: "5.8 month runway",
      rows: ["Net €4,780", "Setup €12,400", "Support €6,000"],
    },
    Marketplace: {
      label: "Verified help",
      metric: "4.9 ★",
      action: "Berlin Arrival Co.",
      rows: ["Visa + setup", "Replies in 1h", "Protected payment"],
    },
    Provider: {
      label: "Booking",
      metric: "€690",
      action: "Verified provider",
      rows: ["Fixed scope", "Support included", "Dispute path"],
    },
  };
  const screen = data[view];

  return (
    <div className="w-[172px] rounded-[28px] bg-[#15161a] p-2 shadow-[0_30px_70px_-24px_rgba(17,20,42,0.72)] sm:w-[210px]">
      <div className="relative min-h-[350px] overflow-hidden rounded-[22px] bg-[#f6f7fb] px-3 pb-4 pt-7 sm:min-h-[430px] sm:px-4">
        <div className="absolute left-1/2 top-2 h-4 w-16 -translate-x-1/2 rounded-full bg-[#15161a]" />
        <div className="flex items-center justify-between">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#2459ff] text-white">
            <MapPinned className="h-3.5 w-3.5" />
          </div>
          <span className="text-[8px] font-semibold text-black/36">India → Berlin</span>
        </div>
        <p className="mt-6 text-[9px] font-semibold uppercase text-[#2459ff]">{screen.label}</p>
        <p className="mt-1 text-2xl font-semibold">{screen.metric}</p>
        <div className="mt-4 rounded-lg bg-[#2459ff] p-3 text-white">
          <p className="text-[8px] font-semibold uppercase text-white/58">Next action</p>
          <p className="mt-2 text-[10px] font-semibold leading-4">{screen.action}</p>
          <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/20">
            <div className="h-full w-[72%] rounded-full bg-white" />
          </div>
        </div>
        <div className="mt-3 space-y-2">
          {screen.rows.map((row, index) => (
            <div key={row} className="flex items-center gap-2 rounded-md bg-white p-2 shadow-sm">
              <span className={`h-2 w-2 rounded-full ${index === 1 ? "bg-[#f1bd4a]" : "bg-[#55bd71]"}`} />
              <span className="text-[9px] font-medium text-black/58">{row}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductPreview() {
  return (
    <div className="relative overflow-hidden border border-black/12 bg-[#e9efff] p-4 shadow-[0_34px_90px_-60px_rgba(36,89,255,0.58)] sm:p-6 lg:p-8">
      <div aria-hidden="true" className="absolute bottom-0 left-0 h-[36%] w-[18%] bg-[#ff5a4e]" />
      <div aria-hidden="true" className="absolute right-0 top-0 h-[22%] w-[24%] bg-[#d6f7ab]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(rgba(22,22,19,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(22,22,19,0.12) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      <div className="relative grid gap-5 lg:grid-cols-[1.24fr_0.76fr]">
        <motion.div
          initial={{ opacity: 0, y: 36, rotate: -1.2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease }}
          className="bg-white p-2 shadow-[0_26px_55px_-42px_rgba(22,22,19,0.5)] sm:p-3"
        >
          <ProductBrowser view="Dashboard" compact />
          <div className="mt-3 flex items-center justify-between gap-4 border-t border-black/10 px-2 pt-3">
            <p className="text-xs font-semibold uppercase text-[#2459ff]">Consumer command center</p>
            <p className="text-xs font-medium text-black/46">Stage / readiness / next action</p>
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["My Plan", "Plan", "Owners + dependencies", "bg-[#ff5a4e]"],
            ["Documents", "Household", "Requirements + risk", "bg-[#d6f7ab]"],
            ["Marketplace", "Marketplace", "Trust before booking", "bg-[#f6d9ff]"],
          ].map(([view, label, detail, tone], index) => (
            <motion.div
              key={view}
              initial={{ opacity: 0, x: 24, y: 10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease }}
            >
              <ProductMosaicTile view={view as ProductView} label={label} detail={detail} tone={tone} />
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, x: 24, y: 10 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.24, ease }}
          >
            <CorporateMosaicTile />
          </motion.div>
        </div>
      </div>
      <div className="relative mt-5 grid gap-px border-t border-black/10 bg-black/10 sm:grid-cols-5">
        {[
          "Understand readiness",
          "Know the next action",
          "Prepare the household",
          "Book trusted support",
          "Coordinate across portals",
        ].map((item, index) => (
          <div key={item} className="bg-[#e9efff] px-3 py-3 text-[10px] font-semibold uppercase text-black/64">
            <span className="mr-2 text-[#2459ff]">0{index + 1}</span>{item}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductMosaicTile({
  view,
  label,
  detail,
  tone,
}: {
  view: ProductView;
  label: string;
  detail: string;
  tone: string;
}) {
  return (
    <div className="overflow-hidden border border-black/12 bg-white shadow-[0_18px_38px_-30px_rgba(22,22,19,0.45)]">
      <div className="h-[174px] overflow-hidden sm:h-[190px]">
        <div className="w-[166%] origin-top-left scale-[0.6]">
          <ProductBrowser view={view} compact />
        </div>
      </div>
      <div className={`${tone} flex items-center justify-between gap-3 px-3 py-2`}>
        <p className="text-[10px] font-semibold uppercase">{label}</p>
        <p className="text-[9px] font-medium text-black/54">{detail}</p>
      </div>
    </div>
  );
}

function CorporateMosaicTile() {
  return (
    <div className="overflow-hidden border border-black/12 bg-white shadow-[0_18px_38px_-30px_rgba(22,22,19,0.45)]">
      <div className="h-[174px] bg-[#f5f7fb] p-4 sm:h-[190px]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[9px] font-semibold uppercase text-[#2459ff]">Corporate mobility</p>
            <p className="mt-1 text-sm font-semibold">Support approval</p>
          </div>
          <Building2 className="h-5 w-5 text-[#2459ff]" />
        </div>
        <div className="mt-4 bg-[#d6f7ab] p-3">
          <p className="text-[9px] font-semibold uppercase text-[#1f7a3c]">EUR 6,000 approved</p>
          <p className="mt-2 text-[10px] font-medium text-black/62">Covered services are now visible in Priya's plan.</p>
        </div>
        <div className="mt-3 flex gap-2">
          <span className="bg-white px-2 py-1 text-[8px] font-semibold text-black/54">Audit recorded</span>
          <span className="bg-white px-2 py-1 text-[8px] font-semibold text-black/54">Plan updated</span>
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 bg-[#2459ff] px-3 py-2 text-white">
        <p className="text-[10px] font-semibold uppercase">Portal handoff</p>
        <p className="text-[9px] font-medium text-white/70">Policy to plan</p>
      </div>
    </div>
  );
}

function PreviewLabel({
  number,
  title,
  body,
  compact = false,
}: {
  number: string;
  title: string;
  body: string;
  compact?: boolean;
}) {
  return (
    <div className={compact ? "mt-4 px-1" : "mt-6"}>
      <p className="text-[10px] font-semibold uppercase text-[#2459ff]">{number}</p>
      <p className="mt-2 text-base font-semibold">{title}</p>
      <p className="mt-2 max-w-lg text-sm leading-6 text-black/52">{body}</p>
    </div>
  );
}

function SupportingPortalPreview() {
  return (
    <div className="h-[260px] overflow-hidden border border-[#d8deea] bg-white shadow-[0_22px_56px_-38px_rgba(22,22,19,0.32)] sm:h-[280px]">
      <div className="flex h-10 items-center justify-between border-b border-black/10 bg-[#f7f7f2] px-3">
        <div className="flex gap-1"><span className="h-2 w-2 rounded-full bg-[#ff6846]" /><span className="h-2 w-2 rounded-full bg-[#f2c94c]" /><span className="h-2 w-2 rounded-full bg-[#5fc777]" /></div>
        <p className="text-[9px] text-black/36">corporate.glimmora.app</p>
      </div>
      <div className="bg-[#f5f7fb] p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[9px] font-semibold uppercase text-[#2459ff]">Corporate mobility</p>
            <p className="mt-1 text-sm font-semibold">Support approval</p>
          </div>
          <Building2 className="h-5 w-5 text-[#2459ff]" />
        </div>
        <div className="mt-4 bg-[#e9f7df] p-3">
          <p className="text-[9px] font-semibold uppercase text-[#1f7a3c]">Status</p>
          <p className="mt-1 text-xs font-semibold">EUR 6,000 approved</p>
        </div>
        <div className="mt-3 space-y-2">
          {[
            ["Covered services", "Housing + setup"],
            ["Consumer effect", "Plan updated"],
            ["Audit", "Approval recorded"],
          ].map(([label, value]) => (
            <div key={label} className="flex items-center justify-between bg-white px-3 py-2 text-[9px]">
              <span className="text-black/42">{label}</span>
              <span className="font-semibold text-black/68">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SnapshotCell({ label, value, wide = false }: { label: string; value: string; wide?: boolean }) {
  return (
    <div className={`bg-white p-6 ${wide ? "sm:col-span-2" : ""}`}>
      <p className="text-xs font-semibold uppercase text-black/38">{label}</p>
      <p className="mt-4 text-sm leading-6 text-black/70">{value}</p>
    </div>
  );
}

function ChallengeMap() {
  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(180px,0.42fr)_minmax(0,1fr)] lg:items-stretch">
      <div className="grid gap-2 sm:grid-cols-2">
        {challengeInputs.map(([Icon, label], index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.04, ease }}
            className="flex min-h-24 items-center gap-4 rounded-lg border border-black/10 bg-white p-4"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#edf2ff] text-[#2459ff]">
              <Icon className="h-5 w-5" />
            </div>
            <p className="text-sm font-semibold">{label}</p>
          </motion.div>
        ))}
      </div>

      <div className="relative flex min-h-44 items-center justify-center overflow-hidden rounded-lg border border-[#2459ff]/20 bg-[#2459ff] p-6 text-center text-white lg:min-h-full">
        <motion.div
          aria-hidden="true"
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute h-40 w-40 rounded-full border border-dashed border-white/30"
        />
        <div className="relative">
          <p className="text-xs font-semibold uppercase text-white/56">One family move</p>
          <p className="mt-3 text-2xl font-semibold">India → Berlin</p>
          <p className="mt-2 text-sm text-white/62">Job · visa · spouse · child</p>
        </div>
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        {challengeEffects.map((effect, index) => (
          <motion.div
            key={effect}
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.05, ease }}
            className="flex min-h-24 items-start gap-4 rounded-lg border border-[#ff6846]/20 bg-white p-4"
          >
            <span className="mt-1 text-xs font-semibold text-[#c14328]">0{index + 1}</span>
            <p className="text-sm font-semibold leading-6">{effect}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function JourneyMap() {
  const edgeCases = [
    ["Sponsorship", "The role is suitable, but visa sponsorship is unclear."],
    ["Household", "The applicant is ready, but the child’s school timeline is not."],
    ["Service", "A provider accepts a booking but stops responding."],
  ] as const;

  return (
    <div>
      <div className="relative grid gap-3 lg:grid-cols-5">
        <motion.div
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, ease }}
          className="absolute left-[8%] right-[8%] top-8 hidden h-px origin-left bg-[#2459ff]/28 lg:block"
        />
        {journeyStages.map(([number, stage, question], index) => (
          <motion.div
            key={stage}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.08, ease }}
            className="relative rounded-lg border border-black/12 bg-white p-5 lg:min-h-64"
          >
            <div className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-[#2459ff] text-[10px] font-semibold text-white">
              {number}
            </div>
            <p className="mt-8 text-2xl font-semibold">{stage}</p>
            <p className="mt-4 text-sm leading-6 text-black/58">{question}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 border-t border-black/12 pt-6">
        <p className="text-sm font-semibold text-black/42">The edges that exposed the real product problem</p>
        <div className="mt-5 grid gap-3 lg:grid-cols-3">
          {edgeCases.map(([label, body], index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08, ease }}
              className="border-l-2 border-[#ff6846] bg-white/72 p-5"
            >
              <p className="text-[10px] font-semibold uppercase text-[#b53c23]">{label}</p>
              <p className="mt-4 text-base font-semibold leading-7">{body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DefiningInsight() {
  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {painClusters.map(([Icon, label], index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08, ease }}
            className="flex min-h-28 items-center gap-4 border border-white/16 bg-white/[0.045] p-5"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/14 bg-white/[0.08] text-[#bfd0ff]">
              <Icon className="h-5 w-5" />
            </div>
            <p className="text-lg font-semibold leading-tight">{label}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 grid gap-10 border-t border-white/16 pt-10 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="text-xs font-semibold uppercase text-white/40">Core problem statement</p>
          <p className="mt-5 text-xl leading-8 text-white/74">
            People planning an international move must connect jobs, visas, documents, finances,
            family needs, service providers, and responsibilities across disconnected systems.
            This makes it difficult to know what applies, what should happen next, who owns each
            step, and whether the move remains realistic.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase text-[#92adff]">Design challenge</p>
          <p className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
            How might we turn scattered relocation inputs into one personalized, trusted, and sequenced plan?
          </p>
        </div>
      </div>
    </div>
  );
}

function SystemModel() {
  return (
    <div>
      <div className="hidden min-h-[670px] grid-cols-3 grid-rows-3 gap-5 md:grid">
        <div className="pointer-events-none absolute" />
        {actors.map((actor, index) => (
          <ActorCard key={actor.title} actor={actor} index={index} />
        ))}

        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, ease }}
          className="relative col-start-2 row-start-2 flex min-h-48 items-center justify-center overflow-hidden rounded-lg bg-[#2459ff] p-6 text-center text-white shadow-[0_28px_70px_-36px_rgba(36,89,255,0.8)]"
        >
          <motion.div
            aria-hidden="true"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute h-40 w-40 rounded-full border border-dashed border-white/26"
          />
          <div className="relative">
            <Network className="mx-auto h-6 w-6" />
            <p className="mt-4 text-xs font-semibold uppercase text-white/56">System of record</p>
            <p className="mt-2 text-2xl font-semibold">Shared Relocation Case</p>
            <p className="mt-3 text-sm leading-5 text-white/66">One context · one plan · many owners</p>
          </div>
        </motion.div>
      </div>

      <div className="grid gap-3 md:hidden">
        <div className="rounded-lg bg-[#2459ff] p-6 text-white">
          <Network className="h-6 w-6" />
          <p className="mt-5 text-xs font-semibold uppercase text-white/56">System of record</p>
          <p className="mt-2 text-2xl font-semibold">Shared Relocation Case</p>
          <p className="mt-3 text-sm text-white/66">One context · one plan · many owners</p>
        </div>
        {actors.map((actor, index) => (
          <ActorCard key={actor.title} actor={{ ...actor, position: "" }} index={index} />
        ))}
      </div>
    </div>
  );
}

function ActorCard({ actor, index }: { actor: (typeof actors)[number]; index: number }) {
  const Icon = actor.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.07, ease }}
      className={`flex min-h-40 flex-col justify-between rounded-lg border border-black/10 p-5 ${actor.tone} ${actor.position}`}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/80 text-[#2459ff] shadow-sm">
        <Icon className="h-5 w-5" />
      </div>
      <div className="mt-8">
        <p className="text-lg font-semibold">{actor.title}</p>
        <p className="mt-2 text-sm leading-5 text-black/56">{actor.responsibility}</p>
      </div>
    </motion.div>
  );
}

function CoreFlows() {
  return (
    <div className="space-y-5">
      <div className="rounded-lg border border-black/12 bg-[#f7f7f2] p-5 md:p-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase text-[#2459ff]">Flow 01</p>
            <p className="mt-2 text-xl font-semibold">Simplified full-system flow</p>
          </div>
          <Network className="h-6 w-6 text-black/30" />
        </div>

        <div className="mt-8 overflow-x-auto pb-2">
          <div className="flex min-w-[1120px] items-center">
            {systemFlow.map((node, index) => (
              <div key={node} className="flex flex-1 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  className={`flex h-24 w-full items-center justify-center rounded-lg border px-4 text-center text-sm font-semibold ${
                    node === "Shared case"
                      ? "border-[#2459ff] bg-[#2459ff] text-white"
                      : "border-black/12 bg-white"
                  }`}
                >
                  {node}
                </motion.div>
                {index < systemFlow.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.07 + 0.2 }}
                    className="h-px w-7 shrink-0 origin-left bg-[#2459ff]/40"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2 border-t border-black/10 pt-5">
          {["Employer input", "Corporate policy", "Partner fulfilment", "Admin trust state"].map((item) => (
            <span key={item} className="rounded-md bg-white px-3 py-2 text-xs font-medium text-black/58 shadow-sm">
              {item} → shared case
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-[#2459ff] bg-[#2459ff] p-5 text-white md:p-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase text-white/58">Flow 02</p>
            <p className="mt-2 text-xl font-semibold">Primary consumer flow</p>
          </div>
          <Users2 className="h-6 w-6 text-white/30" />
        </div>
        <div className="mt-8 grid gap-2 md:grid-cols-6">
          {["Start", "Profile", "Dashboard", "My Plan", "Move", "Stabilize"].map((node, index) => (
            <motion.div
              key={node}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="relative rounded-lg border border-white/14 bg-white/[0.04] p-4 md:min-h-28"
            >
              <p className="text-xs text-white/38">0{index + 1}</p>
              <p className="mt-5 text-sm font-semibold">{node}</p>
              {index < 5 && <ChevronConnector />}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ChevronConnector() {
  return (
    <div aria-hidden="true" className="absolute -right-2 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 rotate-45 border-r border-t border-[#92adff]/60 md:block" />
  );
}

function OrientationSolution() {
  const annotations = [
    [Compass, "Current stage", "The user knows where they are in the move before choosing a module."],
    [Zap, "Next action", "One prioritized decision replaces equal-weight module cards."],
    [CircleAlert, "Blocker", "School evidence is linked to the timeline risk it creates."],
    [Users2, "Owner + due date", "The product makes clear who must act and by when."],
    [Clock3, "Readiness", "A legible signal of how realistic the move is right now."],
  ] as const;

  return (
    <div>
      <div className="grid gap-5 lg:grid-cols-[0.27fr_0.73fr] lg:items-start">
        <div className="border border-black/10 bg-white p-5 lg:mt-20">
          <p className="text-[10px] font-semibold uppercase text-[#b53c23]">Initial direction</p>
          <p className="mt-3 text-xl font-semibold leading-tight">Every module had equal visual priority.</p>
          <p className="mt-3 text-sm leading-6 text-black/56">It showed the feature set, but it did not help someone decide what mattered now.</p>
          <div className="mt-7">
            <BeforeDashboardWireframe />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease }}
        >
          <ProductBrowser view="Dashboard" />
        </motion.div>
      </div>

      <div className="mt-8 grid gap-px border-y border-black/12 bg-black/12 sm:grid-cols-2 lg:grid-cols-5">
        {annotations.map(([Icon, title, body], index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.07, ease }}
            className="bg-white/64 p-5"
          >
            <div className="flex items-center gap-3">
              <Icon className="h-4 w-4 text-[#2459ff]" />
              <p className="text-sm font-semibold">{title}</p>
            </div>
            <p className="mt-3 text-sm leading-6 text-black/56">{body}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 grid gap-3 lg:grid-cols-2">
        <DecisionTradeoff
          label="Principle applied"
          title="Action before information"
          body="Readiness, next action, owner, blocker, and timeline risk become the hierarchy."
          tone="bg-[#edf2ff]"
        />
        <DecisionTradeoff
          label="Trade-off"
          title="Less feature breadth on the first screen"
          body="The revised hierarchy gives less prominence to every module, but greater clarity around the immediate decision."
          tone="bg-[#fff5ef]"
        />
      </div>
    </div>
  );
}

function PreparationSolution() {
  const tabs: ProductView[] = ["My Plan", "Documents", "Family", "Finance"];
  const [active, setActive] = useState<ProductView>("My Plan");
  const notes: Record<string, string> = {
    "My Plan": "Milestones connect status, owner, deadline, and dependency across the move.",
    Documents: "Requirements are tracked by household member, expiry, translation status, and timeline risk.",
    Family: "Adding a spouse or child changes documents, school, housing, insurance, and budget requirements.",
    Finance: "Salary and relocation support are compared with setup costs and ongoing household expenses.",
  };

  return (
    <div>
      <div className="mb-6 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Preparation prototype views">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={active === tab}
            onClick={() => setActive(tab)}
            className={`rounded-md border px-4 py-2 text-sm font-semibold transition-all ${
              active === tab
                ? "border-[#2459ff] bg-[#2459ff] text-white shadow-[0_12px_28px_-18px_rgba(36,89,255,0.7)]"
                : "border-black/10 bg-white text-black/48 hover:border-black/28 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-lg bg-[linear-gradient(135deg,#dce8ff_0%,#f2e8ff_52%,#ffe9e1_100%)] px-2 pb-12 pt-12 sm:px-10 lg:min-h-[710px] lg:px-20 lg:pt-16">
        <div className="absolute inset-x-[12%] top-0 h-px bg-white/80" />
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 28, rotateY: -4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, rotateY: 0, scale: 1 }}
            exit={{ opacity: 0, y: -14, rotateY: 4, scale: 0.985 }}
            transition={{ duration: 0.58, ease }}
            className="relative z-10 mx-auto max-w-[1100px] lg:pl-16 lg:pr-24"
            style={{ transformPerspective: 1600 }}
          >
            <LaptopMockup view={active} compact />
          </motion.div>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.div
            key={`${active}-mobile`}
            initial={{ opacity: 0, x: -28, y: 30, rotate: -5 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: -2 }}
            exit={{ opacity: 0, x: -20, y: 16, rotate: -5 }}
            transition={{ duration: 0.58, delay: 0.08, ease }}
            className="absolute bottom-7 left-[3%] z-20 hidden lg:block"
          >
            <PhoneMockup view={active} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 grid gap-3 border-t border-black/12 pt-6 sm:grid-cols-[230px_1fr]">
        <p className="text-base font-semibold text-[#2459ff]">Decision behind the screen</p>
        <p className="max-w-3xl text-base leading-7 text-black/60">{notes[active]}</p>
      </div>
    </div>
  );
}

function TrustSolution() {
  const trustSignals = [
    "Verified-provider status",
    "Clear service scope and price",
    "Review quality and response time",
    "Booking and payment state",
    "Support and dispute path",
  ];

  return (
    <div>
      <div className="grid gap-5 lg:grid-cols-3 lg:items-start">
        <motion.div
          initial={{ opacity: 0, x: -24, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease }}
        >
          <ProductBrowser view="Marketplace" compact />
          <ScreenCaption number="01" title="Provider profile" body="Verification, scope, price, reviews, and response expectations appear before booking." />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, delay: 0.16, ease }}
        >
          <ProductBrowser view="Provider" compact />
          <ScreenCaption number="02" title="Active booking" body="The accepted service updates the consumer plan with a visible status and support path." />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 24, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, delay: 0.28, ease }}
        >
          <AdminTrustPreview />
          <ScreenCaption number="03" title="Admin trust state" body="Verification, disputes, escrow, and audit events are consumer trust infrastructure." />
        </motion.div>
      </div>

      <div className="mt-5 grid gap-2 border-y border-black/10 py-5 text-[11px] font-semibold text-black/52 sm:grid-cols-3">
        <p>Admin verifies provider <span className="text-[#2459ff]">→</span> verification becomes visible</p>
        <p>Partner accepts booking <span className="text-[#2459ff]">→</span> plan status updates</p>
        <p>User raises issue <span className="text-[#2459ff]">→</span> support and dispute states activate</p>
      </div>
      <div className="mt-7 grid gap-8 border-t border-black/12 pt-7 md:grid-cols-[1fr_1fr]">
        <div>
          <p className="text-sm font-semibold">Trust signals designed into the experience</p>
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {trustSignals.map((signal) => (
              <div key={signal} className="flex items-start gap-2 text-sm leading-6 text-black/60">
                <Check className="mt-1 h-4 w-4 shrink-0 text-[#1f8a45]" />
                {signal}
              </div>
            ))}
          </div>
        </div>
        <div className="border-l-2 border-[#ff6846] pl-5">
          <p className="text-sm font-semibold text-[#a83b22]">Prototype boundary</p>
          <p className="mt-3 text-sm leading-6 text-black/58">
            Provider verification, secure documents, live payments, escrow, and dispute handling are
            prototype concepts. Production delivery depends on backend, compliance, security, and
            operational integrations.
          </p>
        </div>
      </div>
    </div>
  );
}

function HandoffGrid() {
  return (
    <div className="grid gap-3">
      {handoffs.map((handoff, index) => {
        const Icon = handoff.icon;
        return (
          <motion.div
            key={handoff.source}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.07, ease }}
            className="grid min-w-0 gap-3 rounded-lg border border-black/12 bg-[#f7f7f2] p-3 md:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)_80px_minmax(0,1.4fr)] md:items-center"
          >
            <div className={`flex min-w-0 items-center gap-3 rounded-md p-4 ${handoff.tone}`}>
              <Icon className="h-5 w-5 text-[#2459ff]" />
              <p className="font-semibold">{handoff.source}</p>
            </div>
            <div className="min-w-0 px-2 py-2">
              <p className="text-xs font-semibold uppercase text-black/36">Event</p>
              <p className="mt-2 text-sm font-semibold">{handoff.event}</p>
            </div>
            <div className="relative hidden h-px bg-[#2459ff]/30 md:block">
              <motion.span
                animate={{ x: [0, 58, 0] }}
                transition={{ duration: 2.8, delay: index * 0.35, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-1.5 left-0 h-3 w-3 rounded-full bg-[#2459ff]"
              />
            </div>
            <div className="min-w-0 rounded-md border border-black/10 bg-white p-4">
              <p className="text-xs font-semibold uppercase text-[#2459ff]">Consumer case update</p>
              <p className="mt-2 text-sm font-semibold">{handoff.effect}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

function WorkflowOutcome() {
  return (
    <div>
      <div className="overflow-x-auto rounded-lg border border-black/12 bg-white p-5 md:p-8">
        <div className="flex min-w-[1050px] items-start">
          {workflow.map(([Icon, label], index) => (
            <div key={label} className="flex flex-1 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06, ease }}
                className="w-full text-center"
              >
                <div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full ${index === 3 ? "bg-[#2459ff] text-white" : "bg-[#edf2ff] text-[#2459ff]"}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mx-auto mt-4 max-w-28 text-sm font-semibold leading-5">{label}</p>
              </motion.div>
              {index < workflow.length - 1 && <div className="mt-6 h-px w-8 shrink-0 bg-[#2459ff]/28" />}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-px overflow-hidden rounded-lg border border-black/12 bg-black/12 lg:grid-cols-2">
        <ContributionColumn title="I owned" items={owned} icon={Target} tone="bg-[#2459ff] text-white" />
        <ContributionColumn title="Claude Code assisted with" items={assisted} icon={Code2} tone="bg-white text-black" />
      </div>

      <div className="mt-5 rounded-lg border border-[#2459ff]/20 bg-[#edf2ff] p-6 md:p-8">
        <p className="text-sm font-semibold text-[#2459ff]">Human–AI collaboration</p>
        <p className="mt-4 max-w-5xl text-lg leading-8 text-black/70">
          Claude Code accelerated implementation, but product judgment remained designer-led. I
          defined the system architecture, experience principles, interaction requirements,
          content hierarchy, and acceptance criteria. I reviewed each browser output, identified
          UX gaps, rejected weak patterns, and iterated the implementation until it matched the
          product intent.
        </p>
      </div>

      <div className="mt-5 grid gap-3 lg:grid-cols-4">
        {[
          ["Initial output", "A dashboard displayed every module with equal priority."],
          ["UX critique", "The screen did not tell the user what mattered now."],
          ["Principle applied", "Action before information."],
          ["Revision", "Readiness, next action, owner, deadline, and blocker became the hierarchy."],
        ].map(([label, body], index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className={`min-h-44 rounded-lg border p-5 ${index === 3 ? "border-[#2459ff] bg-[#2459ff] text-white" : "border-black/12 bg-white"}`}
          >
            <p className={`text-xs font-semibold uppercase ${index === 3 ? "text-white/58" : "text-black/38"}`}>0{index + 1} · {label}</p>
            <p className={`mt-6 text-sm leading-6 ${index === 3 ? "text-white/80" : "text-black/64"}`}>{body}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-14 border-t border-black/12 pt-10">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase text-[#2459ff]">Outcome</p>
            <p className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              A coherent product model for coordinating international relocation across five groups.
            </p>
            <p className="mt-5 text-base leading-7 text-black/58">
              The outcome is design evidence, not a launch claim: a shared case model, personalized
              planning experience, multi-portal boundaries, core flows and IA, prioritized MVP,
              defined trust dependencies, functional prototype, and future-validation plan.
            </p>
          </div>

          <div className="grid gap-3">
            <MaturityRow label="Experience demonstrated" body="Navigation, dashboard, planning model, portal structure, and content hierarchy" tone="bg-[#e9f7df]" />
            <MaturityRow label="Product logic defined" body="Ownership, dependencies, family context, handoffs, and trust states" tone="bg-[#e7efff]" />
            <MaturityRow label="Backend-dependent" body="Live AI, secure storage, validation, payments, escrow, integrations, and permissions" tone="bg-[#ffe9e3]" />
          </div>
        </div>

        <div className="mt-10 rounded-lg bg-[#2459ff] p-6 text-white md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.45fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase text-[#92adff]">Future validation</p>
              <p className="mt-3 text-2xl font-semibold">The next phase tests confidence, not vanity metrics.</p>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              {validationQuestions.map((question, index) => (
                <div key={question} className="flex gap-3 rounded-lg border border-white/12 bg-white/[0.04] p-4">
                  <span className="text-xs font-semibold text-[#92adff]">0{index + 1}</span>
                  <p className="text-sm leading-6 text-white/70">{question}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContributionColumn({
  title,
  items,
  icon: Icon,
  tone,
}: {
  title: string;
  items: string[];
  icon: LucideIcon;
  tone: string;
}) {
  const inverted = tone.includes("text-white");
  return (
    <div className={`p-6 md:p-8 ${tone}`}>
      <div className="flex items-center gap-3">
        <Icon className={`h-5 w-5 ${inverted ? "text-[#92adff]" : "text-[#2459ff]"}`} />
        <p className="text-xl font-semibold">{title}</p>
      </div>
      <div className={`mt-6 grid gap-px ${inverted ? "bg-white/12" : "bg-black/10"}`}>
        {items.map((item) => (
          <div key={item} className={`flex items-center gap-3 py-3 text-sm ${inverted ? "bg-[#2459ff] text-white/72" : "bg-white text-black/64"}`}>
            <Check className={`h-4 w-4 shrink-0 ${inverted ? "text-[#92adff]" : "text-[#2459ff]"}`} />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function MaturityRow({ label, body, tone }: { label: string; body: string; tone: string }) {
  return (
    <div className={`grid gap-3 rounded-lg border border-black/10 p-5 sm:grid-cols-[190px_1fr] sm:items-center ${tone}`}>
      <p className="text-sm font-semibold">{label}</p>
      <p className="text-sm leading-6 text-black/58">{body}</p>
    </div>
  );
}

function ProductBrowser({
  view,
  compact = false,
  device = false,
}: {
  view: ProductView;
  compact?: boolean;
  device?: boolean;
}) {
  const routes: Record<ProductView, string> = {
    Dashboard: "/dashboard",
    "My Plan": "/my-plan",
    Documents: "/documents",
    Family: "/family",
    Finance: "/finance",
    Marketplace: "/marketplace",
    Provider: "/marketplace/berlin-arrival-co",
  };

  return (
    <div
      className={`min-w-0 overflow-hidden bg-white ${
        device
          ? "rounded-md"
          : "rounded-lg border border-[#d8deea] shadow-[0_28px_70px_-38px_rgba(22,22,19,0.36)]"
      }`}
    >
      <div className="flex h-11 items-center gap-3 border-b border-black/10 bg-[#f7f7f2] px-4">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff6846]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#f2c94c]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#5fc777]" />
        </div>
        <div className="flex min-w-0 flex-1 items-center justify-center">
          <div className="w-full max-w-xs truncate rounded-md border border-black/8 bg-white px-3 py-1 text-center text-[10px] text-black/38">
            glimmora.app{routes[view]}
          </div>
        </div>
        <BadgeCheck className="h-4 w-4 text-[#2459ff]" />
      </div>

      <div className={`flex ${compact ? "min-h-[430px]" : "min-h-[520px] lg:min-h-[620px]"}`}>
        <ProductSidebar active={view} />
        <div className="min-w-0 flex-1 bg-[#f5f7fb] p-3 sm:p-5 lg:p-7">
          <ProductViewContent view={view} compact={compact} />
        </div>
      </div>
    </div>
  );
}

function ProductSidebar({ active }: { active: ProductView }) {
  const nav = [
    [LayoutDashboard, "Dashboard"],
    [ClipboardCheck, "My Plan"],
    [FileCheck2, "Documents"],
    [Users2, "Family"],
    [CircleDollarSign, "Finance"],
    [Home, "Marketplace"],
  ] as const;

  return (
    <aside className="hidden w-44 shrink-0 border-r border-black/8 bg-white p-3 sm:block lg:w-52 lg:p-4">
      <div className="flex items-center gap-2 px-2 py-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#2459ff] text-white">
          <MapPinned className="h-4 w-4" />
        </div>
        <div>
          <p className="text-xs font-semibold">Glimmora</p>
          <p className="text-[9px] text-black/38">India → Berlin</p>
        </div>
      </div>
      <nav className="mt-6 space-y-1" aria-label="Prototype navigation">
        {nav.map(([Icon, label]) => {
          const activeLabel = active === "Provider" ? "Marketplace" : active;
          return (
            <div
              key={label}
              className={`flex items-center gap-2 rounded-md px-3 py-2 text-[11px] font-medium ${
                activeLabel === label ? "bg-[#edf2ff] text-[#2459ff]" : "text-black/42"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              {label}
            </div>
          );
        })}
      </nav>
      <div className="mt-8 rounded-md bg-[#eef8e8] p-3">
        <p className="text-[9px] font-semibold text-[#1f7a3c]">CASE READY</p>
        <p className="mt-1 text-lg font-semibold">72%</p>
        <div className="mt-2 h-1 overflow-hidden rounded-full bg-black/8">
          <div className="h-full w-[72%] bg-[#39a75a]" />
        </div>
      </div>
    </aside>
  );
}

function ProductViewContent({ view, compact }: { view: ProductView; compact: boolean }) {
  switch (view) {
    case "Dashboard":
      return <DashboardView compact={compact} />;
    case "My Plan":
      return <PlanView compact={compact} />;
    case "Documents":
      return <DocumentsView compact={compact} />;
    case "Family":
      return <FamilyView compact={compact} />;
    case "Finance":
      return <FinanceView compact={compact} />;
    case "Marketplace":
      return <MarketplaceView compact={compact} />;
    case "Provider":
      return <ProviderView compact={compact} />;
    default:
      return null;
  }
}

function ScreenHeader({ eyebrow, title, action }: { eyebrow: string; title: string; action?: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-[10px] font-semibold uppercase text-[#2459ff]">{eyebrow}</p>
        <h3 className="mt-2 text-xl font-semibold leading-tight sm:text-2xl">{title}</h3>
      </div>
      {action && (
        <button type="button" className="hidden rounded-md bg-[#2459ff] px-3 py-2 text-[10px] font-semibold text-white sm:block">
          {action}
        </button>
      )}
    </div>
  );
}

function DashboardView({ compact }: { compact: boolean }) {
  return (
    <div>
      <ScreenHeader eyebrow="Relocation command center" title="Good morning, Priya" action="View full plan" />
      <div className={`mt-5 grid gap-3 ${compact ? "lg:grid-cols-[1.25fr_0.75fr]" : "lg:grid-cols-[1.22fr_0.78fr]"}`}>
        <div className="rounded-lg bg-[#2459ff] p-5 text-white sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase text-white/56">Relocation readiness</p>
              <p className="mt-3 text-4xl font-semibold sm:text-5xl">72%</p>
            </div>
            <div className="rounded-md border border-white/20 bg-white/10 px-3 py-2 text-[10px] font-semibold">On track</div>
          </div>
          <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/18">
            <motion.div
              initial={{ width: "16%" }}
              whileInView={{ width: "72%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease }}
              className="h-full rounded-full bg-white"
            />
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2 text-[10px] text-white/64">
            <span>Offer ✓</span>
            <span>Visa active</span>
            <span>Family risk</span>
          </div>
        </div>

        <div className="rounded-lg border border-black/10 bg-white p-5">
          <p className="text-[10px] font-semibold uppercase text-black/36">Current milestone</p>
          <p className="mt-3 text-base font-semibold">Prepare visa submission</p>
          <div className="mt-5 flex items-center gap-2 text-[11px] text-black/52">
            <Clock3 className="h-3.5 w-3.5 text-[#2459ff]" />
            Due in 9 days
          </div>
          <div className="mt-2 flex items-center gap-2 text-[11px] text-black/52">
            <Users2 className="h-3.5 w-3.5 text-[#2459ff]" />
            Owner: Priya
          </div>
        </div>
      </div>

      <div className="mt-3 rounded-lg border border-[#ff6846]/20 bg-[#fff8f4] p-4 sm:p-5">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#ffe2d8] text-[#b53c23]">
              <Zap className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase text-[#b53c23]">Next best action</p>
              <p className="mt-1 text-sm font-semibold">Confirm school admission timeline</p>
              <p className="mt-1 text-[11px] leading-5 text-black/48">This affects housing search and proof-of-funds timing.</p>
            </div>
          </div>
          <button type="button" className="rounded-md bg-[#161613] px-4 py-2 text-[10px] font-semibold text-white">Resolve now</button>
        </div>
      </div>

      {!compact && (
        <div className="mt-3 grid gap-3 lg:grid-cols-2">
          <StatusList title="Active plan" items={["Employment offer", "Visa documents", "Temporary housing"]} />
          <div className="rounded-lg border border-black/10 bg-white p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold">Blocker</p>
              <span className="rounded-md bg-[#ffe2d8] px-2 py-1 text-[9px] font-semibold text-[#b53c23]">HIGH IMPACT</span>
            </div>
            <p className="mt-4 text-sm font-semibold">Child school evidence missing</p>
            <p className="mt-2 text-[11px] leading-5 text-black/48">Owner: family · Blocks final housing shortlist</p>
          </div>
        </div>
      )}
    </div>
  );
}

function StatusList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-black/10 bg-white p-5">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold">{title}</p>
        <span className="text-[10px] text-[#2459ff]">View all</span>
      </div>
      <div className="mt-4 space-y-2">
        {items.map((item, index) => (
          <div key={item} className="flex items-center gap-3 rounded-md bg-[#f5f7fb] px-3 py-2.5">
            <span className={`h-2 w-2 rounded-full ${index === 1 ? "bg-[#f2c94c]" : "bg-[#5fc777]"}`} />
            <span className="flex-1 text-[11px] font-medium">{item}</span>
            <span className="text-[9px] text-black/36">{index === 1 ? "In review" : "Ready"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlanView({ compact }: { compact: boolean }) {
  const steps = [
    ["Employment offer", "Employer", "Complete", "Jun 18"],
    ["Visa submission", "Priya", "In progress", "Jul 08"],
    ["Temporary housing", "Partner", "Waiting", "Jul 22"],
    ["Family arrival", "Family", "Planned", "Aug 19"],
  ];
  return (
    <div>
      <ScreenHeader eyebrow="Personalized relocation plan" title="India to Berlin" action="Add milestone" />
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <Metric label="Current phase" value="Prepare" />
        <Metric label="Next deadline" value="9 days" />
        <Metric label="Open blockers" value="1" alert />
      </div>
      <div className="mt-3 rounded-lg border border-black/10 bg-white p-4 sm:p-5">
        <div className="grid grid-cols-[28px_1fr] gap-3">
          <div className="relative flex flex-col items-center">
            <div className="absolute bottom-4 top-4 w-px bg-black/10" />
            {steps.map((_, index) => (
              <div key={index} className="relative z-10 mb-11 flex h-6 w-6 items-center justify-center rounded-full bg-white">
                <span className={`h-3 w-3 rounded-full ${index === 0 ? "bg-[#5fc777]" : index === 1 ? "bg-[#2459ff]" : "bg-black/12"}`} />
              </div>
            ))}
          </div>
          <div>
            {steps.map(([title, owner, status, date], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="mb-3 grid gap-2 rounded-md border border-black/8 bg-[#f8f9fc] p-3 sm:grid-cols-[1fr_auto] sm:items-center"
              >
                <div>
                  <p className="text-xs font-semibold">{title}</p>
                  <p className="mt-1 text-[10px] text-black/42">Owner: {owner} · {status}</p>
                </div>
                <span className="text-[10px] font-semibold text-[#2459ff]">{date}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {!compact && (
        <div className="mt-3 rounded-lg border border-[#2459ff]/16 bg-[#edf2ff] p-4 text-[11px] leading-5 text-black/56">
          Employer start-date changes update visa, housing, travel, and family milestones inside this same plan.
        </div>
      )}
    </div>
  );
}

function Metric({ label, value, alert = false }: { label: string; value: string; alert?: boolean }) {
  return (
    <div className="rounded-lg border border-black/10 bg-white p-4">
      <p className="text-[9px] font-semibold uppercase text-black/34">{label}</p>
      <p className={`mt-2 text-lg font-semibold ${alert ? "text-[#b53c23]" : "text-black"}`}>{value}</p>
    </div>
  );
}

function DocumentsView({ compact }: { compact: boolean }) {
  const people = [
    ["Priya", "8 / 10 ready", "80%"],
    ["Arun", "6 / 9 ready", "67%"],
    ["Maya", "4 / 7 ready", "57%"],
  ];
  return (
    <div>
      <ScreenHeader eyebrow="Household documents" title="Requirements by person" action="Upload file" />
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {people.map(([name, status, progress], index) => (
          <div key={name} className="rounded-lg border border-black/10 bg-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#edf2ff] text-xs font-semibold text-[#2459ff]">{name[0]}</div>
              <span className="text-[10px] font-semibold">{progress}</span>
            </div>
            <p className="mt-4 text-xs font-semibold">{name}</p>
            <p className="mt-1 text-[10px] text-black/40">{status}</p>
            <div className="mt-3 h-1 overflow-hidden rounded-full bg-black/8">
              <div className="h-full bg-[#2459ff]" style={{ width: progress }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-lg border border-black/10 bg-white p-4 sm:p-5">
        <div className="grid grid-cols-[1fr_auto] gap-3 border-b border-black/8 pb-3 text-[9px] font-semibold uppercase text-black/32">
          <span>Requirement</span>
          <span>Status</span>
        </div>
        {[
          ["Marriage certificate", "Arun", "Translation needed"],
          ["School records", "Maya", "Missing"],
          ["Employment letter", "Priya", "Verified"],
          ["Passports", "Household", "Ready"],
        ].slice(0, compact ? 3 : 4).map(([document, person, status]) => (
          <div key={document} className="grid grid-cols-[1fr_auto] gap-3 border-b border-black/6 py-3 last:border-0">
            <div>
              <p className="text-[11px] font-semibold">{document}</p>
              <p className="mt-1 text-[9px] text-black/38">{person} · expiry + route checked</p>
            </div>
            <span className={`self-center rounded-md px-2 py-1 text-[9px] font-semibold ${status === "Missing" ? "bg-[#ffe2d8] text-[#b53c23]" : "bg-[#edf2ff] text-[#2459ff]"}`}>{status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FamilyView({ compact }: { compact: boolean }) {
  return (
    <div>
      <ScreenHeader eyebrow="Family readiness" title="The household changes the plan" action="Add member" />
      <div className="mt-5 grid gap-3 lg:grid-cols-[0.76fr_1.24fr]">
        <div className="rounded-lg border border-black/10 bg-white p-5">
          <p className="text-[10px] font-semibold uppercase text-black/34">Household</p>
          {[
            ["Priya", "Primary applicant", "P"],
            ["Arun", "Spouse", "A"],
            ["Maya", "Child", "M"],
          ].map(([name, role, initial]) => (
            <div key={name} className="mt-3 flex items-center gap-3 rounded-md bg-[#f5f7fb] p-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#edf2ff] text-[10px] font-semibold text-[#2459ff]">{initial}</div>
              <div>
                <p className="text-[11px] font-semibold">{name}</p>
                <p className="text-[9px] text-black/38">{role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-lg bg-[#2459ff] p-5 text-white">
          <p className="text-[10px] font-semibold uppercase text-white/56">Family impact</p>
          <p className="mt-3 text-xl font-semibold">6 plan areas changed</p>
          <div className="mt-5 grid grid-cols-2 gap-2">
            {["Documents", "School", "Housing", "Insurance", "Budget", "Timeline"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="rounded-md border border-white/16 bg-white/8 px-3 py-2 text-[10px] font-medium"
              >
                {item}
              </motion.div>
            ))}
          </div>
          {!compact && <p className="mt-5 text-[10px] leading-5 text-white/62">School timing is now the highest-impact household dependency.</p>}
        </div>
      </div>
      <div className="mt-3 rounded-lg border border-[#ff6846]/18 bg-[#fff8f4] p-4">
        <div className="flex gap-3">
          <CircleAlert className="h-4 w-4 shrink-0 text-[#b53c23]" />
          <p className="text-[11px] leading-5 text-black/56">Maya's school records must be translated before the housing shortlist can be finalized.</p>
        </div>
      </div>
    </div>
  );
}

function FinanceView({ compact }: { compact: boolean }) {
  return (
    <div>
      <ScreenHeader eyebrow="Move feasibility" title="Offer and household budget" action="Update assumptions" />
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <Metric label="Monthly net" value="€4,780" />
        <Metric label="Setup cost" value="€12,400" />
        <Metric label="Savings runway" value="5.8 mo" />
      </div>
      <div className="mt-3 grid gap-3 lg:grid-cols-[1.18fr_0.82fr]">
        <div className="rounded-lg border border-black/10 bg-white p-5">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold">Monthly household model</p>
            <span className="text-[10px] text-black/36">Berlin · 3 people</span>
          </div>
          <div className="mt-5 space-y-3">
            {[
              ["Rent + utilities", 62, "€2,150"],
              ["Food + transport", 38, "€1,120"],
              ["Insurance + school", 29, "€860"],
              ["Flexible buffer", 22, "€650"],
            ].map(([label, width, value]) => (
              <div key={label as string}>
                <div className="flex justify-between text-[10px]">
                  <span>{label}</span>
                  <span className="font-semibold">{value}</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-black/8">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${width}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="h-full bg-[#2459ff]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg bg-[#eef8e8] p-5">
          <p className="text-[10px] font-semibold uppercase text-[#1f7a3c]">Feasibility signal</p>
          <p className="mt-3 text-3xl font-semibold">Viable</p>
          <p className="mt-3 text-[11px] leading-5 text-black/54">The move remains realistic if temporary housing stays under €2,400 and school setup is completed before August.</p>
          {!compact && <div className="mt-5 rounded-md bg-white/70 p-3 text-[10px] font-semibold text-[#1f7a3c]">Employer support covers €6,000</div>}
        </div>
      </div>
    </div>
  );
}

function MarketplaceView({ compact }: { compact: boolean }) {
  const providers = [
    ["Berlin Arrival Co.", "Visa + city setup", "4.9", "€690", true],
    ["Nest Berlin", "Temporary housing", "4.7", "€420", true],
    ["Lingua Legal", "Certified translation", "4.8", "€95", false],
  ] as const;
  return (
    <div>
      <ScreenHeader eyebrow="Verified services" title="Support for your next milestone" action="View bookings" />
      <div className="mt-5 flex flex-wrap gap-2">
        {["Visa", "Housing", "Translation", "Schools"].map((filter, index) => (
          <span key={filter} className={`rounded-md border px-3 py-2 text-[10px] font-semibold ${index === 0 ? "border-[#2459ff] bg-[#2459ff] text-white" : "border-black/10 bg-white text-black/48"}`}>{filter}</span>
        ))}
      </div>
      <div className="mt-3 grid gap-3 lg:grid-cols-3">
        {providers.slice(0, compact ? 3 : 3).map(([name, service, rating, price, verified], index) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            className="rounded-lg border border-black/10 bg-white p-4"
          >
            <div className="flex h-20 items-center justify-center rounded-md bg-[#edf2ff]">
              <Home className="h-7 w-7 text-[#2459ff]" />
            </div>
            <div className="mt-4 flex items-start justify-between gap-2">
              <div>
                <p className="text-xs font-semibold">{name}</p>
                <p className="mt-1 text-[9px] text-black/38">{service}</p>
              </div>
              {verified && <BadgeCheck className="h-4 w-4 shrink-0 text-[#2459ff]" />}
            </div>
            <div className="mt-4 flex items-center justify-between text-[10px]">
              <span>★ {rating}</span>
              <span className="font-semibold">from {price}</span>
            </div>
            <div className="mt-3 border-t border-black/8 pt-3 text-[9px] text-black/40">Replies in under 2 hours · Support included</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ProviderView({ compact }: { compact: boolean }) {
  return (
    <div>
      <ScreenHeader eyebrow="Provider profile" title="Berlin Arrival Co." action="Start booking" />
      <div className="mt-5 grid gap-3 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-lg border border-black/10 bg-white p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#edf2ff] text-[#2459ff]"><Home className="h-5 w-5" /></div>
            <div>
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold">Visa + city setup</p>
                <BadgeCheck className="h-4 w-4 text-[#2459ff]" />
              </div>
              <p className="mt-1 text-[10px] text-black/40">4.9 from 128 reviews · responds in 1h</p>
            </div>
          </div>
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {["Document review", "Appointment support", "Registration setup", "30-day message support"].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-md bg-[#f5f7fb] p-3 text-[10px]">
                <Check className="h-3.5 w-3.5 text-[#1f8a45]" />
                {item}
              </div>
            ))}
          </div>
          {!compact && <p className="mt-5 text-[10px] leading-5 text-black/48">Clear exclusions, cancellation terms, and evidence requirements are shown before checkout.</p>}
        </div>
        <div className="rounded-lg bg-[#161613] p-5 text-white">
          <p className="text-[10px] font-semibold uppercase text-white/44">Booking summary</p>
          <p className="mt-4 text-3xl font-semibold">€690</p>
          <p className="mt-1 text-[10px] text-white/42">Fixed scope · taxes included</p>
          <div className="mt-5 space-y-2 text-[10px] text-white/64">
            <div className="flex justify-between"><span>Status</span><span className="text-[#a6efb7]">Available</span></div>
            <div className="flex justify-between"><span>Payment</span><span>Protected</span></div>
            <div className="flex justify-between"><span>Support</span><span>Dispute path</span></div>
          </div>
          <button type="button" className="mt-5 w-full rounded-md bg-white px-4 py-3 text-[10px] font-semibold text-black">Request booking</button>
          <div className="mt-3 flex items-center justify-center gap-2 text-[9px] text-white/40"><ShieldCheck className="h-3.5 w-3.5" />Prototype trust state</div>
        </div>
      </div>
    </div>
  );
}

function ProjectSnapshot({ project }: { project: Project }) {
  const details = [
    [
      "Challenge",
      "Connected relocation decisions were being managed through disconnected tools, people, and systems.",
    ],
    [
      "My contribution",
      "Discovery synthesis, product framing, journey mapping, actor modelling, product architecture, IA, prioritization, interaction direction, UX writing, coded prototyping, and design QA.",
    ],
    [
      "Research basis",
      "Statement of Work, current-state journey mapping, existing-prototype review, code and route analysis, edge-case exploration, and product reasoning.",
    ],
    [
      "Outcome",
      "A shared relocation-case model, five connected portal experiences, an MVP priority framework, a trust model, and a functional browser-based prototype.",
    ],
    [
      "Research maturity",
      "Primary user interviews and usability validation were not included in this phase. User needs and stories were treated as hypotheses.",
    ],
  ] as const;

  return (
    <div className="overflow-hidden border border-black/10 bg-white shadow-[0_26px_70px_-50px_rgba(22,22,19,0.45)]">
      <div className="flex flex-col justify-between gap-4 border-b border-black/10 px-6 py-5 sm:flex-row sm:items-center">
        <p className="text-sm font-semibold">Product Design Case Study - UX Strategy and Functional Prototype</p>
        <p className="text-xs font-semibold uppercase text-black/42">{project.year} · {project.duration}</p>
      </div>
      <div className="grid gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-5">
        {details.map(([label, body], index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.06, ease }}
            className="min-h-56 bg-white p-5 sm:p-6"
          >
            <p className="text-[10px] font-semibold uppercase text-[#2459ff]">0{index + 1} · {label}</p>
            <p className="mt-6 text-sm leading-6 text-black/64">{body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function SharedCaseDecision() {
  return (
    <div>
      <SystemModel />
      <div className="mt-7 grid gap-3 lg:grid-cols-2">
        <DecisionTradeoff
          label="What this improved"
          title="One coherent plan"
          body="Jobs, documents, finance, family, services, employer support, and operations update one case instead of separate product modules."
          tone="bg-[#e9f7df]"
        />
        <DecisionTradeoff
          label="What it introduced"
          title="Real platform complexity"
          body="Identity, permissions, cross-portal updates, audit history, sensitive data, and agreement on what each actor can see or change."
          tone="bg-[#fff2d6]"
        />
      </div>
    </div>
  );
}

function PortalResponsibilities() {
  const values = [
    ["Shared case", "One understandable plan", "A common structure across product surfaces"],
    ["Sponsorship-aware data", "Fewer irrelevant opportunities", "More relocation-ready candidate journeys"],
    ["Policy-to-plan", "Clear company support", "More consistent corporate governance"],
    ["Provider verification", "Greater confidence before booking", "Better marketplace quality control"],
    ["Visible ownership", "Clearer next steps", "Fewer ambiguous handoffs"],
  ] as const;

  return (
    <div>
      <div className="relative border border-black/10 bg-white p-4 sm:p-6">
        <div className="mx-auto flex max-w-sm items-center justify-center gap-3 border border-[#2459ff]/24 bg-[#edf2ff] px-4 py-3 text-center">
          <Network className="h-4 w-4 text-[#2459ff]" />
          <p className="text-sm font-semibold">One shared relocation case</p>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {actors.map((actor, index) => (
            <PortalResponsibilityCard key={actor.title} actor={actor} index={index} />
          ))}
        </div>
      </div>

      <div className="mt-7">
        <p className="text-sm font-semibold">Meaningful handoffs update the consumer case</p>
        <div className="mt-4"><HandoffGrid /></div>
      </div>

      <div className="mt-7 overflow-hidden border border-black/10 bg-white">
        <div className="grid gap-3 border-b border-black/10 bg-[#f7f7f2] px-5 py-4 text-[10px] font-semibold uppercase text-black/40 lg:grid-cols-[0.7fr_1fr_1.15fr]">
          <p>Decision</p>
          <p>User value</p>
          <p>Platform value hypothesis</p>
        </div>
        {values.map(([decision, userValue, platformValue]) => (
          <div key={decision} className="grid gap-3 border-b border-black/8 px-5 py-4 last:border-0 lg:grid-cols-[0.7fr_1fr_1.15fr]">
            <p className="text-sm font-semibold">{decision}</p>
            <p className="text-sm leading-6 text-black/62">{userValue}</p>
            <p className="text-sm leading-6 text-black/48">{platformValue}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PortalResponsibilityCard({ actor, index }: { actor: (typeof actors)[number]; index: number }) {
  const Icon = actor.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06, ease }}
      className={`min-h-48 border border-black/8 p-4 ${actor.tone}`}
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white/80 text-[#2459ff]">
        <Icon className="h-4 w-4" />
      </div>
      <p className="mt-6 text-sm font-semibold">{actor.title}</p>
      <p className="mt-2 text-xs leading-5 text-black/58">{actor.responsibility}</p>
    </motion.div>
  );
}

function ConnectedModulesBoard() {
  const screens: Array<[ProductView, string, string]> = [
    ["Family", "Family", "Adding a child updates school, housing, documents, insurance, and expected costs."],
    ["Documents", "Documents", "A missing dependent document becomes a timeline blocker, not a disconnected upload task."],
    ["Finance", "Finance", "Employer support is compared against the household's actual setup cost and recurring expenses."],
  ];

  return (
    <div>
      <div className="grid gap-5 lg:grid-cols-3">
        {screens.map(([view, label, body], index) => (
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: index * 0.08, ease }}
          >
            <ProductBrowser view={view} compact />
            <ScreenCaption number={`0${index + 1}`} title={label} body={body} />
          </motion.div>
        ))}
      </div>
      <div className="mt-7 grid gap-3 lg:grid-cols-2">
        <DecisionTradeoff
          label="Product decision"
          title="Household context changes the same relocation case"
          body="Family, documents, and finance are connected parts of the plan rather than separate feature pages with independent logic."
          tone="bg-[#edf2ff]"
        />
        <DecisionTradeoff
          label="Trade-off"
          title="More realistic, more shared rules"
          body="This requires shared data models, dependency logic, and ownership rules across several modules and portals."
          tone="bg-[#fff5ef]"
        />
      </div>
    </div>
  );
}

function ScreenCaption({ number, title, body }: { number: string; title: string; body: string }) {
  return (
    <div className="mt-5 border-l-2 border-[#2459ff] pl-4">
      <p className="text-[10px] font-semibold uppercase text-[#2459ff]">{number}</p>
      <p className="mt-2 text-base font-semibold">{title}</p>
      <p className="mt-2 text-sm leading-6 text-black/56">{body}</p>
    </div>
  );
}

function DecisionTradeoff({
  label,
  title,
  body,
  tone,
}: {
  label: string;
  title: string;
  body: string;
  tone: string;
}) {
  return (
    <div className={`border border-black/10 p-5 sm:p-6 ${tone}`}>
      <p className="text-[10px] font-semibold uppercase text-[#2459ff]">{label}</p>
      <p className="mt-3 text-lg font-semibold leading-tight">{title}</p>
      <p className="mt-3 text-sm leading-6 text-black/60">{body}</p>
    </div>
  );
}

function BeforeDashboardWireframe() {
  return (
    <div className="overflow-hidden border border-dashed border-black/18 bg-[#f7f7f2] p-3">
      <div className="flex items-center gap-1.5 border-b border-black/10 pb-3">
        <span className="h-2 w-2 rounded-full bg-black/16" />
        <span className="h-2 w-2 rounded-full bg-black/16" />
        <span className="h-2 w-2 rounded-full bg-black/16" />
        <div className="ml-2 h-4 flex-1 rounded bg-black/6" />
      </div>
      <p className="mt-4 text-[9px] font-semibold uppercase text-black/38">Everything looks equally important</p>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {["Career", "Documents", "Finance", "Family", "Marketplace", "Culture", "Planning", "Services"].map((item) => (
          <div key={item} className="h-14 rounded border border-black/8 bg-white p-2">
            <div className="h-1.5 w-2/3 rounded bg-black/16" />
            <p className="mt-3 text-[8px] text-black/40">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdminTrustPreview() {
  const rows = [
    ["Provider verification", "Confirmed", "bg-[#e9f7df] text-[#1f7a3c]"],
    ["Booking payment", "Escrow held", "bg-[#edf2ff] text-[#2459ff]"],
    ["Support request", "Response due in 4h", "bg-[#fff2d6] text-[#8c5a00]"],
    ["Audit history", "11 events", "bg-[#f3f4f6] text-black/58"],
  ] as const;

  return (
    <div className="min-h-[430px] overflow-hidden border border-[#d8deea] bg-white shadow-[0_28px_70px_-38px_rgba(22,22,19,0.36)]">
      <div className="flex h-11 items-center justify-between border-b border-black/10 bg-[#f7f7f2] px-4">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff6846]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#f2c94c]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#5fc777]" />
        </div>
        <p className="text-[10px] text-black/38">ops.glimmora.app/trust</p>
        <ShieldCheck className="h-4 w-4 text-[#2459ff]" />
      </div>
      <div className="bg-[#f5f7fb] p-5 sm:p-6">
        <p className="text-[10px] font-semibold uppercase text-[#2459ff]">Admin operations</p>
        <h3 className="mt-2 text-xl font-semibold">Trust controls for Berlin Arrival Co.</h3>
        <div className="mt-6 space-y-3">
          {rows.map(([label, value, tone]) => (
            <div key={label} className="flex items-center justify-between gap-3 border border-black/8 bg-white p-3">
              <p className="text-[11px] font-semibold">{label}</p>
              <span className={`shrink-0 px-2 py-1 text-[9px] font-semibold ${tone}`}>{value}</span>
            </div>
          ))}
        </div>
        <div className="mt-5 border-l-2 border-[#ff6846] bg-[#fff8f4] p-4">
          <p className="text-[10px] font-semibold uppercase text-[#b53c23]">Open customer issue</p>
          <p className="mt-2 text-xs font-semibold">Clarify scope before payment release</p>
          <p className="mt-2 text-[10px] leading-5 text-black/48">Owner: Trust operations · consumer support remains visible in the booking.</p>
        </div>
      </div>
    </div>
  );
}

function MvpPrioritization() {
  const priorities = [
    [
      "Priority 1",
      "Core coordination",
      ["Onboarding + relocation profile", "Dashboard + personalized plan", "Milestones, owners, blockers", "Family, finance, document requirements", "Marketplace discovery", "Basic employer and corporate inputs"],
      "bg-[#2459ff] text-white",
      "text-[#bfd0ff]",
    ],
    [
      "Priority 2",
      "Trust and accountability",
      ["Employer + provider verification", "Booking states and reviews", "Payments and escrow visibility", "Support, disputes, approvals", "Audit history"],
      "bg-[#e9f7df] text-[#161613]",
      "text-[#1f7a3c]",
    ],
    [
      "Priority 3",
      "Advanced intelligence",
      ["Live AI guidance", "AI-generated plans", "Document validation + secure storage", "Payment automation", "Enterprise permissions + integrations", "Advanced reporting"],
      "bg-white text-[#161613]",
      "text-[#2459ff]",
    ],
  ] as const;

  return (
    <div>
      <div className="grid gap-3 lg:grid-cols-3">
        {priorities.map(([priority, title, items, tone, accent], index) => (
          <motion.div
            key={priority}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.08, ease }}
            className={`min-h-[460px] border border-black/10 p-6 sm:p-7 ${tone}`}
          >
            <p className={`text-[10px] font-semibold uppercase ${accent}`}>{priority}</p>
            <p className="mt-4 text-2xl font-semibold leading-tight">{title}</p>
            <div className="mt-8 space-y-3">
              {items.map((item) => (
                <div key={item} className="flex gap-3 border-t border-current/15 pt-3 text-sm leading-6">
                  <Check className={`mt-1 h-4 w-4 shrink-0 ${accent}`} />
                  <span className={priority === "Priority 1" ? "text-white/76" : "text-black/62"}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-7 grid gap-3 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="border border-black/10 bg-white p-6">
          <p className="text-[10px] font-semibold uppercase text-[#b53c23]">What I intentionally did not prioritise first</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Generic AI chat as the main experience",
              "A large relocation-content library",
              "Marketplace scale before provider trust",
              "Advanced integrations before core workflow clarity",
              "Admin automation before auditability",
            ].map((item) => (
              <p key={item} className="border-l-2 border-[#ff6846] pl-3 text-sm leading-6 text-black/58">{item}</p>
            ))}
          </div>
        </div>
        <DecisionTradeoff
          label="Prototype boundary"
          title="Experience intent can precede production infrastructure"
          body="The prototype could demonstrate the intended experience, but production trust depends on backend systems, permissions, payments, governance, and operational workflows."
          tone="bg-[#edf2ff]"
        />
      </div>
    </div>
  );
}

function CodedPrototypeWorkflow() {
  return (
    <div>
      <div className="overflow-x-auto border border-black/10 bg-white p-5 sm:p-7">
        <div className="flex min-w-[950px] items-start">
          {workflow.map(([Icon, label], index) => (
            <div key={label} className="flex flex-1 items-start">
              <div className="w-full text-center">
                <div className={`mx-auto flex h-11 w-11 items-center justify-center rounded-full ${index === 3 ? "bg-[#2459ff] text-white" : "bg-[#edf2ff] text-[#2459ff]"}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <p className="mx-auto mt-3 max-w-28 text-xs font-semibold leading-5">{label}</p>
              </div>
              {index < workflow.length - 1 && <div className="mt-5 h-px w-7 shrink-0 bg-[#2459ff]/30" />}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-7 grid gap-4 lg:grid-cols-[0.62fr_0.72fr_0.9fr_1.55fr] lg:items-start">
        <div className="border border-black/10 bg-white p-5">
          <p className="text-[10px] font-semibold uppercase text-[#2459ff]">01 · Product requirement</p>
          <p className="mt-5 text-base font-semibold leading-7">Help a person understand what needs attention without turning the dashboard into a feature directory.</p>
        </div>
        <div className="border border-black/10 bg-[#f7f7f2] p-5">
          <p className="text-[10px] font-semibold uppercase text-[#2459ff]">02 · Claude Code instruction</p>
          <p className="mt-5 text-sm leading-6 text-black/62">"Prioritize the user's next action, current blocker, task owner, and upcoming milestone. Do not give every module equal visual weight."</p>
        </div>
        <div className="border border-black/10 bg-white p-4">
          <p className="text-[10px] font-semibold uppercase text-[#b53c23]">03 · Initial browser output</p>
          <div className="mt-4"><BeforeDashboardWireframe /></div>
        </div>
        <div>
          <p className="mb-3 text-[10px] font-semibold uppercase text-[#2459ff]">04 · Refined final screen</p>
          <ProductBrowser view="Dashboard" compact />
        </div>
      </div>

      <div className="mt-7 grid gap-3 lg:grid-cols-[0.55fr_1.45fr]">
        <div className="border border-[#2459ff]/20 bg-[#2459ff] p-6 text-white">
          <p className="text-[10px] font-semibold uppercase text-[#bfd0ff]">AI-assisted coded prototyping</p>
          <p className="mt-4 text-2xl font-semibold leading-tight">Product judgement remained designer-led.</p>
        </div>
        <div className="border border-black/10 bg-white p-6">
          <p className="text-sm leading-7 text-black/64">Claude Code accelerated component implementation, route creation, multi-file changes, debugging, and refactoring. I remained responsible for the product model, information hierarchy, interaction logic, UX writing, prioritization, acceptance criteria, and final design quality.</p>
        </div>
      </div>
    </div>
  );
}

function ConsumerExperience() {
  const screens: Array<[ProductView, string, string]> = [
    ["Dashboard", "Dashboard", "Prioritizes the next decision rather than exposing every module equally."],
    ["My Plan", "My Plan", "Shows milestones, owners, blockers, dependencies, and deadlines rather than a flat checklist."],
    ["Documents", "Documents", "Connects each document to a household member, requirement, expiry, and timeline risk."],
    ["Finance", "Finance", "Evaluates salary and employer support against real household and setup costs."],
  ];

  return (
    <div className="grid gap-7 lg:grid-cols-2">
      {screens.map(([view, label, body], index) => (
        <motion.div
          key={view}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: index * 0.06, ease }}
        >
          <ProductBrowser view={view} compact />
          <ScreenCaption number={`0${index + 1}`} title={label} body={body} />
        </motion.div>
      ))}
    </div>
  );
}

function EcosystemExperience() {
  const surfaces: Array<{
    title: string;
    eyebrow: string;
    icon: LucideIcon;
    tone: string;
    status: string;
    fields: string[];
    consequence: string;
  }> = [
    {
      title: "Employer offer",
      eyebrow: "Employer portal",
      icon: BriefcaseBusiness,
      tone: "bg-[#e7efff]",
      status: "Offer accepted",
      fields: ["Salary confirmed", "Sponsorship: pending", "Start date: 16 Sep"],
      consequence: "Consumer finance, visa, and timeline update.",
    },
    {
      title: "Policy approval",
      eyebrow: "Corporate mobility",
      icon: Building2,
      tone: "bg-[#f4ecff]",
      status: "Support approved",
      fields: ["Budget: EUR 6,000", "Housing: covered", "Approval: recorded"],
      consequence: "Covered services appear in the employee plan.",
    },
    {
      title: "Service fulfilment",
      eyebrow: "Partner portal",
      icon: Home,
      tone: "bg-[#fff2d6]",
      status: "Booking accepted",
      fields: ["Scope: visa + city", "Appointment: confirmed", "Status: in progress"],
      consequence: "The relocation journey shows the latest booking state.",
    },
    {
      title: "Trust controls",
      eyebrow: "Admin operations",
      icon: ShieldCheck,
      tone: "bg-[#ffe9e3]",
      status: "Provider verified",
      fields: ["Identity: checked", "Escrow: protected", "Audit: 11 events"],
      consequence: "Verification becomes visible in the marketplace.",
    },
  ];

  return (
    <div>
      <div className="grid gap-5 lg:grid-cols-2">
        {surfaces.map((surface, index) => (
          <PortalSurface key={surface.title} surface={surface} index={index} />
        ))}
      </div>
      <div className="mt-7 border-l-2 border-[#2459ff] bg-white/74 p-5 sm:p-6">
        <p className="text-sm font-semibold">The portals are not differently styled dashboards.</p>
        <p className="mt-3 max-w-4xl text-sm leading-7 text-black/60">Each surface has a narrow responsibility. Its value comes from creating a visible, timely consequence inside the same consumer relocation case.</p>
      </div>
    </div>
  );
}

function PortalSurface({
  surface,
  index,
}: {
  surface: {
    title: string;
    eyebrow: string;
    icon: LucideIcon;
    tone: string;
    status: string;
    fields: string[];
    consequence: string;
  };
  index: number;
}) {
  const Icon = surface.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08, ease }}
      className="overflow-hidden border border-black/10 bg-white shadow-[0_22px_55px_-44px_rgba(22,22,19,0.36)]"
    >
      <div className="flex items-center justify-between border-b border-black/10 bg-[#f7f7f2] px-4 py-3">
        <div className="flex gap-1.5"><span className="h-2 w-2 rounded-full bg-[#ff6846]" /><span className="h-2 w-2 rounded-full bg-[#f2c94c]" /><span className="h-2 w-2 rounded-full bg-[#5fc777]" /></div>
        <p className="text-[10px] text-black/38">glimmora.app/portal</p>
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase text-[#2459ff]">{surface.eyebrow}</p>
            <p className="mt-2 text-xl font-semibold">{surface.title}</p>
          </div>
          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md ${surface.tone} text-[#2459ff]`}><Icon className="h-5 w-5" /></div>
        </div>
        <div className={`mt-6 p-4 ${surface.tone}`}>
          <p className="text-[10px] font-semibold uppercase text-black/42">Current state</p>
          <p className="mt-2 text-sm font-semibold">{surface.status}</p>
        </div>
        <div className="mt-4 grid gap-2 sm:grid-cols-3">
          {surface.fields.map((field) => <p key={field} className="border border-black/8 bg-[#f7f8fb] p-3 text-[10px] font-medium leading-5 text-black/58">{field}</p>)}
        </div>
      </div>
      <div className="border-t border-[#2459ff]/16 bg-[#edf2ff] px-5 py-4">
        <p className="text-[10px] font-semibold uppercase text-[#2459ff]">Consumer consequence</p>
        <p className="mt-2 text-sm font-semibold text-black/72">{surface.consequence}</p>
      </div>
    </motion.div>
  );
}

function OutcomeValidation() {
  const established = [
    "A product model across five actor groups",
    "A consumer experience centred on next actions",
    "Cross-portal responsibility boundaries",
    "Connected family, finance, and document logic",
    "A trust and accountability model",
    "An MVP prioritization framework",
    "A functional coded prototype",
    "A separation between interface intent and production infrastructure",
  ];
  const measures = [
    ["Time to first useful plan", "Whether onboarding creates value quickly"],
    ["Next-action comprehension", "Whether the dashboard provides orientation"],
    ["Ownership comprehension", "Whether handoffs are understandable"],
    ["Early blocker detection", "Whether the plan reduces timeline risk"],
    ["Offer-evaluation completion", "Whether users can judge relocation feasibility"],
    ["Provider trust + booking behaviour", "Whether trust information supports decisions"],
    ["Support + dispute patterns", "Where expectations remain unclear"],
  ] as const;

  return (
    <div>
      <div className="grid gap-3 lg:grid-cols-2">
        <div className="border border-white/16 bg-white/[0.06] p-6 sm:p-7">
          <p className="text-[10px] font-semibold uppercase text-[#bfd0ff]">What changed</p>
          <p className="mt-5 text-2xl font-semibold leading-tight">Glimmora moved from a broad collection of relocation features toward a coherent system centred on one shared relocation case.</p>
        </div>
        <div className="border border-white/16 bg-white/[0.06] p-6 sm:p-7">
          <p className="text-[10px] font-semibold uppercase text-[#bfd0ff]">What remains unproven</p>
          <p className="mt-5 text-base leading-7 text-white/72">User comprehension, usability with real relocating households, production feasibility of cross-portal handoffs, marketplace trust behaviour, business impact, and the accuracy and safety of contextual AI guidance.</p>
        </div>
      </div>

      <div className="mt-6 grid gap-3 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="border border-white/16 bg-white/[0.05] p-6 sm:p-7">
          <p className="text-[10px] font-semibold uppercase text-[#bfd0ff]">What the work established</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {established.map((item) => (
              <div key={item} className="flex gap-3 border-t border-white/14 pt-3 text-sm leading-6 text-white/76">
                <Check className="mt-1 h-4 w-4 shrink-0 text-[#bfd0ff]" />
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="border border-white/16 bg-white p-5 text-[#161613] sm:p-6">
          <p className="text-[10px] font-semibold uppercase text-[#2459ff]">Proposed measures, not current results</p>
          <div className="mt-5 space-y-3">
            {measures.map(([signal, test]) => (
              <div key={signal} className="border-b border-black/8 pb-3 last:border-0">
                <p className="text-xs font-semibold">{signal}</p>
                <p className="mt-1 text-[11px] leading-5 text-black/52">{test}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-8 border-t border-white/18 pt-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-end">
        <div>
          <p className="max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">The most important design decision was not adding another relocation feature.</p>
          <p className="mt-6 max-w-xl text-2xl font-semibold leading-tight text-[#bfd0ff]">It was connecting every decision around one question: What does this person need in order to move forward with confidence?</p>
          <p className="mt-8 text-xs font-semibold uppercase leading-6 text-white/56">Product Strategy · UX Architecture · Interaction Design · AI-Assisted Coded Prototyping</p>
        </div>
        <div className="bg-white p-2 text-[#161613] sm:p-3">
          <ProductBrowser view="Dashboard" compact />
        </div>
      </div>
    </div>
  );
}

function ProjectNavigation({ prevProject, nextProject }: { prevProject: Project | null; nextProject: Project | null }) {
  return (
    <section className="border-t border-black/10 bg-[#f8f6ef]">
      <div className="mx-auto max-w-[1600px] px-5 py-8 sm:px-8 lg:px-14">
        <div className="mx-auto flex max-w-[1420px] flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-xs font-semibold uppercase text-black/40">End of Glimmora Relocate</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/work" className="group inline-flex items-center gap-3 border border-black/12 bg-white px-4 py-3 text-sm font-semibold transition-colors hover:border-[#2459ff] hover:text-[#2459ff]">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              All work
            </Link>
            {nextProject ? (
              <Link href={`/work/${nextProject.id}`} className="group inline-flex items-center gap-3 bg-[#2459ff] px-4 py-3 text-sm font-semibold text-white">
                Next project: {nextProject.title}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            ) : prevProject ? (
              <Link href={`/work/${prevProject.id}`} className="group inline-flex items-center gap-3 bg-[#2459ff] px-4 py-3 text-sm font-semibold text-white">
                Previous project: {prevProject.title}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
