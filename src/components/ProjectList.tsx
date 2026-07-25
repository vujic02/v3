import type { ListedProject } from "../types";

export function ProjectList({ projects }: { projects: ListedProject[] }) {
  return (
    <div
      className="nv-reveal"
      style={{ marginTop: 24, border: "1px solid var(--line)", borderRadius: 8, overflow: "hidden", fontSize: 13 }}
    >
      {projects.map((p, i) => (
        <div
          key={p.name}
          className="nv-row"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(160px, 1fr) minmax(200px, 320px) 140px",
            gap: 12,
            padding: "14px 18px",
            borderBottom: i < projects.length - 1 ? "1px solid var(--line)" : undefined,
          }}
        >
          <span style={{ color: "var(--bright)", fontWeight: 500 }}>{p.name}</span>
          <span style={{ color: "var(--ink2)" }}>{p.stack}</span>
          <span style={{ display: "flex", gap: 12, justifyContent: "end" }}>
            {p.github && (
              <a className="nv-link" href={p.github} target="_blank" rel="noreferrer">gh ↗</a>
            )}
            {p.live && (
              <a className="nv-alink" href={p.live} target="_blank" rel="noreferrer">live ↗</a>
            )}
          </span>
        </div>
      ))}
    </div>
  );
}
