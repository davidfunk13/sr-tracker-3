import React, { useEffect, useContext, useState } from 'react';
import FormWithStepsTypes from './FormWithStepsTypes';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CSS from 'csstype';
import { format } from 'path';

const FormWithSteps: React.FC<FormWithStepsTypes> = ({ modalControls, componentDependencies, formComponent, context, styles }) => {
    const formContext = useContext(context);

    const [step, setStep] = useState<number>(0);

    const [prevDisabled, setPrevDisabled] = useState<boolean>(false);

    const [isDisabled, setIsDisabled] = useState<boolean>(false);

    function nextStep(): void {
        const nextStep: number = step + 1;
        setStep(nextStep);
    }

    function previousStep(): void {
        const previousStep: number = step - 1;
        setStep(previousStep);
    }

    useEffect(() => {
        if (step === 0) {
            setPrevDisabled(true);
        }

        if (step > 0) {
            setPrevDisabled(false);
        }

        if (formContext[0].mapPlayed !== undefined) {
            setIsDisabled(false);
        }

    }, [prevDisabled, isDisabled, step]);

    const FormComponent = formComponent;

    return (
        <Grid container spacing={2} >
            <Grid style={styles} item xs={12}>
                <FormComponent modalControls={modalControls} formControls={{ step, setStep, isDisabled, setIsDisabled }} componentDependencies={componentDependencies} />
            </Grid>
            <Grid item xs={6}>
                <Button fullWidth disabled={prevDisabled} onClick={() => previousStep()} style={{ marginRight: '1em' }} variant={'contained'}>
                    <Typography variant={'button'}>Previous</Typography>
                </Button>
            </Grid>
            <Grid item xs={6}>
                <Button fullWidth disabled={isDisabled} onClick={() => nextStep()} variant={'contained'} color={'primary'}>
                    <Typography variant={'button'}>{step === formContext[0].length - 1 ? 'Finish' : 'Next'}</Typography>
                </Button>
            </Grid>
        </Grid >
    )
}

export default FormWithSteps;
