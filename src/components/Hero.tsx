import { Prompt } from "./Prompt";

/** Intro section. CV download expects /public/cv.pdf. */
export function Hero() {
  return (
    <section aria-label="Intro" style={{ padding: "clamp(64px, 10vh, 110px) 0 72px" }}>
      <div className="nv-fadein" style={{ animationDelay: "0.1s", marginBottom: 12 }}>
        <Prompt cmd="whoami" />
      </div>
      <h1
        className="nv-fadein"
        style={{
          animationDelay: "0.25s",
          margin: "0 0 24px",
          fontSize: "clamp(38px, 6.5vw, 60px)",
          lineHeight: 1.1,
          fontWeight: 700,
          letterSpacing: "-0.03em",
          color: "var(--bright)",
        }}
      >
        nikola vujić
        <span
          className="nv-cur"
          aria-hidden="true"
          style={{ color: "var(--accent)", animation: "nv-blink 1.1s step-end infinite" }}
        >
          _
        </span>
      </h1>
      <div
        className="nv-fadein"
        style={{
          animationDelay: "0.4s",
          fontSize: "clamp(14px, 1.6vw, 16px)",
          lineHeight: 1.85,
          color: "var(--ink2)",
          maxWidth: 660,
        }}
      >
        <div><span style={{ color: "var(--ink3)" }}>role:</span> full stack developer</div>
        <div><span style={{ color: "var(--ink3)" }}>base:</span> stara pazova, serbia (utc+2)</div>
        <div><span style={{ color: "var(--ink3)" }}>uptime:</span> shipping web apps since 2020-01</div>
        <div>
          <span style={{ color: "var(--ink3)" }}>stack:</span> react · react-native · next.js · typescript ·
          java/spring · python/django · sql+nosql
        </div>
        <div>
          <span style={{ color: "var(--ink3)" }}>status:</span>{" "}
          <span style={{ color: "var(--accent)" }}>
            <span
              aria-hidden="true"
              style={{
                display: "inline-block",
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--accent)",
                animation: "nv-ping 2.2s ease-out infinite",
                marginRight: 6,
              }}
            />
            open to opportunities
          </span>
        </div>
      </div>
      <div
        className="nv-fadein"
        style={{ animationDelay: "0.55s", display: "flex", gap: 16, flexWrap: "wrap", marginTop: 38 }}
      >
        <a className="nv-cta" href="/cv.pdf" download="Nikola-Vujic-CV.pdf">↓ download cv.pdf</a>
        <a className="nv-ghost" href="mailto:vujicn02@gmail.com">$ mail nikola</a>
      </div>
    </section>
  );
}
