import { useState, type CSSProperties } from "react";
import type { FeaturedProject } from "../types";

const shotBox: CSSProperties = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "top",
  borderRadius: 4,
};

export function FeaturedCard({ project, index }: { project: FeaturedProject; index: number }) {
  // GIFs autoplay the moment they mount. Mount on first hover (so it starts at frame 0),
  // then keep it mounted so a long clip keeps playing to the end even after the pointer
  // leaves. `on` only toggles visibility over the poster — it never restarts the gif.
  const [started, setStarted] = useState(false);
  const [on, setOn] = useState(false);
  const play = () => {
    setStarted(true);
    setOn(true);
  };
  const stop = () => setOn(false);

  return (
    <article
      className="nv-proj nv-reveal"
      onMouseEnter={play}
      onMouseLeave={stop}
      onFocus={play}
      onBlur={stop}
      style={{
        transitionDelay: `${0.05 + index * 0.1}s`,
        borderRadius: 8,
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 13,
        background: "var(--bg2)",
      }}
    >
      <div style={{ position: "relative", height: 205, borderRadius: 4, overflow: "hidden", background: "var(--bg2)" }}>
        {project.shot ? (
          <img src={project.shot} alt={`${project.name} screenshot`} loading="lazy" style={shotBox} />
        ) : (
          <div style={{ ...shotBox, display: "grid", placeItems: "center", color: "var(--ink3)", fontSize: 12.5 }}>
            ▸ hover to play demo
          </div>
        )}
        {started && project.gif && (
          <img
            src={project.gif}
            alt=""
            aria-hidden="true"
            style={{ ...shotBox, opacity: on ? 1 : 0, transition: "opacity .3s ease" }}
          />
        )}
      </div>
      <div style={{ fontSize: 15, fontWeight: 700, color: "var(--bright)" }}>
        {project.name}{" "}
        {project.tag && (
          <span style={{ fontWeight: 400, fontSize: 11.5, color: "var(--ink3)" }}>{project.tag}</span>
        )}
      </div>
      <div style={{ fontSize: 11.5, color: "var(--ink2)", marginTop: -6 }}>{project.flags}</div>
      <div style={{ display: "flex", gap: 14, fontSize: 12.5 }}>
        {project.github && (
          <a className="nv-link" href={project.github} target="_blank" rel="noreferrer">github ↗</a>
        )}
        {project.live && (
          <a className="nv-alink" href={project.live} target="_blank" rel="noreferrer">
            {project.liveLabel ?? "live ↗"}
          </a>
        )}
      </div>
    </article>
  );
}
