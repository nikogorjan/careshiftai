"use client";

import Image from "next/image";
import { useState } from "react";
import { Btn } from "@/components/Btn";
import { cn } from "@/lib/cn";
import logo from "@/public/careshift-logo.png";

const LINKS = [
  { href: "#reality", label: "The problem" },
  { href: "#mission", label: "Our mission" },
  { href: "#voices", label: "Voices" },
];

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <div className="wrap flex h-18 items-center justify-between">
        <a href="#top" aria-label="CareShift home" className="flex items-center gap-3 no-underline">
          <Image src={logo} alt="CareShift logo" className="h-8 w-auto" priority />
          <b className="font-display text-xl font-medium tracking-[-0.02em] text-ink">CareShift</b>
        </a>

        <nav
          aria-label="Primary"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex"
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] text-ink-2 no-underline transition-colors duration-150 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Btn href="#stay" variant="primary" className="hidden sm:inline-flex">
            Stay updated
          </Btn>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-10 w-10 cursor-pointer place-items-center rounded-sm border border-line bg-white text-ink lg:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              aria-hidden="true"
              className="h-5 w-5"
            >
              {menuOpen ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Full-screen mobile menu, 150ms fade only. */}
      <div
        className={cn(
          "fixed inset-x-0 top-18 bottom-0 z-40 bg-white transition-opacity duration-150 lg:hidden",
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav aria-label="Menu" className="wrap flex flex-col gap-6 pt-10">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-2xl font-normal tracking-[-0.02em] text-ink no-underline transition-colors duration-150 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <Btn
            href="#stay"
            variant="primary"
            onClick={() => setMenuOpen(false)}
            className="mt-2 self-start"
          >
            Stay updated
          </Btn>
        </nav>
      </div>
    </header>
  );
}
