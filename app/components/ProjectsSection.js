import Link from "next/link";
import { projects } from "./data/projects";
import { getProjectAnchor } from "./data/projectUtils";
import Reveal from "./Reveal";

export default function ProjectsSection() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="projects" className="section-shell py-10 md:py-16">
      <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between" distance={24}>
        <div>
          <p className="section-label">Projects</p>
          <h2 className="section-title mt-4 max-w-2xl">
            Real engineering projects delivering measurable results.
          </h2>
        </div>
        <a className="button-secondary !px-5 !py-3 text-sm" href="#contact">
          Discuss a project
        </a>
      </Reveal>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, index) => (
          <Reveal key={project.title} as="article" className="project-card" delay={80 + index * 110} distance={24}>
            <Link
              href={`/projects#${getProjectAnchor(project.title)}`}
              className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7FFFD4]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0f10]"
              aria-label={`Open ${project.title} project details`}
            >
              {(() => {
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
                <div className="project-thumb bg-gradient-to-br from-[#7FFFD4]/28 via-[#00C896]/20 to-transparent">
                  {hasImages ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={projectImages[0]}
                        alt={project.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F10]/35 via-transparent to-[#0B0F10]/10" />
                      {projectImages.length > 1 && (
                        <span className="absolute right-3 top-3 rounded-full border border-[#7FFFD4]/25 bg-[#0B0F10]/65 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-[#7FFFD4]/80">
                          +{projectImages.length - 1} more
                        </span>
                      )}
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
              );
            })()}

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
                <p className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#7FFFD4]/72 transition group-hover:text-[#7FFFD4]">
                  View project details
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      {/* View all */}
      <Reveal className="mt-10 flex justify-center" delay={160} distance={18}>
        <Link
          href="/projects"
          className="button-secondary flex items-center gap-2 !px-7 !py-4 text-sm"
        >
          View All Projects
          <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </Reveal>
    </section>
  );
}

