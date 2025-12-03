"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ParallaxFloatProps {
  children: ReactNode;
  offset?: number;
  className?: string;
}

export function ParallaxFloat({
  children,
  offset = 50,
  className,
}: ParallaxFloatProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
  const springY = useSpring(y, { damping: 20, stiffness: 100 });

  return (
    <motion.div ref={ref} style={{ y: springY }} className={className}>
      {children}
    </motion.div>
  );
}

interface FloatingElementProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  yOffset?: number;
  className?: string;
}

export function FloatingElement({
  children,
  duration = 6,
  delay = 0,
  yOffset = 20,
  className,
}: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        y: [0, -yOffset, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default ParallaxFloat;
