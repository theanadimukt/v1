"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { jobs } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const job = jobs[activeTab];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <SectionHeading num="02" title="Experience" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="flex flex-col md:flex-row gap-0 md:gap-10"
        >
          {/* Tab list */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible shrink-0 md:min-w-[180px] mb-6 md:mb-0">
            {jobs.map((j, i) => (
              <button
                key={j.company}
                onClick={() => setActiveTab(i)}
                className={`tab-btn ${activeTab === i ? "active" : ""} text-left`}
              >
                {j.company}
              </button>
            ))}
          </div>

          {/* Job details */}
          <div className="flex-1 min-h-[340px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Role & Company */}
                <div className="mb-6">
                  <h3
                    className="text-xl font-semibold mb-1"
                    style={{ color: "var(--text)", fontFamily: "var(--font-fraunces)" }}
                  >
                    {job.role}{" "}
                    <span style={{ color: "var(--accent)" }}>
                      @ {job.company}
                    </span>
                  </h3>
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className="font-mono text-xs"
                      style={{ color: "var(--muted)" }}
                    >
                      {job.dates}
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: "var(--muted)", opacity: 0.5 }}
                    >
                      ·
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: "var(--muted)" }}
                    >
                      {job.location}
                    </span>
                    {job.type && (
                      <span
                        className="px-2 py-0.5 rounded-full text-xs font-medium"
                        style={{
                          backgroundColor: "rgba(74,222,128,0.08)",
                          color: "var(--accent)",
                        }}
                      >
                        {job.type}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-3.5 mb-7">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-[1.8]" style={{ color: "var(--muted)" }}>
                      <span
                        className="mt-[6px] shrink-0 w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: "var(--accent)" }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-mono rounded"
                      style={{
                        backgroundColor: "rgba(74,222,128,0.07)",
                        color: "var(--accent)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
