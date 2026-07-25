export function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: 16,
        flexWrap: "wrap",
        padding: "14px 32px",
        background: "color-mix(in srgb, var(--ink) 7%, transparent)",
        fontSize: 12.5,
        color: "var(--ink2)",
      }}
    >
      <nav aria-label="Social" style={{ display: "flex", gap: 22 }}>
        <a className="nv-link" href="https://github.com/vujic02" target="_blank" rel="noreferrer">github</a>
        <a className="nv-link" href="https://www.linkedin.com/in/nikola-vuji%C4%87/" target="_blank" rel="noreferrer">linkedin</a>
        <a className="nv-link" href="https://www.instagram.com/_vujic02/" target="_blank" rel="noreferrer">instagram</a>
      </nav>
      <div>© {new Date().getFullYear()} nikola vujić · built with react</div>
    </footer>
  );
}
