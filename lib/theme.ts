export const THEME_KEY = "theme";

export type Theme = "light" | "dark";

export function setStoredTheme(theme: Theme) {
  if (typeof window === "undefined") return;
  localStorage.setItem(THEME_KEY, theme);
}
