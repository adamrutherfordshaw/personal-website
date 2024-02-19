
import { forestTheme } from "./forest";
import { beigeTheme } from "./beige";
import { blueTheme } from "./blue";
import { lemonTheme } from "./lemon";
import { AppThemes, ThemeName } from "./themes.types";

export const themeNames = Object.values(ThemeName);

export const appThemes: AppThemes = {
    blueTheme,
    beigeTheme,
    lemonTheme,
    forestTheme
};