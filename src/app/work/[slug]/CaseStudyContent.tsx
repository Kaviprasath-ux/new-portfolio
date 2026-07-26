"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  User,
  ExternalLink,
  Sparkles,
  Target,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { Silver } from "@/components/ui/silver";
import { ConfidentialCover } from "@/components/ui/confidential-cover";
import { Project, projects } from "@/data/projects";
import GlimmoraRelocateCaseStudy from "./GlimmoraRelocateCaseStudy";

interface CaseStudyContentProps {
  project: Project;
}

/* eslint-disable @next/next/no-img-element */
export default function CaseStudyContent({ project }: CaseStudyContentProps) {
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  if (project.id === "glimmora-relocate") {
    return (
      <GlimmoraRelocateCaseStudy
        project={project}
        prevProject={prevProject}
        nextProject={nextProject}
      />
    );
  }

  const meta = [
    { icon: User, label: "Role", value: project.role },
    { icon: Calendar, label: "Year", value: project.year },
    { icon: Clock, label: "Duration", value: project.duration || "N/A" },
    { icon: ExternalLink, label: "Client", value: project.client },
  ];

  return (
    <article className="min-h-screen bg-neutral-950 pt-32 pb-20 text-white">
      {/* Back button */}
      <div className="mx-auto mb-12 max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-neutral-400 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Work</span>
          </Link>
        </FadeIn>
      </div>

      {/* Hero */}
      <header className="mx-auto mb-16 max-w-7xl px-6 lg:px-8">
        <div className="grid items-end gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl font-semibold leading-[1.02] tracking-tight md:text-5xl lg:text-6xl">
                <Silver className="pb-[0.06em]">{project.title}</Silver>
              </h1>

              <p className="text-xl leading-relaxed text-neutral-400">
                {project.longDescription}
              </p>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white underline-offset-4 hover:underline"
                >
                  <span>View live project</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 gap-6">
              {meta.map(({ icon: Icon, label, value }) => (
                <div key={label} className="space-y-1">
                  <div className="flex items-center gap-2 text-neutral-500">
                    <Icon className="h-4 w-4" />
                    <span className="font-mono text-xs uppercase">{label}</span>
                  </div>
                  <p className="text-sm text-white">{value}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </header>

      {/* Hero Image */}
      <FadeIn className="mb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative aspect-video overflow-hidden rounded-3xl border border-white/10 bg-neutral-900">
            {project.confidential || !project.image ? (
              <ConfidentialCover />
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            )}
          </div>
        </div>
      </FadeIn>

      {/* Case Study Content */}
      {project.caseStudy && (
        <div className="mx-auto max-w-4xl space-y-24 px-6 lg:px-8">
          {/* Challenge */}
          <FadeIn>
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10">
                  <Target className="h-5 w-5 text-red-400" />
                </div>
                <span className="font-mono text-sm uppercase tracking-wider text-neutral-500">
                  The Challenge
                </span>
              </div>
              <p className="text-xl leading-relaxed text-neutral-300 md:text-2xl">
                {project.caseStudy.challenge}
              </p>
            </section>
          </FadeIn>

          {/* Approach */}
          {project.caseStudy.approach && (
            <FadeIn>
              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10">
                    <Lightbulb className="h-5 w-5 text-blue-400" />
                  </div>
                  <span className="font-mono text-sm uppercase tracking-wider text-neutral-500">
                    The Approach
                  </span>
                </div>
                <p className="text-xl leading-relaxed text-neutral-300 md:text-2xl">
                  {project.caseStudy.approach}
                </p>
              </section>
            </FadeIn>
          )}

          {/* Process */}
          <FadeIn>
            <section className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <span className="font-mono text-sm uppercase tracking-wider text-neutral-500">
                  The Process
                </span>
              </div>
              <StaggerContainer staggerDelay={0.1}>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {project.caseStudy.process.map((step, index) => (
                    <StaggerItem key={step}>
                      <motion.div
                        className="relative rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-white/25"
                        whileHover={{ y: -4 }}
                      >
                        <span className="absolute -left-3 -top-3 flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-semibold text-black">
                          {index + 1}
                        </span>
                        <p className="mt-1 text-sm font-medium text-white">{step}</p>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </div>
              </StaggerContainer>
            </section>
          </FadeIn>

          {/* Solution */}
          <FadeIn>
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
                  <Lightbulb className="h-5 w-5 text-emerald-400" />
                </div>
                <span className="font-mono text-sm uppercase tracking-wider text-neutral-500">
                  The Solution
                </span>
              </div>
              <p className="text-xl leading-relaxed text-neutral-300 md:text-2xl">
                {project.caseStudy.solution}
              </p>

              {project.caseStudy.keyFeatures && (
                <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
                  <p className="mb-4 font-mono text-sm uppercase tracking-wider text-neutral-500">
                    Key Features
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.caseStudy.keyFeatures.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-neutral-200"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </section>
          </FadeIn>

          {/* Metrics */}
          {project.caseStudy.metrics && (
            <FadeIn>
              <section className="space-y-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10">
                    <TrendingUp className="h-5 w-5 text-violet-400" />
                  </div>
                  <span className="font-mono text-sm uppercase tracking-wider text-neutral-500">
                    Results &amp; Impact
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {project.caseStudy.metrics.map((metric) => (
                    <motion.div
                      key={metric.label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
                      whileHover={{ y: -4 }}
                    >
                      <p className="mb-1 text-3xl font-semibold">
                        <Silver>{metric.value}</Silver>
                      </p>
                      <p className="text-sm font-medium text-white">{metric.label}</p>
                      <p className="mt-1 text-xs text-neutral-500">{metric.description}</p>
                    </motion.div>
                  ))}
                </div>
              </section>
            </FadeIn>
          )}

          {/* Outcome */}
          <FadeIn>
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-px w-12 bg-white/40" />
                <span className="font-mono text-sm uppercase tracking-wider text-neutral-400">
                  The Outcome
                </span>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <p className="text-xl leading-relaxed text-white md:text-2xl">
                  {project.caseStudy.outcome}
                </p>
              </div>
            </section>
          </FadeIn>

          {/* Learnings */}
          {project.caseStudy.learnings && (
            <FadeIn>
              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="h-px w-12 bg-white/40" />
                  <span className="font-mono text-sm uppercase tracking-wider text-neutral-400">
                    Key Learnings
                  </span>
                </div>
                <ul className="space-y-4">
                  {project.caseStudy.learnings.map((learning, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-medium text-white">
                        {index + 1}
                      </span>
                      <p className="text-neutral-300">{learning}</p>
                    </motion.li>
                  ))}
                </ul>
              </section>
            </FadeIn>
          )}
        </div>
      )}

      {/* Navigation */}
      <div className="mx-auto mt-24 max-w-7xl border-t border-white/10 px-6 pt-12 lg:px-8">
        <div className="flex flex-col items-stretch justify-between gap-6 md:flex-row">
          {prevProject ? (
            <Link href={`/work/${prevProject.id}`} className="group flex-1">
              <motion.div
                className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-white/25"
                whileHover={{ x: -4 }}
              >
                <div className="mb-2 flex items-center gap-2 text-neutral-500">
                  <ArrowLeft className="h-4 w-4" />
                  <span className="font-mono text-sm uppercase">Previous</span>
                </div>
                <p className="text-xl font-medium text-white transition-colors group-hover:text-neutral-300">
                  {prevProject.title}
                </p>
                <p className="mt-1 text-sm text-neutral-500">{prevProject.category}</p>
              </motion.div>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          {nextProject && (
            <Link href={`/work/${nextProject.id}`} className="group flex-1">
              <motion.div
                className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 text-right transition-colors hover:border-white/25"
                whileHover={{ x: 4 }}
              >
                <div className="mb-2 flex items-center justify-end gap-2 text-neutral-500">
                  <span className="font-mono text-sm uppercase">Next</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
                <p className="text-xl font-medium text-white transition-colors group-hover:text-neutral-300">
                  {nextProject.title}
                </p>
                <p className="mt-1 text-sm text-neutral-500">{nextProject.category}</p>
              </motion.div>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
