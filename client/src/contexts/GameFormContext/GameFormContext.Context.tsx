import React, { useState, createContext, useEffect, Dispatch, SetStateAction } from 'react';
import GameForm from './GameFormContext.Context.Types';
import { MapEntry } from '../../utils/mapDictionary';

export type GameContext = [GameForm, Dispatch<SetStateAction<GameForm>>] | [];

export const GameFormContext: React.Context<GameContext> = createContext<GameContext>([] as GameContext);

export const initialGameFormState: GameForm = {
    currentStep: 0,
    mapPlayed: {} as MapEntry,
    heroesPlayed: [],
    outcome: null,
    skillRating: null 
}

const GameFormProvider = ({ children }: any) => {

    const [state, setState]: GameContext = useState<GameForm>(initialGameFormState);

    useEffect(() => console.log(state), [state]);

    return (
        <GameFormContext.Provider value={[state, setState]}>
            {children}
        </GameFormContext.Provider>
    );
}

export default GameFormProvider;