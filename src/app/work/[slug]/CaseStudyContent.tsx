"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock, User, ExternalLink, Sparkles, Target, Lightbulb, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { Project, projects } from "@/data/projects";

interface CaseStudyContentProps {
  project: Project;
}

export default function CaseStudyContent({ project }: CaseStudyContentProps) {
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <article className="min-h-screen pt-32 pb-20">
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <FadeIn>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Work</span>
          </Link>
        </FadeIn>
      </div>

      {/* Hero */}
      <header className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-end">
          <FadeIn>
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
                {project.title}
              </h1>

              <p className="text-xl text-text-secondary leading-relaxed">
                {project.longDescription}
              </p>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:underline"
                >
                  <span>View Live Project</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-text-tertiary">
                  <User className="w-4 h-4" />
                  <span className="text-sm font-mono uppercase">Role</span>
                </div>
                <p className="text-white">{project.role}</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-text-tertiary">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-mono uppercase">Year</span>
                </div>
                <p className="text-white">{project.year}</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-text-tertiary">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-mono uppercase">Duration</span>
                </div>
                <p className="text-white">{project.duration || "N/A"}</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-text-tertiary">
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm font-mono uppercase">Client</span>
                </div>
                <p className="text-white">{project.client}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </header>

      {/* Hero Image */}
      <FadeIn className="mb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video rounded-3xl overflow-hidden bg-surface border border-border">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-surface to-surface-secondary" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto rounded-2xl bg-surface-secondary border border-border flex items-center justify-center mb-4">
                  <span className="text-4xl font-medium text-accent">
                    {project.title.charAt(0)}
                  </span>
                </div>
                <p className="text-text-tertiary">Project Hero Image</p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Case Study Content */}
      {project.caseStudy && (
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-24">
          {/* Challenge */}
          <FadeIn>
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-red-400" />
                </div>
                <span className="text-sm font-mono text-text-tertiary uppercase tracking-wider">
                  The Challenge
                </span>
              </div>
              <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
                {project.caseStudy.challenge}
              </p>
            </section>
          </FadeIn>

          {/* Approach */}
          {project.caseStudy.approach && (
            <FadeIn>
              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-sm font-mono text-text-tertiary uppercase tracking-wider">
                    The Approach
                  </span>
                </div>
                <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
                  {project.caseStudy.approach}
                </p>
              </section>
            </FadeIn>
          )}

          {/* Process */}
          <FadeIn>
            <section className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-accent" />
                </div>
                <span className="text-sm font-mono text-text-tertiary uppercase tracking-wider">
                  The Process
                </span>
              </div>
              <StaggerContainer staggerDelay={0.1}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {project.caseStudy.process.map((step, index) => (
                    <StaggerItem key={step}>
                      <motion.div
                        className="relative p-5 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-colors group"
                        whileHover={{ y: -4 }}
                      >
                        <span className="absolute -top-3 -left-3 w-7 h-7 rounded-full bg-accent text-black text-xs font-medium flex items-center justify-center">
                          {index + 1}
                        </span>
                        <p className="text-white font-medium text-sm mt-1">{step}</p>
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
                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-sm font-mono text-text-tertiary uppercase tracking-wider">
                  The Solution
                </span>
              </div>
              <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
                {project.caseStudy.solution}
              </p>

              {/* Key Features */}
              {project.caseStudy.keyFeatures && (
                <div className="mt-8 p-6 rounded-2xl bg-surface border border-border">
                  <p className="text-sm font-mono text-text-tertiary uppercase tracking-wider mb-4">Key Features</p>
                  <div className="flex flex-wrap gap-2">
                    {project.caseStudy.keyFeatures.map((feature) => (
                      <Badge key={feature} variant="default">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </section>
          </FadeIn>

          {/* Gallery Placeholder */}
          <FadeIn>
            <section className="space-y-8">
              <div className="flex items-center gap-3">
                <span className="h-px w-12 bg-accent" />
                <span className="text-sm font-mono text-accent uppercase tracking-wider">
                  Gallery
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="aspect-[4/3] rounded-2xl bg-surface border border-border flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-text-tertiary">Image {i}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* Metrics */}
          {project.caseStudy.metrics && (
            <FadeIn>
              <section className="space-y-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="text-sm font-mono text-text-tertiary uppercase tracking-wider">
                    Results & Impact
                  </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {project.caseStudy.metrics.map((metric) => (
                    <motion.div
                      key={metric.label}
                      className="p-6 rounded-2xl bg-surface border border-border text-center"
                      whileHover={{ y: -4, borderColor: "rgba(var(--accent), 0.3)" }}
                    >
                      <p className="text-3xl font-medium text-accent mb-1">{metric.value}</p>
                      <p className="text-sm text-white font-medium">{metric.label}</p>
                      <p className="text-xs text-text-tertiary mt-1">{metric.description}</p>
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
                <span className="h-px w-12 bg-accent" />
                <span className="text-sm font-mono text-accent uppercase tracking-wider">
                  The Outcome
                </span>
              </div>
              <div className="p-8 rounded-3xl glass">
                <p className="text-xl md:text-2xl text-white leading-relaxed">
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
                  <span className="h-px w-12 bg-accent" />
                  <span className="text-sm font-mono text-accent uppercase tracking-wider">
                    Key Learnings
                  </span>
                </div>
                <ul className="space-y-4">
                  {project.caseStudy.learnings.map((learning, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-xl bg-surface border border-border"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-xs font-medium text-accent">
                        {index + 1}
                      </span>
                      <p className="text-text-secondary">{learning}</p>
                    </motion.li>
                  ))}
                </ul>
              </section>
            </FadeIn>
          )}
        </div>
      )}

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-24 pt-12 border-t border-border">
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-6">
          {prevProject ? (
            <Link href={`/work/${prevProject.id}`} className="flex-1 group">
              <motion.div
                className="h-full p-6 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-colors"
                whileHover={{ x: -4 }}
              >
                <div className="flex items-center gap-2 text-text-tertiary mb-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="text-sm font-mono uppercase">Previous</span>
                </div>
                <p className="text-xl font-medium text-white group-hover:text-accent transition-colors">
                  {prevProject.title}
                </p>
                <p className="text-sm text-text-tertiary mt-1">{prevProject.category}</p>
              </motion.div>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          {nextProject && (
            <Link href={`/work/${nextProject.id}`} className="flex-1 group">
              <motion.div
                className="h-full p-6 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-colors text-right"
                whileHover={{ x: 4 }}
              >
                <div className="flex items-center justify-end gap-2 text-text-tertiary mb-2">
                  <span className="text-sm font-mono uppercase">Next</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
                <p className="text-xl font-medium text-white group-hover:text-accent transition-colors">
                  {nextProject.title}
                </p>
                <p className="text-sm text-text-tertiary mt-1">{nextProject.category}</p>
              </motion.div>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
