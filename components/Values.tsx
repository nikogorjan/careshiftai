import type { ReactNode } from "react";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

type Principle = { title: string; text: string; icon: ReactNode; d: 1 | 2 };

const PRINCIPLES: Principle[] = [
  {
    title: "Built with nurses, not at them",
    text: "Shaped by the people who live shift change every day.",
    d: 1,
    icon: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    title: "The bedside comes first",
    text: "Less time on paperwork, more time with patients.",
    d: 2,
    icon: (
      <>
        <path d="M4.8 2.3A.3.3 0 1 0 5 2a.3.3 0 0 0-.2.3" />
        <path d="M8 15a6 6 0 0 0 12 0v-3" />
        <path d="M11 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
        <circle cx="20" cy="10" r="2" />
      </>
    ),
  },
  {
    title: "Nothing critical slips through",
    text: "The details that matter survive every handoff.",
    d: 1,
    icon: (
      <>
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  {
    title: "Calm, not chaos",
    text: "Clarity at the most fragile moment in care.",
    d: 2,
    icon: (
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
    ),
  },
];

export function Values() {
  return (
    <section
      aria-labelledby="values-h"
      className="relative z-[1] mt-[clamp(10px,1.4vw,18px)] mx-[clamp(8px,1.5vw,20px)] overflow-hidden rounded-panel bg-navy py-[clamp(60px,6.5vw,104px)] text-[#c2d2ec] shadow-panel"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[180px] -left-[140px] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(27,164,175,.20),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[160px] -bottom-[200px] h-[540px] w-[540px] rounded-full bg-[radial-gradient(circle,rgba(27,164,175,.12),transparent_72%)]"
      />

      <div className="wrap relative z-[1]">
        <Reveal className="mb-[clamp(44px,5.5vw,72px)] max-w-[720px]">
          <Eyebrow tone="bright">What we stand for</Eyebrow>
          <SectionHeading id="values-h" className="text-white">
            A few things we won&rsquo;t compromise on.
          </SectionHeading>
        </Reveal>

        <ol className="m-0 grid list-none grid-cols-1 p-0 tab:grid-cols-2 tab:gap-x-12 desk:gap-x-[clamp(40px,6vw,96px)]">
          {PRINCIPLES.map((p) => (
            <Reveal
              as="li"
              key={p.title}
              d={p.d}
              className="flex flex-col border-t border-white/10 py-[clamp(28px,3.4vw,44px)]"
            >
              <div className="mb-5.5 flex items-center gap-4.5">
                <span
                  aria-hidden="true"
                  className="grid h-11 w-11 flex-none place-items-center rounded-xl border border-teal/35 bg-teal/15 text-teal"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5.5 w-5.5"
                  >
                    {p.icon}
                  </svg>
                </span>
              </div>
              <h3 className="m-0 mb-3 text-[clamp(1.4rem,2.1vw,1.9rem)] leading-[1.18] font-semibold tracking-[-0.015em] text-balance text-white">
                {p.title}
              </h3>
              <p className="m-0 max-w-[36ch] text-[1.04rem] leading-[1.55] text-sky-400">{p.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
