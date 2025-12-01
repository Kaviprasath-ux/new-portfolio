"use client";

import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export default function ProjectPage() {
  const params = useParams();
  const projectId = params.id as string;

  const project = projects.find((p) => p.id === projectId);
  const otherProjects = projects.filter((p) => p.id !== projectId).slice(0, 2);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-muted hover:text-black dark:hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              Back to Work
            </Link>
          </motion.div>

          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-3xl mb-12"
          >
            <SectionLabel className="mb-4">{project.category}</SectionLabel>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          {/* Project Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            <div>
              <h3 className="text-sm font-medium text-muted mb-2 uppercase tracking-wider">
                Client
              </h3>
              <p className="font-semibold">{project.client}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted mb-2 uppercase tracking-wider">
                Year
              </h3>
              <p className="font-semibold">{project.year}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted mb-2 uppercase tracking-wider">
                Category
              </h3>
              <p className="font-semibold">{project.category}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted mb-2 uppercase tracking-wider">
                Role
              </h3>
              <p className="font-semibold">UI/UX Designer</p>
            </div>
          </motion.div>

          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div
              className="aspect-[16/9] rounded-3xl overflow-hidden flex items-center justify-center"
              style={{ backgroundColor: project.color }}
            >
              <motion.div
                className="w-4/5 h-4/5 bg-white rounded-2xl shadow-2xl flex items-center justify-center"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gray-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-400"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <circle cx="9" cy="9" r="2" />
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                    </svg>
                  </div>
                  <p className="text-muted font-medium">
                    {project.title} - Main Visual
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-20 md:py-32 px-6 lg:px-8 bg-card dark:bg-card-dark">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel className="mb-4">The Challenge</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Understanding the Problem
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-8">
              The client needed a comprehensive solution that would address user
              pain points while maintaining a clean, intuitive interface. Through
              extensive user research and competitive analysis, we identified key
              opportunities for improvement in the existing workflow.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16"
          >
            <SectionLabel className="mb-4">The Solution</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Design Approach
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-8">
              We developed a user-centered design that prioritizes clarity and
              efficiency. The new interface reduces cognitive load while providing
              all the functionality users need. Key features include streamlined
              navigation, improved visual hierarchy, and accessible design patterns.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16"
          >
            <SectionLabel className="mb-4">The Result</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Impact & Outcomes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl">
                <p className="text-4xl font-bold mb-2">40%</p>
                <p className="text-muted">Increase in user engagement</p>
              </div>
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl">
                <p className="text-4xl font-bold mb-2">25%</p>
                <p className="text-muted">Reduction in task completion time</p>
              </div>
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl">
                <p className="text-4xl font-bold mb-2">4.8</p>
                <p className="text-muted">App store rating</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* More Projects */}
      <section className="py-20 md:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16"
          >
            <div>
              <SectionLabel className="mb-4">More Work</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold">
                Other Projects
              </h2>
            </div>
            <Button
              href="/work"
              variant="ghost"
              className="mt-4 md:mt-0"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              }
            >
              View All
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {otherProjects.map((proj, index) => (
              <ProjectCard key={proj.id} project={proj} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
