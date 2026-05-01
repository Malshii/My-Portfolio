import Link from "next/link";
import { projects } from "./data/projects";

export default function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="section-shell py-10 md:py-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="section-label">Projects</p>
          <h2 className="section-title mt-4 max-w-2xl">
            Real engineering projects delivering measurable results.
          </h2>
        </div>
        <a className="button-secondary !px-5 !py-3 text-sm" href="#contact">
          Discuss a project
        </a>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <article key={project.title} className="project-card">
            <div className={`project-thumb bg-gradient-to-br ${project.glow}`}>
              {project.image ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F10]/35 via-transparent to-[#0B0F10]/10" />
                </>
              ) : (
                <>
                  <div className="project-grid" />
                  <div className="project-window">
                    <div className="flex gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-300/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
                    </div>
                    <div className="mt-5 grid gap-3">
                      <div className="h-3 w-2/3 rounded-full bg-white/22" />
                      <div className="h-3 w-full rounded-full bg-white/12" />
                      <div className="h-16 rounded-2xl bg-white/8" />
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="p-6 md:p-7">
              <h3 className="font-display text-xl text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="tag-chip">
                    {item}
                  </span>
                ))}
              </div>
              {project.results?.[0] && (
                <p className="mt-4 flex items-start gap-2 text-sm leading-6 text-[#7FFFD4]/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00C896]" />
                  {project.results[0]}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* View all */}
      <div className="mt-10 flex justify-center">
        <Link
          href="/projects"
          className="button-secondary flex items-center gap-2 !px-7 !py-4 text-sm"
        >
          View All Projects
          <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

