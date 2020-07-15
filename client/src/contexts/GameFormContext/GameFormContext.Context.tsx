import React, { useState, createContext, useEffect } from 'react';
import GameFormContextTypes from './GameFormContext.Context.Types';

export const GameFormContext: React.Context<{}> = createContext({});

export const initialGameFormState: GameFormContextTypes =
{
    currentStep: 0,
    mapPlayed: undefined,
    heroesPlayed: [],
    outcome: undefined,
    skillRating: undefined
}

const GameFormProvider = ({ children }: any) => {

    const [state, setState] = useState<GameFormContextTypes>(initialGameFormState);

    useEffect(() => console.log(state), [state]);

    return (
        <GameFormContext.Provider value={[state, setState]}>
            {children}
        </GameFormContext.Provider>
    );
}

export default GameFormProvider;