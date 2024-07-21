import React from "react";

export type Theme = string;

export interface ThemeIconProps {
  theme?: Theme | "light";
}

export interface ThemeSwitch {
  id: string;
  textContent: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  theme?: "light" | "dark" | "system";
}
