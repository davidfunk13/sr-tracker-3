import React, { useState, createContext } from 'react';
import SeasonFormContextTypes from './SeasonFromContext.Context.Types';
import seasonFormComponents from '../../forms/CreateSeason';

export const SeasonFormContext = createContext({});

const SeasonFormProvider = ({ children }: any) => {

    const [state, setState] = useState<SeasonFormContextTypes>({ currentStep: 1, seasonType: null, mainHeroes: [], length: seasonFormComponents.length });

    return (
        <SeasonFormContext.Provider value={{ state, setState }}>
            {children}
        </SeasonFormContext.Provider>
    );
}

export default SeasonFormProvider;