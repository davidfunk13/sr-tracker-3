import React, { FunctionComponent, useContext } from 'react';
import SelectMap from './components/SelectMap/SelectMap.AddGame';
import HeroesPlayed from './components/HeroesPlayed/HeroesPlayed.AddGame';
import Outcome from './components/Outcome/Outcome.AddGame';
import SkillRating from './components/SkillRating/SkillRating.AddGame';
import { GameFormContextType, ModalControls, RoleEnum } from '../../App.Types'
import ConfirmGame from './components/ConfirmGame/ConfirmGame.AddGame';
import GameFormContext from '../../contexts/GameForm/GameFormContext';

export interface ComponentDependenciesTypes {
    createGame: (game: any) => void
    role: RoleEnum
}

export interface GameFormProps {
    modalControls: ModalControls,
    componentDependencies: ComponentDependenciesTypes
}

const GameForm: FunctionComponent<GameFormProps> = ({ modalControls, componentDependencies }) => {
    const [state, setState] = useContext<GameFormContextType>(GameFormContext);

    const { createGame, role } = componentDependencies

    function renderComponent(step: number): JSX.Element {
        switch (step) {
            case 0:
                return <SelectMap />
            case 1:
                return <HeroesPlayed role={role} />
            case 2:
                return <Outcome />
            case 3:
                return <SkillRating />
            case 4:
                return <ConfirmGame modalControls={modalControls} createGame={createGame} />
            default:
                return <h4>Something went wrong</h4>;
        }
    }
    return renderComponent(state.step);
};

export default GameForm;