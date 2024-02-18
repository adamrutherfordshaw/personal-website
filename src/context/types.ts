export interface AppProviderProps {
    children: React.ReactNode;
    initialTheme?: string;
}

export interface AppState {
    theme: ThemeName;
}

export enum AppReducerActionType {
    SET_THEME = "SET_THEME",
    CYCLE_THEME = "CYCLE_THEME",
}

export enum ThemeName {
    BLUE = "blueTheme",
    BEIGE = "beigeTheme",
    LEMON = "lemonTheme"
}

export interface AppReducerActionSetTheme {
    type: AppReducerActionType.SET_THEME;
    payload: ThemeName;
}

export interface AppReducerActionCycleTheme {
    type: AppReducerActionType.CYCLE_THEME;
    payload?: never;
}

export type AppReducerAction = AppReducerActionSetTheme | AppReducerActionCycleTheme;