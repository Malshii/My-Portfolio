"use client";

import { useState } from "react";
import { contactLinks } from "./data/contactLinks";
import Reveal from "./Reveal";

export default function ContactSection() {
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name")?.toString().trim(),
      email: formData.get("email")?.toString().trim(),
      projectType: formData.get("projectType")?.toString().trim(),
      message: formData.get("message")?.toString().trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus({
        type: "error",
        message: "Please fill your name, email, and message before sending.",
      });
      return;
    }

    setIsSending(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result?.error || "Failed to send message.");
      }

      setStatus({
        type: "success",
        message: "Message sent successfully. I will get back to you soon.",
      });
      form.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong while sending your message.",
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section id="contact" className="section-shell py-10 pb-16 md:py-16 md:pb-24">
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="glass-panel p-7 md:p-8" distance={26}>
          <p className="section-label">Contact</p>
          <h2 className="section-title mt-4 max-w-sm">
            Let&apos;s connect and discuss your next engineering challenge.
          </h2>
          <p className="mt-5 max-w-md text-base leading-8 text-slate-300">
            Open to engineering roles and industrial project collaborations in
            design, commissioning, process optimization, and automation.
          </p>

          <div className="mt-8 space-y-3">
            {contactLinks.map((link, index) => (
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
                style={{ transitionDelay: `${60 + index * 70}ms` }}
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
        </Reveal>

        <Reveal
          as="form"
          className="glass-panel grid gap-5 p-7 md:grid-cols-2 md:p-8"
          delay={120}
          distance={26}
          onSubmit={handleSubmit}
        >
          <label className="field-wrap">
            <span className="field-label">Full Name</span>
            <input
              className="field-input"
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
          </label>
          <label className="field-wrap">
            <span className="field-label">Email</span>
            <input
              className="field-input"
              type="email"
              name="email"
              placeholder="you@company.com"
              required
            />
          </label>
          <label className="field-wrap md:col-span-2">
            <span className="field-label">Project Type</span>
            <input
              className="field-input"
              type="text"
              name="projectType"
              placeholder="Machine design, automation, commissioning, process optimization..."
            />
          </label>
          <label className="field-wrap md:col-span-2">
            <span className="field-label">Message</span>
            <textarea
              className="field-input min-h-36 resize-none"
              name="message"
              placeholder="Describe the engineering challenge, project scope, timeline, and any specific requirements."
              required
            />
          </label>
          {status.message && (
            <p
              className={`md:col-span-2 text-sm ${
                status.type === "success" ? "text-emerald-300" : "text-rose-300"
              }`}
            >
              {status.message}
            </p>
          )}
          <div className="md:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-6 text-slate-400">
              Typical response within 24 hours. Open to roles and project collaborations worldwide.
            </p>
            <button className="button-primary border-0" type="submit" disabled={isSending}>
              {isSending ? "Sending..." : "Start the Conversation"}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
