import React, { FunctionComponent, useContext } from 'react';
import OutcomeProps from './Outcome.AddGame.Types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { GameFormContext } from '../../../../contexts/GameFormContext/GameFormContext.Context';
import GameFormContextTypes from '../../../../contexts/GameFormContext/GameFormContext.Context.Types'
import VerticalStepperButtons from '../../../../components/VerticalStepper/VerticalStepperButtons/VerticalStepperButtons.Component';

const Outcome: FunctionComponent<OutcomeProps> = () => {
    const [state, setState]: any = useContext(GameFormContext);

    function selectOutcome(val: number) {
        const newState: GameFormContextTypes = {
            ...state,
            currentStep: state.currentStep + 1,
            outcome: val
        };
        setState(newState);
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Grid container spacing={2}>
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
            </Grid>
            <Grid item xs={12}>
                <VerticalStepperButtons disabled={!!!state.outcome !== undefined} />
            </Grid>
        </Grid>
    );
}

export default Outcome; 