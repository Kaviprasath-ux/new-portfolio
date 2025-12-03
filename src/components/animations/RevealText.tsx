"use client";

import { motion, Variants, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface RevealTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

export function RevealText({
  children,
  delay = 0,
  className,
  as: Component = "div",
}: RevealTextProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const MotionComponent = motion[Component as keyof typeof motion] as typeof motion.div;

  return (
    <MotionComponent
      initial="hidden"
      animate="visible"
      variants={variants}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}

interface StaggerTextProps {
  text: string;
  delay?: number;
  staggerDelay?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function StaggerText({
  text,
  delay = 0,
  staggerDelay = 0.03,
  className,
  as: Component = "span",
}: StaggerTextProps) {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const MotionComponent = motion[Component as keyof typeof motion] as typeof motion.span;

  return (
    <MotionComponent
      initial="hidden"
      animate="visible"
      variants={container}
      className={className}
      aria-label={text}
    >
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          variants={child}
          className="inline-block"
          style={{ marginRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </MotionComponent>
  );
}

export default RevealText;
