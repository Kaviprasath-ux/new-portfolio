"use client";

import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  Variants,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  PenTool,
  Workflow,
  Code2,
  Frame,
} from "lucide-react";
import { ScrollReveal, Magnetic, AnimatedCounter } from "@/components/animations";
import { Silver } from "@/components/ui/silver";
import { ConfidentialCover } from "@/components/ui/confidential-cover";

/* ------------------------------------------------------------------ *
 *  data
 * ------------------------------------------------------------------ */
const domains = ["GovTech", "FinTech", "GRC", "Tax", "SAP", "ERP", "Ships in code"];

type Work = {
  n: string;
  title: string;
  category: string;
  year: string;
  image: string;
  href: string;
  external: boolean;
  confidential?: boolean;
};

const work: Work[] = [
  {
    n: "01",
    title: "Bahrain Tax Platform",
    category: "GovTech · Corporate & WHT",
    year: "2025",
    image: "/projects/bahrain-tax-platform/portal-dashboard.png",
    href: "/work/bahrain-tax-platform",
    external: false,
  },
  {
    n: "02",
    title: "Enterprise GRC Migration",
    category: "GRC · Mendix → Next.js",
    year: "2025",
    image: "",
    href: "/work/enterprise-grc-migration",
    external: false,
    confidential: true,
  },
  {
    n: "03",
    title: "Glimmora Aether",
    category: "SAP Lifecycle · 6 roles",
    year: "2025",
    image: "",
    href: "/work/glimmora-aether",
    external: false,
    confidential: true,
  },
  {
    n: "04",
    title: "Pocket — Charitable Giving",
    category: "FinTech · 220+ screens",
    year: "2023",
    image: "/projects/pocket-giving/cover.png",
    href: "/work/pocket-giving",
    external: false,
  },
];

const capabilities = [
  {
    icon: PenTool,
    t: "Product Design",
    d: "Discovery, flows, and interface design for complex enterprise SaaS — from zero to launch.",
  },
  {
    icon: Workflow,
    t: "UX Architecture",
    d: "Roles, permissions, information architecture, and the regulatory edge cases most teams avoid.",
  },
  {
    icon: Code2,
    t: "Design → Code",
    d: "Production Next.js front-ends built with AI tooling — working software, not static handoffs.",
  },
];

const stats = [
  { v: 3, s: "+", l: "Years in enterprise" },
  { v: 6, s: "", l: "Shipped in code" },
  { v: 6, s: "", l: "Regulated domains" },
  { v: 5, s: "", l: "Platforms designed" },
];

/* ------------------------------------------------------------------ *
 *  mask-reveal helpers
 * ------------------------------------------------------------------ */
const revealParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};
const revealLine: Variants = {
  hidden: { y: "115%" },
  show: { y: "0%", transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};
function MaskLine({ children }: { children: React.ReactNode }) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span variants={revealLine} className="block">
        {children}
      </motion.span>
    </span>
  );
}

/* ------------------------------------------------------------------ *
 *  Selected work — image-forward bento gallery
 * ------------------------------------------------------------------ */
/* eslint-disable @next/next/no-img-element */
function WorkCard({ w, big }: { w: Work; big?: boolean }) {
  const Anchor: React.ElementType = w.external ? "a" : Link;
  const props = w.external
    ? { href: w.href, target: "_blank", rel: "noopener noreferrer" }
    : { href: w.href };

  return (
    <Anchor
      {...props}
      className="group relative block h-[360px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-neutral-900 sm:h-[440px] lg:h-[540px]"
    >
      {/* cover */}
      {w.confidential ? (
        <ConfidentialCover className="transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]" />
      ) : (
        <img
          src={w.image}
          alt={w.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
        />
      )}
      {/* legibility gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/25 to-neutral-950/50 transition-opacity duration-500 group-hover:from-neutral-950 group-hover:via-neutral-950/10" />

      {/* frame chrome — top */}
      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 md:p-6">
        <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
          {w.n}
        </span>
        <span className="flex items-center gap-1.5 rounded-full border border-white/15 bg-black/30 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
          {w.confidential ? "Confidential" : w.external ? "Behance ↗" : "Case study"}
        </span>
      </div>

      {/* bottom */}
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <p className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400">
          {w.category} · {w.year}
        </p>
        <div className="flex items-end justify-between gap-4">
          <h3
            className={`font-semibold leading-[1.02] tracking-tight ${
              big
                ? "text-[clamp(1.9rem,3.4vw,3rem)]"
                : "text-[clamp(1.6rem,2.6vw,2.25rem)]"
            }`}
          >
            <Silver>{w.title}</Silver>
          </h3>
          <span className="mb-1 flex h-12 w-12 shrink-0 translate-y-2 items-center justify-center rounded-full border border-white/25 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:border-white group-hover:bg-white group-hover:text-black group-hover:opacity-100">
            {w.external ? (
              <ArrowUpRight className="h-5 w-5" />
            ) : (
              <ArrowRight className="h-5 w-5" />
            )}
          </span>
        </div>
      </div>
    </Anchor>
  );
}

function WorkGallery() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid gap-4 md:gap-6">
        <div className="grid gap-4 md:gap-6 lg:grid-cols-[1.4fr_1fr]">
          <ScrollReveal>
            <WorkCard w={work[0]} big />
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <WorkCard w={work[1]} />
          </ScrollReveal>
        </div>
        <div className="grid gap-4 md:gap-6 lg:grid-cols-[1fr_1.4fr]">
          <ScrollReveal>
            <WorkCard w={work[2]} />
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <WorkCard w={work[3]} big />
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 *  Creative hero — your name as a "selected layer" on a design canvas
 * ------------------------------------------------------------------ */
function Anno({
  className,
  side,
  label,
  value,
  hasDot,
  delay,
}: {
  className: string;
  side: "left" | "right";
  label: string;
  value: string;
  hasDot?: boolean;
  delay: number;
}) {
  const line = (
    <motion.span
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ delay: delay + 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`h-px w-12 shrink-0 bg-gradient-to-r from-white/10 to-white/45 xl:w-16 ${
        side === "left" ? "origin-left" : "origin-right"
      }`}
    />
  );
  const dot = <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />;
  const chip = (
    <div className="whitespace-nowrap rounded-lg border border-white/12 bg-white/[0.04] px-3 py-2 backdrop-blur-sm">
      <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-500">
        {hasDot && (
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
        )}
        {label}
      </span>
      <span className="mt-0.5 block text-xs font-medium text-white/90">{value}</span>
    </div>
  );
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
      className={`absolute flex items-center gap-2 ${className}`}
    >
      {side === "left" ? (
        <>
          {chip}
          {line}
          {dot}
        </>
      ) : (
        <>
          {dot}
          {line}
          {chip}
        </>
      )}
    </motion.div>
  );
}

const HANDLES = [
  "left-0 top-0 -translate-x-1/2 -translate-y-1/2",
  "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2",
  "right-0 top-0 translate-x-1/2 -translate-y-1/2",
  "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2",
  "right-0 top-1/2 translate-x-1/2 -translate-y-1/2",
  "left-0 bottom-0 -translate-x-1/2 translate-y-1/2",
  "left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2",
  "right-0 bottom-0 translate-x-1/2 translate-y-1/2",
];

function HeroCanvas() {
  const bxr = useMotionValue(0);
  const byr = useMotionValue(0);
  const cxr = useMotionValue(0);
  const cyr = useMotionValue(0);
  const cfg = { stiffness: 120, damping: 18, mass: 0.4 };
  const bx = useSpring(bxr, cfg);
  const by = useSpring(byr, cfg);
  const cx = useSpring(cxr, cfg);
  const cy = useSpring(cyr, cfg);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const nx = e.clientX / window.innerWidth - 0.5;
    const ny = e.clientY / window.innerHeight - 0.5;
    bxr.set(nx * 10);
    byr.set(ny * 10);
    cxr.set(nx * -26);
    cyr.set(ny * -26);
  };

  return (
    <section
      onMouseMove={onMove}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* backdrop */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[920px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(190,198,220,0.13),transparent_65%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-dot-pattern bg-dot-lg opacity-[0.05] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      {/* dashed canvas guides */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 origin-center bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.13)_0_6px,transparent_6px_12px)] lg:block"
      />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 origin-center bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.13)_0_6px,transparent_6px_12px)] lg:block"
      />

      {/* annotation chips (desktop) — parallax layer */}
      <motion.div
        style={{ x: cx, y: cy }}
        className="pointer-events-none absolute inset-0 z-20 hidden lg:block"
      >
        <Anno className="left-[6%] top-[27%]" side="left" label="Focus" value="GRC · Tax · SAP · ERP" delay={1.15} />
        <Anno className="left-[9%] top-[64%]" side="left" label="Based" value="India · Remote-first" delay={1.32} />
        <Anno className="right-[6%] top-[26%]" side="right" label="Status" value="Available · 2026" hasDot delay={1.05} />
        <Anno className="right-[8%] top-[64%]" side="right" label="Track record" value="3+ yrs · 6 domains" delay={1.24} />
      </motion.div>

      {/* center selection cluster — parallax layer */}
      <motion.div
        style={{ x: bx, y: by }}
        className="relative z-10 flex flex-col items-center px-6 text-center"
      >
        {/* selection group */}
        <div className="relative inline-block">
          {/* layer-name tab */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.5 }}
            className="absolute -top-8 left-0 hidden items-center gap-1.5 whitespace-nowrap rounded-md bg-white px-2 py-1 font-mono text-[10px] font-medium text-black sm:flex"
          >
            <Frame className="h-3 w-3" />
            Product Designer
          </motion.div>

          {/* name */}
          <motion.h1
            variants={revealParent}
            initial="hidden"
            animate="show"
            className="whitespace-nowrap text-[clamp(2.6rem,11vw,9rem)] font-semibold leading-[0.9] tracking-[-0.045em]"
          >
            <MaskLine>
              <span className="text-shine">Kavi Prasath</span>
            </MaskLine>
          </motion.h1>

          {/* bounding box + handles */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.85, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute -inset-x-6 -inset-y-3 hidden sm:block"
          >
            <div className="absolute inset-0 border border-white/40" />
            {HANDLES.map((h, i) => (
              <span
                key={i}
                className={`absolute h-2 w-2 border border-white/80 bg-neutral-950 ${h}`}
              />
            ))}
          </motion.div>

          {/* dimension label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05, duration: 0.5 }}
            className="absolute -bottom-9 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded bg-white/10 px-2 py-0.5 font-mono text-[10px] tracking-wide text-white/75 backdrop-blur sm:block"
          >
            W 1440 × H auto · design → code
          </motion.div>
        </div>

        {/* subcopy */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-16 max-w-xl text-lg leading-relaxed text-neutral-400"
        >
          I design regulated enterprise workflows — governance, tax, SAP, ERP — and
          ship them as working{" "}
          <span className="text-white">Next.js front-ends</span>, not static files.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.72, duration: 0.7 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <Magnetic strength={0.25}>
            <Link
              href="#work"
              className="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-105 active:scale-95"
            >
              View selected work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Magnetic>
          <a
            href="/Kavi_Prasath_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/5"
          >
            Download résumé
          </a>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-600"
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
  );
}

/* ------------------------------------------------------------------ *
 *  page
 * ------------------------------------------------------------------ */
export default function Home() {
  return (
    <div className="bg-neutral-950 pt-px text-white">
      <div className="grain" />

      {/* ===================== HERO ===================== */}
      <HeroCanvas />

      {/* ===================== CREDIBILITY STRIP ===================== */}
      <section className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-3 px-6 py-5 lg:px-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-600">
            Domains
          </span>
          {domains.map((d) => (
            <span
              key={d}
              className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-400"
            >
              {d}
            </span>
          ))}
        </div>
      </section>

      {/* ===================== SELECTED WORK ===================== */}
      <section id="work" className="scroll-mt-24 py-24 md:py-32">
        <ScrollReveal>
          <div className="mx-auto mb-14 flex max-w-7xl items-end justify-between gap-6 px-6 lg:px-8">
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
                ( 01 — Selected work )
              </p>
              <h2 className="text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-[0.95] tracking-tight">
                <Silver>Recent work</Silver>
              </h2>
            </div>
            <Link
              href="/work"
              className="hidden shrink-0 items-center gap-2 pb-2 text-sm font-medium text-neutral-400 transition-colors hover:text-white sm:inline-flex"
            >
              All projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>

        <WorkGallery />
      </section>

      {/* ===================== STATS ===================== */}
      <section className="border-y border-white/10 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <ScrollReveal key={s.l}>
              <div>
                <p className="text-[clamp(2.5rem,6vw,4rem)] font-semibold leading-none tracking-tight">
                  <span className="text-shine">
                    <AnimatedCounter value={s.v} suffix={s.s} />
                  </span>
                </p>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.15em] text-neutral-500">
                  {s.l}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ===================== CAPABILITIES ===================== */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
              ( 02 — What I do )
            </p>
            <h2 className="max-w-2xl text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.02] tracking-tight">
              <Silver>End to end</Silver>
              <span className="text-white/40"> — from the first flow to the last commit.</span>
            </h2>
          </ScrollReveal>

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] md:grid-cols-3">
            {capabilities.map((c, i) => (
              <ScrollReveal key={c.t} delay={i * 0.08}>
                <div className="group h-full bg-neutral-950 p-8 transition-colors duration-300 hover:bg-white/[0.03] lg:p-10">
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-colors group-hover:border-white/25">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{c.t}</h3>
                  <p className="mt-3 leading-relaxed text-neutral-400">{c.d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PHILOSOPHY / QUOTE ===================== */}
      <section className="border-t border-white/10 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-8">
          <ScrollReveal>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(circle_at_50%_30%,rgba(200,205,220,0.14),transparent_65%)] blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-neutral-900">
                <img
                  src="/jobs-quote.png"
                  alt="Steve Jobs"
                  className="aspect-[4/5] w-full object-cover grayscale-[0.1]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent" />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-500">
                Philosophy
              </span>
              <blockquote className="mt-6 text-[clamp(1.6rem,3.6vw,2.9rem)] font-medium leading-[1.15] tracking-tight text-white">
                “Design is not just what it looks like and feels like.{" "}
                <span className="text-shine">Design is how it works.</span>”
              </blockquote>
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
                — Steve Jobs
              </p>
              <p className="mt-8 max-w-md leading-relaxed text-neutral-400">
                In enterprise, the best design is invisible: it removes steps,
                clarifies decisions, and gets out of the way. That&apos;s the
                standard I hold every screen to.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===================== CONTACT CTA ===================== */}
      <section className="px-6 pb-28 lg:px-8">
        <ScrollReveal>
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-10 md:p-16 lg:p-20">
            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(200,205,220,0.12),transparent_65%)] blur-3xl" />
            <div className="relative">
              <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
                ( 03 — Let&apos;s talk )
              </p>
              <h2 className="max-w-3xl text-[clamp(2.25rem,6vw,5rem)] font-semibold leading-[0.98] tracking-tight">
                <Silver>Let&apos;s build something worth shipping.</Silver>
              </h2>
              <p className="mt-7 max-w-lg text-lg leading-relaxed text-neutral-400">
                Open to product design roles and select freelance — especially
                regulated, high-stakes enterprise work.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Magnetic strength={0.2}>
                  <a
                    href="mailto:kaviprasanth666@gmail.com"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-transform hover:scale-105 active:scale-95"
                  >
                    Start a conversation
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
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
