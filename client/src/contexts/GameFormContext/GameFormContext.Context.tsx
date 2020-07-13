import React, { useState, createContext, useEffect } from 'react';
import GameFormContextTypes from './GameFormContext.Context.Types';

export const GameFormContext = createContext({});

const GameFormProvider = ({ children }: any) => {

    const [state, setState] = useState<GameFormContextTypes>({ currentStep: 0, mapPlayed: undefined, heroesPlayed: [] });

    useEffect(() => console.log(state), [state]);

    return (
        <GameFormContext.Provider value={{ state, setState }}>
            {children}
        </GameFormContext.Provider>
    );
}

export default GameFormProvider;