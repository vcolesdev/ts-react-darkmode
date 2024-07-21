/**
 * Global event types
 */

export type Unsubscribe = () => void;

/**
 * ThemeSwitch Events Definitions
 */

export type ThemeSwitchEventsDef = {
  SWITCH_LIGHT_THEME: "light";
  SWITCH_DARK_THEME: "dark";
  SWITCH_SYSTEM_THEME: "system";
};

export type ThemeSwitchEventsDefNoPayload = {
  SWITCH_LIGHT_THEME: void;
  SWITCH_DARK_THEME: void;
  SWITCH_SYSTEM_THEME: void;
};

export type ThemeSwitchEvents = keyof ThemeSwitchEventsDef;
export type ThemeSwitchEventsNoPayload = keyof ThemeSwitchEventsDefNoPayload;
