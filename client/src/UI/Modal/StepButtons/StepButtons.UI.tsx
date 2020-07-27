import React, { FunctionComponent, useContext } from "react";
import Button from '@material-ui/core/Button';
import { GameFormContext, initialGameFormState } from "../../../contexts/GameFormContext/GameFormContext.Context";
import StepButtonsProps from './StepButtons.UITypes';
import Grid from '@material-ui/core/Grid';

const StepButtons: FunctionComponent<StepButtonsProps> = ({ children, disabled, setOpen }) => {
    const [state, setState]: any = useContext(GameFormContext);

    const handleNext: () => void = () => {
        const newState = { ...state, currentStep: state.currentStep + 1 };
        setState(newState);
    };

    const handleBack: () => void = () => {
        const newState = { ...state, currentStep: state.currentStep - 1 };
        setState(newState);
    };

    function handleReset(): void {
        setState(initialGameFormState);
    };

    function handleSubmit(): void {
        console.log('submitting Form!', { state });
       
        if(setOpen){
            console.log('asss')
           setOpen(false);
       }
    }

    return (
        <Grid container style={{ marginBottom: '.75em' }} spacing={2}>
            <Grid item xs={12} style={{ height: '60vh', overflowY: 'auto' }}>
                {children}
            </Grid>
            <Grid item xs={6}>
                <Button
                    disabled={state.currentStep === 0}
                    variant={"contained"}
                    onClick={state.currentStep === 4 ? handleReset : handleBack}
                    size={'small'}
                    fullWidth
                >
                    {state.currentStep === 4 ? 'Reset' : 'Back'}
                </Button>
            </Grid>
            <Grid item xs={6}>
                <Button
                    disabled={disabled}
                    variant={"contained"}
                    size={'small'}
                    fullWidth
                    color="primary"
                    onClick={state.currentStep === 4 ? handleSubmit : handleNext}
                >
                    {state.currentStep === 4 ? 'Finish' : 'Next'}
                </Button>
            </Grid>
        </Grid>
    );
}

export default StepButtons;