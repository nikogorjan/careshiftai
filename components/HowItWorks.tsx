import { Reveal } from "@/components/anim";
import { Eyebrow } from "@/components/Eyebrow";
import { SectionHeading } from "@/components/SectionHeading";

/* Titles from the client; each row leaves room for a description later. */
const STEPS = [
  "Capture During the Shift",
  "Bring the Story Together",
  "Review & Hand Off With Clarity",
  "Carry Responsibility Forward",
  "Give Leadership Visibility",
];

export function HowItWorks() {
  return (
    <section
      id="how"
      aria-labelledby="how-h"
      className="bg-tint pt-[calc(var(--section-y)/2)] pb-(--section-y)"
    >
      <div className="wrap grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-12">
        <div className="lg:col-span-5">
          <Reveal className="lg:sticky lg:top-24">
            <Eyebrow>How CareShift works</Eyebrow>
            <SectionHeading id="how-h">From shift activity to a clear handoff.</SectionHeading>
          </Reveal>
        </div>

        <ol className="m-0 list-none p-0 lg:col-span-7">
          {STEPS.map((title, i) => (
            <Reveal
              as="li"
              key={title}
              delay={i * 70}
              className="flex items-baseline gap-6 border-t border-line py-7 last:border-b"
            >
              <span className="w-8 flex-none text-[13px] font-medium tracking-[0.08em] text-accent tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="m-0 font-display text-[22px] leading-[1.2] font-normal tracking-[-0.015em] text-ink lg:text-[26px]">
                {title}
              </h3>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
