import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { StatRing } from "@/components/StatRing";

const MINI_STATS = [
  {
    value: 67,
    offset: 33,
    note: "of communication errors are tied to handoffs between caregivers.",
    src: 2,
  },
  {
    value: 50,
    offset: 50,
    note: "of hospital staff say important patient information is often lost at shift change.",
    src: 3,
  },
  {
    value: 40,
    offset: 60,
    note: "of a nurse's shift, on average, is spent on documentation instead of care.",
    src: 4,
  },
] as const;

const SOURCES = [
  "The Joint Commission, Sentinel Event Alert 58 — Inadequate handoff communication.",
  "The Joint Commission Journal on Quality & Patient Safety, 2024.",
  "AHRQ Hospital Survey on Patient Safety Culture, 2011.",
  "U.S. Surgeon General's Advisory on Building a Thriving Health Workforce, 2022.",
];

const sup = "text-[.62em] font-bold text-teal-ink";

export function WhyItMatters() {
  return (
    <section id="why" aria-labelledby="matters-h" className="relative z-[1] py-[clamp(44px,5vw,80px)]">
      <div className="wrap">
        <Reveal className="mb-[clamp(48px,5.5vw,80px)] max-w-[760px]">
          <Eyebrow>Why it matters</Eyebrow>
          <SectionHeading id="matters-h">
            When the handoff breaks, patients and nurses both pay.
          </SectionHeading>
          <p className="mt-4.5 max-w-[62ch] text-[clamp(1.05rem,1.6vw,1.28rem)] font-normal text-body">
            This isn&rsquo;t about efficiency. It&rsquo;s about safety at the bedside and the people
            we ask to carry it. A few numbers, quietly — with room to add the sources behind them.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 items-center gap-10 tab:grid-cols-2 tab:gap-[clamp(32px,5vw,60px)] desk:gap-[clamp(40px,6vw,96px)]">
          <Reveal
            as="figure"
            className="m-0 flex flex-col items-center gap-[clamp(22px,2.6vw,34px)] text-center tab:items-start tab:text-left"
          >
            <StatRing value={80} offset={20} size="lg" />
            <figcaption className="max-w-[30ch] text-[clamp(1.1rem,1.5vw,1.34rem)] leading-[1.4] font-semibold tracking-[-0.01em] text-navy tab:max-w-[22ch]">
              of serious medical errors involve miscommunication during a patient handoff.
              <sup className={sup}>1</sup>
            </figcaption>
          </Reveal>

          <ul className="m-0 flex list-none flex-col gap-[clamp(22px,2.6vw,34px)] p-0 tab:border-l tab:border-dashed tab:border-navy/20 tab:pl-[clamp(32px,4vw,70px)]">
            {MINI_STATS.map((stat, i) => (
              <Reveal
                as="li"
                key={stat.src}
                d={(i + 1) as 1 | 2 | 3}
                className={`flex items-center gap-5.5 ${i > 0 ? "border-t border-dashed border-navy/20 pt-[clamp(22px,2.6vw,34px)]" : ""}`}
              >
                <StatRing value={stat.value} offset={stat.offset} size="sm" />
                <p className="max-w-[34ch] text-[1.04rem] leading-[1.5] text-body">
                  {stat.note}
                  <sup className={sup}>{stat.src}</sup>
                </p>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal className="mt-[clamp(44px,5vw,72px)] flex max-w-[80ch] flex-col gap-1.75 text-[.8rem] leading-relaxed text-muted">
          {SOURCES.map((source, i) => (
            <span key={source}>
              <sup className="mr-1 font-bold text-teal-ink">{i + 1}</sup>
              {source}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
