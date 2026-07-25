/** Fixed CRT-style scanline overlay. */
export function Scanlines() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 60,
        opacity: 0.05,
        background:
          "repeating-linear-gradient(0deg, transparent 0px, transparent 3px, currentColor 3px, currentColor 4px)",
      }}
    />
  );
}
