import React, { useState, createContext, useEffect } from 'react';
import { GameFormTypes, GameContextTypes } from './GameFormContextTypes';
import { MapEntry } from '../../utils/mapDictionary';

//will be used as a reference any time the game form needs to be typed
export const initialGameFormState: GameFormTypes = {
    mapPlayed: undefined,
    heroesPlayed: [],
    outcome: undefined,
    skillRating: 0,
    length: 5,
}

export const GameFormContext: React.Context<GameContextTypes> = createContext<GameContextTypes>([initialGameFormState, () => null]);

const GameFormProvider = ({ children }: any) => {

    const [state, setState]: GameContextTypes = useState<GameFormTypes>(initialGameFormState);

    useEffect(() => console.log({ provider: state }), [state]);

    return (
        <GameFormContext.Provider value={[state, setState]}>
            {children}
        </GameFormContext.Provider>
    );
}

export default GameFormProvider;