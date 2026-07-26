"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Silver } from "@/components/ui/silver";

export interface WorkItem {
  title: string;
  category: string;
  year: string;
  image: string;
  href: string;
  external?: boolean;
}

/* eslint-disable @next/next/no-img-element */
export function WorkList({ items }: { items: WorkItem[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
      {/* LIST */}
      <ul className="border-t border-white/10">
        {items.map((p, i) => {
          const Row = (
            <div
              onMouseEnter={() => setActive(i)}
              className="group relative flex flex-col gap-4 border-b border-white/10 py-7 md:py-9"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-baseline gap-4 md:gap-6">
                  <span className="font-mono text-xs text-neutral-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-2 md:text-4xl">
                    <Silver>{p.title}</Silver>
                  </h3>
                </div>
                <div className="flex items-center gap-5">
                  <span className="hidden font-mono text-[11px] uppercase tracking-wide text-neutral-500 sm:block">
                    {p.year}
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </span>
                </div>
              </div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-neutral-500 sm:pl-10 md:pl-12">
                {p.category}
              </p>

              {/* mobile thumbnail */}
              <div className="mt-2 aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 lg:hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover object-top" loading="lazy" />
              </div>
            </div>
          );
          return (
            <li key={p.title}>
              {p.external ? (
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="block">
                  {Row}
                </a>
              ) : (
                <Link href={p.href} className="block">
                  {Row}
                </Link>
              )}
            </li>
          );
        })}
      </ul>

      {/* STICKY PREVIEW (desktop) */}
      <div className="relative hidden lg:block">
        <div className="sticky top-28">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-neutral-900">
            <AnimatePresence mode="wait">
              <motion.img
                key={active}
                src={items[active].image}
                alt={items[active].title}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wide text-white/70">
                  {items[active].category}
                </p>
                <p className="mt-1 text-lg font-semibold">
                  <Silver>{items[active].title}</Silver>
                </p>
              </div>
              <span className="font-mono text-[11px] text-white/50">{items[active].year}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkList;
