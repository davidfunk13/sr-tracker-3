import React, { useContext, FunctionComponent } from 'react';
import { FormComponentObject } from '../../UI/Modal/Modal.UI.Types';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import useStyles from './VerticalStepper.Component.Styles';
import VerticalStepperTypes from './VerticalStepper.Component.Types';

const VerticalStepper: FunctionComponent<VerticalStepperTypes> = ({ components, formContext }) => {
    const classes = useStyles();

    const {state, setState} = useContext(formContext)

    const handleReset = () => {
        const newState = { ...state, currentStep: 0 };
        setState(newState);
    };

    return (
        <div className={classes.root}>
            <Stepper activeStep={state.currentStep} orientation="vertical">
                {components.map((step: FormComponentObject, index) => {
                    const StepComponent = step.component;

                    return <Step key={step.label}>
                        <StepLabel>{step.label}</StepLabel>
                        <StepContent>
                            <StepComponent />
                        </StepContent>
                    </Step>
                })}
            </Stepper>
            {state.currentStep === components.length && (
                <Paper square elevation={0} className={classes.resetContainer}>
                    {/* Put close button here with reset! Have it act as a submit button! */}
                    <Typography>All steps completed - you're finished.</Typography>
                    <Button onClick={handleReset} className={classes.button}>Reset</Button>
                </Paper>
            )}
        </div>
    );
}

export default VerticalStepper;