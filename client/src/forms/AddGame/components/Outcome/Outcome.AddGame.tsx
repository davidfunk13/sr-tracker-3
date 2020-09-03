import React, { FunctionComponent, useContext } from 'react';
import OutcomeProps from './Outcome.AddGame.Types';
import Grid from '@material-ui/core/Grid';
import { GameFormContext, GameContext } from '../../../../contexts/GameFormContext/GameFormContext.Context';
import GameForm from '../../../../contexts/GameFormContext/GameFormContext.Context.Types'
import StepButtons from '../../../../UI/Modal/StepButtons/StepButtons.UI';
import MediaCard from '../../../../UI/MediaCard/MediaCard.UI';
import Win from '../../../../assets/icons/other/win.png';
import Loss from '../../../../assets/icons/other/loss.png';
import Draw from '../../../../assets/icons/other/draw.png';

const Outcome: FunctionComponent<OutcomeProps> = () => {
    const [state, setState]: GameContext = useContext(GameFormContext);

    function selectOutcome(val: 0 | 1 | 2 ) {
        const newState: GameForm = {
            ...state,
            outcome: val
        };
        
        setState(newState);
    }

    return (
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <MediaCard cardMediaStyle={{ backgroundSize: "contain" }} onClick={() => selectOutcome(1)} title={"Win"} image={Win} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <MediaCard cardMediaStyle={{ backgroundSize: "contain" }} onClick={() => selectOutcome(0)} title={"Loss"} image={Loss} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <MediaCard cardMediaStyle={{ backgroundSize: "contain" }} onClick={() => selectOutcome(2)} title={"Draw"} image={Draw} />
                </Grid>
            </Grid>
    );
}

export default Outcome; 