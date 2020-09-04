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
    formControls: any
}

const GameForm: FunctionComponent<GameFormProps> = ({ formControls, componentDependencies }) => {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const [state, setState]: GameContext = useContext(GameFormContext);

    const { createGame, role, setOpen } = componentDependencies

    const { setStep, step } = formControls;

    function renderComponent(step: number): JSX.Element {
        switch (step) {
            case 0:
                return <div style={{ height: '100%', width: '100%', backgroundColor: 'red' }}><h4>1</h4></div>;
            // return <SelectMap formControls={formControls} step={step} setStep={setStep} role={role} />
            case 1:
                return <div style={{ height: '100%', width: '100%', backgroundColor: 'blue' }}><h4>2</h4></div>;
            // return <HeroesPlayed formControls={formControls} step={step} setStep={setStep} role={role} />
            case 2:
                return <div style={{ height: '100%', width: '100%', backgroundColor: 'green' }}><h4>3</h4></div>;
            // return <Outcome formControls={formControls} step={step} setStep={setStep}  />
            case 3:
                return <div style={{ height: '100%', width: '100%', backgroundColor: 'purple' }}><h4>4</h4></div>;
            // return <SkillRating formControls={formControls} step={step} setStep={setStep}  />
            case 4:
                return <div style={{ height: '100%', width: '100%', backgroundColor: 'orange' }}><h4>5</h4></div>;
            // return <ConfirmGame formControls={formControls} step={step} setStep={setStep} createGame={createGame} setOpen={setOpen} />
            default:
                return <h4>Something went wrong</h4>;
        }
    }

    return renderComponent(step);
};

export default GameForm;