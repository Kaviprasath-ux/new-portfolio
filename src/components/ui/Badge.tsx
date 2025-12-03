"use client";

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
  size?: "sm" | "md";
  className?: string;
}

const variants = {
  default: "bg-surface border border-border text-text-secondary",
  accent: "bg-accent/10 border border-accent/20 text-accent",
  outline: "bg-transparent border border-border text-text-secondary",
};

const sizes = {
  sm: "px-2.5 py-1 text-xs",
  md: "px-3 py-1.5 text-sm",
};

export function Badge({
  children,
  variant = "default",
  size = "sm",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-mono rounded-full transition-colors duration-300",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}

export default Badge;
