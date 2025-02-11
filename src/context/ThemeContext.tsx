import { createContext, Dispatch, SetStateAction } from "react";

interface ThemeContextType {
    isDark: boolean;
    setIsDark: Dispatch<SetStateAction<boolean>>;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);