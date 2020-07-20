import React, { FunctionComponent, useContext } from "react";
import useStyles from '../../../components/VerticalStepper/VerticalStepper.Component.Styles';
import Button from '@material-ui/core/Button';
import { GameFormContext } from "../../../contexts/GameFormContext/GameFormContext.Context";
import StepButtonsProps from './StepButtons.UITypes';
import Grid from '@material-ui/core/Grid';

const StepButtons: FunctionComponent<StepButtonsProps> = ({ disabled }) => {
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

    console.log({ disabled })

    return (
        <Grid container style={{ marginBottom: '.75em' }} spacing={1}>
            <Grid item xs={6}>
                <Button
                    disabled={state.currentStep === 0}
                    variant={"contained"}
                    onClick={handleBack}
                    size={'small'}
                    fullWidth
                >
                    Back
                </Button>
            </Grid>
            <Grid item xs={6}>
                <Button
                    disabled={disabled}
                    variant={"contained"}
                    size={'small'}
                    fullWidth
                    color="primary"
                    onClick={handleNext}
                >
                    {state.currentStep === state.length - 1 ? 'Finish' : 'Next'}
                </Button>
            </Grid>
        </Grid>
    );
}

export default StepButtons;