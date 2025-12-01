"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/work/${project.id}`} className="group block">
        {/* Card Image Container */}
        <motion.div
          className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-4"
          style={{ backgroundColor: project.color }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Placeholder Project Mockup */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <motion.div
              className="w-full h-full bg-white rounded-2xl shadow-2xl flex items-center justify-center"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gray-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
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
                <p className="text-sm text-gray-500 font-medium">{project.title}</p>
              </div>
            </motion.div>
          </div>

          {/* Arrow Icon */}
          <motion.div
            className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100"
            initial={{ scale: 0.8 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Card Info */}
        <div className="space-y-1">
          <p className="text-sm text-muted">{project.client}</p>
          <h3 className="text-lg font-semibold group-hover:text-muted transition-colors">
            {project.title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
}
