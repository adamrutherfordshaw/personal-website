import { createContext, useReducer } from "react";
import { AppProviderProps, AppReducerAction, AppState } from "./types";
import { initialState } from "./state";
import { appReducer } from "./reducer";

export const AppStateContext = createContext<AppState>({} as AppState);
export const AppDispatchContext = createContext<React.Dispatch<AppReducerAction>>({} as React.Dispatch<AppReducerAction>);

export const AppProvider = ({ children, stateFromCookies }: AppProviderProps) => {

    const [state, dispatch] = useReducer(appReducer, { ...initialState, ...stateFromCookies });


    return (
        <AppStateContext.Provider value={state} >
            <AppDispatchContext.Provider value={dispatch}>
                {children}
            </AppDispatchContext.Provider>
        </AppStateContext.Provider>
    );
};