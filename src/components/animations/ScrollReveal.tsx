"use client";

import { motion, useInView, Variants, MotionProps } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollRevealProps extends Omit<MotionProps, "ref"> {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  scale?: number;
  rotate?: number;
  threshold?: number;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  once = true,
  direction = "up",
  distance = 40,
  scale = 1,
  rotate = 0,
  threshold = 0.2,
  ...motionProps
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: distance };
      case "down":
        return { y: -distance };
      case "left":
        return { x: distance };
      case "right":
        return { x: -distance };
      case "none":
      default:
        return {};
    }
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      scale: scale !== 1 ? 0.95 : 1,
      rotate: rotate,
      ...getInitialPosition(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}

interface ParallaxScrollProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down";
}

export function ParallaxScroll({
  children,
  className = "",
  speed = 0.5,
  direction = "up",
}: ParallaxScrollProps) {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ y: 0 }}
      whileInView={{
        y: direction === "up" ? -30 * speed : 30 * speed,
      }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerChildrenProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  once?: boolean;
}

export function StaggerChildren({
  children,
  className = "",
  delay = 0,
  staggerDelay = 0.1,
  once = true,
}: StaggerChildrenProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.2 });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

export function StaggerItem({
  children,
  className = "",
  direction = "up",
}: StaggerItemProps) {
  const getOffset = () => {
    switch (direction) {
      case "up":
        return { y: 30 };
      case "down":
        return { y: -30 };
      case "left":
        return { x: 30 };
      case "right":
        return { x: -30 };
      default:
        return { y: 30 };
    }
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      ...getOffset(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

interface MaskRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "left" | "right" | "up" | "down";
  maskColor?: string;
}

export function MaskReveal({
  children,
  className = "",
  delay = 0,
  direction = "left",
  maskColor = "bg-foreground",
}: MaskRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const getMaskAnimation = () => {
    switch (direction) {
      case "left":
        return { scaleX: [1, 0], transformOrigin: "right" };
      case "right":
        return { scaleX: [1, 0], transformOrigin: "left" };
      case "up":
        return { scaleY: [1, 0], transformOrigin: "bottom" };
      case "down":
        return { scaleY: [1, 0], transformOrigin: "top" };
      default:
        return { scaleX: [1, 0], transformOrigin: "right" };
    }
  };

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {children}
      <motion.div
        className={`absolute inset-0 ${maskColor}`}
        initial={{ scaleX: 1 }}
        animate={isInView ? getMaskAnimation() : {}}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      />
    </div>
  );
}

export default ScrollReveal;
