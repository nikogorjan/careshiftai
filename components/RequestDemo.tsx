"use client";

import { Btn } from "@/components/Btn";

/* Same booking link as the live site. */
const CALENDLY_URL = "https://calendly.com/kris-careshiftai/new-meeting";
const CALENDLY_JS = "https://assets.calendly.com/assets/external/widget.js";
const CALENDLY_CSS = "https://assets.calendly.com/assets/external/widget.css";

declare global {
  interface Window {
    Calendly?: { initPopupWidget: (options: { url: string }) => void };
  }
}

/** Loads the Calendly widget on first use, then opens the booking popup. */
export function openCalendly() {
  const launch = () => window.Calendly?.initPopupWidget({ url: CALENDLY_URL });
  if (window.Calendly) {
    launch();
    return;
  }
  if (!document.querySelector(`link[href="${CALENDLY_CSS}"]`)) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = CALENDLY_CSS;
    document.head.appendChild(link);
  }
  const existing = document.querySelector<HTMLScriptElement>(`script[src="${CALENDLY_JS}"]`);
  if (existing) {
    existing.addEventListener("load", launch, { once: true });
    return;
  }
  const script = document.createElement("script");
  script.src = CALENDLY_JS;
  script.onload = launch;
  document.body.appendChild(script);
}

/** The one Request Demo button, usable from server components. */
export function RequestDemoButton({
  variant = "onDark",
  className,
}: {
  variant?: "primary" | "onDark" | "onDarkSecondary";
  className?: string;
}) {
  return (
    <Btn variant={variant} type="button" onClick={openCalendly} className={className}>
      Request Demo
    </Btn>
  );
}
