import { GameContextTypes } from '../../contexts/GameFormContextV2/GameFormContext';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { GameFormProps } from '../../forms/AddGame';

// add more contexts to this as needed, seperate with pipes.
export default interface FormWithStepsTypes {
    context: React.Context<GameContextTypes>
    styles?: CSSProperties
    formComponent: React.FunctionComponent<GameFormProps>
    componentDependencies: any;
}