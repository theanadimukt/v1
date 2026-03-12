"use client";

import { useState } from "react";

const navLinks = [
  { label: "About", num: "01", href: "#about" },
  { label: "Experience", num: "02", href: "#experience" },
  { label: "Projects", num: "03", href: "#projects" },
  { label: "Contact", num: "04", href: "#contact" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex flex-col items-center px-4">
      {/* Island nav */}
      <nav
        className="w-full max-w-4xl flex items-center justify-between px-7 h-14 rounded-full"
        style={{
          backgroundColor: "rgba(33, 37, 37, 0.95)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          boxShadow: "0 4px 24px rgba(0, 0, 0, 0.4)",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          className="text-lg font-bold leading-none transition-opacity hover:opacity-70 shrink-0"
          style={{
            fontFamily: "var(--font-fraunces)",
            fontStyle: "italic",
            color: "var(--text)",
          }}
        >
          SP.
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-5">
          {navLinks.map(({ label, num, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-secondary flex items-baseline gap-1 text-sm font-medium transition-colors duration-200"
              >
                <span className="text-xs font-mono" style={{ color: "var(--accent)" }}>
                  {num}.
                </span>
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + mobile hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="mailto:sagarpatel.web@gmail.com"
            className="hidden md:inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
            style={{
              border: "1px solid var(--accent)",
              color: "var(--accent)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "var(--accent)";
              (e.currentTarget as HTMLElement).style.color = "#0a0a0a";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLElement).style.color = "var(--accent)";
            }}
          >
            Say hello
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[1.5px] bg-[var(--text)] transition-all duration-300 origin-center ${
                menuOpen ? "w-5 rotate-45 translate-y-[6.5px]" : "w-5"
              }`}
            />
            <span
              className={`block h-[1.5px] bg-[var(--text)] transition-all duration-200 ${
                menuOpen ? "w-0 opacity-0" : "w-4"
              }`}
            />
            <span
              className={`block h-[1.5px] bg-[var(--text)] transition-all duration-300 origin-center ${
                menuOpen ? "w-5 -rotate-45 -translate-y-[6.5px]" : "w-5"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden w-full max-w-3xl mt-2 overflow-hidden transition-all duration-300 rounded-2xl ${
          menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          backgroundColor: "rgba(33, 37, 37, 0.98)",
          border: menuOpen ? "1px solid rgba(255,255,255,0.12)" : "none",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          boxShadow: menuOpen ? "0 4px 24px rgba(0,0,0,0.4)" : "none",
        }}
      >
        <ul className="px-6 py-6 flex flex-col gap-5">
          {navLinks.map(({ label, num, href }) => (
            <li key={label}>
              <a
                href={href}
                className="flex items-baseline gap-2 text-base font-medium"
                style={{ color: "var(--muted)" }}
                onClick={() => setMenuOpen(false)}
              >
                <span className="text-xs font-mono" style={{ color: "var(--accent)" }}>
                  {num}.
                </span>
                {label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="mailto:sagarpatel.web@gmail.com"
              className="inline-block px-5 py-2.5 rounded-full text-sm font-medium"
              style={{ border: "1px solid var(--accent)", color: "var(--accent)" }}
              onClick={() => setMenuOpen(false)}
            >
              Say hello
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
