import React, { useState, createContext, Dispatch, SetStateAction, Component } from 'react';
import { GameFormTypes } from './GameFormContextTypes';
import SelectMap from '../../forms/AddGame/components/SelectMap/SelectMap.AddGame';
import HeroesPlayed from '../../forms/AddGame/components/HeroesPlayed/HeroesPlayed.AddGame';
import Outcome from '../../forms/AddGame/components/Outcome/Outcome.AddGame';
import SkillRating from '../../forms/AddGame/components/SkillRating/SkillRating.AddGame';
import ConfirmGame from '../../forms/AddGame/components/ConfirmGame/ConfirmGame.AddGame'

//will be used as a reference any time the game form needs to be typed
export const initialGameFormState: GameFormTypes = {
    currentStep: undefined,
    mapPlayed: undefined,
    heroesPlayed: [],
    outcome: undefined,
    skillRating: undefined,
    length: 5,
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