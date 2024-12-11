import { createContext, useMemo, useState} from "react";
import { TypeThemeType } from "../types";

export type ThemeContextParams = {
    themeType: TypeThemeType
    setLightTheme: () => void
    setDarkTheme: () => void
}



const initialValue: ThemeContextParams = {
    themeType: 'light',
    setLightTheme: () => {},
    setDarkTheme: () => {},
}
export const ThemeContext = createContext(initialValue);

interface ThemeProviderProps {
    children: React.ReactNode
}


export const ThemeProvider = ({children}: ThemeProviderProps) => {
    const [themeType, setTheme] = useState<TypeThemeType>('light');
    const setLightTheme = () => setTheme('light');
    const setDarkTheme = () => setTheme('dark');
    const value = useMemo(() => ({
        themeType, setDarkTheme, setLightTheme
    }), [themeType])

    return <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>
}