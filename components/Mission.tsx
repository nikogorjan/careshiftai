import { DrawRule, Reveal } from "@/components/anim";
import { Eyebrow } from "@/components/Eyebrow";
import { Faq, type FaqItem } from "@/components/Faq";

/* Light-teal ramp, one shade deeper per card, same family as the Reality staircase. */
const SHADE = ["bg-[#e4f4f5]", "bg-[#dbf0f2]", "bg-[#d2edef]"];

const BELIEFS = [
  {
    title: "Built around the people delivering care",
    text: "CareShift is designed alongside nurses and care teams to fit the way work actually happens: capturing what matters during the shift, supporting clearer handoffs, and helping teams follow through on what comes next.",
  },
  {
    title: "Technology should reduce burden, not add to it",
    text: "We use AI to organize information, surface what matters, and support nurses’ clinical workflow, not replace their judgment.",
  },
  {
    title: "Continuity is a team responsibility",
    text: "From the bedside nurse to the nurse manager and clinical leadership, everyone should have the visibility they need to keep care moving forward.",
  },
];

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
    <section id="mission" aria-labelledby="mission-h" className="bg-tint section-y">
      <div className="wrap">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left column: sticky heading. */}
          <div className="lg:col-span-5">
            <Reveal className="lg:sticky lg:top-28">
              <Eyebrow>Our mission</Eyebrow>
              <h2
                id="mission-h"
                className="m-0 font-display text-[32px] leading-[1.05] font-normal tracking-[-0.02em] text-balance text-ink lg:text-[48px]"
              >
                Make every shift safer, clearer, and more connected.
              </h2>
            </Reveal>
          </div>

          {/* Right column: the mission narrative. */}
          <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
            <p className="m-0 max-w-[40ch] font-display text-[22px] leading-[1.35] font-normal tracking-[-0.015em] text-ink">
              Care does not stop when a shift ends. The responsibility may change hands, but the
              patient story continues.
            </p>

            <p className="mt-6 max-w-[60ch] text-ink-2">
              Our mission at CareShift is to make sure the critical context, priorities, and
              follow-up from one shift carry clearly into the next, so nurses can spend less time
              reconstructing information and more time focused on care.
            </p>

            <blockquote className="mt-10 mb-0 border-l-2 border-accent py-1 pl-6">
              <p className="m-0 font-display text-[24px] leading-[1.2] font-normal tracking-[-0.02em] text-balance text-ink lg:text-[28px]">
                We believe better continuity starts with{" "}
                <span className="text-accent">better communication.</span>
              </p>
            </blockquote>
          </Reveal>
        </div>

        {/* Three beliefs behind the mission, on the light-teal ramp. */}
        <div className="section-gap grid grid-cols-1 gap-4 sm:grid-cols-3">
          {BELIEFS.map((b, i) => (
            <Reveal key={b.title} delay={i * 80} className={`rounded-lg p-7 sm:p-8 ${SHADE[i]}`}>
              <DrawRule className="h-0.5 w-6 bg-accent" />
              <h3 className="m-0 mt-5 max-w-[24ch] font-display text-[22px] leading-[1.2] font-normal tracking-[-0.015em] text-ink">
                {b.title}
              </h3>
              <p className="mt-3 text-[15px] text-ink-2">{b.text}</p>
            </Reveal>
          ))}
        </div>

        {/* The goal, echoing the hero tagline. */}
        <Reveal className="section-gap">
          <p className="m-0 max-w-[52ch] font-display text-[24px] leading-[1.3] font-normal tracking-[-0.015em] text-ink lg:text-[28px]">
            <span className="text-ink-3">Our goal is simple:</span> Help every nurse begin their
            shift with clarity, end with confidence, and know that nothing important gets left
            behind.
          </p>
        </Reveal>

        {/* FAQ spans the full width under both columns. */}
        <Reveal className="section-gap">
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
        </Reveal>
      </div>
    </section>
  );
}
