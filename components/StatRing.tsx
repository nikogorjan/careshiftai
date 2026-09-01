"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { useInView } from "@/lib/useInView";
import { useReducedMotion } from "@/lib/useReducedMotion";

type StatRingProps = {
  /** Final percentage, also the number counted up to. */
  value: number;
  /** Remaining dash offset once filled — 100 minus the swept share. */
  offset: number;
  size: "lg" | "sm";
};

const COUNT_MS = 1400;

/**
 * A circular gauge that sweeps its stroke and counts its number up the first
 * time it scrolls into view.
 */
export function StatRing({ value, offset, size }: StatRingProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const reduced = useReducedMotion();
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setShown(value);
      return;
    }
    let raf = 0;
    let start: number | null = null;
    const frame = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / COUNT_MS, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setShown(value * eased);
      if (p < 1) raf = requestAnimationFrame(frame);
      else setShown(value);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, value]);

  const large = size === "lg";

  return (
    <div
      ref={ref}
      className={cn(
        "relative grid aspect-square place-items-center",
        large ? "w-[clamp(220px,26vw,320px)]" : "w-[clamp(92px,9vw,116px)] flex-none",
      )}
    >
      <svg
        viewBox="0 0 100 100"
        aria-hidden="true"
        className="col-start-1 row-start-1 h-full w-full -rotate-90 overflow-visible"
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          className="fill-none stroke-navy/10"
          strokeWidth={large ? 2.4 : 4}
        />
        <circle
          cx="50"
          cy="50"
          r="45"
          pathLength={100}
          className="fill-none stroke-teal transition-[stroke-dashoffset] duration-[1.6s] ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:transition-none"
          strokeLinecap="round"
          strokeWidth={large ? 2.4 : 4}
          strokeDasharray={100}
          strokeDashoffset={inView ? offset : 100}
        />
      </svg>
      <span
        className={cn(
          "col-start-1 row-start-1 font-extrabold tracking-[-0.045em] text-navy tabular-nums",
          large ? "text-[clamp(3.2rem,7vw,5.4rem)]" : "text-[clamp(1.35rem,2vw,1.7rem)]",
        )}
      >
        {Math.round(shown)}%
      </span>
    </div>
  );
}
