/**
 * This is our eventbus, it is an instance of EventTarget
 */
export const eventBus = new EventTarget();

/**
 * Expose the LocalStorage API interface
 */
export const localStorage = window.localStorage;

/**
 * Check the window.matchMedia("(prefers-color-scheme: dark)").matches
 * value to determine if the user prefers dark mode
 */
export const prefersDark = window.matchMedia(
  "(prefers-color-scheme: dark)",
).matches;
