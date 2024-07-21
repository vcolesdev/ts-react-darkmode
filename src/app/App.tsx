import "./App.css";
import { ThemeContext, ThemeProvider } from "../context/ThemeContext.ts";
import { ReactNode, useContext, useEffect } from "react";
import ThemeSwitcher from "../components/ThemeSwitcher";
import useToggleThemes from "../components/ThemeSwitcher/hooks/useToggleThemes.ts";
import useHandleThemes from "../hooks/useHandleThemes.ts";

const App = (): ReactNode => {
  const localStorage = window.localStorage;
  const localTheme = localStorage.getItem("theme");

  const { theme, setTheme } = useContext(ThemeContext);

  const { handleSystemTheme } = useHandleThemes();
  const { toggleLightTheme, toggleDarkTheme, toggleSystemTheme } =
    useToggleThemes();

  /**
   * Bootstrap theme on page load
   */
  useEffect(() => {
    // If local storage is empty, set light theme
    if (!localTheme) {
      toggleLightTheme();
      console.log("Default theme bootstrapped.");
    } else {
      // Set theme from local storage
      handleSystemTheme(localTheme);
      console.log("Theme bootstrapped from local storage.");
    }
  }, [handleSystemTheme, localTheme, toggleLightTheme]);

  return (
    <>
      <ThemeProvider value={{ theme, setTheme }}>
        <div id="appContent" data-testid="app-content">
          <ThemeSwitcher
            id="themeSwitcher"
            toggleLightTheme={toggleLightTheme}
            toggleDarkTheme={toggleDarkTheme}
            toggleSystemTheme={toggleSystemTheme}
          />
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
