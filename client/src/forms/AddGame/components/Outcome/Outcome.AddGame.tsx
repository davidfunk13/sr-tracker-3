import React, { FunctionComponent, useContext, SetStateAction, Dispatch } from 'react';
import OutcomeProps from './Outcome.AddGame.Types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { GameFormContext } from '../../../../contexts/GameFormContext/GameFormContext.Context';
import GameFormContextTypes from '../../../../contexts/GameFormContext/GameFormContext.Context.Types'

const Outcome: FunctionComponent<OutcomeProps> = () => {
    const { state, setState }: any = useContext(GameFormContext);

    function selectOutcome(val: number) {
        const newState: GameFormContextTypes = { ...state, currentStep: state.currentStep + 1, outcome: val };
        setState(newState);
    }

    return (
        <Grid container>
            <Grid item xs={4}>
                <Button onClick={() => selectOutcome(1)} color={"primary"}>Win</Button>
            </Grid>
            <Grid item xs={4}>
                <Button onClick={() => selectOutcome(0)} color={"secondary"}>Loss</Button>
            </Grid>
            <Grid item xs={4}>
                <Button onClick={() => selectOutcome(2)} >Draw</Button>
            </Grid>
        </Grid>
    );
}

export default Outcome; 