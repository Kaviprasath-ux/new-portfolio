"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

/* ------------------------------------------------------------------ *
 *  Parallax scroll — GSAP layered parallax + Lenis smooth scroll.
 *  Adapted from the Osmo parallax pattern into this portfolio's
 *  dark + silver language: abstract metallic layers reveal a big
 *  shine title as you scroll through the section.
 * ------------------------------------------------------------------ */

export function ParallaxScroll({
  title = "DESIGN",
  kicker = "Craft in motion",
  caption = "Discovery to launch — designed end to end, shipped in code.",
}: {
  title?: string;
  kicker?: string;
  caption?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const trigger = ref.current?.querySelector("[data-parallax-layers]");
    const layers = [
      { layer: "1", yPercent: 70 },
      { layer: "2", yPercent: 55 },
      { layer: "3", yPercent: 40 },
      { layer: "4", yPercent: 12 },
    ];

    let tl: gsap.core.Timeline | undefined;
    if (trigger) {
      tl = gsap.timeline({
        scrollTrigger: {
          trigger,
          start: "0% 0%",
          end: "100% 0%",
          scrub: 0,
        },
      });
      layers.forEach((o, idx) => {
        tl!.to(
          trigger.querySelectorAll(`[data-parallax-layer="${o.layer}"]`),
          { yPercent: o.yPercent, ease: "none" },
          idx === 0 ? undefined : "<"
        );
      });
    }

    // Lenis smooth scroll, driven by the GSAP ticker
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.ticker.remove(raf);
      if (trigger) gsap.killTweensOf(trigger);
      tl?.kill();
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={ref} className="relative bg-neutral-950">
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0" data-parallax-layers>
          {/* Layer 1 — deep glow + grid */}
          <div data-parallax-layer="1" className="absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(180,190,215,0.16),transparent_60%)] blur-3xl" />
            <div className="absolute inset-0 bg-dot-pattern bg-dot-lg opacity-[0.07] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
          </div>

          {/* Layer 2 — concentric metallic rings */}
          <div
            data-parallax-layer="2"
            className="absolute inset-0 flex items-center justify-center"
          >
            <svg
              viewBox="0 0 1000 1000"
              className="h-[130%] w-auto opacity-[0.35]"
              fill="none"
            >
              <defs>
                <radialGradient id="ring" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
                </radialGradient>
              </defs>
              {[440, 340, 240, 150].map((r) => (
                <circle
                  key={r}
                  cx="500"
                  cy="500"
                  r={r}
                  stroke="url(#ring)"
                  strokeWidth="1"
                />
              ))}
            </svg>
          </div>

          {/* Layer 3 — the shine title */}
          <div
            data-parallax-layer="3"
            className="absolute inset-0 flex flex-col items-center justify-center text-center"
          >
            <span className="mb-4 font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-400 md:text-xs">
              {kicker}
            </span>
            <h2 className="text-shine px-6 text-[clamp(3.5rem,19vw,17rem)] font-semibold leading-[0.85] tracking-[-0.05em]">
              {title}
            </h2>
          </div>

          {/* Layer 4 — foreground ridge (occludes lower title for depth) */}
          <div
            data-parallax-layer="4"
            className="absolute inset-x-0 bottom-0 h-[46%]"
          >
            <svg
              preserveAspectRatio="none"
              viewBox="0 0 1440 400"
              className="absolute inset-0 h-full w-full"
            >
              <defs>
                <linearGradient id="ridgeStroke" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.55)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>
              </defs>
              <path
                d="M0,150 C 300,60 520,200 740,140 C 990,70 1160,210 1440,120 L1440,400 L0,400 Z"
                fill="#0a0a0b"
              />
              <path
                d="M0,150 C 300,60 520,200 740,140 C 990,70 1160,210 1440,120"
                fill="none"
                stroke="url(#ridgeStroke)"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        {/* bottom fade into next section */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-neutral-950" />
      </section>

      {/* content strip with silver asterisk mark */}
      <section className="relative z-10 -mt-24 flex flex-col items-center gap-5 pb-24 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 160 160"
          fill="none"
          className="h-9 w-9 text-white/70"
        >
          <path
            d="M94.8284 53.8578C92.3086 56.3776 88 54.593 88 51.0294V0H72V59.9999C72 66.6273 66.6274 71.9999 60 71.9999H0V87.9999H51.0294C54.5931 87.9999 56.3777 92.3085 53.8579 94.8283L18.3431 130.343L29.6569 141.657L65.1717 106.142C67.684 103.63 71.9745 105.396 72 108.939V160L88.0001 160L88 99.9999C88 93.3725 93.3726 87.9999 100 87.9999H160V71.9999H108.939C105.407 71.9745 103.64 67.7091 106.12 65.1938L106.142 65.1716L141.657 29.6568L130.343 18.3432L94.8284 53.8578Z"
            fill="currentColor"
          />
        </svg>
        <p className="max-w-md px-6 text-sm leading-relaxed text-neutral-400">
          {caption}
        </p>
      </section>
    </div>
  );
}
