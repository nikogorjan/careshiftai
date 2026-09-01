"use client";

import { useState } from "react";
import { Btn } from "@/components/Btn";
import { cn } from "@/lib/cn";

const field =
  "w-full rounded-cs-sm border-[1.5px] border-line bg-soft px-4 py-3.25 text-base text-ink " +
  "transition-[border-color,box-shadow,background] duration-150 placeholder:text-[#9aa6b6] " +
  "focus:border-teal focus:bg-white focus:shadow-[0_0_0_4px_rgba(27,164,175,.16)] focus:outline-none";

const label = "text-[.86rem] font-semibold tracking-[-0.005em] text-navy";

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

/**
 * Mailing-list card. There is no backend yet, so a valid submission just swaps
 * the form for a thank-you panel.
 */
export function SignupCard() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [story, setStory] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  const submit = () => {
    if (!validEmail(email)) {
      setError("Please enter a valid email so we can keep you posted.");
      return;
    }
    setError("");
    setDone(true);
  };

  if (done) {
    const name = firstName.trim();
    return (
      <div className="animate-fadein rounded-cs-xl bg-white p-[clamp(26px,2.6vw,40px)] text-center shadow-card">
        <div className="py-[clamp(20px,3vw,40px)]">
          <div className="mx-auto mb-5 grid h-15.5 w-15.5 place-items-center rounded-full bg-teal">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-7.5 w-7.5"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <h3 className="mb-2.5 text-2xl text-navy">
            {name ? `Thank you, ${name}.` : "Thank you for being part of this."}
          </h3>
          <p className="mx-auto max-w-[36ch] text-body">
            {story.trim()
              ? "We'll keep you posted — and thank you for trusting us with your story. We read every word."
              : "We'll keep you posted as the mission moves forward."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-cs-xl bg-white p-[clamp(26px,2.6vw,40px)] shadow-card">
      <div className="flex flex-col gap-4.5">
        <div className="grid grid-cols-1 gap-4 tab:grid-cols-2">
          <div className="flex flex-col gap-1.75">
            <label htmlFor="firstName" className={label}>
              First name
            </label>
            <input
              id="firstName"
              type="text"
              autoComplete="given-name"
              placeholder="Jordan"
              className={field}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1.75">
            <label htmlFor="lastName" className={label}>
              Last name
            </label>
            <input
              id="lastName"
              type="text"
              autoComplete="family-name"
              placeholder="Rivera"
              className={field}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.75">
          <label htmlFor="email" className={label}>
            Email <span className="text-teal-ink">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@hospital.org"
            aria-required="true"
            aria-invalid={error ? true : undefined}
            className={cn(
              field,
              error && "border-[#d4564a] shadow-[0_0_0_4px_rgba(212,86,74,.12)]",
            )}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError("");
            }}
          />
        </div>

        <div className="flex flex-col gap-1.75">
          <label htmlFor="role" className={label}>
            Role <span className="font-medium text-muted">(optional)</span>
          </label>
          <div className="relative">
            <select
              id="role"
              defaultValue=""
              className={cn(field, "cursor-pointer appearance-none pr-11 invalid:text-[#9aa6b6]")}
            >
              <option value="" disabled>
                Select your role
              </option>
              <option value="nurse">Nurse</option>
              <option value="physician">Physician</option>
              <option value="other">Other</option>
            </select>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 right-4 h-4.5 w-4.5 -translate-y-1/2 text-muted"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>

        <div className="flex flex-col gap-1.75">
          <label htmlFor="story" className={label}>
            Share your handoff story <span className="font-medium text-muted">(optional)</span>
          </label>
          <textarea
            id="story"
            placeholder="What gets lost at shift change — and what you wish it carried? We read every word."
            className={cn(field, "min-h-24 resize-y")}
            value={story}
            onChange={(e) => setStory(e.target.value)}
          />
        </div>

        {error && (
          <p role="alert" className="m-0 text-[.88rem] text-[#c0392b]">
            {error}
          </p>
        )}

        <Btn variant="tealSolid" type="button" onClick={submit} className="mt-1 w-full justify-center">
          Keep me posted
        </Btn>
        <p className="m-0 text-center text-[.8rem] text-muted">
          We&rsquo;ll only use your email to share mission updates. No spam, ever.
        </p>
      </div>
    </div>
  );
}
