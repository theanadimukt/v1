"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import { skills } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <SectionHeading num="01" title="About Me" />

        <div className="grid md:grid-cols-[1fr_1fr] gap-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="space-y-5 text-base leading-[1.85]"
            style={{ color: "var(--muted)" }}
          >
            <p>
              I&apos;m a Full Stack Developer based in{" "}
              <span style={{ color: "var(--accent)", fontWeight: 500 }}>
                London, UK
              </span>{" "}
              with over 8 years of experience building internal SaaS platforms,
              distributed systems, and business-critical applications.
            </p>
            <p>
              Currently at{" "}
              <span style={{ color: "var(--text)", fontWeight: 500 }}>
                Syntura
              </span>
              , I work primarily with Laravel to design and maintain backend
              services across a multi-service architecture. I led the replacement
              of Microsoft 365 CRM with an in-house system, built queue-based
              workflows, integrated services like Azure, AWS and Microsoft Graph,
              and optimised APIs to reduce response times by{" "}
              <span style={{ color: "var(--text)", fontWeight: 500 }}>~30%</span>{" "}
              in key modules. I also work with Kubernetes deployments and
              contribute to React/TypeScript frontends.
            </p>
            <p>
              I focus on building stable systems with clear data models,
              measurable impact, and long-term maintainability. Open to{" "}
              <span style={{ color: "var(--text)", fontWeight: 500 }}>
                Backend / Backend-Heavy Full Stack
              </span>{" "}
              roles in the UK.
            </p>

            {/* Certifications */}
            <div className="pt-2">
              <p
                className="text-xs font-mono uppercase tracking-widest mb-3"
                style={{ color: "var(--muted)" }}
              >
                Certifications
              </p>
              <ul className="space-y-1.5 text-sm">
                {[
                  "Claude Code in Action",
                  "AI Fluency Framework & Foundations",
                  "CKAD Crash Course",
                  "CybSafe Security Awareness",
                ].map((cert) => (
                  <li
                    key={cert}
                    className="flex items-center gap-2"
                    style={{ color: "var(--muted)" }}
                  >
                    <span style={{ color: "var(--accent)" }}>▸</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease }}
          >
            <p
              className="text-xs font-mono uppercase tracking-widest mb-5"
              style={{ color: "var(--muted)" }}
            >
              Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.3,
                    delay: 0.2 + i * 0.03,
                    ease: "easeOut",
                  }}
                  className="skill-pill px-3.5 py-1.5 text-xs font-medium rounded-full cursor-default"
                  style={{
                    border: "1.5px solid var(--border)",
                    color: "var(--muted)",
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* Education */}
            <div className="mt-10 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
              <p
                className="text-xs font-mono uppercase tracking-widest mb-5"
                style={{ color: "var(--muted)" }}
              >
                Education
              </p>
              <div className="space-y-5">
                <div>
                  <p className="text-sm font-medium" style={{ color: "var(--text)" }}>
                    Middlesex University
                  </p>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>
                    MSc Computer Science · 2021–2022
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: "var(--text)" }}>
                    Gujarat Technological University
                  </p>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>
                    B.E. Information Technology · 2010–2015
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
