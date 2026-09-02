import { Eyebrow } from "@/components/Eyebrow";
import { SectionHeading } from "@/components/SectionHeading";
import { HINT, SignupForm } from "@/components/SignupCard";

export function ClosingCta() {
  return (
    <section id="stay" aria-labelledby="close-h" className="bg-white py-20 lg:py-32">
      <div className="wrap grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left: sticky intro with the disclaimer at the bottom. */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            <Eyebrow>Join the mission</Eyebrow>
            <SectionHeading id="close-h">Be part of fixing this.</SectionHeading>
            <p className="mt-5 max-w-[44ch] text-[17px] text-ink-2">
              No demos, no pitch. Just updates from a team of clinicians working to make shift
              change safer, and an open invitation to tell us how the handoff really feels on your
              floor.
            </p>
            <div className="mt-10 hidden lg:block">
              <div aria-hidden="true" className="mb-3 h-px w-6 bg-accent" />
              <p className="m-0 max-w-[44ch] text-sm text-ink-3">{HINT}</p>
            </div>
          </div>
        </div>

        {/* Right: the form on plain white. */}
        <div className="lg:col-span-6 lg:col-start-7">
          <SignupForm />
        </div>
      </div>
    </section>
  );
}
