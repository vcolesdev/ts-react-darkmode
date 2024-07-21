import { useEffect } from "react";

export default function useHTMLClassNames() {
  const html = document.documentElement;

  useEffect(() => {}, [html]);

  const toggleLightClasses = () => {
    html.classList.remove("dark");
    html.classList.add("light");
  };

  const toggleDarkClasses = () => {
    html.classList.remove("light");
    html.classList.add("dark");
  };

  return { toggleLightClasses, toggleDarkClasses };
}
