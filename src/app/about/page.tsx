"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import { skills, tools, experience } from "@/lib/data";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Photo/Avatar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-square bg-card dark:bg-card-dark rounded-3xl flex items-center justify-center overflow-hidden">
                <motion.div
                  className="w-full h-full flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center">
                      <span className="text-5xl font-bold text-gray-400 dark:text-gray-500">
                        KP
                      </span>
                    </div>
                    <p className="text-muted">Profile Photo</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <SectionLabel className="mb-4">About Me</SectionLabel>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Hi, I&apos;m Kavi Prasath
              </h1>
              <div className="space-y-4 text-lg text-muted leading-relaxed">
                <p>
                  I&apos;m a passionate UI/UX Designer with over 5 years of experience
                  creating digital products that people love to use. My approach
                  combines strategic thinking with creative execution to deliver
                  meaningful user experiences.
                </p>
                <p>
                  I believe great design is invisible — it gets out of the way
                  and lets people accomplish their goals effortlessly. Whether
                  I&apos;m designing a mobile app, building a design system, or
                  crafting a brand identity, I focus on understanding users and
                  solving real problems.
                </p>
                <p>
                  When I&apos;m not pushing pixels, you can find me exploring new
                  design trends, mentoring aspiring designers, or enjoying a
                  good cup of coffee.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-8"
              >
                <Button
                  href="/contact"
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
                  Get in Touch
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills & Tools Section */}
      <section className="py-20 md:py-32 px-6 lg:px-8 bg-card dark:bg-card-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionLabel className="mb-4">Expertise</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Skills</h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <SectionLabel className="mb-4">Technology</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Tools</h2>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 md:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 md:mb-16"
          >
            <SectionLabel className="mb-4">Career</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
          </motion.div>

          <div className="space-y-0">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="py-8 border-b border-gray-200 dark:border-gray-800 first:border-t"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-1">
                    <span className="text-sm text-muted">{exp.period}</span>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                    <p className="text-muted mb-3">{exp.company}</p>
                    <p className="text-muted leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
