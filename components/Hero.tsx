"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

export default function Hero() {
  return (
    <section className="px-6 pt-32 pb-20">
      <div className="max-w-5xl mx-auto w-full">
        {/* Eyebrow */}
        <motion.p
          {...fadeUp(0.1)}
          className="font-mono text-sm tracking-wider mb-5"
          style={{ color: "var(--accent)" }}
        >
          Hi, my name is
        </motion.p>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.22)}
          className="text-[clamp(3rem,10vw,7rem)] font-bold leading-[0.95] mb-4 tracking-tight"
          style={{
            fontFamily: "var(--font-fraunces)",
            fontStyle: "italic",
            color: "var(--text)",
          }}
        >
          Sagar Patel.
        </motion.h1>

        {/* Tagline */}
        <motion.h2
          {...fadeUp(0.34)}
          className="text-[clamp(2rem,7vw,5rem)] font-bold leading-[0.95] mb-8 tracking-tight"
          style={{
            fontFamily: "var(--font-fraunces)",
            fontStyle: "italic",
            color: "var(--muted)",
          }}
        >
          I build things that scale.
        </motion.h2>

        {/* Bio */}
        <motion.p
          {...fadeUp(0.46)}
          className="max-w-[540px] text-lg leading-relaxed mb-12"
          style={{ color: "var(--muted)" }}
        >
          Backend-focused Full Stack Developer with{" "}
          <span style={{ color: "var(--text)", fontWeight: 500 }}>
            8+ years of experience
          </span>{" "}
          building distributed SaaS platforms, internal systems, and
          business-critical applications. Based in{" "}
          <span style={{ color: "var(--text)", fontWeight: 500 }}>
            London, UK
          </span>
          .
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.58)} className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-all duration-300"
            style={{ backgroundColor: "var(--accent)", color: "#0a0a0a" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#86efac";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "var(--accent)";
            }}
          >
            View my work
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-all duration-300"
            style={{
              border: "1.5px solid rgba(255,255,255,0.15)",
              color: "var(--text)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--accent)";
              (e.currentTarget as HTMLElement).style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(255,255,255,0.15)";
              (e.currentTarget as HTMLElement).style.color = "var(--text)";
            }}
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
