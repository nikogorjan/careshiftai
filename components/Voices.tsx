"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { voices } from "@/lib/voices";

const ADVANCE_MS = 7000;
const FADE_MS = 340;

const arrowBtn =
  "grid h-12.5 w-12.5 cursor-pointer place-items-center rounded-full border-[1.5px] border-white/20 " +
  "bg-white/5 text-white transition-[transform,background,border-color] duration-150 hover:-translate-y-0.5 " +
  "hover:border-white/40 hover:bg-white/10 motion-reduce:hover:transform-none";

export function Voices() {
  const [index, setIndex] = useState(0);
  const [switching, setSwitching] = useState(false);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const fadeTimer = useRef<number | undefined>(undefined);

  /** Cross-fades to `next`, wrapping at either end. */
  const goTo = useCallback(
    (next: number) => {
      const target = (next + voices.length) % voices.length;
      setIndex((current) => {
        if (target === current) return current;
        if (reduced) return target;
        setSwitching(true);
        window.clearTimeout(fadeTimer.current);
        fadeTimer.current = window.setTimeout(() => {
          setIndex(target);
          setSwitching(false);
        }, FADE_MS);
        return current;
      });
    },
    [reduced],
  );

  useEffect(() => () => window.clearTimeout(fadeTimer.current), []);

  useEffect(() => {
    if (reduced || paused) return;
    const id = window.setInterval(() => goTo(index + 1), ADVANCE_MS);
    return () => window.clearInterval(id);
  }, [goTo, index, paused, reduced]);

  const voice = voices[index];
  const fade = cn(
    "transition-[opacity,transform] duration-[450ms] ease-out motion-reduce:transition-none",
    switching ? "translate-y-3.5 opacity-0" : "translate-y-0 opacity-100",
  );

  return (
    <section
      id="voices"
      aria-labelledby="voices-h"
      className="relative z-[1] mx-[clamp(8px,1.5vw,20px)] mt-[clamp(10px,1.4vw,18px)] overflow-hidden rounded-panel bg-navy-deep py-[clamp(60px,6.5vw,104px)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[42%] left-1/2 aspect-square w-[min(760px,80%)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(27,164,175,.20),transparent_62%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[4%] bottom-[6%] aspect-square w-[clamp(280px,30vw,440px)] rounded-full bg-[radial-gradient(circle,rgba(10,47,110,.6),transparent_70%)]"
      />

      <div className="wrap relative z-[1]">
        <Reveal className="mx-auto mb-[clamp(34px,4vw,54px)] max-w-[720px] text-center">
          <Eyebrow tone="bright">Voices</Eyebrow>
          <SectionHeading id="voices-h" className="text-white">
            Nurses and clinicians who believe in this mission.
          </SectionHeading>
        </Reveal>

        <div
          aria-live="polite"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="mx-auto flex max-w-[1000px] flex-col items-center justify-center text-center"
        >
          <blockquote
            className={cn(
              "mx-auto max-w-[34ch] text-[clamp(1.25rem,2.2vw,1.9rem)] leading-[1.3] font-semibold tracking-[-0.02em] text-balance text-white",
              fade,
            )}
          >
            &ldquo;{voice.quote}&rdquo;
          </blockquote>

          <div
            className={cn(
              "mt-[clamp(20px,2vw,28px)] inline-flex flex-col items-center gap-3",
              fade,
            )}
          >
            <span className="grid h-14 w-14 flex-none place-items-center rounded-full bg-teal text-base font-extrabold tracking-[.02em] text-[#00232c]">
              {voice.initials}
            </span>
            <span className="flex flex-col gap-0.75 text-center">
              <span className="text-[1.05rem] font-bold tracking-[-0.01em] text-white">
                {voice.name}
              </span>
              <span className="max-w-[40ch] text-[.9rem] leading-[1.35] text-sky-500">
                {voice.role}
              </span>
            </span>
          </div>
        </div>

        <Reveal
          d={1}
          className="mt-[clamp(34px,4vw,52px)] flex items-center justify-center gap-5.5"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button
            type="button"
            aria-label="Previous voice"
            onClick={() => goTo(index - 1)}
            className={arrowBtn}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div role="tablist" aria-label="Choose a voice" className="flex items-center gap-2.5">
            {voices.map((v, i) => (
              <button
                key={v.name}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Voice ${i + 1}: ${v.name}`}
                onClick={() => goTo(i)}
                className={cn(
                  "h-2.25 cursor-pointer rounded-full border-none p-0 transition-[width,background] duration-[250ms]",
                  i === index ? "w-7 bg-teal" : "w-2.25 bg-white/25",
                )}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next voice"
            onClick={() => goTo(index + 1)}
            className={arrowBtn}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </Reveal>
      </div>
    </section>
  );
}
