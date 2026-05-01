export default function Navbar() {
  return (
    <section className="section-shell pt-8">
      <div className="glass-panel flex items-center justify-between gap-6 px-5 py-4 sm:px-6">
        <div>
          <p className="font-display text-lg tracking-[0.18em] text-white/88">
            Lasitha Dhananjaya
          </p>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-white/65 md:flex">
          <a className="transition hover:text-[#7FFFD4]" href="#about">
            About
          </a>
          <a className="transition hover:text-[#7FFFD4]" href="#skills">
            Skills
          </a>
          <a className="transition hover:text-[#7FFFD4]" href="#projects">
            Projects
          </a>
          <a className="transition hover:text-[#7FFFD4]" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </section>
  );
}
