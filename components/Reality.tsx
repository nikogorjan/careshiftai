import { Reveal } from "@/components/anim";
import { Eyebrow } from "@/components/Eyebrow";
import { SectionHeading } from "@/components/SectionHeading";

const PHOTO = "/nurse-driving.webp";

export function Reality() {
  return (
    <section id="reality" aria-labelledby="reality-h" className="section-y bg-tint">
      <div className="wrap grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-12">
        <div className="lg:col-span-5">
          <Reveal className="lg:sticky lg:top-24">
            <Eyebrow>The reality</Eyebrow>
            <SectionHeading id="reality-h">
              A lot happens in a shift.{" "}
              <span className="text-ink-3">The next nurse needs to know what changed.</span>
            </SectionHeading>
          </Reveal>
        </div>

        {/* White panel inverts against the tinted section so the block still reads as its own card. */}
        <Reveal delay={100} className="rounded-lg bg-white p-6 sm:p-8 lg:col-span-7">
          <p className="m-0 max-w-[36ch] font-display text-[22px] leading-[1.35] font-normal tracking-[-0.015em] text-ink">
            Orders change. Patients decline. Families raise concerns. Tasks remain unfinished.
            Priorities shift.
          </p>
          <p className="mt-5 max-w-[60ch] text-ink-2">
            But by the end of a 12-hour shift, the information the next nurse needs may be spread
            across the EHR, handwritten notes, verbal conversations, and memory.
          </p>
          <div
            className="mt-8 aspect-16/10 w-full rounded-lg bg-cover bg-center"
            style={{ backgroundImage: `url("${PHOTO}")` }}
            role="img"
            aria-label="A nurse in scrubs driving to a shift"
          />
        </Reveal>
      </div>
    </section>
  );
}
