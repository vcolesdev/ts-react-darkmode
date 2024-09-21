import React, { useEffect } from "react";
import IconButton from "../../components/IconButton";

export interface ToggleButton {
  btnRef: React.RefObject<HTMLButtonElement>;
  id: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  textContent: string;
  theme: string;
}

function ToggleButton({
  btnRef,
  id,
  onClick,
  textContent,
  theme,
}: ToggleButton) {
  function addSwitchThemeEventListeners() {
    document.addEventListener("SWITCH_DARK_THEME", () => {
      console.log("Dark theme switched");
    });
    document.addEventListener("SWITCH_LIGHT_THEME", () => {
      console.log("Light theme switched");
    });
  }

  function removeSwitchThemeEventListeners() {
    document.removeEventListener("SWITCH_DARK_THEME", () => {
      console.log("Dark theme switched");
    });
    document.removeEventListener("SWITCH_LIGHT_THEME", () => {
      console.log("Light theme switched");
    });
  }

  useEffect(() => {
    addSwitchThemeEventListeners();
    return () => {
      removeSwitchThemeEventListeners();
    };
  }, []);

  return (
    <IconButton
      classes={`theme-toggle theme-toggle-${theme}`}
      id={id}
      onClick={(e) => onClick(e)}
      textContent={textContent}
      ref={btnRef}
      theme={theme}
    />
  );
}

export default ToggleButton;
