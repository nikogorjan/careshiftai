import { Eyebrow } from "@/components/Eyebrow";
import { Faq, type FaqItem } from "@/components/Faq";
import { Reveal } from "@/components/Reveal";

const FAQ: FaqItem[] = [
  {
    q: "Is CareShift available to use yet?",
    a: "Not yet. CareShift is in active development and currently being piloted with clinical teams. We're sharing the mission now and will have more to show in the coming weeks.",
  },
  {
    q: "Is this just another AI tool telling nurses what to do?",
    a: "No. CareShift isn't built to replace nursing judgment — it's built to transfer it. The goal is to structure a handoff around how nurses already think, not to second-guess them.",
  },
  {
    q: "Were nurses actually involved in building it?",
    a: "Yes. A dedicated group of experienced nurses worked alongside the team from the beginning, defining what a handoff needs to carry — not validating a finished product at the end.",
  },
  {
    q: "Who's behind CareShift?",
    a: "It started with a clinician with 20+ years in neurorehabilitation nursing (traumatic brain injury, spinal cord injury, disorders of consciousness), who watched handoffs fail in predictable ways and set out to fix the moment itself.",
  },
  {
    q: "How can I follow along or get involved?",
    a: "Join the mailing list to follow the build, and you're welcome to share your own handoff story — what gets lost at shift change and what you wish it carried.",
  },
];

const para = "mt-6.5 max-w-[70ch] text-[clamp(1.05rem,1.4vw,1.2rem)] leading-[1.62] text-body";

export function Mission() {
  return (
    <section
      id="mission"
      aria-labelledby="mission-h"
      className="relative z-[1] overflow-hidden py-[clamp(44px,5vw,80px)]"
    >
      <div className="wrap relative z-[1]">
        <Reveal>
          <Eyebrow>Our mission</Eyebrow>
        </Reveal>

        <Reveal
          as="h2"
          id="mission-h"
          className="m-0 flex flex-col text-balance"
        >
          <span className="text-[clamp(1.5rem,2.7vw,2.25rem)] leading-[1.15] font-medium tracking-[-0.01em] text-navy">
            Built by a clinician who
          </span>
          <span className="my-1.5 text-[clamp(2.6rem,5.8vw,4.5rem)] leading-[1.08] font-semibold tracking-[-0.01em] text-navy">
            watched the handoff fail
          </span>
          <span className="text-[clamp(1.5rem,2.7vw,2.25rem)] leading-[1.15] font-medium tracking-[-0.01em] text-teal-ink italic">
            — in the same ways, every shift.
          </span>
        </Reveal>

        <Reveal as="p" d={1} className={para}>
          CareShift began with one nurse: twenty-plus years in neurorehabilitation — traumatic brain
          injury, spinal cord injury, disorders of consciousness — watching handoffs break down in
          predictable, preventable ways. Not from carelessness, but because the moment was never
          built for how nurses actually think.
        </Reveal>

        <Reveal
          as="blockquote"
          d={2}
          className="my-[clamp(28px,3vw,38px)] border-l-[3px] border-teal py-0 pr-0 pl-[clamp(20px,2vw,28px)]"
        >
          <p className="m-0 text-[clamp(1.4rem,2.3vw,2rem)] leading-[1.22] font-bold tracking-[-0.02em] text-balance text-navy">
            &ldquo;Not software replacing nursing judgment — software built to{" "}
            <em className="text-teal-ink italic">transfer</em> it.&rdquo;
          </p>
          <footer className="mt-4 flex items-center gap-3 text-[.92rem] font-medium text-muted">
            <span className="h-0.5 w-6.5 flex-none rounded-sm bg-teal" />
            The founder &middot; 20+ years in neurorehabilitation nursing
          </footer>
        </Reveal>

        <Reveal as="p" d={2} className={para}>
          So we built it the only way that made sense: with nurses, from the very first day. A
          dedicated group of experienced nurses worked alongside the developer from the beginning —
          defining what a handoff needs to carry, not validating a finished product handed to them
          at the end.
        </Reveal>

        <Reveal d={2}>
          <Eyebrow className="mt-10 mb-0">FAQ</Eyebrow>
        </Reveal>

        <Reveal d={3}>
          <Faq items={FAQ} />
        </Reveal>

        <Reveal as="p" d={3} className="mt-8.5 text-[1.1rem] text-muted">
          This is a mission, not a pitch — and it&rsquo;s just beginning.{" "}
          <a
            href="#stay"
            className="border-b-2 border-teal-ink/30 pb-px font-semibold text-teal-ink no-underline transition-colors duration-[180ms] hover:border-teal-ink"
          >
            Follow along as we build it.
          </a>
        </Reveal>
      </div>
    </section>
  );
}
