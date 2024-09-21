import React, { useEffect } from "react";
import ToggleButton from "../ToggleButton";

export interface ThemeToggle {
  id: string;
  onClick: () => void;
  theme: string;
}

function ThemeToggle({ onClick, theme }: ThemeToggle) {
  const btnRef = React.useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    console.log("ThemeToggle Component: ", theme);
  }, [theme]);

  return (
    <div>
      {theme === "light" ? (
        <ToggleButton
          btnRef={btnRef}
          id="toggleDarkTheme"
          onClick={onClick}
          textContent="Toggle Dark Theme"
          theme="dark"
        />
      ) : (
        <ToggleButton
          btnRef={btnRef}
          id="toggleLightTheme"
          onClick={onClick}
          textContent="Toggle Light Theme"
          theme="light"
        />
      )}
    </div>
  );
}

export default ThemeToggle;
