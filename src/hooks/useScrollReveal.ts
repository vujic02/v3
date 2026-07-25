import { useEffect } from "react";
import type { RefObject } from "react";

/** Adds .in to .nv-reveal/.nv-draw children when they scroll into view. */
export function useScrollReveal(rootRef: RefObject<HTMLElement | null>, reduce: boolean) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const els = root.querySelectorAll<HTMLElement>(".nv-reveal, .nv-draw");
    if (reduce) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [rootRef, reduce]);
}
