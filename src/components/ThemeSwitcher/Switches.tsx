import type { ThemeSwitch } from "./_types.ts";
import IconButton from "../IconButton";
import useSwitch from "./hooks/useSwitch.ts";

export function SwitchLightTheme({ id, onClick, textContent }: ThemeSwitch) {
  const { btnRef } = useSwitch();

  return (
    <IconButton
      classes="theme-switcher theme-switcher--light"
      id={id}
      onClick={(e) => onClick(e)}
      textContent={textContent}
      ref={btnRef}
      theme="light"
    />
  );
}

export function SwitchDarkTheme({ id, onClick, textContent }: ThemeSwitch) {
  const { btnRef } = useSwitch();

  return (
    <IconButton
      classes="theme-switcher theme-switcher--dark"
      id={id}
      onClick={(e) => onClick(e)}
      textContent={textContent}
      ref={btnRef}
      theme="dark"
    />
  );
}

export function SwitchSystemTheme({ id, onClick, textContent }: ThemeSwitch) {
  const { btnRef } = useSwitch();

  return (
    <IconButton
      classes="theme-switcher theme-switcher--system"
      id={id}
      onClick={(e) => onClick(e)}
      textContent={textContent}
      ref={btnRef}
      theme="system"
    />
  );
}
