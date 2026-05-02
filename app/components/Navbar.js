"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["/#about", "/#skills", "/#projects", "/#contact"];

  return (
    <section className="section-shell pt-6 sm:pt-8">
      <div className="glass-panel px-5 py-4 sm:px-6">
        {/* ── Top row ── */}
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="font-display text-lg font-bold tracking-[0.18em] text-white">
            LASITHA
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 text-sm text-white/65 md:flex">
            <Link className="transition hover:text-[#7FFFD4]" href="/#about">About</Link>
            <Link className="transition hover:text-[#7FFFD4]" href="/#skills">Skills</Link>
            <Link className="transition hover:text-[#7FFFD4]" href="/#projects">Projects</Link>
            <Link className="transition hover:text-[#7FFFD4]" href="/#contact">Contact</Link>
          </nav>

          {/* Mobile burger */}
          <button
            className="flex flex-col gap-1.5 p-2 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            <span
              className="h-0.5 w-6 rounded-full bg-white/80 transition-all duration-200"
              style={open ? { transform: "translateY(8px) rotate(45deg)" } : {}}
            />
            <span
              className="h-0.5 w-6 rounded-full bg-white/80 transition-all duration-200"
              style={open ? { opacity: 0 } : {}}
            />
            <span
              className="h-0.5 w-6 rounded-full bg-white/80 transition-all duration-200"
              style={open ? { transform: "translateY(-8px) rotate(-45deg)" } : {}}
            />
          </button>
        </div>

        {/* ── Mobile dropdown ── */}
        {open && (
          <nav className="mt-4 flex flex-col gap-1 border-t border-[#7FFFD4]/12 pt-4 md:hidden">
            {links.map((href) => {
              const name = href.split("#")[1];
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-white/65 transition hover:bg-[#00C896]/10 hover:text-[#7FFFD4]"
                >
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </section>
  );
}
