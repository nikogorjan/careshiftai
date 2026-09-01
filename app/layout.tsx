import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  // The design leans on real italics (hero, founder quote, mission kicker),
  // so load the italic faces rather than letting the browser synthesise them.
  style: ["normal", "italic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CareShift — Fixing the nursing handoff",
  description: "A mission to fix the nursing handoff — built with nurses, not at them.",
  icons: { icon: "/careshift-mark.webp" },
  openGraph: {
    title: "CareShift — Fixing the nursing handoff",
    description: "A mission to fix the nursing handoff — built with nurses, not at them.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
