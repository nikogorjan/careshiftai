import type { Metadata } from "next";
import { Instrument_Sans, Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-inter",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CareShift | Fixing the nursing handoff",
  description: "A mission to fix the nursing handoff, built with nurses, not at them.",
  openGraph: {
    title: "CareShift | Fixing the nursing handoff",
    description: "A mission to fix the nursing handoff, built with nurses, not at them.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${instrument.variable} scroll-smooth`}>
      <body className={inter.className} id="top">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
