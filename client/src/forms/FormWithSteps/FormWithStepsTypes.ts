import { GameContextTypes } from '../../contexts/GameFormContextV2/GameFormContext';

// add more contexts to this as needed, seperate with pipes.

export default interface FormWithStepsTypes {
    context: React.Context<GameContextTypes>
}