import type { Theme } from "../types";

interface HeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export function Header({ theme, onToggleTheme }: HeaderProps) {
  return (
    <header
      className="nv-fadein"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        flexWrap: "wrap",
        padding: "14px 32px",
        borderBottom: "1px solid var(--line)",
        background: "color-mix(in srgb, var(--bg) 82%, transparent)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 13 }}>
        <span aria-hidden="true" style={{ display: "flex", gap: 6 }}>
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--line)" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--line)" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--accent)" }} />
        </span>
        <span style={{ color: "var(--ink2)" }}>~/nikola-vujic — portfolio</span>
      </div>
      <nav aria-label="Main" style={{ display: "flex", gap: 26, alignItems: "center", fontSize: 13 }}>
        <a className="nv-link" href="#work">./work</a>
        <a className="nv-link" href="#experience">./experience</a>
        <a className="nv-link" href="#contact">./contact</a>
        <span aria-hidden="true" style={{ color: "var(--ink3)" }}>|</span>
        <button
          onClick={onToggleTheme}
          aria-label="Toggle color theme"
          className="nv-link"
          style={{
            font: "inherit",
            fontSize: 13,
            color: "var(--ink)",
            background: "none",
            border: "1px solid var(--line)",
            borderRadius: 6,
            padding: "7px 13px",
            cursor: "pointer",
          }}
        >
          {theme === "dark" ? "dark ◉" : "light ◎"}
        </button>
      </nav>
    </header>
  );
}
