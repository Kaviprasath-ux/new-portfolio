import { Lock } from "lucide-react";
import { cn } from "@/lib/utils";

/* Designed cover for confidential / NDA enterprise work — a redacted-UI
   texture in the dark + silver language, used where real screenshots
   can't be shown. */
export function ConfidentialCover({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-950 to-black",
        className
      )}
    >
      {/* metallic glow */}
      <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_35%_25%,rgba(190,198,220,0.14),transparent_60%)]" />

      {/* faux redacted dashboard */}
      <div className="pointer-events-none absolute inset-0 flex flex-col gap-2.5 p-8 opacity-40 blur-[1.5px]">
        <div className="mb-2 h-6 w-1/3 rounded bg-white/10" />
        <div className="grid grid-cols-3 gap-2.5">
          <div className="h-16 rounded-lg bg-white/[0.07]" />
          <div className="h-16 rounded-lg bg-white/[0.07]" />
          <div className="h-16 rounded-lg bg-white/[0.07]" />
        </div>
        <div className="mt-2 h-3 w-2/3 rounded bg-white/[0.06]" />
        <div className="h-3 w-1/2 rounded bg-white/[0.06]" />
        <div className="h-3 w-3/5 rounded bg-white/[0.06]" />
      </div>

      {/* dot grid */}
      <div className="pointer-events-none absolute inset-0 bg-dot-pattern bg-dot-lg opacity-[0.05]" />

      {/* centered lock badge */}
      <div className="absolute left-1/2 top-[42%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2.5">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur">
          <Lock className="h-4 w-4 text-white/80" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/60">
          Confidential
        </span>
      </div>
    </div>
  );
}
