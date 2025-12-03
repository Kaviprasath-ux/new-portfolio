"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-white text-black hover:bg-white/90 shadow-lg shadow-white/10 hover:scale-[1.02] active:scale-[0.98]",
  secondary:
    "bg-surface border border-border hover:border-border-secondary hover:bg-surface-secondary hover:scale-[1.02] active:scale-[0.98]",
  ghost:
    "bg-transparent hover:bg-white/5 hover:scale-[1.02] active:scale-[0.98]",
  outline:
    "bg-transparent border border-border hover:border-accent hover:shadow-glow hover:scale-[1.02] active:scale-[0.98]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm gap-2",
  md: "px-6 py-3 text-sm gap-2.5",
  lg: "px-8 py-4 text-base gap-3",
};

export function Button({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  className,
  children,
  href,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(baseClasses, "group")}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={cn(baseClasses, "group")}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

export default Button;
