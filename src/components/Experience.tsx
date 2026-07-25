import { JOBS } from "../data/jobs";
import { Prompt } from "./Prompt";

export function Experience() {
  return (
    <section
      id="experience"
      aria-label="Work experience"
      style={{ padding: "28px 0 72px", borderTop: "1px dashed var(--line)" }}
    >
      <div className="nv-reveal" style={{ marginBottom: 32 }}>
        <Prompt cmd="git log --experience" />
      </div>
      <div style={{ position: "relative", paddingLeft: 26 }}>
        <div
          className="nv-draw"
          aria-hidden="true"
          style={{ position: "absolute", left: 0, top: 10, bottom: 10, width: 1, background: "var(--line)" }}
        />
        {JOBS.map((job, i) => (
          <article
            key={job.hash}
            className="nv-reveal"
            style={{
              transitionDelay: `${0.05 + i * 0.13}s`,
              position: "relative",
              padding: i === JOBS.length - 1 ? "18px 0 8px" : "18px 0 26px",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                left: -30,
                top: 26,
                width: 9,
                height: 9,
                borderRadius: "50%",
                background: job.head ? "var(--accent)" : "var(--ink3)",
                animation: job.head ? "nv-ping 2.4s ease-out infinite" : undefined,
              }}
            />
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "baseline", fontSize: 13 }}>
              <span style={{ color: "var(--accent)" }}>{job.hash}</span>
              <span style={{ color: "var(--ink3)" }}>{job.dates}</span>
              {job.head && (
                <span
                  style={{
                    fontSize: 11,
                    color: "var(--accent)",
                    border: "1px solid color-mix(in srgb, var(--accent) 45%, transparent)",
                    borderRadius: 999,
                    padding: "2px 10px",
                  }}
                >
                  HEAD
                </span>
              )}
            </div>
            <h3 style={{ margin: "8px 0 6px", fontSize: 18, fontWeight: 700, color: "var(--bright)" }}>
              {job.title}
            </h3>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: "var(--ink2)", maxWidth: 680 }}>
              {job.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
