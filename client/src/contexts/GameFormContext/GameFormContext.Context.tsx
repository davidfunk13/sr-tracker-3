import React, { useState, createContext, useEffect, Dispatch, SetStateAction } from 'react';
import GameForm from './GameFormContext.Context.Types';
import { MapEntry } from '../../utils/mapDictionary';
import { HeroEntry } from '../../utils/heroDictionary';

export type GameContext = [GameForm, Dispatch<SetStateAction<GameForm>>];

export const initialGameFormState: GameForm = {
    currentStep: 0,
    mapPlayed: {} as MapEntry,
    heroesPlayed: [] as HeroEntry[],
    outcome: 0,
    skillRating: 0,
}

export const GameFormContext: React.Context<GameContext> = createContext<GameContext>([initialGameFormState, ()=> null]);

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