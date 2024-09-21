import { useEffect } from "react";

/**
 * Toggle the HTML classes between light and dark.
 * @function useHTMLClassNames
 * @returns {object} - The functions to toggle the HTML classes.
 */
export default function useHTMLClassNames() {
  const html = document.documentElement;

  useEffect(() => {}, [html]);

  /**
   * Toggle the light classes on the HTML element.
   * @function toggleLightClasses
   */
  function toggleLightClasses() {
    html.classList.remove("dark");
    html.classList.add("light");
  }

  /**
   * Toggle the dark classes on the HTML element.
   * @function toggleDarkClasses
   */
  function toggleDarkClasses() {
    html.classList.remove("light");
    html.classList.add("dark");
  }

  return { toggleLightClasses, toggleDarkClasses };
}
