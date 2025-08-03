import { createContext, useState } from "react";
import type { theme } from "../types/types";
import type { ChildrenInterface, Theme } from "../interfaces/interfaces";

export const themeContext = createContext<Theme | null>(null);

export const ThemeProvider = ({ children }: ChildrenInterface) => {
  const [theme, setTheme] = useState<theme>("light");
  const changeTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.remove(prevTheme);
      document.documentElement.classList.add(newTheme);
      return newTheme;
    });
  };
  const entryTheme = () => {
    const storedTheme = localStorage.getItem("theme") as theme | null;
    const initialTheme = storedTheme || "light";
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(initialTheme);
    setTheme(initialTheme);
    if (!storedTheme) {
      localStorage.setItem("theme", initialTheme);
    }
  };
  return (
    <themeContext.Provider value={{ theme, changeTheme, entryTheme }}>
      {children}
    </themeContext.Provider>
  );
};
