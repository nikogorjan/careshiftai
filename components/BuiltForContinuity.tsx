import { Reveal } from "@/components/anim";
import { Eyebrow } from "@/components/Eyebrow";
import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/lib/cn";

/* The pivot from problem to product, told in three beats. */
const MANTRAS = ["Capture what matters.", "Carry it forward.", "Close the loop."];

export function BuiltForContinuity() {
  return (
    <section
      id="continuity"
      aria-labelledby="continuity-h"
      className="mt-(--section-y) bg-tint pt-(--section-y) pb-[calc(var(--section-y)/2)]"
    >
      <div className="wrap grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-12">
        <Reveal className="lg:col-span-5">
          <Eyebrow>Built for continuity</Eyebrow>
          <SectionHeading id="continuity-h">
            CareShift carries the patient story forward.
          </SectionHeading>
          <p className="mt-6 max-w-[44ch] text-ink-2">
            CareShift helps nurses capture critical context throughout the shift, bring it
            together for handoff, and give the next nurse a clear starting point.
          </p>
        </Reveal>

        {/* The three beats stack beside the header and land one after another; pt-9 aligns the first with the heading. */}
        <ul className="m-0 flex list-none flex-col gap-2 p-0 lg:col-span-6 lg:col-start-7 lg:gap-3 lg:pt-9">
          {MANTRAS.map((m, i) => (
            <Reveal
              as="li"
              key={m}
              delay={150 + i * 140}
              className={cn(
                "font-display text-[28px] leading-[1.1] font-normal tracking-[-0.02em] lg:text-[40px]",
                i === MANTRAS.length - 1 ? "text-accent" : "text-ink",
              )}
            >
              {m}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
