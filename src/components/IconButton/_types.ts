import type { MouseEventHandler, RefObject } from "react";
import type { Theme } from "../ThemeSwitcher/_types.ts";

export interface IconButtonProps {
  classes?: string;
  id?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  ref?: RefObject<HTMLButtonElement>;
  textContent: string;
  theme?: Theme;
}
