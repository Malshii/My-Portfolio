"use client";

import { useState } from "react";
import { PiWrench, PiGear, PiStudent, PiBuildings, PiBookOpenText, PiBrain, PiCaretDown } from "react-icons/pi";

const experience = [
  {
    role: "Mechanical Engineer | Engineering Design",
    company: "EODEVIX USA",
    period: "Mar 2025 – Present",
    tag: null,
    Icon: PiWrench,
    points: [
      "Engineering Designs and Drawings, Machine Fabrication, Production Line Designing.",
    ],
  },
  {
    role: "Mechanical Engineer | Engineering Projects",
    company: "HAYCARB PLC",
    period: "Nov 2022 – Jan 2025",
    tag: null,
    Icon: PiGear,
    points: [
      "Engineering Designs, Drawings, Machine Fabrications, Machine Installations, Machine Commissioning, Machine Maintenance.",
      "Project Proposal Creation, Production Line Designing, Working With SAP Systems, and Creation of ISO Documents.",
    ],
  },
  {
    role: "Mechatronic Engineering Trainee",
    company: "ROCELL BATHWARE LTD",
    period: "Oct 2020 – May 2021",
    tag: null,
    Icon: PiStudent,
    points: [
      "Basic Engineering Concepts, Engineering Process (Casting / Water Purification / Glaze Preparation / Firing Process).",
      "Reverse Engineering, Machine Modification, Preventive Maintenance Documentation, and Robot Controlling.",
    ],
  },
];

const education = [
//   {
//     degree: "MSc. in Data Science and Artificial Intelligence",
//     institution: "Faculty of Graduate Studies, University of Sri Jayewardenepura",
//     period: "Apr 2025 – Present",
//     badge: "Postgraduate",
//     Icon: PiBrain,
//     extra: "Advancing into AI & Data Science alongside active industry work.",
//   },
  {
    degree: "BSc.Eng. (Hons) Mechanical Engineering — Mechatronic Stream",
    institution: "University of Moratuwa",
    period: "Jan 2017 – Jul 2022",
    badge: "First Class Honours",
    Icon: PiBuildings,
    extra: "Specialized in Mechatronics — combining mechanical, electrical, and software engineering.",
  },
  {
    degree: "G.C.E Advanced Level Examination",
    institution: "Vidyartha College Kandy",
    period: "Oct 2014 – Aug 2016",
    badge: "District Rank: 50",
    Icon: PiBookOpenText,
    extra: null,
  },
];

function ExpCard({ job, defaultExpanded }) {
  const [open, setOpen] = useState(defaultExpanded);
  return (
    <div className="glass-panel p-6">
      {/* header row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="edu-icon-wrap">
            <job.Icon size={20} color="#00C896" />
          </div>
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.24em] text-[#7FFFD4]/70">{job.period}</p>
            <p className="mt-0.5 font-display text-base font-semibold text-white">{job.role}</p>
            <p className="text-sm text-[#00C896]">{job.company}</p>
          </div>
        </div>
        <div className="flex shrink-0 flex-col items-end gap-2">
          {job.tag && <span className="skill-badge !text-[0.68rem]">{job.tag}</span>}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="tl-toggle"
          >
            <PiCaretDown
              size={14}
              style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 220ms ease" }}
            />
            <span>{open ? "Less" : "More"}</span>
          </button>
        </div>
      </div>

      {/* expandable body */}
      {open && (
        <div className="mt-4 border-t border-[#00C896]/15 pt-4">
          <ul className="space-y-2">
            {job.points.map((pt) => (
              <li key={pt} className="flex gap-2.5 text-sm leading-6 text-slate-400">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00C896]/60" />
                {pt}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function EduCard({ edu, defaultExpanded }) {
  const [open, setOpen] = useState(defaultExpanded);
  return (
    <div className="glass-panel p-6">
      {/* header row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="edu-icon-wrap">
            <edu.Icon size={20} color="#00C896" />
          </div>
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.24em] text-[#7FFFD4]/70">{edu.period}</p>
            <p className="mt-0.5 font-display text-base font-semibold leading-6 text-white">{edu.degree}</p>
            <p className="text-sm text-slate-400">{edu.institution}</p>
          </div>
        </div>
        {edu.extra && (
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="tl-toggle shrink-0"
          >
            <PiCaretDown
              size={14}
              style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 220ms ease" }}
            />
            <span>{open ? "Less" : "More"}</span>
          </button>
        )}
      </div>

      {/* badge */}
      <div className="mt-4 flex items-center justify-between">
        <span className="edu-badge">{edu.badge}</span>
      </div>

      {/* expandable extra */}
      {open && edu.extra && (
        <div className="mt-3 border-t border-[#00C896]/15 pt-3">
          <p className="text-sm leading-6 text-slate-400">{edu.extra}</p>
        </div>
      )}
    </div>
  );
}

export default function ExperienceEducationSection() {
  return (
    <section id="experience" className="section-shell py-10 md:py-16">
      {/* Section header */}
      <div className="flex flex-col gap-2">
        <p className="section-label">Journey</p>
        <h2 className="section-title max-w-2xl">
          Experience &amp; Education
        </h2>
      </div>

      {/* Two-column layout */}
      <div className="mt-10 grid gap-8 lg:grid-cols-2">

        {/* ── Experience column ── */}
        <div>
          <p className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#7FFFD4]/80">
            <PiWrench size={14} /> Work Experience
          </p>
          <div className="space-y-4">
            {experience.map((job, i) => (
              <ExpCard key={job.company} job={job} defaultExpanded={i === 0} />
            ))}
          </div>
        </div>

        {/* ── Education column ── */}
        <div>
          <p className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#7FFFD4]/80">
            <PiBrain size={14} /> Education
          </p>
          <div className="space-y-4">
            {education.map((edu, i) => (
              <EduCard key={edu.degree} edu={edu} defaultExpanded={i === 0} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
