"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  Search,
  Workflow,
  PenTool,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { ScrollReveal, Magnetic, AnimatedCounter } from "@/components/animations";
import { Silver } from "@/components/ui/silver";

/* ------------------------------------------------------------------ *
 *  data (from résumé)
 * ------------------------------------------------------------------ */
const stats = [
  { v: 3, s: "+", l: "Years in enterprise" },
  { v: 6, s: "", l: "Shipped in code" },
  { v: 6, s: "", l: "Regulated domains" },
  { v: 5, s: "", l: "Platforms designed" },
];

const capabilities = [
  {
    n: "01",
    k: "Strategy & Discovery",
    icon: Search,
    items: [
      "Product discovery",
      "Domain & SOW research",
      "Competitive analysis",
      "Problem framing",
      "Prioritisation",
    ],
  },
  {
    n: "02",
    k: "UX Architecture",
    icon: Workflow,
    items: [
      "Personas & role mapping",
      "Information architecture",
      "User journeys",
      "Task & workflow mapping",
      "Edge & error states",
    ],
  },
  {
    n: "03",
    k: "Interaction & Interface",
    icon: PenTool,
    items: [
      "Wireframing",
      "Interaction & visual design",
      "Dashboards, tables & forms",
      "Design systems",
      "UX writing",
    ],
  },
  {
    n: "04",
    k: "Validation & Delivery",
    icon: ShieldCheck,
    items: [
      "Usability testing",
      "Heuristic evaluation",
      "Developer handoff",
      "Design QA",
      "Implementation review",
    ],
  },
  {
    n: "05",
    k: "AI-Assisted Workflow",
    icon: Sparkles,
    items: [
      "Claude Code",
      "Agents & subagents",
      "Model Context Protocol",
      "Structured prompting",
      "Coded prototyping",
    ],
  },
];

const experience = [
  {
    role: "Product Designer",
    company: "Glimmora International",
    mono: "G",
    period: "Oct 2024 — Present",
    place: "Doha, Qatar · Remote",
    desc: "Own research-led design end to end across GRC, compliance, SAP lifecycle, tax administration and relocation. Led the migration of a live enterprise GRC application from Mendix to Next.js without disrupting operations.",
    tags: ["GRC", "SAP", "Tax", "Relocation"],
  },
  {
    role: "UI/UX Designer",
    company: "BIS Technology",
    mono: "B",
    period: "Apr — Oct 2024",
    place: "United Arab Emirates · Remote",
    desc: "Designed enterprise ERP interfaces for data-heavy operational workflows, prioritising scanability and task efficiency over visual novelty.",
    tags: ["ERP", "Enterprise", "Data-heavy"],
  },
  {
    role: "UI/UX Designer",
    company: "Digimeta",
    mono: "D",
    period: "Jan 2023 — Apr 2024",
    place: "Bangalore, India · On-site",
    desc: "Led end-to-end design for two launched consumer products — Pocket (donations) and Flaimed (dating) — from ideation through post-launch refinement.",
    tags: ["Pocket", "Flaimed", "Consumer", "0→launch"],
  },
];

const tools = [
  "Figma",
  "FigJam",
  "Adobe XD",
  "Photoshop",
  "Illustrator",
  "After Effects",
  "Miro",
  "HTML",
  "CSS",
  "Tailwind",
  "Next.js",
  "GitHub",
];

/* ---------------- reveal ---------------- */
const parent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const child: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

/* eslint-disable @next/next/no-img-element */
export default function AboutPage() {
  return (
    <div className="bg-neutral-950 pt-px text-white">
      <div className="grain" />

      {/* ===================== HERO — cinematic ===================== */}
      <section className="relative min-h-[92vh] w-full overflow-hidden">
        <motion.img
          src="/hero-portrait.png"
          alt=""
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 h-full w-full object-cover object-[30%_center]"
        />
        {/* scrims for legibility */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-neutral-950/25 via-neutral-950/50 to-neutral-950" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/10 to-neutral-950/40" />

        {/* availability */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="absolute left-6 top-28 z-10 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-black/30 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-200 backdrop-blur md:left-8 md:top-32"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          Available 2026 · India
        </motion.div>

        {/* content */}
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-6 pb-20 md:items-center md:pb-0 lg:px-8">
          <motion.div
            variants={parent}
            initial="hidden"
            animate="show"
            className="w-full max-w-xl md:ml-auto md:pl-8"
          >
            <motion.span
              variants={child}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-300 backdrop-blur-sm"
            >
              About — Kavi Prasath
            </motion.span>

            <motion.h1
              variants={child}
              className="mt-6 text-[clamp(2.4rem,5.5vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.03em]"
            >
              I design the <span className="text-shine">regulated edge</span> of
              enterprise software.
            </motion.h1>

            <motion.p
              variants={child}
              className="mt-5 font-mono text-sm uppercase tracking-[0.18em] text-neutral-400"
            >
              Product Designer · Enterprise SaaS, GRC & Regulated Workflows
            </motion.p>

            <motion.p
              variants={child}
              className="mt-6 max-w-md text-lg leading-relaxed text-neutral-300"
            >
              3+ years turning multi-role, high-stakes systems — governance, tax, SAP,
              ERP — into software people can actually operate, and shipping them as
              working <span className="text-white">Next.js front-ends</span>.
            </motion.p>

            <motion.div variants={child} className="mt-9 flex flex-wrap gap-3">
              <Magnetic strength={0.2}>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-105 active:scale-95"
                >
                  Let&apos;s work together
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Magnetic>
              <a
                href="/Kavi_Prasath_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/5"
              >
                <Download className="h-4 w-4" />
                Résumé
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500"
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            Scroll ↓
          </motion.span>
        </motion.div>
      </section>

      {/* ===================== STATS ===================== */}
      <section className="border-t border-white/10 py-14 md:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 sm:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <ScrollReveal key={s.l}>
              <div>
                <p className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-none tracking-tight">
                  <span className="text-shine">
                    <AnimatedCounter value={s.v} suffix={s.s} />
                  </span>
                </p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500">
                  {s.l}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ===================== HOW I WORK ===================== */}
      <section className="border-t border-white/10 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-12 max-w-2xl">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
                ( How I work )
              </p>
              <h2 className="text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.05] tracking-tight">
                <Silver>Discovery to delivery</Silver>
                <span className="text-white/40"> — and, where it counts, into code.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
            {capabilities.map((c, i) => (
              <ScrollReveal key={c.k} delay={i * 0.05}>
                <div className="group grid grid-cols-1 gap-x-10 gap-y-4 py-9 transition-colors md:grid-cols-12 md:items-baseline md:py-11">
                  <div className="flex items-baseline gap-5 md:col-span-6">
                    <span className="text-[clamp(1.6rem,3.4vw,2.6rem)] font-semibold leading-none text-shine">
                      {c.n}
                    </span>
                    <div className="flex items-center gap-3">
                      <c.icon className="h-5 w-5 shrink-0 text-white/45 transition-colors group-hover:text-white" />
                      <h3 className="text-[clamp(1.5rem,2.5vw,2.15rem)] font-semibold tracking-tight text-white">
                        {c.k}
                      </h3>
                    </div>
                  </div>
                  <p className="text-[15px] leading-relaxed text-neutral-400 md:col-span-6 md:pt-1.5">
                    {c.items.join("  ·  ")}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== EXPERIENCE ===================== */}
      <section className="border-t border-white/10 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-14 max-w-2xl">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
                ( Experience )
              </p>
              <h2 className="text-[clamp(2rem,5vw,3.25rem)] font-semibold tracking-tight">
                <Silver>Where I&apos;ve worked</Silver>
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
            {experience.map((e, i) => (
              <ScrollReveal key={e.company} delay={i * 0.06}>
                <div className="grid grid-cols-1 gap-x-10 gap-y-5 py-10 md:grid-cols-12 md:py-12">
                  <div className="md:col-span-3">
                    <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-neutral-300">
                      {e.period}
                    </p>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-neutral-600">
                      {e.place}
                    </p>
                  </div>
                  <div className="md:col-span-9">
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <h3 className="text-[clamp(1.6rem,2.8vw,2.4rem)] font-semibold tracking-tight">
                        <Silver>{e.company}</Silver>
                      </h3>
                      <span className="text-sm text-neutral-400">{e.role}</span>
                    </div>
                    <p className="mt-3 max-w-2xl leading-relaxed text-neutral-400">
                      {e.desc}
                    </p>
                    <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.15em] text-neutral-600">
                      {e.tags.join("  ·  ")}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* education */}
          <ScrollReveal delay={0.1}>
            <div className="mt-20 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-neutral-400 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-2 md:mt-28">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                Education
              </span>
              <span>
                <span className="text-white">B.Sc. Design &amp; Visual Communications</span>{" "}
                — Dr. G.R. Damodaran College, Coimbatore · 2019–2022
              </span>
              <span>
                <span className="text-white">UX Designer Program</span> — Designerrs
                Academy, Bangalore · 2022
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===================== TOOLBOX ===================== */}
      <section className="border-t border-white/10 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                Toolbox
              </span>
              {tools.map((t) => (
                <span
                  key={t}
                  className="text-sm text-neutral-300 transition-colors hover:text-white"
                >
                  {t}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="px-6 py-24 md:py-32 lg:px-8">
        <ScrollReveal>
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-10 text-center md:p-16 lg:p-20">
            <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(200,205,220,0.12),transparent_65%)] blur-3xl" />
            <div className="relative">
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.02] tracking-tight">
                <Silver>Let&apos;s build something worth shipping.</Silver>
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-lg text-neutral-400">
                Open to product design roles and select freelance — especially
                regulated, high-stakes enterprise work.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <Magnetic strength={0.2}>
                  <a
                    href="mailto:kaviprasanth666@gmail.com"
                    className="inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-transform hover:scale-105 active:scale-95"
                  >
                    kaviprasanth666@gmail.com
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Magnetic>
                <a
                  href="https://www.behance.net/kaviprasath"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-white/5"
                >
                  View Behance
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
