import type { IconButtonProps } from "../../../types.ts";
import React, { useCallback, useEffect, useState } from "react";
import classNames from "classnames";

/**
 * Properties and methods for the IconButton component
 * @hook useIconButton
 * @param props
 */
function useIconButton({ ...props }: IconButtonProps) {
  const [btnElement, setBtnElement] = useState<HTMLButtonElement | null>(null);

  const getBtnElement = useCallback((id: string) => {
    return document.getElementById(id) as HTMLButtonElement;
  }, []);

  const defaultClasses = classNames("button--wIcon", props.classes);

  useEffect(() => {
    const button = getBtnElement(props.id);
    setBtnElement(button);
  }, [getBtnElement, props.id, setBtnElement]);

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    btnElement && btnElement.focus();
    props.onClick && props.onClick(e);
  }

  return {
    btnElement,
    defaultClasses,
    getBtnElement,
    handleClick,
    setBtnElement,
  };
}

export default useIconButton;
