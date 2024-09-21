import { useEffect, useState } from "react";
import useToggleThemes from "./useToggleThemes";

/**
 * Toggle the current theme between light and dark.
 * @hook useToggleCurrentTheme
 * @returns {object} - The current theme and a function to toggle the theme.
 */
export default function useToggleCurrentTheme() {
  // Get the current theme from local storage and set the initial theme.
  // Get the functions to toggle between light and dark themes.
  const storageTheme = localStorage.getItem("theme");
  const [currentTheme, setCurrentTheme] = useState<string | null>(storageTheme);
  const { toggleLightTheme, toggleDarkTheme } = useToggleThemes();

  // Toggle a custom event when toggling the current theme.
  useEffect(() => {
    return () => {
      document.dispatchEvent(new CustomEvent("TOGGLE_CURRENT_THEME"));
    };
  }, [currentTheme, storageTheme]);

  /**
   * Toggle the theme between light and dark based on the current theme.
   * @function toggleCurrentTheme
   */
  function toggleCurrentTheme() {
    setCurrentTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      newTheme === "light" ? toggleLightTheme() : toggleDarkTheme();
      return newTheme;
    });
  }

  return {
    currentTheme,
    toggleCurrentTheme,
  };
}
