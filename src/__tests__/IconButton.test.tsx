/**
 * @jest-environment jsdom
 */
import { screen, fireEvent, render } from "@testing-library/react";
import IconButton from "../components/IconButton";

test("should call props.onClick when clicked", () => {
  const mockOnClick = jest.fn();

  render(<IconButton onClick={mockOnClick} textContent="Click Me" />);

  fireEvent.click(screen.queryByTestId("icon-button")!); // Click the button

  expect(mockOnClick).toHaveBeenCalledTimes(1); // onClick should trigger once
});
