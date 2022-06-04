import { NextPageContext } from "next";
import React, {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export type Theme = {
  theme: string;
  handleTheme: () => void;
};

interface Props {
  children: React.ReactNode;
}

export const ThemeContext = createContext<Theme | null>(null);

export const ThemeProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<string>("dark");

  const handleTheme = () => {
    if (theme === "dark") {
      setTheme("white");
    } else {
      setTheme("dark");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme , handleTheme }}> {children} </ThemeContext.Provider>
  );
};
