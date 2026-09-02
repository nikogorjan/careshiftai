"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

const ROLES = ["Nurse", "Physician", "Other"];

const field =
  "h-14 w-full rounded-none border-b border-line bg-transparent px-0 text-lg text-ink " +
  "placeholder:text-ink-3 focus:border-b-2 focus:border-accent focus:outline-none";

const label = "flex items-baseline gap-1 text-[13px] tracking-[0.06em] text-ink-3 uppercase";

export const HINT = "We'll only use your email to share mission updates. No spam, ever.";

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

/**
 * Editorial underline form on plain white. No backend yet: a valid submission
 * fades the form out and echoes the hint line in its place.
 */
export function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [story, setStory] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  // Custom listbox state.
  const [role, setRole] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [hi, setHi] = useState(0);
  const roleWrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => {
      if (!roleWrap.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open]);

  const submit = () => {
    if (!validEmail(email)) {
      setError("Please enter a valid email so we can keep you posted.");
      return;
    }
    setError("");
    setDone(true);
  };

  const onRoleKey = (e: React.KeyboardEvent) => {
    if (!open) {
      if (["Enter", " ", "ArrowDown", "ArrowUp"].includes(e.key)) {
        e.preventDefault();
        setHi(role ? ROLES.indexOf(role) : 0);
        setOpen(true);
      }
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHi((h) => (h + 1) % ROLES.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHi((h) => (h - 1 + ROLES.length) % ROLES.length);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setRole(ROLES[hi]);
      setOpen(false);
    } else if (e.key === "Escape" || e.key === "Tab") {
      setOpen(false);
    }
  };

  return (
    <div className="relative">
      {/* The form fades out on success; the block keeps its height. */}
      <div
        aria-hidden={done || undefined}
        className={cn(
          "flex flex-col gap-8 transition-opacity duration-150",
          done && "pointer-events-none opacity-0",
        )}
      >
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
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
          <div className="flex flex-col gap-1.5">
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

        <div className="flex flex-col gap-1.5">
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
            <p id="email-error" role="alert" className="m-0 text-[13px] text-[#b42318]">
              {error}
            </p>
          )}
        </div>

        {/* Custom listbox in the underline system. */}
        <div className="flex flex-col gap-1.5">
          <span id="role-label" className={label}>
            Role <span className="normal-case">(optional)</span>
          </span>
          <div ref={roleWrap} className="relative">
            <button
              type="button"
              role="combobox"
              aria-haspopup="listbox"
              aria-expanded={open}
              aria-labelledby="role-label"
              aria-controls="role-listbox"
              aria-activedescendant={open ? `role-opt-${hi}` : undefined}
              onClick={() => {
                setHi(role ? ROLES.indexOf(role) : 0);
                setOpen((o) => !o);
              }}
              onKeyDown={onRoleKey}
              className={cn(field, "flex cursor-pointer items-center justify-between text-left")}
            >
              <span className={role ? "text-ink" : "text-ink-3"}>{role ?? "Select your role"}</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className={cn("h-5 w-5 flex-none text-ink-3 transition-transform duration-150", open && "rotate-180")}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {open && (
              <ul
                id="role-listbox"
                role="listbox"
                aria-labelledby="role-label"
                className="absolute inset-x-0 top-full z-10 m-0 mt-1 list-none rounded-sm border border-line bg-white p-0"
              >
                {ROLES.map((r, i) => (
                  <li
                    key={r}
                    id={`role-opt-${i}`}
                    role="option"
                    aria-selected={role === r}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      setRole(r);
                      setOpen(false);
                    }}
                    onMouseEnter={() => setHi(i)}
                    className={cn(
                      "flex h-11 cursor-pointer items-center justify-between px-3.5 text-[15px] text-ink",
                      hi === i && "bg-[#e4f2f3]",
                    )}
                  >
                    {r}
                    {role === r && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className="h-4 w-4 text-accent"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="story" className={label}>
            Share your handoff story <span className="normal-case">(optional)</span>
          </label>
          <textarea
            id="story"
            placeholder="What gets lost at shift change, and what you wish it carried? We read every word."
            className={cn(field, "h-auto min-h-24 resize-none pt-3")}
            value={story}
            onChange={(e) => setStory(e.target.value)}
          />
        </div>

        <div className="mt-2">
          <button
            type="button"
            onClick={submit}
            className="h-12 cursor-pointer rounded-sm bg-ink px-7 text-[15px] leading-none font-medium text-white transition-colors duration-150 hover:bg-accent-strong"
          >
            Keep me posted
          </button>
          {/* Below lg the disclaimer sits back under the button. */}
          <p className="m-0 mt-3 text-[13px] text-ink-3 lg:hidden">{HINT}</p>
        </div>
      </div>

      {/* Success: the hint line echoed in the form's place. */}
      <div
        aria-live="polite"
        className={cn(
          "absolute inset-0 grid place-items-center transition-opacity duration-150",
          done ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        {done && (
          <p className="m-0 max-w-[30ch] text-center font-display text-[22px] font-normal text-ink">
            {HINT}
          </p>
        )}
      </div>
    </div>
  );
}
