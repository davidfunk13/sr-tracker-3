import React, { useState, createContext } from 'react';
import seasonFormReducer from './SeasonFormReducer.Context';

export const SeasonFormContext = createContext({});

const SeasonFormProvider = ({ children }: any) => {

    const [state, setState] = useState({ seasonType: null, mainHeroes: [] });
    
    return (
        <SeasonFormContext.Provider value={{state, setState}}>
            {children}
        </SeasonFormContext.Provider>
    );
}

export default SeasonFormProvider;