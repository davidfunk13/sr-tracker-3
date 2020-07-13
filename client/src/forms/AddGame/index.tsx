import { FormComponentObject } from '../../UI/Modal/Modal.UI.Types';
import SelectMap from './components/SelectMap/SelectMap.AddGame';
import HeroesPlayed from './components/HeroesPlayed/HeroesPlayed.AddGame';
import Outcome from './components/Outcome/Outcome.AddGame';
import SkillRating from './components/SkillRating/SkillRating.AddGame';

const gameFormComponents: FormComponentObject[] = [
    {
        label: 'Select Map',
        component: SelectMap,
    },
    {
        label: 'Select Heroe(s)',
        component: HeroesPlayed,
    },
    {
        label: 'Match Outcome',
        component: Outcome,
    },
    {
        label: 'New Skill Rating',
        component: SkillRating,
    },
];

export default gameFormComponents;