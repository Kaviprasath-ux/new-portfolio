"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ScrollReveal, Magnetic } from "@/components/animations";
import { Silver } from "@/components/ui/silver";
import { ConfidentialCover } from "@/components/ui/confidential-cover";
import { projects, type Project } from "@/data/projects";

/* eslint-disable @next/next/no-img-element */
function WorkRow({
  project,
  index,
  reverse,
}: {
  project: Project;
  index: string;
  reverse: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  const isExternal = !!project.externalUrl;
  const href = isExternal ? project.externalUrl! : `/work/${project.id}`;
  const label = isExternal ? "View on Behance" : "View case study";
  const linkProps = isExternal
    ? { href, target: "_blank" as const, rel: "noopener noreferrer" }
    : { href };
  const Anchor: React.ElementType = isExternal ? "a" : Link;

  return (
    <div
      ref={ref}
      className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
    >
      {/* Image */}
      <Anchor
        {...linkProps}
        className={`group relative block ${reverse ? "lg:order-2" : ""}`}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-white/10 bg-neutral-900">
          {project.confidential ? (
            <ConfidentialCover />
          ) : (
            <motion.img
              src={project.image}
              alt={project.title}
              style={{ y }}
              className="absolute left-0 top-[-8%] h-[116%] w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
              loading="lazy"
            />
          )}
          <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/0" />
          <div className="absolute right-6 top-6 flex h-12 w-12 translate-y-2 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            {isExternal ? <ArrowUpRight className="h-5 w-5" /> : <ArrowRight className="h-5 w-5" />}
          </div>
        </div>
      </Anchor>

      {/* Text */}
      <div className={reverse ? "lg:order-1 lg:pr-8" : "lg:pl-8"}>
        <div className="mb-5 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">
          <span className="text-white/70">{index}</span>
          <span className="h-px w-8 bg-white/15" />
          <span>{project.category}</span>
          <span>·</span>
          <span>{project.year}</span>
        </div>

        <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.0] tracking-tight">
          <Silver className="pb-[0.06em]">{project.title}</Silver>
        </h2>

        <p className="mt-5 max-w-md leading-relaxed text-neutral-400">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-neutral-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <Anchor
          {...linkProps}
          className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-white"
        >
          <span className="link-hover">{label}</span>
          {isExternal ? (
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          ) : (
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          )}
        </Anchor>
      </div>
    </div>
  );
}

export default function WorkPage() {
  return (
    <div className="bg-neutral-950 pt-px text-white">
      <div className="grain" />

      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24">
        <div className="pointer-events-none absolute -top-24 left-1/4 h-80 w-[700px] rounded-full bg-[radial-gradient(ellipse,rgba(255,255,255,0.07),transparent_65%)] blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
              ( Selected Work — {projects.length} projects )
            </p>
            <h1 className="text-[clamp(3rem,11vw,9rem)] font-semibold leading-[0.9] tracking-tight">
              <Silver className="pb-[0.06em]">Work</Silver>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-neutral-400">
              Enterprise products and consumer apps — designed end to end, and where
              it counts, <span className="text-white">shipped in code</span>.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects — alternating features */}
      <section className="border-t border-white/10 py-20 md:py-28">
        <div className="mx-auto max-w-7xl space-y-24 px-6 md:space-y-36 lg:px-8">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id}>
              <WorkRow
                project={project}
                index={String(i + 1).padStart(2, "0")}
                reverse={i % 2 === 1}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 pb-24 md:pb-32 lg:px-8">
        <ScrollReveal>
          <div className="relative mx-auto mt-20 max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-neutral-900/60 p-12 text-center md:p-20">
            <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(255,255,255,0.08),transparent_65%)] blur-3xl" />
            <div className="relative">
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.02] tracking-tight">
                <Silver>Have a project in mind?</Silver>
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-lg text-neutral-400">
                I&apos;m always looking for new challenges — especially regulated,
                high-stakes enterprise work.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <Magnetic strength={0.2}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-transform hover:scale-105 active:scale-95"
                  >
                    Start a conversation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Magnetic>
                <a
                  href="/Kavi_Prasath_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-white/5"
                >
                  Download résumé
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
