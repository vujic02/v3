import { Prompt } from "./Prompt";

export function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      style={{ marginTop: 40, padding: "36px 0 64px", borderTop: "1px dashed var(--line)" }}
    >
      <div className="nv-reveal" style={{ marginBottom: 18 }}>
        <Prompt cmd="contact --anyone" note="# offers, questions, or just hi" />
      </div>
      <a
        className="nv-alink nv-mail nv-reveal"
        href="mailto:vujicn02@gmail.com"
        style={{
          transitionDelay: "0.1s",
          display: "inline-block",
          fontSize: "clamp(24px, 4.6vw, 44px)",
          lineHeight: 1.15,
          fontWeight: 700,
          letterSpacing: "-0.02em",
        }}
      >
        vujicn02@gmail.com
      </a>
    </section>
  );
}
