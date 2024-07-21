/**
 * @jest-environment jsdom
 */
import { screen, render } from "@testing-library/react";
import ThemeIcon from "../components/ThemeIcon";

describe("Component/ThemeIcon", () => {
  it("renders an IconTablerSun when prop.theme is light", () => {
    const mockTheme = "light";
    render(<ThemeIcon theme={mockTheme} />);
    expect(screen.queryByTestId("icon-tabler-sun")).toBeInTheDocument();
  });

  it("renders an IconTablerMoonStars when prop.theme is dark", () => {
    const mockTheme = "dark";
    render(<ThemeIcon theme={mockTheme} />);
    expect(screen.queryByTestId("icon-tabler-moon-stars")).toBeInTheDocument();
  });

  it("renders an IconDeviceLaptop when prop.theme is system", () => {
    const mockTheme = "system";
    render(<ThemeIcon theme={mockTheme} />);
    expect(
      screen.queryByTestId("icon-tabler-device-laptop"),
    ).toBeInTheDocument();
  });
});
