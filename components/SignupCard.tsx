"use client";

import { useState } from "react";
import { Btn } from "@/components/Btn";
import { cn } from "@/lib/cn";

const field =
  "h-11 w-full rounded-sm border border-line bg-white px-3.5 text-[15px] text-ink " +
  "transition-colors duration-150 placeholder:text-ink-3 " +
  "focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none";

const label = "text-sm font-medium text-ink";
const optional = "font-normal text-ink-3";

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

/**
 * Mailing-list form. There is no backend yet, so a valid submission just swaps
 * the form for a thank-you panel.
 */
export function SignupForm() {
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
      <div className="py-6">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-accent">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="h-6 w-6"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="mt-6 mb-2 font-display text-2xl font-normal tracking-[-0.02em] text-ink">
          {name ? `Thank you, ${name}.` : "Thank you for being part of this."}
        </h3>
        <p className="max-w-[44ch] text-ink-2">
          {story.trim()
            ? "We'll keep you posted, and thank you for trusting us with your story. We read every word."
            : "We'll keep you posted as the mission moves forward."}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
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
        <div className="flex flex-col gap-2">
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

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className={label}>
          Email <span className="text-accent">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="you@hospital.org"
          aria-required="true"
          aria-invalid={error ? true : undefined}
          className={cn(field, error && "border-[#c0392b] ring-2 ring-[#c0392b]/15")}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError("");
          }}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="role" className={label}>
          Role <span className={optional}>(optional)</span>
        </label>
        <div className="relative">
          <select
            id="role"
            defaultValue=""
            className={cn(field, "cursor-pointer appearance-none pr-10 invalid:text-ink-3")}
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
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 right-3.5 h-4.5 w-4.5 -translate-y-1/2 text-ink-3"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="story" className={label}>
          Share your handoff story <span className={optional}>(optional)</span>
        </label>
        <textarea
          id="story"
          placeholder="What gets lost at shift change, and what you wish it carried? We read every word."
          className={cn(field, "h-auto min-h-28 resize-y py-3")}
          value={story}
          onChange={(e) => setStory(e.target.value)}
        />
      </div>

      {error && (
        <p role="alert" className="m-0 text-sm text-[#c0392b]">
          {error}
        </p>
      )}

      <Btn variant="primary" type="button" onClick={submit} className="mt-1 w-full">
        Keep me posted
      </Btn>
      <p className="m-0 text-[13px] text-ink-3">
        We&rsquo;ll only use your email to share mission updates. No spam, ever.
      </p>
    </div>
  );
}
