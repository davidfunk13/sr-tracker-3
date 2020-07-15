import React, { FunctionComponent, useContext } from "react";
import useStyles from '../VerticalStepper.Component.Styles';
import Button from '@material-ui/core/Button';
import { GameFormContext } from "../../../contexts/GameFormContext/GameFormContext.Context";
import VerticalStepperButtonsProps from './VerticalStepperButtons.Component.Types';

const VerticalStepperButtons: FunctionComponent<VerticalStepperButtonsProps> = ({ disabled }) => {
    const classes = useStyles();

    const [state, setState]: any = useContext(GameFormContext);

    const handleNext: () => void = () => {
        const newState = { ...state, currentStep: state.currentStep + 1 };
        setState(newState);
    };

    const handleBack: () => void = () => {
        const newState = { ...state, currentStep: state.currentStep - 1 };
        setState(newState);
    };

    console.log({disabled})

    return (
        <div className={classes.actionsContainer}>
            <div>
                <Button
                    disabled={state.currentStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                >
                    Back
                </Button>
                <Button
                    disabled={disabled}
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                >
                    {state.currentStep === state.length - 1 ? 'Finish' : 'Next'}
                </Button>
            </div>
        </div>
    );
}

export default VerticalStepperButtons;