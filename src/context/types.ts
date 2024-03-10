export interface AppProviderProps {
    children: React.ReactNode;
    stateFromCookies: Partial<AppState>;
}

export interface AppState {
    theme: ThemeName;
    lightsOff: boolean;
}

export enum AppReducerActionType {
    SET_THEME = "SET_THEME",
    CYCLE_THEME = "CYCLE_THEME",
    SET_LIGHTS_OFF = "SET_LIGHTS_OFF",
}

export enum ThemeName {
    BLUE = "blueTheme",
    BEIGE = "beigeTheme",
    LEMON = "lemonTheme",
    FOREST = "forestTheme",
}

export interface AppReducerActionSetTheme {
    type: AppReducerActionType.SET_THEME;
    payload: ThemeName;
}

export interface AppReducerActionCycleTheme {
    type: AppReducerActionType.CYCLE_THEME;
    payload?: never;
}

export interface AppReducerActionSetLightsOff {
    type: AppReducerActionType.SET_LIGHTS_OFF;
    payload: boolean;
}

export type AppReducerAction = AppReducerActionSetTheme | AppReducerActionCycleTheme | AppReducerActionSetLightsOff;