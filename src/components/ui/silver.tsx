import type { ReactNode } from "react";

/**
 * Metallic silver gradient text (top-light → silver → gray → highlight).
 * Wrap any text; add `pb-[0.1em]` on the parent heading if descenders clip.
 */
export function Silver({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`bg-[linear-gradient(180deg,#ffffff_0%,#e7e7ea_36%,#a6a6ae_66%,#ededf2_100%)] bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
}

export default Silver;
