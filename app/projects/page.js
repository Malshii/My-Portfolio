import Link from "next/link";
import Navbar from "../components/Navbar";
import { projects } from "../components/data/projects";

export const metadata = {
  title: "Projects | Lasitha Dhananjaya",
  description:
    "Engineering projects by Lasitha Dhananjaya — machine design, process optimization, and industrial automation.",
};

export default function ProjectsPage() {
  return (
    <main className="relative flex-1 overflow-hidden text-white">
      <div className="ambient ambient-cyan" />
      <div className="ambient ambient-violet" />
      <Navbar />

      <section className="section-shell py-10 md:py-16">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Link
              href="/#projects"
              className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[#7FFFD4]/70 transition hover:text-[#7FFFD4]"
            >
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
                <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to Portfolio
            </Link>
            <p className="section-label">Projects</p>
            <h1 className="section-title mt-4 max-w-2xl">
              All Engineering Projects
            </h1>
          </div>
          <p className="max-w-sm text-sm leading-7 text-slate-400 md:text-right">
            End-to-end engineering projects spanning machine design, energy
            optimization, and process improvement.
          </p>
        </div>

        {/* Project cards — full detail */}
        <div className="mt-10 grid gap-8">
          {projects.map((project, i) => (
            <article key={project.title} className="glass-panel overflow-hidden">
              {/* thumb strip */}
              <div className={`project-thumb h-28 bg-gradient-to-br ${project.glow}`}>
                {project.image ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F10]/25 via-transparent to-[#0B0F10]/20" />
                  </>
                ) : (
                  <div className="project-grid" />
                )}
                <div className="absolute inset-x-6 bottom-4 flex items-center gap-3">
                  <span className="font-display text-xs uppercase tracking-[0.3em] text-[#7FFFD4]/70">
                    Project 0{i + 1}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-[#00C896]/30 to-transparent" />
                </div>
              </div>

              <div className="grid gap-8 p-7 md:p-8 lg:grid-cols-[1.4fr_1fr]">
                {/* left: title + task + responsibility */}
                <div className="space-y-6">
                  <div>
                    <h2 className="font-display text-2xl font-semibold leading-7 text-white">
                      {project.title}
                    </h2>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span key={item} className="tag-chip">{item}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="proj-detail-label">Task</p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{project.task}</p>
                  </div>

                  <div>
                    <p className="proj-detail-label">Responsibility</p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{project.responsibility}</p>
                  </div>

                  {project.learningOutcomes && (
                    <div>
                      <p className="proj-detail-label">Learning Outcomes</p>
                      <p className="mt-2 text-sm leading-7 text-slate-400">{project.learningOutcomes}</p>
                    </div>
                  )}
                </div>

                {/* right: results */}
                <div>
                  <p className="proj-detail-label">Results</p>
                  <ul className="mt-4 space-y-4">
                    {project.results.map((result) => (
                      <li key={result} className="proj-result-item">
                        <span className="proj-result-dot" />
                        <span className="text-sm leading-7 text-slate-300">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex justify-center">
          <a href="/#contact" className="button-primary">
            Discuss a Project
          </a>
        </div>
      </section>
    </main>
  );
}
