"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 lg:px-16 pt-32 pb-20">
      <div className="max-w-6xl">
        {/* Category labels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-2 text-sm font-medium text-foreground mb-12"
        >
          <span>Product Design</span>
          <span className="text-text-tertiary">·</span>
          <span>UI/UX</span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[clamp(2.5rem,8vw,5.5rem)] font-medium leading-[1.1] tracking-tight mb-16"
        >
          <span className="text-foreground">
            I design products that people love to use.
          </span>{" "}
          <span className="text-text-tertiary">
            Turning complex problems into simple, beautiful experiences.
          </span>
        </motion.h1>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-4 rounded-full font-medium text-sm hover:opacity-90 transition-opacity"
          >
            View my work
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
