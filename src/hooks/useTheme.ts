import { useCallback, useState } from "react";
import { DEFAULT_THEME } from "../config";
import type { Theme } from "../types";

const STORAGE_KEY = "nv-theme";

/** Theme state persisted to localStorage. */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "light" || saved === "dark") return saved;
    } catch {}
    return DEFAULT_THEME;
  });

  const toggleTheme = useCallback(() => {
    setTheme((t) => {
      const next: Theme = t === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {}
      return next;
    });
  }, []);

  return { theme, toggleTheme };
}
