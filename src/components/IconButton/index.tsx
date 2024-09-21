import type { IconButtonProps } from "./_types.ts";
import ThemeIcon from "../ThemeIcon";
import useIconButton from "./hooks/useIconButton.tsx";
import React, { forwardRef } from "react";

const IconButton = forwardRef(function IconButton(
  props: IconButtonProps,
  ref: React.Ref<HTMLButtonElement>,
) {
  const { id, theme, textContent } = props;
  const { defaultClasses, handleClick } = useIconButton(props);

  return (
    <>
      <button
        className={defaultClasses}
        data-testid="icon-button"
        id={id && id}
        onClick={(e) => handleClick(e)}
        ref={ref && ref}
      >
        <ThemeIcon theme={theme || "light"} />
        <span>{textContent}</span>
      </button>
    </>
  );
});

export default IconButton;
