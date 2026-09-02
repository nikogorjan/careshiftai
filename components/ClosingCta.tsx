import { Eyebrow } from "@/components/Eyebrow";
import { SignupForm } from "@/components/SignupCard";

export function ClosingCta() {
  return (
    <section id="stay" aria-labelledby="close-h" className="bg-white py-20 lg:py-32">
      <div className="wrap">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-0">
          {/* Left: sticky intro. */}
          <div className="lg:border-r lg:border-line lg:pr-16">
            <div className="lg:sticky lg:top-28">
              <Eyebrow>Join the mission</Eyebrow>
              <h2
                id="close-h"
                className="font-display text-[32px] leading-[1.05] font-normal tracking-[-0.02em] text-balance text-ink lg:text-[48px]"
              >
                Be part of fixing this.
              </h2>
              <p className="mt-5 max-w-[52ch] text-ink-2">
                No demos, no pitch. Just updates from a team of clinicians working to make shift
                change safer, and an open invitation to tell us how the handoff really feels on your
                floor.
              </p>
            </div>
          </div>

          {/* Right: the form, no card wrapper. */}
          <div className="lg:pl-16">
            <SignupForm />
          </div>
        </div>
      </div>
    </section>
  );
}
