import { Eyebrow } from "@/components/Eyebrow";
import { Faq, type FaqItem } from "@/components/Faq";

const FAQ: FaqItem[] = [
  {
    q: "Is CareShift available to use yet?",
    a: "Not yet. CareShift is in active development and currently being piloted with clinical teams. We're sharing the mission now and will have more to show in the coming weeks.",
  },
  {
    q: "Is this just another AI tool telling nurses what to do?",
    a: "No. CareShift isn't built to replace nursing judgment. It's built to transfer it. The goal is to structure a handoff around how nurses already think, not to second-guess them.",
  },
  {
    q: "Were nurses actually involved in building it?",
    a: "Yes. A dedicated group of experienced nurses worked alongside the team from the beginning, defining what a handoff needs to carry, not validating a finished product at the end.",
  },
  {
    q: "Who's behind CareShift?",
    a: "It started with a clinician with 20+ years in neurorehabilitation nursing (traumatic brain injury, spinal cord injury, disorders of consciousness), who watched handoffs fail in predictable ways and set out to fix the moment itself.",
  },
  {
    q: "How can I follow along or get involved?",
    a: "Join the mailing list to follow the build, and you're welcome to share your own handoff story: what gets lost at shift change and what you wish it carried.",
  },
];

export function Mission() {
  return (
    <section id="mission" aria-labelledby="mission-h" className="bg-white section-y">
      <div className="wrap">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left column: sticky heading. */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Eyebrow>Our mission</Eyebrow>
              <h2 id="mission-h" className="m-0 flex flex-col gap-1 text-balance">
                <span className="font-display text-[26px] leading-[1.1] font-normal tracking-[-0.02em] text-ink-3 lg:text-[30px]">
                  Built by a clinician who
                </span>
                <span className="font-display text-[38px] leading-[1.05] font-normal tracking-[-0.02em] text-ink lg:text-[56px]">
                  watched the handoff fail
                </span>
                <span className="font-display text-[26px] leading-[1.1] font-normal tracking-[-0.02em] text-ink lg:text-[30px]">
                  in the same ways, every shift.
                </span>
              </h2>
            </div>
          </div>

          {/* Right column: paragraphs and pull quote. */}
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="max-w-[60ch] text-ink-2">
              CareShift began with one nurse: twenty-plus years in neurorehabilitation (traumatic
              brain injury, spinal cord injury, disorders of consciousness), watching handoffs break
              down in predictable, preventable ways. Not from carelessness, but because the moment
              was never built for how nurses actually think.
            </p>

            <blockquote className="my-10 border-l-2 border-accent py-1 pl-6">
              <p className="m-0 font-display text-[24px] leading-[1.2] font-normal tracking-[-0.02em] text-balance text-ink lg:text-[28px]">
                &ldquo;Not software replacing nursing judgment.{" "}
                <span className="text-accent">Software built to transfer it.</span>&rdquo;
              </p>
              <footer className="mt-4 text-sm text-ink-3">
                The founder &middot; 20+ years in neurorehabilitation nursing
              </footer>
            </blockquote>

            <p className="max-w-[60ch] text-ink-2">
              So we built it the only way that made sense: with nurses, from the very first day. A
              dedicated group of experienced nurses worked alongside the developer from the
              beginning, defining what a handoff needs to carry, not validating a finished product
              handed to them at the end.
            </p>
          </div>
        </div>

        {/* FAQ spans the full width under both columns. */}
        <div className="section-gap">
          <Eyebrow className="mb-6">FAQ</Eyebrow>
          <Faq items={FAQ} />
          <p className="mt-8 text-ink-3">
            This is a mission, not a pitch, and it&rsquo;s just beginning.{" "}
            <a
              href="#stay"
              className="font-medium text-ink underline decoration-line underline-offset-4 transition-colors duration-150 hover:text-accent hover:decoration-accent"
            >
              Follow along as we build it.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
