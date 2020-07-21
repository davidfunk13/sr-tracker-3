import React, { useState, useContext, FunctionComponent, useEffect, Fragment } from 'react';
import ConfirmGameTypes from './ConfirmGame.AddGame.Types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import { GameFormContext, GameContext, initialGameFormState } from '../../../../contexts/GameFormContext/GameFormContext.Context';
import MediaCard from '../../../../UI/MediaCard/MediaCard.UI';
import Button from '@material-ui/core/Button';
// import CardContent from '@material-ui/core/CardContent';
// import Card from '@material-ui/core/Card';
import { MapEntry } from '../../../../utils/mapDictionary';
import GameCard from '../../../../UI/GameCard/GameCard.UI';
import Win from '../../../../assets/icons/other/win.png';
import Loss from '../../../../assets/icons/other/loss.png';
import Draw from '../../../../assets/icons/other/draw.png';
import useGetRank, { YourRank } from '../../../../hooks/useGetRank/useGetRank';
import rankDictionary, { Rank } from '../../../../utils/rankDictionary';
import { HeroEntry } from '../../../../utils/heroDictionary';
import GameForm from '../../../../contexts/GameFormContext/GameFormContext.Context.Types';

const ConfirmGame: FunctionComponent<ConfirmGameTypes> = () => {

  const [state, setState]: GameContext = useContext<GameContext>(GameFormContext);

  const rank: YourRank = useGetRank(state.skillRating);

  function handleReset() {
    setState(initialGameFormState);
  };

  function handleSubmit(): void {
    console.log('submitting Form!', { state });
  }

  function generateOutcomeIcon(outcome: number = 3): string {
    switch (outcome) {
      case 0:
        return Loss;
      case 1:
        return Win;
      case 2:
        return Draw;
      case 3:
        return '';
      default:
        return ''
    }
  }

  function generateOutcomeString(outcome: number = 0): string {
    switch (outcome) {
      case 0:
        return 'Defeat';
      case 1:
        return 'Victory';
      case 2:
        return 'Draw';
      default:
        return '';
    }
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