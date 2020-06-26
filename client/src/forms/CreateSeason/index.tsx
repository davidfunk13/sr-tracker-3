import SeasonType from "./components/SeasonType/SeasonType.SeasonForm"
import MainHeroes from './components/MainHeroes/MainHeroes.SeasonForm';
import { FormComponentObject } from '../../UI/Modal/Modal.UI.Types';

const seasonFormComponents: FormComponentObject[] = [
    {
        label: 'test1',
        component: SeasonType,
    },
    {
        label: 'test2',
        component: MainHeroes,
    },
    {
        label: 'test3',
        component: SeasonType,
    },
    {
        label: 'test4',
        component: MainHeroes,
    }
];

export default seasonFormComponents;