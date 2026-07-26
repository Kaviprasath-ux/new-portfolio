"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { GlimmoraProjectPreview } from "@/components/GlimmoraProjectPreview";
import { projects, projectCategories } from "@/data/projects";

export function Work() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeCategory.replace("UI/UX Design", "UI")) || p.tags.includes(activeCategory));

  return (
    <section id="work" className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-surface/30" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeading
            label="Selected Work"
            title="Featured Projects"
            description="A collection of projects that showcase my expertise in product design, from concept to execution."
          />

          <Button
            href="/work"
            variant="ghost"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            View All
          </Button>
        </div>

        {/* Filter tabs */}
        <FadeIn className="mb-12">
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-white text-black"
                    : "bg-surface border border-border text-text-secondary hover:text-white hover:border-border-secondary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Projects grid */}
        <StaggerContainer staggerDelay={0.15}>
          <motion.div layout className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <StaggerItem key={project.id}>
                  <ProjectCard project={project} />
                </StaggerItem>
              ))}
            </AnimatePresence>
          </motion.div>
        </StaggerContainer>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: (typeof projects)[0];
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/work/${project.id}`}>
      <motion.article
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="group relative bg-surface border border-border rounded-2xl overflow-hidden hover:border-accent/30 hover:shadow-glow transition-all duration-500"
      >
        {/* Image container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-surface-secondary">
          {project.id === "glimmora-relocate" ? (
            <GlimmoraProjectPreview compact />
          ) : (
            <>
              {/* Placeholder gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-surface to-surface-secondary" />

              {/* Actual image would go here */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-surface border border-border flex items-center justify-center mb-3">
                    <span className="text-xl font-medium text-accent">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <p className="text-text-tertiary text-sm">Project Preview</p>
                </div>
              </div>
            </>
          )}

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center"
            >
              <ArrowUpRight className="w-5 h-5 text-black" />
            </motion.div>
          </div>

          {/* Year badge */}
          <div className="absolute top-4 right-4">
            <Badge variant="default" className="bg-black/50 backdrop-blur-sm border-white/10">
              {project.year}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <h3 className="text-xl font-medium text-white group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm text-text-tertiary">{project.client}</p>
            </div>
            <motion.div
              className="mt-1"
              initial={{ x: 0, y: 0 }}
              whileHover={{ x: 4, y: -4 }}
            >
              <ArrowUpRight className="w-5 h-5 text-text-tertiary group-hover:text-accent transition-colors duration-300" />
            </motion.div>
          </div>

          <p className="text-text-secondary mb-4 line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" size="sm">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </motion.article>
    </Link>
  );
}

export default Work;
