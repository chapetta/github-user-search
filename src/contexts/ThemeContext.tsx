import { createContext } from "react";

export type ThemeName = 'dark' | 'light'

export interface ThemeContextType {
  theme: ThemeName;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({ theme : 'dark'})