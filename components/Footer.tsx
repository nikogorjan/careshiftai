import Image from "next/image";
import mark from "@/public/careshift-mark.webp";

const EXPLORE = [
  { href: "#reality", label: "The problem" },
  { href: "#mission", label: "Our mission" },
  { href: "#voices", label: "Voices" },
  { href: "#stay", label: "Stay updated" },
];

const CONTACT = [
  { href: "mailto:hello@careshift.health", label: "hello@careshift.health" },
  { href: "#stay", label: "Share your story" },
];

const colHeading =
  "mb-4 text-[.78rem] font-bold tracking-[.12em] text-sky-700 uppercase";
const colLink = "mb-2.75 block text-[.96rem] text-sky-300 no-underline hover:text-white";

export function Footer() {
  return (
    <footer className="bg-navy-deep pt-18 pb-11 text-[#b9c7e0]">
      <div className="wrap">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <div>
            <a href="#top" aria-label="CareShift home" className="flex items-center gap-3 no-underline">
              <Image src={mark} alt="" aria-hidden="true" className="h-10 w-10 rounded-[10px] object-contain" />
              <b className="text-[1.4rem] font-semibold tracking-[-0.01em] text-white">CareShift</b>
            </a>
            <p className="mt-3.5 max-w-[34ch] text-[.95rem] text-sky-600">
              A mission to fix the nursing handoff — built with nurses, not at them.
            </p>
          </div>

          <div className="flex flex-wrap gap-16">
            <div>
              <h4 className={colHeading}>Explore</h4>
              {EXPLORE.map((link) => (
                <a key={link.href} href={link.href} className={colLink}>
                  {link.label}
                </a>
              ))}
            </div>
            <div>
              <h4 className={colHeading}>Contact</h4>
              {CONTACT.map((link) => (
                <a key={link.href} href={link.href} className={colLink}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-11 flex flex-wrap justify-between gap-5 border-t border-white/10 pt-6 text-[.85rem] text-sky-700">
          <span>© 2026 CareShift. Made with care, for the people who give it.</span>
          <span>Privacy · Terms</span>
        </div>
      </div>
    </footer>
  );
}
