import { createContext } from "react";
import { GameForm, GameFormContextType } from "../../App.Types";

export const initialGameFormState: GameForm = {
    step: 0,
    mapPlayed: undefined,
    heroesPlayed: [],
    outcome: undefined,
    skillRating: undefined,
}

const GameFormContext = createContext<GameFormContextType>([initialGameFormState, () => null]);

export default GameFormContext