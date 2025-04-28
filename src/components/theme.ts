export const lightTheme = {
  body: "#ffffff",
  text: "#2d3748",
  toggleBorder: "#f7fafc",
  background: "#f7fafc",
  accent: "#3b82f6",
  accentLight: "#60a5fa",
  secondary: "#10b981",
  neutral: "#f1f5f9",
  neutralDark: "#64748b",
} as const;

export const darkTheme = {
  body: "#0f172a",
  text: "#f8fafc",
  toggleBorder: "#1e293b",
  background: "#0f172a",
  accent: "#38bdf8",
  accentLight: "#7dd3fc",
  secondary: "#2dd4bf",
  neutral: "#1e293b",
  neutralDark: "#64748b",
} as const;

export type ThemeType = typeof lightTheme | typeof darkTheme;
