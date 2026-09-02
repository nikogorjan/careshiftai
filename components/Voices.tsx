"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Eyebrow } from "@/components/Eyebrow";
import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { voices } from "@/lib/voices";

const FADE_MS = 300;

const arrowBtn =
  "grid h-10 w-10 cursor-pointer place-items-center rounded-sm border border-white bg-transparent " +
  "text-white transition-colors duration-150 hover:bg-white/10";

export function Voices() {
  const [index, setIndex] = useState(0);
  const [switching, setSwitching] = useState(false);
  const reduced = useReducedMotion();
  const fadeTimer = useRef<number | undefined>(undefined);

  /** Fades to `next`, wrapping at either end. No autoplay. */
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

  const voice = voices[index];
  const fade = cn(
    "transition-opacity duration-300 ease-out motion-reduce:transition-none",
    switching ? "opacity-0" : "opacity-100",
  );

  return (
    <section id="voices" aria-labelledby="voices-h" className="bg-white py-20 lg:py-32">
      <div className="wrap">
        <div className="mb-12 max-w-180 lg:mb-16">
          <Eyebrow>Voices</Eyebrow>
          <SectionHeading id="voices-h">
            Nurses and clinicians who believe in this mission.
          </SectionHeading>
        </div>

        <div aria-live="polite" className="rounded-lg bg-dark p-12 lg:p-24">
          <blockquote
            className={cn(
              "m-0 min-h-[7.5em] max-w-[28ch] font-display text-[24px] leading-[1.25] font-normal tracking-[-0.02em] text-white lg:text-[32px]",
              fade,
            )}
          >
            &ldquo;{voice.quote}&rdquo;
          </blockquote>

          <div className={cn("mt-10 flex items-center gap-4", fade)}>
            <span className="grid h-10 w-10 flex-none place-items-center rounded-full border border-white/25 bg-white/10 text-[13px] font-medium text-white">
              {voice.initials}
            </span>
            <span className="flex flex-col">
              <span className="text-[15px] font-medium text-white">{voice.name}</span>
              <span className="text-sm text-white/60">{voice.role}</span>
            </span>
          </div>

          <div className="mt-12 flex items-center justify-between gap-6">
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
                    "h-1.5 w-1.5 cursor-pointer rounded-full border-none p-0 transition-colors duration-150",
                    i === index ? "bg-white" : "bg-white/40",
                  )}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
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
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-4.5 w-4.5"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
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
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-4.5 w-4.5"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
