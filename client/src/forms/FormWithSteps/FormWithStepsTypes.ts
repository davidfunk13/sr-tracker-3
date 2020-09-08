import CSS from 'csstype';
import { GameFormProps } from '../../forms/AddGame';
import { GameContextTypes } from '../../contexts/GameFormContextV2/GameFormContextTypes';
import { ModalControls } from '../../App.Types';


// add more contexts to this as needed, seperate with pipes.
export default interface FormWithStepsTypes {
    context: React.Context<GameContextTypes>
    styles?: CSS.Properties
    formComponent: React.FunctionComponent<GameFormProps>
    componentDependencies: any
    modalControls: ModalControls
}