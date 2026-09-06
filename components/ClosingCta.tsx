import Link from "next/link";
import { Reveal } from "@/components/anim";
import { Eyebrow } from "@/components/Eyebrow";
import { RequestDemoButton } from "@/components/RequestDemo";
import { HINT, SignupForm } from "@/components/SignupCard";

export function ClosingCta() {
  return (
    <section
      id="stay"
      aria-labelledby="close-h"
      className="section-y border-b border-white/15 bg-accent-strong"
    >
      <div className="wrap grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left: sticky intro with the disclaimer at the bottom. */}
        <div className="lg:col-span-5">
          <Reveal className="lg:sticky lg:top-24">
            <Eyebrow tone="onDark">Join the mission</Eyebrow>
            <h2
              id="close-h"
              className="font-display text-[32px] leading-[1.05] font-normal tracking-[-0.02em] text-balance text-white lg:text-[48px]"
            >
              Be part of fixing this.
            </h2>
            <p className="mt-6 max-w-[44ch] text-[17px] text-white/85">
              No demos, no pitch. Just updates from a team of clinicians working to make shift
              change safer, and an open invitation to tell us how the handoff really feels on your
              floor.
            </p>
            <div className="mt-8">
              <RequestDemoButton />
            </div>
            <div className="mt-10 hidden lg:block">
              <div aria-hidden="true" className="mb-3 h-px w-6 bg-white/40" />
              <p className="m-0 max-w-[44ch] text-sm">
                <Link
                  href="/privacy"
                  className="text-white/60 underline decoration-white/30 underline-offset-2 transition-colors duration-150 hover:text-white"
                >
                  {HINT}
                </Link>
              </p>
            </div>
          </Reveal>
        </div>

        {/* Right: the form directly on the teal band. */}
        <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
          <SignupForm />
        </Reveal>
      </div>
    </section>
  );
}
