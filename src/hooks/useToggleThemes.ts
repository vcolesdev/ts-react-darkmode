import { themeSwitchEventBus } from "../events/ThemeSwtchEvent";
import useHandleThemes from "../hooks/useHandleThemes.ts";
import useHTMLClassNames from "../hooks/useHTMLClassNames.ts";

/**
 * Properties and methods for switching themes.
 * @hook useToggleThemes
 * @returns {object} - The functions to toggle themes.
 */
function useToggleThemes() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const themeSwitch = themeSwitchEventBus;

  const { handleLightTheme, handleDarkTheme } = useHandleThemes();
  const { toggleLightClasses, toggleDarkClasses } = useHTMLClassNames();

  // Publish events to switch themes.  We can listen for these events from components.
  const switchLightTheme = () =>
    themeSwitch.publish("SWITCH_LIGHT_THEME", "light");
  const switchDarkTheme = () =>
    themeSwitch.publish("SWITCH_DARK_THEME", "dark");
  const switchSystemTheme = () =>
    themeSwitch.publish("SWITCH_SYSTEM_THEME", "system");

  /**
   * Toggle light theme.
   * @function toggleLightTheme
   */
  function toggleLightTheme(): void {
    toggleLightClasses();
    handleLightTheme();
    return switchLightTheme();
  }

  /**
   * Toggle dark theme
   * @function toggleDarkTheme
   */
  function toggleDarkTheme(): void {
    toggleDarkClasses();
    handleDarkTheme();
    return switchDarkTheme();
  }

  /**
   * Toggle system theme
   * @function toggleSystemTheme
   */
  function toggleSystemTheme(): void {
    if (prefersDark) {
      toggleDarkClasses();
      handleDarkTheme();
    } else {
      toggleLightClasses();
      handleLightTheme();
    }
    return switchSystemTheme();
  }

  return {
    toggleLightTheme,
    toggleDarkTheme,
    toggleSystemTheme,
  };
}

export default useToggleThemes;
