import { ThemeContext } from "../hoc/ThemeProvider"
import { useContext } from "react"
import { themes } from "@/themes/themes";

const useThemeProvider = () => {
    const {themeType, setDarkTheme, setLightTheme} = useContext(ThemeContext);
    const theme = themes[themeType];
    return {themeType, setDarkTheme, setLightTheme, theme};
}

export {useThemeProvider}