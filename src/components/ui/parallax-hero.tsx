"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface ParallaxHeroProps {
  /** Background image URL */
  image?: string;
  /** Small statement shown top-right */
  statement?: string;
  /** Large headline shown bottom-left */
  headline?: string;
}

export default function ParallaxHero({
  image = "/hero-portrait.png",
  statement = "",
  headline = "Kavi Prasath",
}: ParallaxHeroProps) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
    target: container,
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <div className="mt-24 mb-4 overflow-hidden bg-white">
      <div
        className="relative flex h-[80vh] items-center justify-center overflow-hidden bg-white"
        ref={container}
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="relative z-10 flex h-full w-full flex-col justify-between p-8 text-white md:p-20">
          {statement ? (
            <p className="w-[70vw] self-end text-[3.5vw] uppercase leading-tight mix-blend-difference md:w-[50vw] md:text-[2vw]">
              {statement}
            </p>
          ) : (
            <span aria-hidden />
          )}
          <p className="text-[9vw] uppercase leading-none text-white md:text-[5vw]">
            {headline}
          </p>
        </div>

        {/* Dark gradient for headline legibility */}
        <div className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
          <motion.div className="relative h-full w-full" style={{ y }}>
            <Image
              alt="Hero background"
              className="grayscale-0"
              fill
              priority
              sizes="100vw"
              src={image}
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
