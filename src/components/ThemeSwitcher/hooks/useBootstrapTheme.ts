import { useCallback } from "react";
import useHandleThemes from "../../../hooks/useHandleThemes.ts";
import useToggleThemes from "./useToggleThemes.ts";

/**
 * Init hhe default theme
 * @hook useInitTheme
 */
function useBootstrapTheme() {
  const localStorage = window.localStorage;
  const localTheme = localStorage.getItem("theme");

  const { toggleLightTheme } = useToggleThemes();
  const { handleSystemTheme } = useHandleThemes();

  /**
   * Initialize theme on page load / refresh
   */
  const bootstrapTheme = useCallback(() => {
    // If local storage is empty, set light theme
    if (!localTheme) {
      toggleLightTheme();
      console.log("Default theme bootstrapped.");
    } else {
      // Set theme from local storage
      handleSystemTheme(localTheme);
      console.log("Theme bootstrapped from local storage.");
    }
  }, [toggleLightTheme, handleSystemTheme, localTheme]);

  return { bootstrapTheme };
}

export default useBootstrapTheme;
