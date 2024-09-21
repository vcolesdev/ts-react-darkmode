import useToggleThemes from "../hooks/useToggleThemes.ts";
import ThemeSwitcher from "../components/ThemeSwitcher";
import ThemeToggle from "../components/ThemeToggle";
import useAppInitTheme from "./useAppInitTheme.ts";
import useToggleCurrentTheme from "../hooks/useToggleCurrentTheme.ts";

function AppThemeSwitcher() {
  const { toggleLightTheme, toggleDarkTheme, toggleSystemTheme } =
    useToggleThemes();

  const { currentTheme, toggleCurrentTheme } = useToggleCurrentTheme();

  // Initialize the app theme on page load.
  useAppInitTheme();

  return (
    <div id="appContent" data-testid="app-content">
      <div style={{ marginBottom: "3rem" }}>
        <h2>TS Theme Switcher</h2>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat."
        </p>
      </div>
      <div style={{ marginBottom: "3rem" }}>
        <ThemeSwitcher
          id="themeSwitcher"
          toggleDarkTheme={toggleDarkTheme}
          toggleLightTheme={toggleLightTheme}
          toggleSystemTheme={toggleSystemTheme}
        />
      </div>
      <h3>TS Theme Toggle - (No System Preference)</h3>
      <div style={{ marginBottom: "3rem" }}>
        <ThemeToggle
          id="themeToggle"
          onClick={toggleCurrentTheme}
          theme={currentTheme!}
        />
      </div>
    </div>
  );
}

export default AppThemeSwitcher;
