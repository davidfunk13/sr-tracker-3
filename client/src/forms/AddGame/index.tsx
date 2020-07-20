import React, { FunctionComponent, useContext } from 'react';
// import { FormComponentObject } from '../../UI/Modal/Modal.UI.Types';
import SelectMap from './components/SelectMap/SelectMap.AddGame';
import HeroesPlayed from './components/HeroesPlayed/HeroesPlayed.AddGame';
import Outcome from './components/Outcome/Outcome.AddGame';
import SkillRating from './components/SkillRating/SkillRating.AddGame';
import { GameFormContext } from '../../contexts/GameFormContext/GameFormContext.Context';
import { RoleEnum } from '../../App.Types'
import ConfirmGame from './components/ConfirmGame/ConfirmGame.AddGame';

// const gameFormComponents: FormComponentObject[] = [
//     {
//         label: 'Select Map',
//         component: SelectMap,
//     },
//     {
//         label: 'Select Heroe(s)',
//         component: HeroesPlayed,
//     },
//     {
//         label: 'Match Outcome',
//         component: Outcome,
//     },
//     {
//         label: 'New Skill Rating',
//         component: SkillRating,
//     },
// ];

interface GameFormProps {
    role: RoleEnum
}

const GameForm: FunctionComponent<GameFormProps> = ({ role }) => {
    const [state, setState]: any = useContext(GameFormContext);

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
                return <ConfirmGame />
            default:
                return <h4>Something went wrong</h4>;
        }
    }

    return renderComponent(state.currentStep);
};

export default GameForm;