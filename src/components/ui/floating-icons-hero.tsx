"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ *
 *  Floating-icons hero — dark + silver, cursor-repel + idle float.
 *  Adapted from the "floating-icons-hero-section" pattern, restyled
 *  for this portfolio and populated with Kavi's real design/dev stack.
 * ------------------------------------------------------------------ */

interface ToolIcon {
  id: number;
  glyph: React.ReactNode;
  className: string; // absolute positioning
}

/* ---------- glyph helpers ---------- */
function Mono({
  children,
  color,
  className,
}: {
  children: React.ReactNode;
  color: string;
  className?: string;
}) {
  return (
    <span
      className={cn("font-mono font-bold leading-none", className)}
      style={{ color }}
    >
      {children}
    </span>
  );
}

const IconFigma = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 38 57" {...p}>
    <path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
    <path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
    <path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
    <path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
    <path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
  </svg>
);

const IconGitHub = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="#fff" {...p}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const IconReact = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="-11.5 -10.23 23 20.46" {...p}>
    <circle r="2.05" fill="#61dafb" />
    <g stroke="#61dafb" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const IconTailwind = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="#38bdf8" {...p}>
    <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C13.4 10.8 14.55 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.6 7.2 14.45 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.4 16.8 9.55 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.6 13.2 9.45 12 7 12z" />
  </svg>
);

const IconNotion = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="#fff" {...p}>
    <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm.111 5.889h3.222v10.222h-3.222V7.889zm-4.333 0h3.222v10.222H7.778V7.889z" />
  </svg>
);

const IconFramer = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="#fff" {...p}>
    <path d="M6 3h12v6H12L6 3zm0 6h6l6 6h-6v6l-6-6V9z" />
  </svg>
);

/* ---------- Kavi's stack ---------- */
const glyphCls = "h-8 w-8 md:h-9 md:w-9";
const heroTools: ToolIcon[] = [
  { id: 1, glyph: <IconFigma className={glyphCls} />, className: "top-[13%] left-[9%]" },
  { id: 2, glyph: <Mono color="#31A8FF" className="text-xl">Ps</Mono>, className: "top-[24%] left-[19%] hidden sm:block" },
  { id: 3, glyph: <Mono color="#FF9A00" className="text-xl">Ai</Mono>, className: "top-[11%] left-[33%]" },
  { id: 4, glyph: <Mono color="#FF61F6" className="text-xl">Xd</Mono>, className: "top-[15%] right-[31%] hidden sm:block" },
  { id: 5, glyph: <Mono color="#9D8DF1" className="text-xl">Ae</Mono>, className: "top-[13%] right-[11%]" },
  { id: 6, glyph: <IconFramer className={glyphCls} />, className: "top-[31%] right-[7%] hidden sm:block" },
  { id: 7, glyph: <IconNotion className={glyphCls} />, className: "top-[30%] left-[6%] hidden sm:block" },
  { id: 8, glyph: <IconReact className={glyphCls} />, className: "bottom-[17%] left-[11%]" },
  { id: 9, glyph: <IconTailwind className={glyphCls} />, className: "bottom-[11%] left-[27%] hidden sm:block" },
  { id: 10, glyph: <IconGitHub className={glyphCls} />, className: "bottom-[13%] right-[11%]" },
  { id: 11, glyph: <Mono color="#ffffff" className="text-[13px] tracking-tight">Next</Mono>, className: "bottom-[19%] right-[27%] hidden sm:block" },
  { id: 12, glyph: <Mono color="#3178C6" className="text-lg">TS</Mono>, className: "bottom-[9%] left-[45%] hidden md:block" },
  { id: 13, glyph: <Mono color="#FFD02F" className="text-[11px] tracking-tight">Miro</Mono>, className: "top-[46%] left-[13%] hidden lg:block" },
  { id: 14, glyph: <Mono color="#A259FF" className="text-base">FJ</Mono>, className: "top-[48%] right-[13%] hidden lg:block" },
  { id: 15, glyph: <Mono color="#E34F26" className="text-[10px]">HTML</Mono>, className: "top-[70%] left-[7%] hidden md:block" },
  { id: 16, glyph: <Mono color="#38A9DC" className="text-xs">CSS</Mono>, className: "top-[68%] right-[7%] hidden md:block" },
];

/* ---------- single floating tile (cursor-repel + idle float) ---------- */
function FloatingTile({
  mouseX,
  mouseY,
  data,
  index,
}: {
  mouseX: React.MutableRefObject<number>;
  mouseY: React.MutableRefObject<number>;
  data: ToolIcon;
  index: number;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 20 });
  const springY = useSpring(y, { stiffness: 260, damping: 20 });

  React.useEffect(() => {
    const onMove = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dist = Math.hypot(mouseX.current - cx, mouseY.current - cy);
      const RADIUS = 150;
      if (dist < RADIUS) {
        const angle = Math.atan2(mouseY.current - cy, mouseX.current - cx);
        const force = (1 - dist / RADIUS) * 55;
        x.set(-Math.cos(angle) * force);
        y.set(-Math.sin(angle) * force);
      } else {
        x.set(0);
        y.set(0);
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y, mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn("absolute", data.className)}
    >
      <motion.div
        className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] shadow-xl shadow-black/40 backdrop-blur-md md:h-[4.25rem] md:w-[4.25rem] md:rounded-3xl"
        animate={{ y: [0, -8, 0, 8, 0], x: [0, 6, 0, -6, 0], rotate: [0, 5, 0, -5, 0] }}
        transition={{
          duration: 6 + (index % 5),
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        {data.glyph}
      </motion.div>
    </motion.div>
  );
}

export interface FloatingIconsHeroProps
  extends React.HTMLAttributes<HTMLElement> {
  icons?: ToolIcon[];
  children: React.ReactNode;
}

export function FloatingIconsHero({
  className,
  icons = heroTools,
  children,
  ...props
}: FloatingIconsHeroProps) {
  const mouseX = React.useRef(0);
  const mouseY = React.useRef(0);

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    mouseX.current = e.clientX;
    mouseY.current = e.clientY;
  };

  return (
    <section
      onMouseMove={onMouseMove}
      className={cn(
        "relative flex min-h-screen w-full items-center justify-center overflow-hidden",
        className
      )}
      {...props}
    >
      {/* floating tool field */}
      <div className="absolute inset-0">
        {icons.map((data, i) => (
          <FloatingTile
            key={data.id}
            mouseX={mouseX}
            mouseY={mouseY}
            data={data}
            index={i}
          />
        ))}
      </div>

      {/* legibility scrim so center text sits above the field */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(10,10,12,0.92),rgba(10,10,12,0.6)_45%,transparent_72%)] blur-[10px]" />

      {/* center content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        {children}
      </div>
    </section>
  );
}

export { heroTools };
