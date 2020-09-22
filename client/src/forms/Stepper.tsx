import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';

interface StepperTypes {

}

const Stepper: React.FC<StepperTypes> = () => {

    const [prevDisabled, setPrevDisabled] = useState<boolean>(false);
    const [nextDisabled, setNextDisabled] = useState<boolean>(false);

    const useStyles = makeStyles((theme: Theme) => ({
        container: {
            display: 'flex',
            width: '100%',
            margin: '1em 0'
        },
        item: {
            flex: 1,
        },
        first: {
            marginRight: '.5em',
        }

    }));

    const classes = useStyles();

    console.log(classes.item)


    return (
        <div className={classes.container}>
            <Button className={clsx(classes.item, classes.first)} disabled={prevDisabled} variant={"contained"} color={"primary"} >
                <Typography variant={"button"}>
                    Previous
                </Typography>
            </Button>
            <Button className={classes.item} disabled={nextDisabled} variant={"contained"} color={"primary"} >
                <Typography variant={"button"}>
                    Next
                </Typography>
            </Button>
        </div >
    );
}

export default Stepper;