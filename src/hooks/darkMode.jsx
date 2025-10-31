import { useLayoutEffect, useState } from "react";

export default function useDarkMode() {
  const getInitialTheme = () => {
    if (typeof window === "undefined") return "light"; // safe for SSR
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;
    const prefersDark = matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useLayoutEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return { theme, toggleTheme };
}
