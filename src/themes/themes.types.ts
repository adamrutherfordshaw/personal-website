import { ThemeName } from "@/context/types";
import { Theme } from "styled-components";

export type AppThemes = {
    [key in ThemeName]: Theme;
};

export { ThemeName };
