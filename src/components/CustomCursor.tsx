"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 32, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 350, damping: 32, mass: 0.6 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    // desktop / fine-pointer only
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    const style = document.createElement("style");
    style.innerHTML =
      "html.cursor-none, html.cursor-none * { cursor: none !important; }";
    document.head.appendChild(style);
    document.documentElement.classList.add("cursor-none");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const el = e.target as HTMLElement | null;
      const interactive = !!el?.closest?.(
        "a, button, [role='button'], input, textarea, select, label, summary"
      );
      setHovering(interactive);
    };
    const down = () => setClicking(true);
    const up = () => setClicking(false);
    const leave = () => {
      x.set(-100);
      y.set(-100);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", leave);
      document.documentElement.classList.remove("cursor-none");
      style.remove();
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]" aria-hidden>
      {/* precise dot */}
      <motion.div
        style={{ x, y }}
        animate={{ scale: clicking ? 0.5 : 1 }}
        transition={{ duration: 0.15 }}
        className="absolute left-0 top-0 -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-white mix-blend-difference"
      />
      {/* trailing ring */}
      <motion.div
        style={{ x: ringX, y: ringY }}
        animate={{
          scale: hovering ? 1.9 : clicking ? 0.8 : 1,
          opacity: hovering ? 0.75 : 0.5,
        }}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
        className="absolute left-0 top-0 -ml-4 -mt-4 h-8 w-8 rounded-full border border-white mix-blend-difference"
      />
    </div>
  );
}
