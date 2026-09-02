import { Eyebrow } from "@/components/Eyebrow";
import { SectionHeading } from "@/components/SectionHeading";

const STATS = [
  {
    value: "80%",
    note: "of serious medical errors involve miscommunication during a patient handoff.",
    src: 1,
  },
  {
    value: "67%",
    note: "of communication errors are tied to handoffs between caregivers.",
    src: 2,
  },
  {
    value: "50%",
    note: "of hospital staff say important patient information is often lost at shift change.",
    src: 3,
  },
  {
    value: "40%",
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

        {/* Typographic stat row: four equal columns, like a table, not a chart. */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.src} className="border-t border-line pt-6">
              <p className="font-display text-[72px] leading-none font-light tracking-[-0.02em] text-ink tabular-nums">
                {stat.value}
              </p>
              <p className="mt-4 max-w-[34ch] text-base text-ink-2">
                {stat.note}
                <sup className="ml-px text-[0.62em] font-medium text-accent">{stat.src}</sup>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex max-w-[80ch] flex-col gap-1.5 text-[13px] leading-relaxed text-ink-3">
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
