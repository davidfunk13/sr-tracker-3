import React, { FunctionComponent, useContext, Dispatch, SetStateAction, Fragment } from 'react';
import SelectMap from './components/SelectMap/SelectMap.AddGame';
import HeroesPlayed from './components/HeroesPlayed/HeroesPlayed.AddGame';
import Outcome from './components/Outcome/Outcome.AddGame';
import SkillRating from './components/SkillRating/SkillRating.AddGame';
import { GameFormContextType, RoleEnum } from '../../App.Types'
import ConfirmGame from './components/ConfirmGame/ConfirmGame.AddGame';
import GameFormContext from '../../contexts/GameForm/GameFormContext';

export interface ComponentDependenciesTypes {
    createGame: (game: any) => void
    role: RoleEnum
}

export interface GameFormProps {
    // componentDependencies: ComponentDependenciesTypes
}

const GameForm: FunctionComponent<GameFormProps> = ({
    // formControls,
    // modalControls,
    // componentDependencies
}) => {
    const [state, setState] = useContext<GameFormContextType>(GameFormContext);

    // const { createGame, role } = componentDependencies

    function renderComponent(step: number): JSX.Element {
        switch (step) {
            // case 0:
            //     return <SelectMap modalControls={modalControls} formControls={formControls} />
            // case 1:
            //     return <HeroesPlayed modalControls={modalControls} formControls={formControls} role={role} />
            // case 2:
            //     return <Outcome modalControls={modalControls} formControls={formControls} />
            // case 3:
            //     return <SkillRating modalControls={modalControls} formControls={formControls} />
            // case 4:
            //     return <ConfirmGame modalControls={modalControls} formControls={formControls} createGame={createGame} />
            case 0:
                return <p>0</p>
            case 1:
                return <p>1</p>
            case 2:
                return <p>2</p>
            case 3:
                return <p>3</p>
            case 4:
                return <p>4</p>
            default:
                return <h4>Something went wrong</h4>;
        }
    }
    return renderComponent(formControls.step);
};

export default GameForm;