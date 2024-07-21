import type { ThemeSwitch } from "../ThemeSwitcher/_types.ts";
import {
  SwitchDarkTheme,
  SwitchLightTheme,
  SwitchSystemTheme,
} from "../ThemeSwitcher/Switches.tsx";

export default function ThemeSwitch({
  id,
  textContent,
  onClick,
  theme,
}: ThemeSwitch) {
  switch (theme) {
    case "light":
      return (
        <SwitchLightTheme id={id} onClick={onClick} textContent={textContent} />
      );
    case "dark":
      return (
        <SwitchDarkTheme id={id} onClick={onClick} textContent={textContent} />
      );
    case "system":
      return (
        <SwitchSystemTheme
          id={id}
          onClick={onClick}
          textContent={textContent}
        />
      );
    default:
      return (
        <SwitchLightTheme id={id} onClick={onClick} textContent={textContent} />
      );
  }
}
