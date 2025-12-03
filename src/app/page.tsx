"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ScrollReveal,
  StaggerChildren,
  ScrollStaggerItem,
  AnimatedCounter,
  Magnetic,
} from "@/components/animations";
import { projects } from "@/data/projects";

const services = [
  {
    title: "Product Design",
    description: "End-to-end design from concept to launch",
    icon: "🎨",
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    title: "UX Research",
    description: "User insights that drive decisions",
    icon: "🔍",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Design Systems",
    description: "Scalable components for consistency",
    icon: "⚡",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "Brand Identity",
    description: "Visual language that resonates",
    icon: "✨",
    color: "from-pink-500/20 to-rose-500/20",
  },
];

const stats = [
  { value: 50, suffix: "+", label: "Projects" },
  { value: 5, suffix: "+", label: "Years" },
  { value: 98, suffix: "%", label: "Satisfaction" },
];

// Roles for typewriter effect
const roles = [
  "Product Designer.",
  "UX Designer.",
  "Creative.",
  "Developer.",
];

// Typewriter hook
function useTypewriter(words: string[], typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return currentText;
}

export default function Home() {
  const heroRef = useRef(null);
  const typedText = useTypewriter(roles, 80, 40, 2000);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <>
      {/* Grain overlay */}
      <div className="grain" />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen overflow-hidden bg-background"
      >
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 min-h-screen flex flex-col justify-center"
        >
          {/* Main Content */}
          <div className="py-20 md:py-32">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="overflow-hidden"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground">
                Hi, I&apos;m Kavi Prasath.
              </h1>
            </motion.div>

            {/* Typewriter Line */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-2 md:mt-4"
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground">
                I&apos;m a{" "}
                <span className="relative">
                  {typedText}
                  <motion.span
                    className="inline-block w-[3px] h-[0.9em] bg-foreground ml-1 align-middle"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                  />
                </span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 md:mt-12 text-lg md:text-xl text-muted max-w-xl leading-relaxed"
            >
              I specialize in crafting engaging digital experiences that elevate brands and drive results.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10 md:mt-14 flex flex-wrap items-center gap-4"
            >
              <Magnetic strength={0.15}>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-3 px-7 py-3.5 bg-foreground text-background rounded-full font-medium hover:scale-105 active:scale-95 transition-transform"
                >
                  View My Work
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </Link>
              </Magnetic>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-foreground font-medium hover:text-muted transition-colors"
              >
                Get in Touch
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-8 left-6 right-6 lg:left-8 lg:right-8 flex items-center justify-between text-sm text-muted"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for projects</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <span>Bangalore, India</span>
              <div className="flex items-center gap-2">
                <span>Scroll</span>
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Work Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section header */}
          <ScrollReveal className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div className="mb-6 md:mb-0">
              <p className="text-sm font-medium text-muted uppercase tracking-wider mb-3">
                Selected Work
              </p>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                Featured Projects
              </h2>
            </div>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-sm font-medium link-hover"
            >
              View all projects
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </ScrollReveal>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {projects.slice(0, 2).map((project, index) => {
              const isExternal = !!project.externalUrl;
              const linkProps = isExternal
                ? { href: project.externalUrl!, target: "_blank", rel: "noopener noreferrer" }
                : { href: `/work/${project.id}` };
              const LinkComponent = isExternal ? "a" : Link;

              // Determine image source based on project
              const imageSrc = project.id === "flaimed"
                ? "/projects/flaimed/thumbnail 3.png"
                : project.id === "pocket-ui"
                ? "/projects/pocket-giving/thumbnail 1.png"
                : project.id === "pocket-giving"
                ? "/projects/pocket-giving/thumbnail 2.png"
                : project.image;

              return (
                <ScrollReveal
                  key={project.id}
                  delay={index * 0.1}
                >
                  <LinkComponent {...linkProps} className="block group">
                    {/* Card */}
                    <div className="relative aspect-[4/3] rounded-[2rem] bg-[#c8cdd9] overflow-hidden mb-5">
                      {/* Project thumbnail */}
                      <Image
                        src={imageSrc}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      {/* Arrow button */}
                      <div className="absolute bottom-5 left-5 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center transition-transform group-hover:scale-110">
                        <svg className="w-5 h-5 text-[#1a1a2e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </div>

                    {/* Text below card */}
                    <div>
                      <p className="text-sm text-muted mb-1">{project.client}</p>
                      <h3 className="text-xl md:text-2xl font-semibold tracking-tight group-hover:text-muted transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </LinkComponent>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <p className="text-sm font-medium text-muted uppercase tracking-wider mb-3">
              What I Do
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Services & Expertise
            </h2>
          </ScrollReveal>

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  className={`bento-item group cursor-pointer ${
                    index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                  }`}
                  whileHover={{ y: -4 }}
                >
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />

                  <div className="relative h-full flex flex-col">
                    <span className={`text-3xl mb-4 ${index === 0 ? "text-5xl" : ""}`}>
                      {service.icon}
                    </span>
                    <h3 className={`font-semibold mb-2 ${index === 0 ? "text-2xl" : "text-lg"}`}>
                      {service.title}
                    </h3>
                    <p className={`text-muted ${index === 0 ? "text-base" : "text-sm"}`}>
                      {service.description}
                    </p>

                    {index === 0 && (
                      <div className="mt-auto pt-6">
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 text-sm font-medium group-hover:text-foreground transition-colors"
                        >
                          Start a project
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    )}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <StaggerChildren className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <ScrollStaggerItem key={index} className="text-center">
                <div className="stat-value mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={2}
                    delay={index * 0.2}
                  />
                </div>
                <p className="text-muted text-sm uppercase tracking-wider">{stat.label}</p>
              </ScrollStaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-foreground text-background p-12 md:p-20">
              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
                  Let&apos;s create something amazing together
                </h2>
                <p className="text-background/60 text-lg mb-10">
                  I&apos;m always excited to collaborate on projects that challenge
                  the status quo. Let&apos;s discuss how we can work together.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Magnetic strength={0.15}>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground rounded-full font-medium hover:scale-105 active:scale-95 transition-transform"
                    >
                      Start a Project
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </Magnetic>
                  <Link
                    href="mailto:kaviprasanth666@gmail.com"
                    className="inline-flex items-center gap-2 px-8 py-4 border border-background/20 rounded-full font-medium hover:bg-background/10 transition-colors"
                  >
                    kaviprasanth666@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Marquee */}
      <section className="py-12 border-t border-border overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 mx-6">
              {[
                "Product Design",
                "User Research",
                "Design Systems",
                "Prototyping",
                "Brand Identity",
                "Mobile Apps",
                "Web Design",
                "Interaction Design",
              ].map((item, index) => (
                <span
                  key={index}
                  className="text-3xl md:text-5xl font-semibold text-muted/20 flex items-center gap-12"
                >
                  {item}
                  <span className="w-2 h-2 rounded-full bg-muted/20" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
