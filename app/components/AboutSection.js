import { PiEnvelopeSimple, PiLinkedinLogo, PiPhoneCall } from "react-icons/pi";

const interests = [
  "Industrial Automation", "Machine Design", "Robotics",
  "Project Management", "Process Design", "Product Design", "R&D",
];

const contactDetails = [
  {
    label: "Phone",
    value: "020 431 5401 ",
    href: "tel:0204315401",
    Icon: PiPhoneCall,
  },
  {
    label: "Email",
    value: "lasitha.dhananjaya@gmail.com",
    href: "mailto:lasitha.dhananjaya@gmail.com",
    Icon: PiEnvelopeSimple,
  },
  {
    label: "LinkedIn",
    value: "www.linkedin.com/in/lasitha-dhananjaya",
    href: "https://www.linkedin.com/in/lasitha-dhananjaya",
    Icon: PiLinkedinLogo,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-shell py-10 md:py-16">

      {/* ── Header + Bio ── */}
      <div className="grid gap-6 lg:grid-cols-[1fr_1.6fr]">
        <div className="glass-panel p-7 md:p-8">
          <p className="section-label">About</p>
          <h2 className="section-title mt-4">
            Results-driven engineer bridging design, automation &amp; innovation.
          </h2>
          {/* Quick-stat pills */}
          <div className="mt-8 grid grid-cols-2 gap-3">
            {[
              ["2+", "Years Industry Experience"],
              ["BSc.Eng. (Hons)", "Specialized in Mechanical Engineering—Mechatronic Stream"],              
            ].map(([val, label]) => (
              <div key={label} className="about-stat-card">
                <p className="font-display text-xl text-[#7FFFD4]">{val}</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel p-7 md:p-8">
          <p className="text-base leading-8 text-slate-300 md:text-lg">
            Dynamic and results-oriented Mechanical Engineer with 2+ years of
            industrial experience in machine design, project handling, and process
            optimization. Skilled in automation and end-to-end project delivery —
            from concept through commissioning.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-400">
            I bring a rare mix of hands-on fabrication knowledge, simulation expertise, and a drive for
            continuous innovation.
          </p>

          <div className="mt-7">
            <p className="text-xs uppercase tracking-[0.3em] text-[#7FFFD4]/70">Contact</p>
            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              {contactDetails.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="mini-panel !rounded-2xl !p-3"
                >
                  <div className="flex items-center gap-2 text-[#7FFFD4]">
                    <item.Icon size={16} />
                    <span className="sr-only">{item.label}</span>
                  </div>
                  <p className="mt-2 break-all text-xs text-slate-200 sm:break-normal">
                    {item.value}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="mt-7">
            <p className="text-xs uppercase tracking-[0.3em] text-[#7FFFD4]/70">Interests</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {interests.map((item) => (
                <span key={item} className="skill-badge">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
