import React, { useContext, FunctionComponent } from 'react';
import ConfirmGameTypes from './ConfirmGame.AddGame.Types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import MediaCard from '../../../../UI/MediaCard/MediaCard.UI';
import useGetRank, { YourRank } from '../../../../hooks/useGetRank/useGetRank';
import { generateOutcomeString, generateOutcomeIcon } from '../../../../utils/utilityFunctions';
import CSS from 'csstype';
import { GameContextTypes } from '../../../../contexts/GameFormContextV2/GameFormContextTypes';
import { GameFormContext } from '../../../../contexts/GameFormContextV2/GameFormContext';

const ConfirmGame: FunctionComponent<ConfirmGameTypes> = ({ createGame }) => {

  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [state, setState]: GameContextTypes = useContext<GameContextTypes>(GameFormContext);

  const rank: YourRank = useGetRank(state.skillRating);

  const role: string = state.heroesPlayed[0].roleName.split('')[0].toUpperCase() + state.heroesPlayed[0].roleName.slice(1);

  const cardPictureStyles: CSS.Properties = { backgroundSize: "contain" };

  const mapName = state.mapPlayed && state.mapPlayed.name ? state.mapPlayed.name : 'loading...'
  const mapIcon = state.mapPlayed && state.mapPlayed.icon ? state.mapPlayed.icon : 'loading...'
  
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant={"subtitle2"} >
          Confirm New Game Addition
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <MediaCard
          title={mapName}
          image={mapIcon}
        />
      </Grid>
      <Grid item xs={12}>
        <MediaCard
          cardMediaStyle={cardPictureStyles}
          title={role}
          multiImage={state.heroesPlayed}
        />
      </Grid>
      <Grid item xs={12}>
        <MediaCard
          cardMediaStyle={cardPictureStyles}
          title={generateOutcomeString(state.outcome)}
          image={generateOutcomeIcon(state.outcome)}
        />
      </Grid>
      <Grid item xs={12}>
        <MediaCard
          cardMediaStyle={{ backgroundSize: "contain" }}
          title={rank.skillRating.toString()}
          subtitle={rank.name}
          image={rank.icon}
        />
      </Grid>
    </Grid>
  );
}

export default ConfirmGame;