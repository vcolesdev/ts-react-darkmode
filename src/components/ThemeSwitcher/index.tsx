import {
  SwitchLightTheme,
  SwitchDarkTheme,
  SwitchSystemTheme,
} from "./Switches.tsx";
import { MouseEvent, useEffect, useRef } from "react";

interface ThemeSwitcherProps {
  id?: string;
  onClick?: (e: MouseEvent<HTMLDivElement | HTMLElement>) => void;
  toggleLightTheme: () => void;
  toggleDarkTheme: () => void;
  toggleSystemTheme: () => void;
}

/**
 * ThemeSwitcher component
 * @constructor
 */
export default function ThemeSwitcher(props: ThemeSwitcherProps) {
  const themeSwitcherRef = useRef(null);

  useEffect(() => {}, []);

  return (
    <div
      id={props.id}
      onClick={(e) => props.onClick && props.onClick(e)}
      ref={themeSwitcherRef}
    >
      <div>
        <SwitchLightTheme
          id="iconBtnLight"
          onClick={props.toggleLightTheme}
          textContent="Light"
        />
      </div>
      <div>
        <SwitchDarkTheme
          id="iconBtnDark"
          onClick={props.toggleDarkTheme}
          textContent="Dark"
        />
      </div>
      <div>
        <SwitchSystemTheme
          id="iconBtnSystem"
          onClick={props.toggleSystemTheme}
          textContent="System"
        />
      </div>
    </div>
  );
}
