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

const colHeading = "mb-4 text-[13px] font-medium tracking-[0.08em] text-white/45 uppercase";
const colLink =
  "mb-3 block text-[15px] text-white/80 no-underline transition-colors duration-150 hover:text-accent";

export function Footer() {
  return (
    <footer className="bg-dark pt-20 pb-10 text-white/70">
      <div className="wrap">
        <div className="flex flex-wrap items-start justify-between gap-12">
          <div>
            <a href="#top" aria-label="CareShift home" className="inline-block no-underline">
              <Image src={mark} alt="CareShift" className="h-16 w-16 rounded-lg object-contain" />
            </a>
            <p className="mt-5 max-w-[36ch] text-[15px] text-white/60">
              A mission to fix the nursing handoff, built with nurses, not at them.
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

        <div className="mt-12 flex flex-wrap justify-between gap-4 border-t border-white/10 pt-6 text-[13px] text-white/45">
          <span>© 2026 CareShift. Made with care, for the people who give it.</span>
          <span>Privacy · Terms</span>
        </div>
      </div>
    </footer>
  );
}
