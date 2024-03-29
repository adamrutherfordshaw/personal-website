import { themeNames } from "@/themes";
import { AppReducerAction, AppReducerActionType, AppState } from "./types";
import { setCookie } from "cookies-next";

export const appReducer = (state: AppState, { type, payload }: AppReducerAction): AppState => {
    switch (type) {
        case AppReducerActionType.SET_THEME:
            setCookie("themeName", payload);

            return {
                ...state,
                theme: payload,
            };
        case AppReducerActionType.CYCLE_THEME:
            const currentThemeIndex = themeNames.indexOf(state.theme);
            const nextThemeIndex = (currentThemeIndex + 1) % themeNames.length;
            const nextTheme = themeNames[nextThemeIndex];

            setCookie("themeName", nextTheme);

            return {
                ...state,
                theme: nextTheme,
            };
        case AppReducerActionType.SET_LIGHTS_OFF:
            setCookie("lightsOff", payload);

            return {
                ...state,
                lightsOff: payload,
            };
        default:
            return state;
    }
}