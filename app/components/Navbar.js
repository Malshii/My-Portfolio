"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <section className="section-shell pt-6 sm:pt-8">
      <div className="glass-panel px-5 py-4 sm:px-6">
        {/* ── Top row ── */}
        <div className="flex items-center justify-between gap-6">
          <p className="font-display text-lg font-bold tracking-[0.18em] text-white">
            LASITHA
          </p>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 text-sm text-white/65 md:flex">
            <a className="transition hover:text-[#7FFFD4]" href="#about">About</a>
            <a className="transition hover:text-[#7FFFD4]" href="#skills">Skills</a>
            <a className="transition hover:text-[#7FFFD4]" href="#projects">Projects</a>
            <a className="transition hover:text-[#7FFFD4]" href="#contact">Contact</a>
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
            {["#about", "#skills", "#projects", "#contact"].map((href) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-white/65 transition hover:bg-[#00C896]/10 hover:text-[#7FFFD4]"
              >
                {href.replace("#", "").charAt(0).toUpperCase() + href.replace("#", "").slice(1)}
              </a>
            ))}
          </nav>
        )}
      </div>
    </section>
  );
}
