import "./App.css";
import { ThemeContext, ThemeProvider } from "../context/ThemeContext.ts";
import { useContext } from "react";
import AppThemeSwitcher from "./AppThemeSwitcher.tsx";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider value={{ theme, setTheme }}>
      <AppThemeSwitcher />
    </ThemeProvider>
  );
}

export default App;
