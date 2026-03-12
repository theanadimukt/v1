"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projects } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

function ExternalIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.75}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg
      className="w-8 h-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      style={{ color: "var(--accent)" }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
      />
    </svg>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const featured = projects.filter((p) => p.featured);
  const noteworthy = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <SectionHeading num="03" title="Projects" />

        {/* Featured projects */}
        <div className="space-y-20 mb-20">
          {featured.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease }}
              className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                i % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              {/* Visual block */}
              <div
                className={`relative rounded-2xl overflow-hidden h-52 md:h-64 ${i % 2 === 1 ? "[direction:ltr]" : ""}`}
                style={{
                  background:
                    i === 0
                      ? "linear-gradient(135deg, rgba(212,118,59,0.12) 0%, rgba(212,118,59,0.04) 100%)"
                      : "linear-gradient(135deg, rgba(123,140,222,0.12) 0%, rgba(123,140,222,0.04) 100%)",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                {/* Tag */}
                {project.tag && (
                  <span
                    className="absolute top-4 left-4 px-2.5 py-1 text-xs font-mono rounded"
                    style={{
                      backgroundColor:
                        i === 0
                          ? "rgba(212,118,59,0.12)"
                          : "rgba(123,140,222,0.12)",
                      color: i === 0 ? "var(--accent)" : "var(--accent-blue)",
                    }}
                  >
                    {project.tag}
                  </span>
                )}
                {/* Decorative grid lines */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{
                      backgroundColor:
                        i === 0
                          ? "rgba(212,118,59,0.1)"
                          : "rgba(123,140,222,0.1)",
                    }}
                  >
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      style={{
                        color: i === 0 ? "var(--accent)" : "var(--accent-blue)",
                      }}
                    >
                      {i === 0 ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      )}
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={i % 2 === 1 ? "[direction:ltr]" : ""}>
                <p
                  className="font-mono text-xs mb-2 uppercase tracking-widest"
                  style={{ color: "var(--accent)" }}
                >
                  Featured Project
                </p>
                <h3
                  className="text-2xl font-semibold mb-4"
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    color: "var(--text)",
                  }}
                >
                  {project.title}
                </h3>
                <div
                  className="p-5 rounded-xl mb-5 text-sm leading-[1.85]"
                  style={{
                    backgroundColor: "rgba(0,0,0,0.025)",
                    border: "1px solid rgba(0,0,0,0.05)",
                    color: "var(--muted)",
                  }}
                >
                  {project.description}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono"
                      style={{ color: "var(--muted)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Noteworthy projects */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease }}
        >
          <h3
            className="text-center text-xl font-semibold mb-10"
            style={{
              fontFamily: "var(--font-fraunces)",
              color: "var(--text)",
            }}
          >
            Other Noteworthy Work
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {noteworthy.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.08, ease }}
                className="project-card p-6 rounded-2xl flex flex-col"
                style={{
                  backgroundColor: "rgba(255,255,255,0.6)",
                  border: "1px solid rgba(0,0,0,0.07)",
                }}
              >
                <div className="flex items-start justify-between mb-6">
                  <FolderIcon />
                  {project.external && (
                    <a
                      href={project.external}
                      className="transition-opacity hover:opacity-60"
                      style={{ color: "var(--muted)" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalIcon />
                    </a>
                  )}
                </div>
                <h4
                  className="text-base font-semibold mb-2"
                  style={{ color: "var(--text)", fontFamily: "var(--font-fraunces)" }}
                >
                  {project.title}
                </h4>
                <p
                  className="text-sm leading-relaxed flex-1 mb-6"
                  style={{ color: "var(--muted)" }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono"
                      style={{ color: "var(--muted)", opacity: 0.7 }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
