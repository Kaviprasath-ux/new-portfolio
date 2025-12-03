"use client";

import { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLMotionProps<"div"> {
  variant?: "default" | "glass" | "bordered";
  hover?: boolean;
  glow?: boolean;
  className?: string;
  children: React.ReactNode;
}

const variants = {
  default: "bg-surface",
  glass: "glass",
  bordered: "bg-transparent border border-border",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = "default",
      hover = true,
      glow = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "rounded-2xl overflow-hidden transition-all duration-500",
          variants[variant],
          hover && "hover:border-border-secondary",
          glow && "hover:shadow-glow hover:border-accent/30",
          className
        )}
        whileHover={hover ? { scale: 1.02, y: -4 } : undefined}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";

export default Card;
