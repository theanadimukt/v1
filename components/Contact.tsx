"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Divider */}
        <div className="h-px mb-16" style={{ backgroundColor: "var(--border)" }} />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="text-center max-w-xl mx-auto"
        >
          <p
            className="font-mono text-sm mb-4 uppercase tracking-widest"
            style={{ color: "var(--accent)" }}
          >
            04. What&apos;s Next?
          </p>
          <h2
            className="text-[clamp(2.5rem,6vw,4rem)] font-bold leading-tight mb-6"
            style={{
              fontFamily: "var(--font-fraunces)",
              fontStyle: "italic",
              color: "var(--text)",
            }}
          >
            Get In Touch
          </h2>
          <p
            className="text-base leading-[1.85] mb-10"
            style={{ color: "var(--muted)" }}
          >
            I&apos;m currently open to{" "}
            <span style={{ color: "var(--text)", fontWeight: 500 }}>
              Backend / Backend-Heavy Full Stack
            </span>{" "}
            roles in the UK. Whether you have a question, an opportunity, or
            just want to say hello — my inbox is always open.
          </p>

          <motion.a
            href="mailto:sagarpatel.web@gmail.com"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold rounded-full transition-colors duration-200"
            style={{
              border: "1.5px solid var(--accent)",
              color: "var(--accent)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "var(--accent)";
              (e.currentTarget as HTMLElement).style.color = "#0a0a0a";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "transparent";
              (e.currentTarget as HTMLElement).style.color = "var(--accent)";
            }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Say Hello
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="mt-24 flex flex-col items-center gap-5"
        >
          {/* Social links */}
          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/hausofsagar"
              target="_blank"
              rel="noreferrer"
              className="transition-all duration-200 hover:-translate-y-0.5"
              style={{ color: "var(--muted)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--muted)")
              }
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="transition-all duration-200 hover:-translate-y-0.5"
              style={{ color: "var(--muted)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--muted)")
              }
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
          </div>

          <p className="text-xs font-mono" style={{ color: "var(--muted)", opacity: 0.5 }}>
            Designed & Built by Sagar Patel · {new Date().getFullYear()}
          </p>
        </motion.footer>
      </div>
    </section>
  );
}
