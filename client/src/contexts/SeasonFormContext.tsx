import React, { useContext, createContext, useReducer, Dispatch } from 'react';


type InitialStateType = {
    step: number,
}


type SeasonFormContextType = {
    state: InitialStateType,
    dispatch: Dispatch<any>
}

const initialState = { step: 1 };


const SeasonFormContext = createContext<SeasonFormContextType>({ state: initialState, dispatch: () => null });

const seasonFormReducer = (state: any, action: any) => {
    switch (action.type) {
        default:
            console.log({ state, action });
            break;
    }
}

const SeasonFormProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(seasonFormReducer, {});
    return (
        <SeasonFormContext.Provider value={{ state, dispatch }}>
            {children}
        </SeasonFormContext.Provider>
    );
}

export { SeasonFormProvider, SeasonFormContext };