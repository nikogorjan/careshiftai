"use client";

import { useEffect, useRef } from "react";
import { Reveal } from "@/components/anim";
import { RequestDemoButton } from "@/components/RequestDemo";
import { useReducedMotion } from "@/lib/useReducedMotion";

const VIDEO_SRC = "https://bloom42-media.s3.eu-central-1.amazonaws.com/nurse.mp4";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) videoRef.current?.pause();
  }, [reduced]);

  return (
    <section aria-label="Introduction" className="relative flex min-h-[88vh] items-end bg-dark">
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        autoPlay={!reduced}
        loop={!reduced}
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Single neutral scrim from the bottom-left corner for text legibility. */}
      <div aria-hidden="true" className="photo-scrim absolute inset-0" />

      <div className="wrap relative w-full pb-(--section-y)">
        <div className="max-w-235">
          <Reveal>
            <h1 className="font-display text-[34px] leading-[1.08] font-normal tracking-[-0.02em] text-balance text-white lg:text-[54px]">
              Enterprise-Grade AI for Nursing Shift Communication &amp; Continuity of Care
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 max-w-[58ch] text-white/85">
              Keep critical patient context moving from shift to shift, with clearer handoffs,
              better accountability, and less administrative burden for nurses.
            </p>
          </Reveal>
          <Reveal delay={240} className="mt-8">
            <RequestDemoButton />
          </Reveal>
          <Reveal delay={360}>
            <p className="mt-10 font-display text-xl leading-snug font-normal tracking-[-0.01em] text-white lg:text-2xl">
              Begin Your Shift With Clarity.{" "}
              <span className="text-white/70">End With Confidence.</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
