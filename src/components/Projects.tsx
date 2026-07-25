import { FEATURED, LISTED } from "../data/projects";
import { FeaturedCard } from "./FeaturedCard";
import { ProjectList } from "./ProjectList";
import { Prompt } from "./Prompt";

export function Projects() {
  return (
    <section id="work" aria-label="Projects" style={{ padding: "28px 0 72px", borderTop: "1px dashed var(--line)" }}>
      <div className="nv-reveal" style={{ marginBottom: 8 }}>
        <Prompt cmd="ls ./projects" note={`— ${FEATURED.length + LISTED.length} entries`} />
      </div>
      <div className="nv-reveal" style={{ fontSize: 12, color: "var(--ink3)", marginBottom: 28 }}>
        # hover a card to play its demo.gif
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
        {FEATURED.map((p, i) => (
          <FeaturedCard key={p.name} project={p} index={i} />
        ))}
      </div>

      <ProjectList projects={LISTED} />
    </section>
  );
}
