"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent/5 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <SectionHeading
          label="Experience"
          title="Where I've Worked"
          description="My professional journey in product design, building experiences that matter."
          className="mb-16"
        />

        <StaggerContainer staggerDelay={0.15}>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <StaggerItem key={exp.id}>
                  <ExperienceCard experience={exp} index={index} />
                </StaggerItem>
              ))}
            </div>
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}

interface ExperienceCardProps {
  experience: (typeof experiences)[0];
  index: number;
}

function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative grid md:grid-cols-2 gap-8 ${
        isEven ? "md:text-right" : ""
      }`}
    >
      {/* Timeline dot */}
      <motion.div
        className="absolute left-0 md:left-1/2 top-0 w-3 h-3 rounded-full bg-accent md:-translate-x-1/2 -translate-x-1"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, type: "spring" }}
      />

      {/* Content */}
      <motion.div
        className={`pl-8 md:pl-0 ${isEven ? "md:pr-12" : "md:col-start-2 md:pl-12"}`}
        whileHover={{ x: isEven ? -4 : 4 }}
        transition={{ duration: 0.3 }}
      >
        <div className="group">
          {/* Period */}
          <div className="flex items-center gap-3 mb-3" style={{ justifyContent: isEven ? "flex-end" : "flex-start" }}>
            <span className="text-sm font-mono text-text-tertiary">
              {experience.period}
            </span>
            {experience.current && (
              <Badge variant="accent" size="sm">
                Current
              </Badge>
            )}
          </div>

          {/* Role & Company */}
          <h3 className="text-xl font-medium text-white mb-1 group-hover:text-accent transition-colors duration-300">
            {experience.role}
          </h3>
          <p className="text-text-secondary mb-4">
            {experience.company} • {experience.location}
          </p>

          {/* Description */}
          <p className="text-text-tertiary mb-4 leading-relaxed">
            {experience.description}
          </p>

          {/* Achievements */}
          <ul className={`space-y-2 ${isEven ? "md:text-right" : ""}`}>
            {experience.achievements.slice(0, 3).map((achievement, i) => (
              <li
                key={i}
                className="text-sm text-text-secondary flex items-start gap-2"
                style={{ justifyContent: isEven ? "flex-end" : "flex-start" }}
              >
                {!isEven && (
                  <span className="text-accent mt-1.5">•</span>
                )}
                <span>{achievement}</span>
                {isEven && (
                  <span className="text-accent mt-1.5">•</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Empty grid cell for alternating layout */}
      {isEven && <div className="hidden md:block" />}
    </div>
  );
}

export default Experience;
