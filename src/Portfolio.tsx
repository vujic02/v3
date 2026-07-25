/**
 * Portfolio — Nikola Vujić, terminal-style portfolio.
 *
 * Assets expected in /public:
 *   /cv.pdf
 *   /websites/*.png + *.gif — see src/data/projects.ts
 */

import { useRef } from "react";
import "./portfolio.css";
import { SHOW_SCANLINES } from "./config";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Scanlines } from "./components/Scanlines";
import { usePrefersReducedMotion } from "./hooks/usePrefersReducedMotion";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { useTheme } from "./hooks/useTheme";

export default function Portfolio() {
  const { theme, toggleTheme } = useTheme();
  const rootRef = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();
  useScrollReveal(rootRef, reduce);

  return (
    <div
      ref={rootRef}
      className="nvsite"
      data-theme={theme}
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        color: "var(--ink)",
        fontFamily: "'JetBrains Mono', monospace",
      }}
    >
      {SHOW_SCANLINES && <Scanlines />}
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main style={{ maxWidth: 1160, margin: "0 auto", padding: "0 32px" }}>
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
