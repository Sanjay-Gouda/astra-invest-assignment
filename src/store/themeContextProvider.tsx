"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";
import { darkTheme, lightTheme } from "@/constants/theme";

export type ThemeContextType = {
  theme: string;
  handleToggle: (isToggle: boolean) => void;
};
export const ThemeContext = createContext<any>({});

export const useTheme = () => {
  const contextTheme = useContext(ThemeContext);

  return contextTheme;
};

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<any>(lightTheme);

  const handleToggle = (isToggle: boolean) => {
    if (isToggle) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, handleToggle }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};

export default ThemeContextProvider;
