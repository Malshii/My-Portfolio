import { contactLinks } from "./data/contactLinks";

export default function ContactSection() {
  return (
    <section id="contact" className="section-shell py-10 pb-16 md:py-16 md:pb-24">
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="glass-panel p-7 md:p-8">
          <p className="section-label">Contact</p>
          <h2 className="section-title mt-4 max-w-sm">
            Let&apos;s connect and discuss your next engineering challenge.
          </h2>
          <p className="mt-5 max-w-md text-base leading-8 text-slate-300">
            Open to engineering roles and industrial project collaborations in
            design, commissioning, process optimization, and automation.
          </p>

          <div className="mt-8 space-y-3">
            {contactLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="icon-link !w-full !justify-start"
                aria-label={link.name}
              >
                <span className="shrink-0">{link.icon}</span>
                <span className="flex flex-col text-left">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#7FFFD4]/70">
                    {link.name}
                  </span>
                  <span className="text-sm text-slate-200">
                    {link.label ?? link.name}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <form className="glass-panel grid gap-5 p-7 md:grid-cols-2 md:p-8">
          <label className="field-wrap">
            <span className="field-label">Full Name</span>
            <input className="field-input" type="text" placeholder="Your name" />
          </label>
          <label className="field-wrap">
            <span className="field-label">Email</span>
            <input
              className="field-input"
              type="email"
              placeholder="you@company.com"
            />
          </label>
          <label className="field-wrap md:col-span-2">
            <span className="field-label">Project Type</span>
            <input
              className="field-input"
              type="text"
              placeholder="Machine design, automation, commissioning, process optimization..."
            />
          </label>
          <label className="field-wrap md:col-span-2">
            <span className="field-label">Message</span>
            <textarea
              className="field-input min-h-36 resize-none"
              placeholder="Describe the engineering challenge, project scope, timeline, and any specific requirements."
            />
          </label>
          <div className="md:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-6 text-slate-400">
              Typical response within 24 hours. Open to roles and project collaborations worldwide.
            </p>
            <button className="button-primary border-0" type="submit">
              Start the Conversation
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
