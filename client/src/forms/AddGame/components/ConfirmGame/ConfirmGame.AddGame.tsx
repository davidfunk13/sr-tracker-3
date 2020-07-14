import React, {useEffect, useContext, FunctionComponent } from 'react';
import ConfirmGameTypes from './ConfirmGame.AddGame.Types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import { GameFormContext } from '../../../../contexts/GameFormContext/GameFormContext.Context';
import GameFormContextTypes from '../../../../contexts/GameFormContext/GameFormContext.Context.Types';


const ConfirmGame: FunctionComponent<ConfirmGameTypes> = () => {
    const [state, setState]: any = useContext(GameFormContext);
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant={"subtitle2"} >
                    Confirm
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography>
                  {state.mapPlayed}  
                </Typography>
            </Grid>
        </Grid>
    );
}

export default ConfirmGame;