import { theme as defaultTheme } from "./default-theme";
import { theme as beigeTheme } from "./beige-theme";
import { AppThemes, ThemeName } from "./themes.types";

export const themeNames = Object.values(ThemeName);

export const appThemes: AppThemes = {
    defaultTheme,
    beigeTheme
};