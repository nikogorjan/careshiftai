"use client";

import { motion, useInView, useReducedMotion, type Variants } from "motion/react";
import { useRef } from "react";
import { Reveal } from "@/components/anim";
import { Eyebrow } from "@/components/Eyebrow";
import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/lib/cn";

const EASE = [0.22, 1, 0.36, 1] as const;

/*
 * Framer tweens between literal colours, so the marker states mirror the
 * `accent`, `line` and white tokens from globals.css. Keep them in sync.
 */
const TEAL = "#1ca4b0";
const LINE = "#d9e2ea";
const WHITE = "#ffffff";

/* Titles are the client's. The supporting lines are drafted, pending approval. */
const STEPS = [
  {
    title: "Capture During the Shift",
    note: "Changes, concerns and open items are noted as they happen, instead of being reconstructed at the end.",
  },
  {
    title: "Bring the Story Together",
    note: "Context from across the shift is pulled into one place, ready for handoff.",
  },
  {
    title: "Review & Hand Off With Clarity",
    note: "The next nurse sees what changed, what needs attention, and what is still open.",
  },
  {
    title: "Carry Responsibility Forward",
    note: "Open items move to the next shift with an owner, so follow-up does not rest on memory.",
  },
  {
    title: "Give Leadership Visibility",
    note: "Nurse managers and clinical leadership can see how continuity is holding across shifts.",
  },
];

const row: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

/* Only the text lifts on hover, so the connector between markers stays unbroken. */
const content: Variants = {
  hidden: { y: 0 },
  show: { y: 0 },
  hover: { y: -3, transition: { duration: 0.2, ease: "easeOut" } },
};

function Step({ step, index, isLast }: { step: (typeof STEPS)[number]; index: number; isLast: boolean }) {
  const ref = useRef<HTMLLIElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "0px 0px -30% 0px" });
  /* Reduced motion lands on the finished state rather than swapping the markup. */
  const active = reduce || inView;

  return (
    <motion.li
      ref={ref}
      initial="hidden"
      animate={active ? "show" : "hidden"}
      whileHover={reduce ? undefined : "hover"}
      variants={row}
      transition={{ duration: reduce ? 0 : 0.6, ease: EASE }}
      className={cn("relative grid grid-cols-[44px_1fr] gap-x-5 sm:gap-x-7", !isLast && "pb-10 sm:pb-12")}
    >
      {!isLast && (
        <>
          <span aria-hidden="true" className="absolute top-11 bottom-0 left-[21.5px] w-px bg-line" />
          <motion.span
            aria-hidden="true"
            className="absolute top-11 bottom-0 left-[21.5px] w-px origin-top bg-accent"
            initial={{ scaleY: 0 }}
            animate={active ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: reduce ? 0 : 0.5, ease: "easeOut", delay: reduce ? 0 : 0.25 }}
          />
        </>
      )}

      <motion.span
        aria-hidden="true"
        className="relative z-10 grid h-11 w-11 place-items-center rounded-md border text-[13px] font-semibold tabular-nums"
        initial={{ backgroundColor: WHITE, borderColor: LINE, color: TEAL }}
        animate={
          active
            ? { backgroundColor: TEAL, borderColor: TEAL, color: WHITE }
            : { backgroundColor: WHITE, borderColor: LINE, color: TEAL }
        }
        transition={{ duration: reduce ? 0 : 0.4, ease: "easeOut" }}
      >
        {String(index + 1).padStart(2, "0")}
      </motion.span>

      <motion.div variants={content} className="pt-1.5">
        <h3 className="m-0 text-[18px] leading-snug font-medium text-ink sm:text-[20px]">
          {step.title}
        </h3>
        <p className="m-0 mt-2 text-[15px] leading-relaxed text-ink-3">{step.note}</p>
      </motion.div>
    </motion.li>
  );
}

export function HowItWorks() {
  return (
    <section
      id="how"
      aria-labelledby="how-h"
      className="bg-tint pt-[calc(var(--section-y)/2)] pb-(--section-y)"
    >
      <div className="wrap">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Eyebrow>How CareShift works</Eyebrow>
            <SectionHeading id="how-h">From shift activity to a clear handoff.</SectionHeading>
          </Reveal>

          <ol className="m-0 mt-12 list-none p-0 sm:mt-14">
            {STEPS.map((step, i) => (
              <Step key={step.title} step={step} index={i} isLast={i === STEPS.length - 1} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
