import React, { useContext, FunctionComponent } from 'react';
import ConfirmGameTypes from './ConfirmGame.AddGame.Types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import { GameFormContext, initialGameFormState } from '../../../../contexts/GameFormContext/GameFormContext.Context';
import GameFormContextTypes from '../../../../contexts/GameFormContext/GameFormContext.Context.Types';
import Button from '@material-ui/core/Button';
const ConfirmGame: FunctionComponent<ConfirmGameTypes> = () => {
  const [state, setState]: any = useContext(GameFormContext);

  function handleReset(): void {
    setState(initialGameFormState);
  };

  function handleSubmit(): void {
    console.log('submitting Form!', { state });
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant={"subtitle2"} >
          Confirm New Game Addition
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          {state.mapPlayed.name}
        </Typography>
        <Typography>
          {state.heroesPlayed.toString()}
        </Typography>
        <Typography>
          {state.outcome}
        </Typography>
        <Typography>
          {state.skillRating}
        </Typography>
      </Grid>
      <Button onClick={handleSubmit}>
        <Typography variant={"button"}>Submit</Typography>
      </Button>
      <Button onClick={handleReset} >
        <Typography variant={"button"}>Reset</Typography>
      </Button>
    </Grid>
  );
}

export default ConfirmGame;