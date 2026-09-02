"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/cn";

const ROLES = ["Nurse", "Physician", "Other"];

const field =
  "h-12 w-full rounded-sm border border-[#c9dcde] bg-white px-3.5 text-[15px] text-ink " +
  "placeholder:text-ink-3 focus:border-accent focus:ring-[3px] focus:ring-accent/20 focus:outline-none";

const label = "text-sm font-medium text-ink";
const optional = "font-normal text-ink-3";

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

/**
 * Mailing-list form in a tinted panel. There is no backend yet: a valid
 * submission shows a brief loading state, then the confirmation line.
 */
export function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [story, setStory] = useState("");
  const [role, setRole] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const roleRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const submit = () => {
    if (!validEmail(email)) {
      setError("Please enter a valid email so we can keep you posted.");
      return;
    }
    setError("");
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setDone(true);
    }, 600);
  };

  /** Arrow keys move the segmented selection like a radio group. */
  const onRoleKey = (e: React.KeyboardEvent, i: number) => {
    let next: number | null = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (i + 1) % ROLES.length;
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (i - 1 + ROLES.length) % ROLES.length;
    if (next === null) return;
    e.preventDefault();
    setRole(ROLES[next]);
    roleRefs.current[next]?.focus();
  };

  return (
    <div className="relative rounded-lg bg-[#e4f2f3] p-8 lg:p-12">
      {/* The form fades out on success; the panel keeps its height. */}
      <div
        aria-hidden={done || undefined}
        className={cn(
          "flex flex-col gap-5 transition-opacity duration-150",
          done && "pointer-events-none opacity-0",
        )}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
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
            aria-describedby={error ? "email-error" : undefined}
            className={cn(field, error && "border-[#b42318]")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && (
            <p id="email-error" role="alert" className="m-0 -mt-0.5 text-[13px] text-[#b42318]">
              {error}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <p id="role-label" className={cn(label, "m-0")}>
            Role <span className={optional}>(optional)</span>
          </p>
          <div
            role="radiogroup"
            aria-labelledby="role-label"
            className="flex flex-col overflow-hidden rounded-sm border border-[#c9dcde] bg-white min-[400px]:flex-row"
          >
            {ROLES.map((r, i) => {
              const selected = role === r;
              return (
                <button
                  key={r}
                  ref={(el) => {
                    roleRefs.current[i] = el;
                  }}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  tabIndex={selected || (role === null && i === 0) ? 0 : -1}
                  onClick={() => setRole(r)}
                  onKeyDown={(e) => onRoleKey(e, i)}
                  className={cn(
                    "h-11 flex-1 cursor-pointer text-[15px] transition-colors duration-150",
                    "border-t border-[#c9dcde] first:border-t-0 min-[400px]:border-t-0 min-[400px]:border-l min-[400px]:first:border-l-0",
                    selected ? "bg-ink text-white" : "bg-white text-ink-2",
                  )}
                >
                  {r}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="story" className={label}>
            Share your handoff story <span className={optional}>(optional)</span>
          </label>
          <textarea
            id="story"
            placeholder="What gets lost at shift change, and what you wish it carried? We read every word."
            className={cn(field, "h-auto min-h-35 resize-none px-3.5 py-3")}
            value={story}
            onChange={(e) => setStory(e.target.value)}
          />
        </div>

        <button
          type="button"
          onClick={submit}
          disabled={loading}
          className="grid h-12 w-full cursor-pointer place-items-center rounded-sm bg-ink text-[15px] leading-none font-medium text-white transition-colors duration-150 hover:bg-accent-strong"
        >
          {loading ? (
            <span
              aria-label="Sending"
              className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
            />
          ) : (
            "Keep me posted"
          )}
        </button>
        <p className="m-0 -mt-2 text-[13px] text-ink-3">
          We&rsquo;ll only use your email to share mission updates. No spam, ever.
        </p>
      </div>

      {/* Confirmation, centered in the unchanged panel. */}
      <div
        aria-live="polite"
        className={cn(
          "absolute inset-0 grid place-items-center transition-opacity duration-150",
          done ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        {done && (
          <p className="m-0 font-display text-[22px] font-normal text-ink">
            Thanks, you&rsquo;re on the list.
          </p>
        )}
      </div>
    </div>
  );
}
