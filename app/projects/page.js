import Link from "next/link";
import Navbar from "../components/Navbar";
import { projects } from "../components/data/projects";
import ProjectImageGallery from "../components/ProjectImageGallery";

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
                <path
                  d="M13 8H3M7 4L3 8l4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
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
        <div className="mt-10 grid gap-8 xl:grid-cols-2">
          {projects.map((project, i) => {
            const projectImages =
              Array.isArray(project.images) && project.images.length > 0
                ? project.images
                : Array.isArray(project.image) && project.image.length > 0
                  ? project.image
                  : typeof project.image === "string" && project.image
                    ? [project.image]
                    : [];
            const hasImages = projectImages.length > 0;

            return (
              <article
                key={project.title}
                className="glass-panel overflow-hidden"
              >
                {/* project number header */}
                <div
                  className={`relative flex items-center gap-3 overflow-hidden bg-gradient-to-br ${project.glow} px-6 py-3`}
                >
                  <span className="font-display text-xs uppercase tracking-[0.3em] text-[#7FFFD4]/70">
                    Project 0{i + 1}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-[#00C896]/30 to-transparent" />
                </div>

                {/* image section */}
                {hasImages ? (
                  <div className="border-b border-white/8 p-6 md:p-8">
                    <ProjectImageGallery
                      images={projectImages}
                      title={project.title}
                    />
                  </div>
                ) : (
                  <div
                    className={`project-thumb bg-gradient-to-br ${project.glow}`}
                  >
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
                  </div>
                )}

                <div className="p-7 md:p-8">
                  {/* left: title + task + responsibility */}
                  <div className="space-y-6">
                    <div>
                      <h2 className="font-display text-2xl font-semibold leading-7 text-white">
                        {project.title}
                      </h2>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                          <span key={item} className="tag-chip">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="proj-detail-label">Task</p>
                      <p className="mt-2 text-sm leading-7 text-slate-300">
                        {project.task}
                      </p>
                    </div>

                    <div>
                      <p className="proj-detail-label">Responsibility</p>
                      {Array.isArray(project.responsibility) ? (
                        <ul className="mt-2 space-y-2">
                          {project.responsibility.map((item, itemIndex) => (
                            <li
                              key={`${project.title}-responsibility-${itemIndex}`}
                              className="proj-result-item"
                            >
                              <span className="proj-result-dot" />
                              <span className="text-sm leading-7 text-slate-300">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="mt-2 text-sm leading-7 text-slate-300">
                          {project.responsibility}
                        </p>
                      )}
                    </div>

                    {project.learningOutcomes && (
                      <div>
                        <p className="proj-detail-label">Learning Outcomes</p>
                        {Array.isArray(project.learningOutcomes) ? (
                          <ul className="mt-2 space-y-2">
                            {project.learningOutcomes.map((item, itemIndex) => (
                              <li
                                key={`${project.title}-learning-${itemIndex}`}
                                className="proj-result-item"
                              >
                                <span className="proj-result-dot" />
                                <span className="text-sm leading-7 text-slate-400">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="mt-2 text-sm leading-7 text-slate-400">
                            {project.learningOutcomes}
                          </p>
                        )}
                      </div>
                    )}

                    <div>
                      <p className="proj-detail-label">Results</p>
                      <ul className="mt-2 space-y-2">
                        {project.results.map((result) => (
                          <li key={result} className="proj-result-item">
                            <span className="proj-result-dot" />
                            <span className="text-sm leading-7 text-slate-300">
                              {result}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
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
