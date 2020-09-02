import React, { FunctionComponent, useContext, Dispatch, SetStateAction, Fragment } from 'react';
import SelectMap from './components/SelectMap/SelectMap.AddGame';
import HeroesPlayed from './components/HeroesPlayed/HeroesPlayed.AddGame';
import Outcome from './components/Outcome/Outcome.AddGame';
import SkillRating from './components/SkillRating/SkillRating.AddGame';
import { GameFormContext, GameContext } from '../../contexts/GameFormContext/GameFormContext.Context';
import { RoleEnum } from '../../App.Types'
import ConfirmGame from './components/ConfirmGame/ConfirmGame.AddGame';

export interface ComponentDependenciesTypes {
    createGame: (game: any) => void
    role: RoleEnum
    setOpen: Dispatch<SetStateAction<boolean>>
}

export interface GameFormProps {
    componentDependencies: ComponentDependenciesTypes
    step: number
}

const GameForm: FunctionComponent<GameFormProps> = ({ formControls, componentDependencies }) => {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const [state, setState]: GameContext = useContext(GameFormContext);

    const { createGame, role, setOpen } = componentDependencies
    
    const { setStep, step } = formControls;

    function renderComponent(step: number): JSX.Element {
        switch (step) {
            case 0:
                return <SelectMap step={step} setStep={setStep} role={role} />
            case 1:
                return <HeroesPlayed step={step} setStep={setStep}  role={role} />
            case 2:
                return <Outcome step={step} setStep={setStep}  />
            case 3:
                return <SkillRating step={step} setStep={setStep}  />
            case 4:
                return <ConfirmGame step={step} setStep={setStep} createGame={createGame} setOpen={setOpen} />
            default:
                return <h4>Something went wrong</h4>;
        }
    }

    return renderComponent(step);
};

export default GameForm;