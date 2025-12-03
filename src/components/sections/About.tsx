"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { siteConfig } from "@/data/site";
import { skillCategories, allTools } from "@/data/skills";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/5 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left column - Image & Quick info */}
          <FadeIn direction="right">
            <div className="relative">
              {/* Profile image placeholder */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-surface border border-border">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto rounded-full bg-surface-secondary border border-border flex items-center justify-center mb-4">
                      <span className="text-4xl font-medium text-accent">KP</span>
                    </div>
                    <p className="text-text-tertiary text-sm">Profile Image</p>
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-text-secondary">Currently at</p>
                      <p className="font-medium">Comini Learning</p>
                    </div>
                    <Badge variant="accent">Product Designer</Badge>
                  </div>
                </motion.div>
              </div>

              {/* Experience badge */}
              <motion.div
                className="absolute -right-4 top-8 glass rounded-xl p-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-3xl font-medium text-accent">{siteConfig.stats.experience}</p>
                <p className="text-sm text-text-secondary">Years of<br />Experience</p>
              </motion.div>
            </div>
          </FadeIn>

          {/* Right column - Content */}
          <div className="space-y-10">
            <SectionHeading
              label="About Me"
              title="Designer with a Developer's Mindset"
            />

            <FadeIn delay={0.2}>
              <p className="text-lg text-text-secondary leading-relaxed">
                {siteConfig.description}
              </p>
            </FadeIn>

            {/* Skills */}
            <div className="space-y-6">
              {skillCategories.slice(0, 2).map((category, categoryIndex) => (
                <StaggerContainer
                  key={category.name}
                  delay={0.3 + categoryIndex * 0.1}
                  staggerDelay={0.05}
                >
                  <p className="text-sm font-mono text-text-tertiary uppercase tracking-wider mb-3">
                    {category.name}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <StaggerItem key={skill}>
                        <Badge>{skill}</Badge>
                      </StaggerItem>
                    ))}
                  </div>
                </StaggerContainer>
              ))}
            </div>

            {/* CTA */}
            <FadeIn delay={0.5}>
              <div className="flex flex-wrap gap-4">
                <Button
                  href={siteConfig.resume}
                  variant="secondary"
                  icon={<Download className="w-4 h-4" />}
                >
                  Download Resume
                </Button>
                <Button
                  href={siteConfig.linkedin}
                  variant="ghost"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  LinkedIn
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Tools marquee */}
        <FadeIn delay={0.6} className="mt-24">
          <p className="text-sm font-mono text-text-tertiary uppercase tracking-wider mb-6 text-center">
            Tools I Work With
          </p>
          <div className="relative overflow-hidden">
            {/* Gradient masks */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

            <motion.div
              className="flex gap-8 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {[...allTools, ...allTools].map((tool, i) => (
                <span
                  key={i}
                  className="text-2xl md:text-3xl font-medium text-text-tertiary hover:text-white transition-colors duration-300 cursor-default"
                >
                  {tool}
                </span>
              ))}
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default About;
