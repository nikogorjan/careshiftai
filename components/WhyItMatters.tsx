"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { Reveal } from "@/components/anim";
import { Eyebrow } from "@/components/Eyebrow";
import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/lib/cn";

const STATS = [
  {
    number: "67",
    unit: "%",
    fill: 67,
    note: "of communication errors are associated with handoffs between caregivers.",
  },
  {
    number: "40",
    unit: "%",
    fill: 40,
    note: "of a nurse\u2019s shift can be spent on documentation and administrative work.",
  },
  {
    /*
     * Not a percentage. The ring reads as a clock face, where a half turn is
     * half an hour, so the sweep matches the figure without implying a share.
     */
    number: "30+",
    unit: "min",
    fill: 50,
    note: "can be spent reviewing, reconstructing, and communicating patient context around shift change.",
  },
];

/**
 * SVG progress ring. Track in `line`, fill in `accent`, square caps, starting
 * at 12 o'clock and sweeping clockwise to its value on first view.
 */
function Ring({
  size,
  stroke,
  value,
  track = "stroke-line",
  className,
  children,
}: {
  /** Natural diameter in px; the wrapper may render it smaller responsively. */
  size: number;
  stroke: number;
  /** Fill percentage, 0 to 100. */
  value: number;
  /** Track stroke class; white on tinted surfaces so it stays visible. */
  track?: string;
  className?: string;
  children: ReactNode;
}) {
  const r = size / 2 - stroke / 2;
  const c = 2 * Math.PI * r;
  const target = c * (1 - value / 100);
  const reduce = useReducedMotion();
  return (
    <div className={cn("relative grid aspect-square place-items-center", className)}>
      <svg viewBox={`0 0 ${size} ${size}`} aria-hidden="true" className="h-full w-full -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth={stroke}
          strokeLinecap="butt"
          className={track}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth={stroke}
          strokeLinecap="butt"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          whileInView={{ strokeDashoffset: target }}
          animate={reduce ? { strokeDashoffset: target } : undefined}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: reduce ? 0 : 1.2, ease: "easeOut" }}
          className="stroke-accent"
        />
      </svg>
      <span className="absolute">{children}</span>
    </div>
  );
}

export function WhyItMatters() {
  return (
    <section id="why" aria-labelledby="matters-h" className="bg-white section-y">
      <div className="wrap grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-12">
        <div className="lg:col-span-5">
          <Reveal className="lg:sticky lg:top-24">
            <Eyebrow>When context doesn&rsquo;t carry forward</Eyebrow>
            <SectionHeading id="matters-h">
              The cost shows up across the entire shift.
            </SectionHeading>
            <p className="mt-6 max-w-[46ch] text-ink-2">
              Communication gaps don&rsquo;t just create extra work. They can affect nurse workload,
              follow-through, and continuity of care.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          {STATS.map((stat, i) => (
            <Reveal
              key={stat.number}
              delay={i * 100}
              className={cn(
                "flex items-center gap-8 border-t border-line py-9",
                i === STATS.length - 1 && "border-b",
              )}
            >
              <Ring size={112} stroke={5} value={stat.fill} className="w-28 flex-none">
                {stat.unit === "%" ? (
                  <span className="font-display text-[26px] leading-none font-normal text-ink tabular-nums">
                    {stat.number}%
                  </span>
                ) : (
                  <span className="flex flex-col items-center gap-1 font-display leading-none font-normal text-ink">
                    <span className="text-[24px] tabular-nums">{stat.number}</span>
                    <span className="text-[11px] tracking-[0.08em] text-ink-3 uppercase">
                      {stat.unit}
                    </span>
                  </span>
                )}
              </Ring>
              <p className="m-0 text-lg text-ink">{stat.note}</p>
            </Reveal>
          ))}

          {/* The navy panel now carries the closing line, directly below the stats. */}
          <Reveal delay={120} className="mt-10 rounded-lg bg-ink p-8 lg:p-10">
            <p className="m-0 max-w-[30ch] font-display text-[24px] leading-[1.25] font-normal tracking-[-0.02em] text-white lg:text-[28px]">
              More searching. More interruptions. More opportunity for something to be missed.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
