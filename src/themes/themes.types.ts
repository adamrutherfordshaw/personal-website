import { ThemeName } from "@/context/types";
import { DefaultTheme } from "styled-components";

export type AppThemes = {
    [key in ThemeName]: DefaultTheme;
};

export { ThemeName };
