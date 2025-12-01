"use client";

import { motion } from "framer-motion";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`inline-block text-xs font-medium uppercase tracking-widest text-muted ${className}`}
    >
      {children}
    </motion.span>
  );
}
