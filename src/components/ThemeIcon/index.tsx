import type { ThemeIconProps } from "../ThemeSwitcher/_types.ts";
import IconTablerSun from "../Icons/IconTablerSun.tsx";
import IconTablerMoonStars from "../Icons/IconTablerMoonStars.tsx";
import IconDeviceLaptop from "../Icons/IconDeviceLaptop.tsx";

/**
 * ThemeIcon component
 * @param theme
 * @constructor
 */
export default function ThemeIcon({ theme }: ThemeIconProps) {
  switch (theme) {
    case "light":
      return <IconTablerSun />;
    case "dark":
      return <IconTablerMoonStars />;
    case "system":
      return <IconDeviceLaptop />;
    default:
      return <IconTablerSun />;
  }
}
