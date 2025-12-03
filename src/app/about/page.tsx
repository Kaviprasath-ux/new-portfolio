"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ScrollReveal,
  StaggerChildren,
  ScrollStaggerItem,
  TextReveal,
  AnimatedCounter,
  Magnetic,
} from "@/components/animations";
import { experience } from "@/lib/data";

const tools = [
  { name: "Figma", category: "Design" },
  { name: "VS Code", category: "Code" },
  { name: "After Effects", category: "Motion" },
  { name: "Photoshop", category: "Graphics" },
  { name: "FigJam", category: "Collab" },
  { name: "UXPilot", category: "AI Design" },
  { name: "Claude", category: "AI" },
];

const skills = [
  "UI Design",
  "UX Research",
  "Design Systems",
  "Prototyping",
  "User Testing",
  "Visual Design",
  "Motion Design",
  "Product Strategy",
];

export default function AboutPage() {
  return (
    <>
      {/* Grain overlay */}
      <div className="grain" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-subtle">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-purple-500/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-40 h-40 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="text-white text-5xl font-semibold">KP</span>
                  </motion.div>
                </div>
              </div>

              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -right-4 -bottom-4 bg-foreground text-background rounded-2xl p-5"
              >
                <div className="text-3xl font-semibold">
                  <AnimatedCounter value={3} suffix="+" />
                </div>
                <p className="text-sm text-background/60">Years</p>
              </motion.div>
            </motion.div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-6"
              >
                <span className="badge">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-soft" />
                  Based in Bangalore, India
                </span>
              </motion.div>

              <TextReveal delay={0.2}>
                <h1 className="hero-title mb-3">Kavi Prasath</h1>
              </TextReveal>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-muted mb-8"
              >
                Product Designer & UX Specialist
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="space-y-4 text-muted leading-relaxed mb-8"
              >
                <p>
                  I craft digital products from{" "}
                  <span className="text-foreground font-medium">concept to pixel</span>—transforming complex problems into intuitive, elegant experiences. My work spans hospitality tech, AI platforms, fintech, and enterprise dashboards, where I&apos;ve built scalable design systems and interfaces that users genuinely enjoy.
                </p>
                <p>
                  I believe in{" "}
                  <span className="text-gradient font-medium">design that works quietly</span>—clean, purposeful, and invisible until you realize how effortless everything feels.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Magnetic strength={0.15}>
                  <Link href="/contact" className="btn-primary group">
                    Let&apos;s Work Together
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
                </Magnetic>
                <Link href="/work" className="btn-secondary">
                  View Work
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>


      {/* Skills & Tools */}
      <section className="section-padding bg-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Skills */}
            <div>
              <ScrollReveal>
                <p className="text-sm font-medium text-muted uppercase tracking-wider mb-3">
                  Expertise
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">
                  Skills
                </h2>
              </ScrollReveal>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <ScrollReveal key={skill} delay={index * 0.05}>
                    <motion.span
                      className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium"
                      whileHover={{ scale: 1.05, borderColor: "var(--muted-foreground)" }}
                    >
                      {skill}
                    </motion.span>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <ScrollReveal>
                <p className="text-sm font-medium text-muted uppercase tracking-wider mb-3">
                  Daily Drivers
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">
                  Tools
                </h2>
              </ScrollReveal>

              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool, index) => (
                  <ScrollReveal key={tool.name} delay={index * 0.05}>
                    <motion.div
                      className="p-4 rounded-2xl bg-card border border-border group cursor-pointer"
                      whileHover={{ y: -2, borderColor: "var(--muted-foreground)" }}
                    >
                      <div className="w-10 h-10 rounded-xl bg-subtle mb-3 flex items-center justify-center text-lg font-semibold group-hover:bg-foreground group-hover:text-background transition-colors">
                        {tool.name.charAt(0)}
                      </div>
                      <h3 className="font-medium">{tool.name}</h3>
                      <p className="text-xs text-muted">{tool.category}</p>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <p className="text-sm font-medium text-muted uppercase tracking-wider mb-3">
              Journey
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Career Path
            </h2>
          </ScrollReveal>

          <div className="space-y-6">
            {experience.map((exp, index) => (
              <ScrollReveal key={exp.company} delay={index * 0.1}>
                <motion.div
                  className="relative p-6 rounded-2xl bg-card border border-border group"
                  whileHover={{ y: -2, borderColor: "var(--muted-foreground)" }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">{exp.role}</h3>
                      <p className="text-muted">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted px-3 py-1 rounded-full bg-subtle w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-muted text-sm leading-relaxed">{exp.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <StaggerChildren className="grid grid-cols-3 gap-8">
            {[
              { value: 50, suffix: "+", label: "Projects" },
              { value: 500, suffix: "+", label: "Cups of Coffee" },
              { value: 10, suffix: "+", label: "Designers Mentored" },
            ].map((stat, index) => (
              <ScrollStaggerItem key={index} className="text-center">
                <div className="stat-value text-gradient mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={2}
                    delay={index * 0.2}
                  />
                </div>
                <p className="text-muted text-sm">{stat.label}</p>
              </ScrollStaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-foreground text-background p-12 md:p-16 text-center">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10 max-w-xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                  Let&apos;s create something{" "}
                  <span className="text-gradient">amazing</span>
                </h2>
                <p className="text-background/60 mb-8">
                  Whether you have a project in mind or just want to chat about design,
                  I&apos;d love to hear from you.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Magnetic strength={0.15}>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground rounded-full font-medium hover:scale-105 active:scale-95 transition-transform"
                    >
                      Get in Touch
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
                    className="text-background/60 hover:text-background transition-colors"
                  >
                    kaviprasanth666@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
