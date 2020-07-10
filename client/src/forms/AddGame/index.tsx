import { FormComponentObject } from '../../UI/Modal/Modal.UI.Types';
import SelectMap from './components/SelectMap/SelectMap.AddGame';
import HeroesPlayed from './components/HeroesPlayed/HeroesPlayed.AddGame';

const gameFormComponents: FormComponentObject[] = [
    {
        label: 'Select Map',
        component: SelectMap,
    },
    {
        label: 'Select Heroe(s)',
        component: HeroesPlayed,
    },
];

export default gameFormComponents;