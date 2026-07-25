import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

/** Types out its text when scrolled into view. */
export function TypeLine({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = usePrefersReducedMotion();
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduce) {
      el.textContent = text;
      return;
    }
    let timer: ReturnType<typeof setInterval> | undefined;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        let i = 0;
        el.textContent = "";
        timer = setInterval(() => {
          i++;
          el.textContent = text.slice(0, i);
          if (i >= text.length && timer) clearInterval(timer);
        }, 34);
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (timer) clearInterval(timer);
    };
  }, [text, reduce]);
  return <span ref={ref}>{text}</span>;
}
