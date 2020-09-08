import React, { FunctionComponent, useContext, Dispatch, SetStateAction, Fragment } from 'react';
import SelectMap from './components/SelectMap/SelectMap.AddGame';
import HeroesPlayed from './components/HeroesPlayed/HeroesPlayed.AddGame';
import Outcome from './components/Outcome/Outcome.AddGame';
import SkillRating from './components/SkillRating/SkillRating.AddGame';
import { RoleEnum, FormComponentTypes } from '../../App.Types'
import ConfirmGame from './components/ConfirmGame/ConfirmGame.AddGame';

export interface ComponentDependenciesTypes {
    createGame: (game: any) => void
    role: RoleEnum
}

export interface GameFormProps extends FormComponentTypes {
    componentDependencies: ComponentDependenciesTypes
}

const GameForm: FunctionComponent<GameFormProps> = ({ formControls, modalControls, componentDependencies }) => {
    
    const { createGame, role } = componentDependencies

    function renderComponent(step: number): JSX.Element {
        switch (step) {
            case 0:
                return <SelectMap modalControls={modalControls} formControls={formControls} />
            case 1:
                return <HeroesPlayed modalControls={modalControls} formControls={formControls} role={role} />
            case 2:
                return <Outcome modalControls={modalControls} formControls={formControls} />
            case 3:
                return <SkillRating modalControls={modalControls} formControls={formControls} />
            case 4:
                return <ConfirmGame modalControls={modalControls} formControls={formControls} createGame={createGame} />
            default:
                return <h4>Something went wrong</h4>;
        }
    }

    return renderComponent(formControls.step);
};

export default GameForm;