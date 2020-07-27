import React, { useContext, FunctionComponent } from 'react';
import { FormComponentObject } from '../../UI/Modal/Modal.UI.Types';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import useStyles from './VerticalStepper.Component.Styles';
import VerticalStepperTypes from './VerticalStepper.Component.Types';
import ConfirmGame from '../../forms/AddGame/components/ConfirmGame/ConfirmGame.AddGame';

const VerticalStepper: FunctionComponent<VerticalStepperTypes> = ({ role, components, formContext, setOpen }) => {
    const classes = useStyles();

    const [state, setState] = useContext(formContext);

    function renderSteps(): JSX.Element {
        return (<Stepper activeStep={state.currentStep} orientation="vertical">
            {components.map((step: FormComponentObject, index) => {
                const StepComponent = step.component;

                return <Step key={step.label}>
                    <StepLabel>{step.label}</StepLabel>
                    <StepContent>
                        <StepComponent role={role} />
                    </StepContent>
                </Step>
            })}
        </Stepper>);
    }


    return (
        <div className={classes.root}>
            {state.currentStep === components.length ? <ConfirmGame setOpen={setOpen}  /> : renderSteps()}
        </div>
    );
}

export default VerticalStepper;