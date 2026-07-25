import { TypeLine } from "./TypeLine";

/** "$ command # comment" prompt line. */
export function Prompt({ cmd, note }: { cmd: string; note?: string }) {
  return (
    <div style={{ fontSize: 14, color: "var(--ink2)" }}>
      <span style={{ color: "var(--accent)" }}>$</span> <TypeLine text={cmd} />
      {note && <span style={{ color: "var(--ink3)" }}> {note}</span>}
    </div>
  );
}
