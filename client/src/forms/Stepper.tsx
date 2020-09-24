import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import React, { useContext, useEffect, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import { GameFormContextType } from '../App.Types';
import GameFormContext from '../contexts/GameForm/GameFormContext';

interface StepperTypes {
    disabled: boolean
}

const Stepper: React.FC<StepperTypes> = ({ disabled }) => {

    const [state, setState]: GameFormContextType = useContext(GameFormContext);

    const [prevDisabled, setPrevDisabled] = useState<boolean>(false);

    const useStyles = makeStyles((theme: Theme) => ({
        container: {
            display: 'flex',
            width: '100%',
            margin: '1em 0',
        },
        item: {
            flex: 1,
        },
        first: {
            marginRight: '.5em',
        }

    }));

    const classes = useStyles();

    useEffect(() => {
        if (state.step === 0) {
            return setPrevDisabled(true);
        }

        return setPrevDisabled(false);
        
    }, [state.step])

    function next() {
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
                    Next
                </Typography>
            </Button>
        </div >
    );
}

export default Stepper;