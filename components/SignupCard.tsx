"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/cn";

const ROLES = ["Nurse", "Physician", "Other"];

/* Underline fields on the teal section; autofill must not paint its own box. */
const field =
  "h-14 w-full rounded-none border-b border-white/35 bg-transparent px-0 text-lg text-white " +
  "placeholder:text-white/45 focus:border-b-2 focus:border-white focus:outline-none " +
  "[&:-webkit-autofill]:[box-shadow:inset_0_0_0_1000px_#147c86] [&:-webkit-autofill]:[-webkit-text-fill-color:#fff]";

const label = "flex items-baseline gap-1 text-[13px] tracking-[0.06em] text-white/70 uppercase";

export const HINT = "We'll only use your email to share mission updates. No spam, ever.";

/*
 * Submissions go to our own route, which forwards them to HubSpot. The portal
 * and form ids stay server side, so nothing about the CRM reaches the browser.
 */
const ENDPOINT = "/api/signup";

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

/**
 * Editorial underline form on the teal band. A valid submission fades the form
 * out and echoes the hint line in its place.
 */
export function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [story, setStory] = useState("");
  const [role, setRole] = useState<string | undefined>(undefined);
  const [error, setError] = useState("");
  const [sendError, setSendError] = useState(false);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async () => {
    if (!validEmail(email)) {
      setError("Please enter a valid email so we can keep you posted.");
      return;
    }
    setError("");
    setSendError(false);
    setSending(true);
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          role: role ?? "",
          story,
          pageUri: window.location.href,
          pageName: document.title,
        }),
      });
      if (res.ok) setDone(true);
      else setSendError(true);
    } catch {
      setSendError(true);
    } finally {
      setSending(false);
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
            Email <span className="text-white">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@hospital.org"
            aria-required="true"
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? "email-error" : undefined}
            className={cn(field, error && "border-[#ffd0cc]")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && (
            <p id="email-error" role="alert" className="m-0 text-[13px] text-[#ffd0cc]">
              {error}
            </p>
          )}
        </div>

        {/* Role: shadcn/ui Select on Radix primitives. */}
        <div className="flex flex-col gap-1.5">
          <span id="role-label" className={label}>
            Role <span className="normal-case">(optional)</span>
          </span>
          <Select value={role} onValueChange={setRole}>
            <SelectTrigger
              aria-labelledby="role-label"
              className={cn(
                field,
                "flex cursor-pointer items-center justify-between text-left data-[placeholder]:text-white/45",
              )}
            >
              <SelectValue placeholder="Select your role" />
            </SelectTrigger>
            <SelectContent>
              {ROLES.map((r) => (
                <SelectItem key={r} value={r}>
                  {r}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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
            disabled={sending}
            className="h-12 cursor-pointer rounded-sm bg-white px-7 text-[15px] leading-none font-medium text-ink transition-colors duration-150 hover:bg-ink hover:text-white disabled:cursor-default disabled:opacity-60"
          >
            {sending ? "Sending…" : "Keep me posted"}
          </button>
          {sendError && (
            <p role="alert" className="m-0 mt-3 text-[13px] text-[#ffd0cc]">
              Something went wrong on our end. Please try again in a moment.
            </p>
          )}
          {/* Below lg the disclaimer sits back under the button. */}
          <p className="m-0 mt-3 text-[13px] lg:hidden">
            <Link
              href="/privacy"
              className="text-white/60 underline decoration-white/30 underline-offset-2 transition-colors duration-150 hover:text-white"
            >
              {HINT}
            </Link>
          </p>
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
          <p className="m-0 max-w-[30ch] text-center font-display text-[22px] font-normal text-white">
            {HINT}
          </p>
        )}
      </div>
    </div>
  );
}
