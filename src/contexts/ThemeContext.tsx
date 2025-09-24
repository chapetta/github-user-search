import { createContext } from "react";

export type ThemeName = 'dark' | 'light'

export interface ThemeContextType {
  theme: ThemeName;
}

export const ThemeContext = createContext<ThemeContextType>({ theme : 'dark'})