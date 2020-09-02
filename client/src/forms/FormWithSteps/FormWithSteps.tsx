import React, { useEffect, useContext, useState } from 'react';
import FormWithStepsTypes from './FormWithStepsTypes';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const FormWithSteps: React.FC<FormWithStepsTypes> = ({ componentDependencies, formComponent, context, styles }) => {
    const formContext = useContext(context);

    const [step, setStep] = useState<number>(0);

    const [prevDisabled, setPrevDisabled] = useState<boolean>(false);

    const [nextDisabled, setNextDisabled] = useState<boolean>(false);

    function nextStep(): void {
        const nextStep: number = step + 1;
        setStep(nextStep);
    }

    function previousStep(): void {
        const previousStep: number = step - 1;
        setStep(previousStep);
    }

    const testComponents = [
        'One',
        'Two',
        'Three',
        'Four',
        'Five',
    ];


    useEffect(() => {
        if (step === 0) {
            setPrevDisabled(true);
        }

        if (step > 0) {
            setPrevDisabled(false);
        }

        if (step) {
            setNextDisabled(false);
        }

        if (step < formContext[0].length - 1) {
            setNextDisabled(false);
        }

        if (step === formContext[0].length - 1) {
            setNextDisabled(true);
        }

    }, [prevDisabled, nextDisabled, step]);

    useEffect(() => console.log(step), [step]);

    const FormComponent = formComponent;

    return (
        <Grid container spacing={2} >
            <Grid style={styles} item xs={12}>
                <FormComponent step={step} componentDependencies={componentDependencies} />
            </Grid>
            <Grid style={styles} item xs={6}>
                <Button fullWidth disabled={prevDisabled} onClick={() => previousStep()} style={{ marginRight: '1em' }} variant={'contained'}>
                    <Typography variant={'button'}>Previous</Typography>
                </Button>
            </Grid>
            <Grid item xs={6}>
                <Button fullWidth disabled={nextDisabled} onClick={() => nextStep()} variant={'contained'} color={'primary'}>
                    <Typography variant={'button'}>{step === formContext[0].length - 1 ? 'Finish' : 'Next'}</Typography>
                </Button>
            </Grid>
        </Grid >
    )
}

export default FormWithSteps;
