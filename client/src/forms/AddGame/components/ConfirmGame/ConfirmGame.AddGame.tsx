import React, { useContext, FunctionComponent } from 'react';
import ConfirmGameTypes from './ConfirmGame.AddGame.Types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import { GameFormContext, GameContext, initialGameFormState } from '../../../../contexts/GameFormContext/GameFormContext.Context';
import MediaCard from '../../../../UI/MediaCard/MediaCard.UI';
import Button from '@material-ui/core/Button';
import useGetRank, { YourRank } from '../../../../hooks/useGetRank/useGetRank';
import { generateOutcomeString, generateOutcomeIcon } from '../../../../utils/utilityFunctions';

const ConfirmGame: FunctionComponent<ConfirmGameTypes> = () => {

  const [state, setState]: GameContext = useContext<GameContext>(GameFormContext);

  const rank: YourRank = useGetRank(state.skillRating);

  function handleReset() {
    setState(initialGameFormState);
  };

  function handleSubmit(): void {
    console.log('submitting Form!', { state });
  }



  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant={"subtitle2"} >
          Confirm New Game Addition
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <MediaCard title={state.mapPlayed.name} image={state.mapPlayed.icon} />
      </Grid>
      <Grid item xs={12}>
        <MediaCard title={state.heroesPlayed[0].roleName.split('')[0].toUpperCase() + state.heroesPlayed[0].roleName.slice(1)} multiImage={state.heroesPlayed} />
      </Grid>
      <Grid item xs={12}>
        <MediaCard title={generateOutcomeString(state.outcome)} image={generateOutcomeIcon(state.outcome)} />
      </Grid>
      <Grid item xs={12}>
        <MediaCard title={rank.skillRating.toString()} subtitle={rank.name} image={rank.icon} />
      </Grid>
      <Grid item xs={6}>
        <Button fullWidth variant={'contained'} color={'secondary'} onClick={handleReset} >
          <Typography variant={"button"}>Reset</Typography>
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button fullWidth variant={'contained'} color={'primary'} onClick={handleSubmit}>
          <Typography variant={"button"}>Submit</Typography>
        </Button>
      </Grid>
    </Grid>
  );
}

export default ConfirmGame;