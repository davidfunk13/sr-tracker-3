import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import React, { useContext, useEffect, useState } from 'react';
import useStyles from './Stepper.Forms.Styles';
import { GameForm, GameFormContextType, SessionFormContextType } from '../App.Types';
import GameFormContext from '../contexts/GameForm/GameFormContext';

interface StepperTypes {
    disabled: boolean
    submit?: (form: GameForm) => void
    formContext: React.Context<any>
};

const Stepper: React.FC<StepperTypes> = ({ disabled, submit, formContext }) => {
    const [state, setState] = useContext(formContext);

    const [prevDisabled, setPrevDisabled] = useState<boolean>(false);

    const classes = useStyles();

    useEffect(() => {
        if (state.step === 0) {
            return setPrevDisabled(true);
        }

        return setPrevDisabled(false);

    }, [state.step]);

    function next() {
        if (submit) {
            submit(state);
            return;
        }

        const newState = { ...state, step: state.step + 1 };
        setState(newState);
    }

    function previous() {
        const newState = { ...state, step: state.step + - 1 };
        setState(newState);
    }

    return (
        <div className={classes.container}>
            <Button onClick={previous} className={clsx(classes.item, classes.first)} disabled={prevDisabled} variant={"contained"} color={"primary"} >
                <Typography variant={"button"}>
                    Previous
                </Typography>
            </Button>
            <Button onClick={next} className={classes.item} disabled={disabled} variant={"contained"} color={"primary"} >
                <Typography variant={"button"}>
                    {submit ? 'Submit' : 'Next'}
                </Typography>
            </Button>
        </div >
    );
}

export default Stepper;