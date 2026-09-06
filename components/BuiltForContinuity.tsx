import { DrawRule, Reveal } from "@/components/anim";
import { Eyebrow } from "@/components/Eyebrow";
import { SectionHeading } from "@/components/SectionHeading";

/* The pivot from problem to product, told in three beats. */
const MANTRAS = ["Capture what matters.", "Carry it forward.", "Close the loop."];

export function BuiltForContinuity() {
  return (
    <section
      id="continuity"
      aria-labelledby="continuity-h"
      className="mt-(--section-y) bg-tint pt-(--section-y) pb-[calc(var(--section-y)/2)]"
    >
      <div className="wrap">
        <Reveal>
          <Eyebrow>Built for continuity</Eyebrow>
          <SectionHeading id="continuity-h">
            CareShift carries the patient story forward.
          </SectionHeading>
          <p className="mt-6 max-w-[58ch] text-ink-2">
            CareShift helps nurses capture critical context throughout the shift, bring it
            together for handoff, and give the next nurse a clear starting point.
          </p>
        </Reveal>

        <div className="section-gap grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {MANTRAS.map((m, i) => (
            <Reveal key={m} delay={i * 80}>
              <DrawRule className="h-0.5 w-6 bg-accent" />
              <p className="m-0 mt-4 font-display text-[24px] leading-[1.2] font-normal tracking-[-0.015em] text-ink">
                {m}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
