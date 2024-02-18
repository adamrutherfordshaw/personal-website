import { theme as defaultTheme } from "./default";
import { theme as beigeTheme } from "./beige";
import { AppThemes, ThemeName } from "./themes.types";

export const themeNames = Object.values(ThemeName);

export const appThemes: AppThemes = {
    defaultTheme,
    beigeTheme
};