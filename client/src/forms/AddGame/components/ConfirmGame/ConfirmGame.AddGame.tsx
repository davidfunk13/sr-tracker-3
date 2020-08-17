import React, { useContext, FunctionComponent } from 'react';
import ConfirmGameTypes from './ConfirmGame.AddGame.Types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import { GameFormContext, GameContext } from '../../../../contexts/GameFormContext/GameFormContext.Context';
import MediaCard from '../../../../UI/MediaCard/MediaCard.UI';
import useGetRank, { YourRank } from '../../../../hooks/useGetRank/useGetRank';
import { generateOutcomeString, generateOutcomeIcon } from '../../../../utils/utilityFunctions';
import StepButtons from '../../../../UI/Modal/StepButtons/StepButtons.UI';

const ConfirmGame: FunctionComponent<ConfirmGameTypes> = ({setOpen}) => {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [state, setState]: GameContext = useContext<GameContext>(GameFormContext);

  const rank: YourRank = useGetRank(state.skillRating);

  function createGame(game: any, refreshGames: ()=> void) {
    //     const { _season } = season;
    //     const query = `mutation{
    //         createGame(_season: "${_season}"){
    //             role: ${game.role}
    //             mapPlayed: "${game.mapPlayed}",
    //             heroesPlayed: ${game.heroesPlayed},
    //             outcome: ${game.outcome},
    //             rankIn: ${game.rankIn}
    //             rankOut: ${game.rankOut}
    //         }
    //     }`;
    //     console.log(query)
    }

  return (
    <StepButtons setOpen={setOpen} disabled={false}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant={"subtitle2"} >
            Confirm New Game Addition
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <MediaCard title={state.mapPlayed.name} image={state.mapPlayed.icon} />
        </Grid>
        <Grid item xs={12}>
          <MediaCard cardMediaStyle={{ backgroundSize: "contain" }} title={state.heroesPlayed[0].roleName.split('')[0].toUpperCase() + state.heroesPlayed[0].roleName.slice(1)} multiImage={state.heroesPlayed} />
        </Grid>
        <Grid item xs={12}>
          <MediaCard cardMediaStyle={{ backgroundSize: "contain" }} title={generateOutcomeString(state.outcome)} image={generateOutcomeIcon(state.outcome)} />
        </Grid>
        <Grid item xs={12}>
          <MediaCard cardMediaStyle={{ backgroundSize: "contain" }} title={rank.skillRating.toString()} subtitle={rank.name} image={rank.icon} />
        </Grid>
      </Grid>
    </StepButtons>
  );
}

export default ConfirmGame;