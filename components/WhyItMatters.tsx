import type { ReactNode } from "react";
import { Eyebrow } from "@/components/Eyebrow";
import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/lib/cn";

const SECONDARY = [
  {
    value: 67,
    note: "of communication errors are tied to handoffs between caregivers.",
    src: 2,
  },
  {
    value: 50,
    note: "of hospital staff say important patient information is often lost at shift change.",
    src: 3,
  },
  {
    value: 40,
    note: "of a nurse's shift, on average, is spent on documentation instead of care.",
    src: 4,
  },
];

const SOURCES = [
  "The Joint Commission, Sentinel Event Alert 58: Inadequate handoff communication.",
  "The Joint Commission Journal on Quality & Patient Safety, 2024.",
  "AHRQ Hospital Survey on Patient Safety Culture, 2011.",
  "U.S. Surgeon General's Advisory on Building a Thriving Health Workforce, 2022.",
];

const sup = "text-[0.62em] font-medium text-accent";

/**
 * Static SVG progress ring. Track in `line`, fill in `accent`, square caps,
 * starting at 12 o'clock and sweeping clockwise. No animation.
 */
function Ring({
  size,
  stroke,
  value,
  className,
  children,
}: {
  /** Natural diameter in px; the wrapper may render it smaller responsively. */
  size: number;
  stroke: number;
  /** Fill percentage, 0 to 100. */
  value: number;
  className?: string;
  children: ReactNode;
}) {
  const r = size / 2 - stroke / 2;
  const c = 2 * Math.PI * r;
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
          className="stroke-line"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth={stroke}
          strokeLinecap="butt"
          strokeDasharray={`${(c * value) / 100} ${c}`}
          className="stroke-accent"
        />
      </svg>
      <span className="absolute">{children}</span>
    </div>
  );
}

export function WhyItMatters() {
  return (
    <section id="why" aria-labelledby="matters-h" className="bg-white py-20 lg:py-32">
      <div className="wrap">
        <div className="max-w-180">
          <Eyebrow>Why it matters</Eyebrow>
          <SectionHeading id="matters-h">
            When the handoff breaks, patients and nurses both pay.
          </SectionHeading>
          <p className="mt-5 max-w-[60ch] text-ink-2">
            This isn&rsquo;t about efficiency. It&rsquo;s about safety at the bedside and the people
            we ask to carry it. A few numbers, quietly, with room to add the sources behind them.
          </p>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-y-16 lg:grid-cols-12 lg:gap-x-12">
          {/* Hero stat, columns 1 to 5. */}
          <figure className="m-0 flex flex-col items-center lg:col-span-5 lg:items-start">
            <Ring size={320} stroke={6} value={80} className="w-55 sm:w-65 lg:w-80">
              <span className="font-display text-[64px] leading-none font-light tracking-[-0.03em] text-ink tabular-nums sm:text-[88px]">
                80%
              </span>
            </Ring>
            <figcaption className="mt-8 max-w-[26ch] text-center font-display text-xl leading-normal font-normal text-ink lg:text-left">
              of serious medical errors involve miscommunication during a patient handoff.
              <sup className={sup}>1</sup>
            </figcaption>
          </figure>

          {/* Secondary stats, columns 7 to 12, divided from the hero by a vertical rule. */}
          <div className="lg:col-span-7 lg:col-start-6 lg:border-l lg:border-line lg:pl-12">
            {SECONDARY.map((stat, i) => (
              <div
                key={stat.src}
                className={cn(
                  "flex items-center gap-8 border-t border-line py-10",
                  i === SECONDARY.length - 1 && "border-b",
                )}
              >
                <Ring size={96} stroke={4} value={stat.value} className="w-24 flex-none">
                  <span className="font-display text-[26px] leading-none font-normal text-ink tabular-nums">
                    {stat.value}%
                  </span>
                </Ring>
                <p className="m-0 max-w-[30ch] text-[17px] text-ink-2">
                  {stat.note}
                  <sup className={sup}>{stat.src}</sup>
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-1.5 text-[13px] leading-relaxed text-ink-3">
          {SOURCES.map((source, i) => (
            <span key={source}>
              <sup className="mr-1 font-medium text-accent">{i + 1}</sup>
              {source}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
