
import { TypeTheme } from "./typeTheme"
import { TypeThemeType } from "./TypeThemeType"

export type TypeThemes = {
    [Type in TypeThemeType]: TypeTheme
}