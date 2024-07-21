/**
 * @jest-environment jsdom
 */
import { screen, render } from "@testing-library/react";
import App from "../app/App.tsx";

describe("App", () => {
  test("should render App", () => {
    render(<App />);
    expect(screen.getByTestId("app-content")).toBeInTheDocument();
  });
});

describe("LocalStorage", () => {
  test("localStorage should be available and contain a 'theme' key on page load", () => {
    expect(localStorage).toBeDefined();
    expect(localStorage.getItem("theme")).toBeDefined();
  });

  test("localStorage 'theme' key should be set to 'light' or 'dark' on page load", () => {
    expect(localStorage.getItem("theme")).toMatch(/light|dark/);
  });
});
