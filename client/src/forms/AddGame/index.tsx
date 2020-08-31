import React, { FunctionComponent, useContext, Dispatch, SetStateAction, Fragment } from 'react';
import SelectMap from './components/SelectMap/SelectMap.AddGame';
import HeroesPlayed from './components/HeroesPlayed/HeroesPlayed.AddGame';
import Outcome from './components/Outcome/Outcome.AddGame';
import SkillRating from './components/SkillRating/SkillRating.AddGame';
import { GameFormContext, GameContext } from '../../contexts/GameFormContext/GameFormContext.Context';
import { RoleEnum } from '../../App.Types'
import ConfirmGame from './components/ConfirmGame/ConfirmGame.AddGame';

interface GameFormProps {
    createGame: (game: any) => void
    role: RoleEnum
    setOpen: Dispatch<SetStateAction<boolean>>
}

const GameForm: FunctionComponent<GameFormProps> = ({ createGame, role, setOpen }) => {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const [state, setState]: GameContext = useContext(GameFormContext);

    function renderComponent(step: number): JSX.Element {
        switch (step) {
            case 0:
                return <SelectMap role={role} />
            case 1:
                return <HeroesPlayed role={role} />
            case 2:
                return <Outcome />
            case 3:
                return <SkillRating />
            case 4:
                return <ConfirmGame createGame={createGame} setOpen={setOpen} />
            default:
                return <h4>Something went wrong</h4>;
        }
    }

    return (<div style={{ height: '70vh', display: 'flex'}}>{renderComponent(state.currentStep)}</div>);
};

export default GameForm;