import Image from "next/image";
import Link from "next/link";
import mark from "@/public/careshift-mark.webp";

const EXPLORE = [
  { href: "/#reality", label: "The problem" },
  { href: "/#mission", label: "Our mission" },
  { href: "/#voices", label: "Voices" },
  { href: "/#stay", label: "Stay updated" },
];

const ADDRESS_LINES = ["6060 N Central Expy", "Dallas, TX 75206"];
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  ADDRESS_LINES.join(", "),
)}`;

const colHeading = "mb-4 text-[13px] font-medium tracking-[0.08em] text-white/45 uppercase";
const colLink =
  "mb-3 block text-[15px] text-white/80 no-underline transition-colors duration-150 hover:text-accent";

export function Footer() {
  return (
    <footer className="bg-dark pt-20 pb-10 text-white/70">
      <div className="wrap">
        <div className="flex flex-wrap items-start justify-between gap-12">
          <div>
            <Link href="/" aria-label="CareShift home" className="inline-block no-underline">
              <Image src={mark} alt="CareShift" className="h-16 w-16 rounded-lg object-contain" />
            </Link>
            <p className="mt-5 max-w-[36ch] text-[15px] text-white/60">
              A mission to fix the nursing handoff, built with nurses, not at them.
            </p>
          </div>

          <div className="flex flex-wrap gap-16">
            <div>
              <h4 className={colHeading}>Explore</h4>
              {EXPLORE.map((link) => (
                <Link key={link.href} href={link.href} className={colLink}>
                  {link.label}
                </Link>
              ))}
            </div>
            <div>
              <h4 className={colHeading}>Contact</h4>
              <a href="mailto:caroline@careshiftai.com" className={colLink}>
                caroline@careshiftai.com
              </a>
              <a href="tel:+12142335271" className={colLink}>
                214-233-5271
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener"
                className="mb-3 block no-underline"
              >
                {ADDRESS_LINES.map((line) => (
                  <span key={line} className="block text-[15px] leading-normal text-white/60">
                    {line}
                  </span>
                ))}
              </a>
              <Link href="/#stay" className={colLink}>
                Share your story
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-between gap-4 border-t border-white/10 pt-6 text-[13px] text-white/45">
          <span>© 2026 CareShift. Made with care, for the people who give it.</span>
          <span>
            <Link href="/privacy" className="text-white/45 no-underline transition-colors duration-150 hover:text-accent">
              Privacy
            </Link>
            {" · "}
            <Link href="/terms" className="text-white/45 no-underline transition-colors duration-150 hover:text-accent">
              Terms
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
