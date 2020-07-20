import React, { useState, useContext, FunctionComponent, useEffect } from 'react';
import ConfirmGameTypes from './ConfirmGame.AddGame.Types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import { GameFormContext, GameContext } from '../../../../contexts/GameFormContext/GameFormContext.Context';
import MediaCard from '../../../../UI/MediaCard/MediaCard.UI';
// import Button from '@material-ui/core/Button';
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

  const [game, setGame] = useState<GameForm>({} as GameForm);

  // function handleReset(): void {
  //   setState(initialGameFormState);
  // };

  // function handleSubmit(): void {
  //   console.log('submitting Form!', { state });
  // }

  const role: string = game.heroesPlayed[0].name.split('')[0].toUpperCase() + game.heroesPlayed[0].name.slice(1);
  let iconPath: string = generateOutcomeIcon(game.outcome);
  let outcomeString: string = generateOutcomeString(game.outcome);
  const getRank: YourRank = useGetRank(game.skillRating || 0);

  useEffect(() => {
    if (state) {
      setGame(state)
    }
  }, [state]);

  function generateOutcomeIcon(outcome: number | null): string {
    switch (outcome) {
      case 0:
        return Loss;
      case 1:
        return Win;
      case 2:
        return Draw
      case null:
        return '';

      default:
        return ''
    }
  }

  function generateOutcomeString(outcome: number | null): string {
    switch (outcome) {
      case 0:
        return 'Defeat';
      case 1:
        return 'Victory';
      case 2:
        return 'Draw';
      case null:
        return '';
      default:
        return '';
    }
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant={"subtitle2"} >
          Confirm New Game Addition
        </Typography>
        <Grid item xs={12}>
          <MediaCard title={getRank.skillRating.toString()} subtitle={getRank.name} image={getRank.icon} />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <MediaCard title={game.mapPlayed.name} image={game.mapPlayed.icon} />
      </Grid>
      <Grid item xs={12}>
        <MediaCard title={game.heroesPlayed[0].roleName} multiImage={game.heroesPlayed} />
      </Grid>
      <Grid item xs={12}>
        <MediaCard title={outcomeString!} image={iconPath!} />
      </Grid>
      {/* <GameCard /> */}
      {/* <Button onClick={handleSubmit}>
        <Typography variant={"button"}>Submit</Typography>
      </Button>
      <Button onClick={handleReset} >
        <Typography variant={"button"}>Reset</Typography>
      </Button> */}
    </Grid>
  );
}

export default ConfirmGame;