"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal, TextReveal, Magnetic } from "@/components/animations";
import { projects } from "@/data/projects";

const gradients = [
  "from-violet-500/15 via-purple-500/10 to-pink-500/15",
  "from-blue-500/15 via-cyan-500/10 to-teal-500/15",
  "from-amber-500/15 via-orange-500/10 to-red-500/15",
  "from-emerald-500/15 via-green-500/10 to-lime-500/15",
  "from-rose-500/15 via-pink-500/10 to-fuchsia-500/15",
  "from-indigo-500/15 via-blue-500/10 to-cyan-500/15",
];

export default function WorkPage() {

  return (
    <>
      {/* Grain overlay */}
      <div className="grain" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6"
            >
              <span className="badge">
                <span className="w-2 h-2 rounded-full bg-violet-500" />
                {projects.length} Projects
              </span>
            </motion.div>

            <TextReveal delay={0.2}>
              <h1 className="hero-title mb-6">Selected Work</h1>
            </TextReveal>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-muted max-w-xl"
            >
              A collection of projects where I&apos;ve helped brands tell their stories
              through <span className="text-gradient font-medium">thoughtful design</span>.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter & Projects Section */}
      <section className="pb-24 md:pb-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {projects.map((project, index) => {
                const isExternal = !!project.externalUrl;
                const linkProps = isExternal
                  ? { href: project.externalUrl!, target: "_blank", rel: "noopener noreferrer" }
                  : { href: `/work/${project.id}` };
                const LinkComponent = isExternal ? "a" : Link;

                return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className=""
                >
                  <LinkComponent {...linkProps} className="group block">
                    {/* Special Behance-style card for featured projects */}
                    {(project.id === "pocket-ui" || project.id === "pocket-giving" || project.id === "flaimed") ? (
                      <div className="space-y-4">
                        {/* Card with floating UI screenshot */}
                        <article className="relative overflow-hidden rounded-[2rem] bg-[#c8cdd9] aspect-[4/3] transition-all duration-500 hover:shadow-xl">
                          {/* Different layouts for each project */}
                          {project.id === "pocket-ui" ? (
                            /* Pocket UI - centered phone mockup with padding */
                            <div className="absolute inset-x-0 bottom-0 top-8 flex items-end justify-center px-16">
                              <div className="relative w-full h-full">
                                <Image
                                  src="/projects/pocket-giving/thumbnail 1.png"
                                  alt={project.title}
                                  fill
                                  className="object-contain object-bottom"
                                />
                              </div>
                            </div>
                          ) : project.id === "flaimed" ? (
                            /* Flaimed - fill container */
                            <div className="absolute inset-0">
                              <Image
                                src="/projects/flaimed/thumbnail 3.png"
                                alt={project.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ) : (
                            /* Pocket UX - fill container */
                            <div className="absolute inset-0">
                              <Image
                                src="/projects/pocket-giving/thumbnail 2.png"
                                alt={project.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                          )}

                          {/* Arrow button - bottom left */}
                          <div className="absolute bottom-6 left-6">
                            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                              <svg
                                className="w-5 h-5 text-[#1a1a2e]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                />
                              </svg>
                            </div>
                          </div>
                        </article>

                        {/* Title below card - matching the reference exactly */}
                        <div className="pt-2">
                          <p className="text-[15px] text-muted mb-1">{project.client}</p>
                          <h3 className="text-[22px] font-semibold text-foreground tracking-tight">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                    ) : (
                      /* Standard card for other projects */
                      <article
                        className="relative overflow-hidden rounded-3xl bg-card border border-border transition-all duration-500 hover:border-muted-foreground hover:shadow-xl aspect-[4/3]"
                      >
                        {/* Background gradient */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${
                            gradients[index % gradients.length]
                          } transition-transform duration-700 group-hover:scale-105`}
                        />

                        {/* Content */}
                        <div className="relative h-full flex flex-col justify-between p-6 lg:p-8">
                          {/* Top row */}
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                              <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border/50">
                                {project.category}
                              </span>
                              <span className="text-xs text-muted">{project.year}</span>
                              {project.duration && (
                                <span className="text-xs text-muted hidden sm:block">
                                  · {project.duration}
                                </span>
                              )}
                            </div>

                            {/* Arrow button */}
                            <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M7 17L17 7M17 7H7M17 7V17"
                                />
                              </svg>
                            </div>
                          </div>

                          {/* Bottom content */}
                          <div>
                            <h3 className="font-semibold mb-2 transition-colors text-xl lg:text-2xl group-hover:text-foreground">
                              {project.title}
                            </h3>
                            <p className="line-clamp-2 mb-4 text-sm text-muted">
                              {project.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                              {project.tags.slice(0, 3).map((tag) => (
                                <span
                                  key={tag}
                                  className="text-xs px-2.5 py-1 rounded-full bg-background/60 backdrop-blur-sm text-muted"
                                >
                                  {tag}
                                </span>
                              ))}
                              {project.tags.length > 3 && (
                                <span className="text-xs px-2.5 py-1 rounded-full bg-background/60 backdrop-blur-sm text-muted">
                                  +{project.tags.length - 3}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </article>
                    )}
                  </LinkComponent>
                </motion.div>
              );
              })}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-subtle p-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                Have a project in mind?
              </h2>
              <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
                I&apos;m always looking for new challenges. Let&apos;s discuss your next project.
              </p>
              <Magnetic strength={0.15}>
                <Link href="/contact" className="btn-primary group">
                  Start a Conversation
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </Magnetic>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
