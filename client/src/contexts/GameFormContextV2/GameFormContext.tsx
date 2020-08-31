import React, { useState, createContext, Dispatch, SetStateAction } from 'react';
import { GameFormTypes } from './GameFormContextTypes';

export const initialGameFormState: GameFormTypes = {
    currentStep: undefined,
    mapPlayed: undefined,
    heroesPlayed: [],
    outcome: undefined,
    skillRating: undefined,
    length: 5
}

export type GameContextTypes = [GameFormTypes, Dispatch<SetStateAction<GameFormTypes>>];

export const GameFormContext: React.Context<GameContextTypes> = createContext<GameContextTypes>([initialGameFormState, () => null]);

const GameFormProvider = ({ children }: any) => {

    const [state, setState]: GameContextTypes = useState<GameFormTypes>(initialGameFormState);

    return (
        <GameFormContext.Provider value={[state, setState]}>
            {children}
        </GameFormContext.Provider>
    );
}

export default GameFormProvider;