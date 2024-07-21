import { themeSwitchEventBus } from "../../../events/ThemeSwtchEvent";
import useHandleThemes from "../../../hooks/useHandleThemes.ts";
import useHTMLClassNames from "../../../hooks/useHTMLClassNames.ts";

/**
 * Properties and methods for switching themes
 * @hook useToggleThemes
 */
function useToggleThemes() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const themeSwitch = themeSwitchEventBus;

  // Handle themes
  const { handleLightTheme, handleDarkTheme } = useHandleThemes();
  const { toggleLightClasses, toggleDarkClasses } = useHTMLClassNames();

  // Publish events to switch themes
  const switchLightTheme = () =>
    themeSwitch.publish("SWITCH_LIGHT_THEME", "light");
  const switchDarkTheme = () =>
    themeSwitch.publish("SWITCH_DARK_THEME", "dark");
  const switchSystemTheme = () =>
    themeSwitch.publish("SWITCH_SYSTEM_THEME", "system");

  /**
   * Toggle light theme
   */
  function toggleLightTheme(): void {
    toggleLightClasses();
    handleLightTheme();
    return switchLightTheme();
  }

  /**
   * Toggle dark theme
   */
  function toggleDarkTheme(): void {
    toggleDarkClasses();
    handleDarkTheme();
    return switchDarkTheme();
  }

  /**
   * Toggle system theme
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
