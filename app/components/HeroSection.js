export default function HeroSection() {
  return (
    <section className="section-shell pb-12 pt-8 md:pb-18 md:pt-14">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-6">

        {/* ── Left: content ── */}
        <div className="space-y-7 text-center lg:text-left">

          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.32em] text-[#7FFFD4]/75">
              Hello, I&apos;m
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl xl:text-[4.4rem]">
              Lasitha&nbsp;
              <br className="hidden sm:block" />
              <span className="hero-gradient-text">Dhananjaya</span>
            </h1>
            <p className="mx-auto max-w-lg text-base leading-8 text-slate-300 md:text-lg lg:mx-0">
              Dynamic and results-oriented Mechanical Engineer with 2+ years of
              industrial experience in machine design, project handling, and
              process optimization. Seeking to contribute technical excellence
              and innovation to forward-thinking engineering teams.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a className="button-primary" href="#contact">
              Hire Me
            </a>
            <a className="button-secondary flex items-center gap-2.5" href="#projects">
              <span className="hero-globe-icon" aria-hidden="true">
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none">
                  <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.4" />
                  <ellipse cx="10" cy="10" rx="3.8" ry="8.5" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M1.5 10h17M3 5.5h14M3 14.5h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </span>
              Latest Work
            </a>
          </div>
        </div>

        {/* ── Right: person image ── */}
        <div className="hero-person-wrap">
          {/* decorative glow blob */}
          <div className="hero-person-blob" />

          {/* person photo — drop your image at public/profile.png */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/profile.png"
            alt="Lasitha Dhananjaya — Mechanical Engineer"
            className="hero-img"
            draggable="false"
          />

          {/* floating tech chips — hidden on small phones */}
          <div className="floating-chip hero-chip-tl hidden sm:block">Mechanical Design Engineer</div>
          <div className="floating-chip hero-chip-tr hidden sm:block">2+ Years Experience</div>
          <div className="floating-chip hero-chip-br hidden sm:block">Graduated in University of Moratuwa</div>
        </div>

      </div>
    </section>
  );
}
