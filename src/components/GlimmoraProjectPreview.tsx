"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  BriefcaseBusiness,
  FileCheck2,
  Home,
  LayoutDashboard,
  MapPinned,
  ShieldCheck,
  Users2,
} from "lucide-react";

const previewRows: Array<[LucideIcon, string, string]> = [
  [BriefcaseBusiness, "Employer", "waiting"],
  [FileCheck2, "Documents", "blocked"],
  [Home, "Partner", "active"],
];

export function GlimmoraProjectPreview({ compact = false }: { compact?: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#f8fafc] p-5 text-[#151515]">
      <div
        className="absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(38,103,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(38,103,255,0.08) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />
      <div className="relative flex h-full flex-col rounded-lg border border-black/10 bg-white/84 p-3 shadow-soft backdrop-blur-md">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#e8efff] text-[#2667ff]">
              <MapPinned className="h-4 w-4" />
            </div>
            <div>
              <div className="h-2 w-24 rounded-full bg-black/45" />
              <div className="mt-1.5 h-1.5 w-14 rounded-full bg-black/12" />
            </div>
          </div>
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2.4, repeat: Infinity }}
            className="rounded-md bg-[#e7f8db] px-2 py-1 text-[10px] font-semibold text-[#147a39]"
          >
            72%
          </motion.div>
        </div>

        <div className="grid flex-1 grid-cols-[0.32fr_0.68fr] gap-3">
          <div className="hidden rounded-lg border border-black/10 bg-[#f8fbff] p-2 sm:block">
            {[LayoutDashboard, Users2, FileCheck2, Home].map((Icon, index) => (
              <div
                key={index}
                className={`mb-2 flex h-7 items-center gap-2 px-2 ${
                  index === 0 ? "rounded-md bg-[#2667ff] text-white" : "text-black/32"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {!compact && <div className="h-1.5 w-10 rounded-full bg-current opacity-25" />}
              </div>
            ))}
          </div>

          <div className="grid gap-2">
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-lg border border-black/10 bg-white p-3 shadow-sm"
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="h-2 w-24 rounded-full bg-black/28" />
                <ShieldCheck className="h-4 w-4 text-[#147a39]" />
              </div>
              <div className="h-7 w-24 rounded-md bg-[#2667ff]" />
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-black/8">
                <motion.div
                  initial={{ width: "24%" }}
                  whileInView={{ width: "72%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1 }}
                  className="h-full rounded-full bg-[#2667ff]"
                />
              </div>
            </motion.div>

            <div className="grid gap-2">
              {previewRows.map(([Icon, label, state], index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-center gap-2 rounded-lg border border-black/10 bg-[#f8fbff] p-2"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white text-[#2667ff]">
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="h-1.5 w-2/3 rounded-full bg-black/28" />
                    <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-black/10" />
                  </div>
                  {!compact && <span className="text-[9px] uppercase text-[#b34c2f]">{state}</span>}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
