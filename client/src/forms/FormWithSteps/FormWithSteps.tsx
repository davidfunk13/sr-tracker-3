import React, { useEffect, useContext, useState } from 'react';
import FormWithStepsTypes from './FormWithStepsTypes';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const FormWithSteps: React.FC<FormWithStepsTypes> = ({ context }) => {
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

    useEffect(() => {
        console.log(formContext, formContext.length)
        
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

        if( step === formContext[0].length - 1) {
            setNextDisabled(true);
        }

    }, [prevDisabled, nextDisabled, step]);

    return (
        <Grid container spacing={2} >
            {step}
            <div style={{ display: 'flex', width: '100%', marginBottom: '1em' }}>
                <Button disabled={prevDisabled} onClick={() => previousStep()} style={{ width: '50%', marginRight: '1em' }} variant={'contained'}>
                    <Typography variant={'button'}>Previous</Typography>
                </Button>
                <Button disabled={nextDisabled} onClick={() => nextStep()} style={{ width: '50%' }} variant={'contained'} color={'primary'}>
                    <Typography variant={'button'}>Next</Typography>
                </Button>
            </div>
        </Grid>
    )
}

export default FormWithSteps;
