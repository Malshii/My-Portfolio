import { skillGroups } from "./data/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="section-shell py-10 md:py-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="section-label">Skills</p>
          <h2 className="section-title mt-4 max-w-2xl">
            Technical toolkit built across design, simulation, and hands-on engineering.
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-7 text-slate-400 md:text-right">
          From CAD modelling and FEA simulation to embedded programming and
          machine commissioning — end-to-end engineering capability.
        </p>
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <article key={group.title} className="glass-panel p-6 md:p-7">
            {/* accent bar */}
            <div className={`h-1 w-full rounded-full bg-gradient-to-r ${group.accent}`} />

            {/* header */}
            <div className="mt-5 flex items-center gap-3">
              <span className="skill-icon-wrap">
                <group.Icon size={20} color="#00C896" />
              </span>
              <h3 className="font-display text-xl text-white">{group.title}</h3>
            </div>

            {/* badge chips */}
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
