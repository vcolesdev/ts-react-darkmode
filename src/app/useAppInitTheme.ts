import useHandleThemes from "../hooks/useHandleThemes.ts";
import useToggleThemes from "../hooks/useToggleThemes.ts";
import { useCallback, useEffect } from "react";

/**
 * Initialize the app theme.
 * @hook useInitAppTheme
 */
export default function useAppInitTheme() {
  const localStorage = window.localStorage;
  const localTheme = localStorage.getItem("theme");

  const { handleSystemTheme } = useHandleThemes();
  const { toggleLightTheme } = useToggleThemes();

  /**
   * Initialize the app theme, if local storage is empty, set light theme, otherwise set theme from local storage.
   * @function initAppTheme
   */
  const initAppTheme = useCallback(() => {
    if (!localTheme) {
      toggleLightTheme();
      console.log("Default theme bootstrapped.");
    } else {
      handleSystemTheme(localTheme);
      console.log("Theme bootstrapped from local storage.");
    }
  }, [localTheme, toggleLightTheme, handleSystemTheme]);

  useEffect(() => {
    initAppTheme();
  }, [initAppTheme]);

  return { initAppTheme };
}
