import React, { useContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../components/ui/theme";

type ThemeMode = "light" | "dark";

type DarkModeContextType = {
  theme: ThemeMode;
  toggleTheme: () => void;
};

const DarkModeContext = React.createContext<DarkModeContextType>({
  theme: "light",
  toggleTheme: () => {
    console.warn("toggleTheme not overriden");
  },
});

export const DarkModeProvider: React.FC = (props) => {
  const [theme, setThemeState] = useState<ThemeMode>();
  const [componentMounted, setComponentMounted] = useState(false);

  const setMode = (mode: ThemeMode) => {
    window.localStorage.setItem("theme", mode);
    setThemeState(mode);
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as ThemeMode;
    if (localTheme) {
      setThemeState(localTheme);
    } else {
      setMode("light");
    }
    setComponentMounted(true);
  }, []);

  const themeMode = theme !== "light" ? lightTheme : darkTheme;

  return (
    <DarkModeContext.Provider value={{ theme: theme || "light", toggleTheme }}>
      <ThemeProvider theme={themeMode}>
      {props.children}
      </ThemeProvider>
    </DarkModeContext.Provider>
  );
};

const useDarkMode = () => {
  const { theme, toggleTheme } = useContext(DarkModeContext);
  return { theme, toggleTheme };
};

export default useDarkMode;
