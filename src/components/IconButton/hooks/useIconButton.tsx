import type { IconButtonProps } from "../_types";
import React, { useCallback, useEffect, useState } from "react";
import classNames from "classnames";

/**
 * Properties and methods for the IconButton component
 * @hook useIconButton
 * @param props
 */
export default function useIconButton({ ...props }: IconButtonProps) {
  const [btnElement, setBtnElement] = useState<HTMLButtonElement | null>(null);

  // The default classes for the button.
  const defaultClasses = classNames("button--wIcon", props.classes);

  // Get the button element by id.
  const getBtnElement = useCallback((id: string) => {
    return document.getElementById(id) as HTMLButtonElement;
  }, []);

  // On mount, set the button element.
  useEffect(() => {
    const button = getBtnElement(props.id!);
    setBtnElement(button);
  }, [getBtnElement, props.id, setBtnElement]);

  /**
   * Handle the button click event.
   * @function handleClick
   * @param e
   */
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
