"use client";

import type { ReactNode } from "react";

/**
 * GlowingShadow — an animated glowing halo behind its children.
 * Adapted from the rainbow "glowing-shadow" pattern into this portfolio's
 * dark + silver language: a metallic light sweeps around the frame instead
 * of a hue rotation. Wrap any rounded element (image, card).
 */
export function GlowingShadow({
  children,
  radius = "2rem",
  className = "",
}: {
  children: ReactNode;
  radius?: string;
  className?: string;
}) {
  return (
    <div
      className={`gs relative ${className}`}
      style={{ borderRadius: radius }}
    >
      <span className="gs__glow" aria-hidden />
      <div className="relative z-10 h-full" style={{ borderRadius: radius }}>
        {children}
      </div>

      <style jsx>{`
        @property --gs-angle {
          syntax: "<angle>";
          inherits: false;
          initial-value: 0deg;
        }
        .gs__glow {
          position: absolute;
          inset: -1.5px;
          border-radius: inherit;
          z-index: 0;
          padding: 2px; /* stroke thickness */
          background: conic-gradient(
            from var(--gs-angle),
            rgba(255, 255, 255, 0.05) 0deg,
            rgba(200, 206, 222, 0.65) 90deg,
            rgba(255, 255, 255, 1) 150deg,
            rgba(200, 206, 222, 0.65) 210deg,
            rgba(255, 255, 255, 0.05) 300deg
          );
          /* keep the fill only on the border ring */
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          filter: drop-shadow(0 0 4px rgba(200, 206, 222, 0.55));
          animation: gs-rotate 5s linear infinite;
        }
        @keyframes gs-rotate {
          to {
            --gs-angle: 360deg;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .gs__glow {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}

export default GlowingShadow;
