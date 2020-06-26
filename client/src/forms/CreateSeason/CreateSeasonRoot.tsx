import Test1 from "./Test1"
import Test2 from './Test2';

const CreateSeasonRoot = (step: number) => {
    switch (step) {
        case 0:
            return {
                label: 'test1',
                component: Test1,
            }
        case 1:
            return {
                label: 'test2',
                component: Test2,
            }
        case 2:
            return {
                label: 'test3',
                component: Test1,
            }
        case 3:
            return {
                label: 'test4',
                component: Test2,
            }
        default:
            return {
               label: 'Unknown step',
               component: 'Unknown Step'
            };
    }
}

export default CreateSeasonRoot;