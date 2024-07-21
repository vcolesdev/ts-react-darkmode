import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.ts";

/**
 * Handle setting theme in LocalStorage and global Context
 * @hook useHandleThemes
 */
export default function useHandleThemes() {
  const html = document.documentElement;
  const { setTheme } = useContext(ThemeContext);

  /**
   * Handle light theme
   */
  const handleLightTheme = () => setTheme("light");

  /**
   * Handle dark theme
   */
  const handleDarkTheme = () => setTheme("dark");

  /**
   * Handle system theme
   * @param theme
   */
  function handleSystemTheme(theme: "light" | "dark" | string) {
    if (theme === "dark") {
      html.classList.remove("light");
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
    }

    setTheme(theme);
  }

  return {
    handleLightTheme,
    handleDarkTheme,
    handleSystemTheme,
  };
}
