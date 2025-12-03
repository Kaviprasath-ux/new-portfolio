"use client";

import { useInView, useMotionValue } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface AnimatedCounterProps {
  value: number;
  direction?: "up" | "down";
  duration?: number;
  delay?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export function AnimatedCounter({
  value,
  direction = "up",
  duration = 2,
  delay = 0,
  className = "",
  prefix = "",
  suffix = "",
  decimals = 0,
}: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [displayValue, setDisplayValue] = useState(direction === "up" ? 0 : value);

  const motionValue = useMotionValue(direction === "up" ? 0 : value);
  const target = direction === "up" ? value : 0;

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        motionValue.set(target);
      }, delay * 1000);

      const unsubscribe = motionValue.on("change", (latest) => {
        setDisplayValue(
          decimals > 0 ? parseFloat(latest.toFixed(decimals)) : Math.round(latest)
        );
      });

      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / (duration * 1000), 1);

        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = direction === "up" ? value * eased : value * (1 - eased);

        setDisplayValue(
          decimals > 0 ? parseFloat(current.toFixed(decimals)) : Math.round(current)
        );

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      const delayTimer = setTimeout(() => {
        requestAnimationFrame(animate);
      }, delay * 1000);

      return () => {
        clearTimeout(timer);
        clearTimeout(delayTimer);
        unsubscribe();
      };
    }
  }, [isInView, value, delay, duration, direction, decimals, motionValue, target]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

interface AnimatedPercentageProps {
  value: number;
  duration?: number;
  delay?: number;
  className?: string;
  showBar?: boolean;
  barColor?: string;
}

export function AnimatedPercentage({
  value,
  duration = 2,
  delay = 0,
  className = "",
  showBar = false,
  barColor = "bg-foreground",
}: AnimatedPercentageProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [displayValue, setDisplayValue] = useState(0);
  const [barWidthValue, setBarWidthValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / (duration * 1000), 1);

        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = value * eased;

        setDisplayValue(Math.round(current));
        setBarWidthValue(current);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      const delayTimer = setTimeout(() => {
        requestAnimationFrame(animate);
      }, delay * 1000);

      return () => {
        clearTimeout(delayTimer);
      };
    }
  }, [isInView, value, delay, duration]);

  return (
    <div ref={ref} className={className}>
      <span className="tabular-nums font-semibold">
        {displayValue}%
      </span>
      {showBar && (
        <div className="h-1 bg-border rounded-full overflow-hidden mt-2">
          <div
            className={`h-full ${barColor} rounded-full transition-all duration-100`}
            style={{ width: `${barWidthValue}%` }}
          />
        </div>
      )}
    </div>
  );
}

export default AnimatedCounter;
