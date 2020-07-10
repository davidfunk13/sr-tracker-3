import React, { useState, createContext } from 'react';
import GameFormContextTypes from './GameFormContext.Context.Types';

export const GameFormContext = createContext({});

const GameFormProvider = ({ children }: any) => {

    const [state, setState] = useState<GameFormContextTypes>({ currentStep: 1, mapPlayed: undefined });

    return (
        <GameFormContext.Provider value={{ state, setState }}>
            {children}
        </GameFormContext.Provider>
    );
}

export default GameFormProvider;