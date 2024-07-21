import { useEffect, useRef } from "react";

/**
 * Methods and properties for handing (Theme) Switch components.
 * @hook useSwitch
 */
function useSwitch() {
  const btnRef = useRef<HTMLButtonElement>(null);
  const switches = document.querySelectorAll(".theme-switcher");

  useEffect(() => {}, [switches]);

  return {
    btnRef,
    switches,
  };
}

export default useSwitch;
