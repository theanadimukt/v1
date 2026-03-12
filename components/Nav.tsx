"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", num: "01", href: "#about" },
  { label: "Experience", num: "02", href: "#experience" },
  { label: "Projects", num: "03", href: "#projects" },
  { label: "Contact", num: "04", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : ""
      }`}
      style={{
        backdropFilter: scrolled ? "blur(16px)" : "none",
        backgroundColor: scrolled ? "rgba(250,249,247,0.85)" : "transparent",
      }}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-bold leading-none transition-opacity hover:opacity-70"
          style={{
            fontFamily: "var(--font-fraunces)",
            fontStyle: "italic",
            color: "var(--text)",
          }}
        >
          SP.
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map(({ label, num, href }) => (
            <li key={label}>
              <a
                href={href}
                className="group flex items-baseline gap-1.5 text-sm font-medium transition-colors duration-200"
                style={{ color: "var(--muted)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--muted)")
                }
              >
                <span
                  className="text-xs font-mono"
                  style={{ color: "var(--accent)" }}
                >
                  {num}.
                </span>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:sagarpatel.web@gmail.com"
              className="ml-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                border: "1.5px solid var(--accent)",
                color: "var(--accent)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "var(--accent)";
                (e.currentTarget as HTMLElement).style.color = "white";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "transparent";
                (e.currentTarget as HTMLElement).style.color = "var(--accent)";
              }}
            >
              Say hello
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] p-2 -mr-2"
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
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          backdropFilter: "blur(16px)",
          backgroundColor: "rgba(250,249,247,0.95)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
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
                <span
                  className="text-xs font-mono"
                  style={{ color: "var(--accent)" }}
                >
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
              style={{
                border: "1.5px solid var(--accent)",
                color: "var(--accent)",
              }}
              onClick={() => setMenuOpen(false)}
            >
              Say hello
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
