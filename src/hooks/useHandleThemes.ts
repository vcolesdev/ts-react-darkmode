import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.ts";
import useHTMLClassNames from "../hooks/useHTMLClassNames.ts";

/**
 * Handle setting theme in LocalStorage and global Context
 * @hook useHandleThemes
 */
export default function useHandleThemes() {
  const { toggleLightClasses, toggleDarkClasses } = useHTMLClassNames();
  const { setTheme } = useContext(ThemeContext);

  // Handle the light and dark themes
  const handleLightTheme = () => setTheme("light");
  const handleDarkTheme = () => setTheme("dark");

  /**
   * Handle the system theme by toggling the "light" and "dark" classes on the HTML element.
   * @function handleSystemTheme
   * @param theme
   */
  function handleSystemTheme(theme: "light" | "dark" | string) {
    if (theme === "dark") {
      toggleDarkClasses();
    } else {
      toggleLightClasses();
    }
    return setTheme(theme);
  }

  return {
    handleLightTheme,
    handleDarkTheme,
    handleSystemTheme,
  };
}
