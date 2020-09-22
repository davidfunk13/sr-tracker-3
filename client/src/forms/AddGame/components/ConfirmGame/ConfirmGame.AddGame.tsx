import React, { useContext, FunctionComponent } from 'react';
import ConfirmGameTypes from './ConfirmGame.AddGame.Types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import MediaCard from '../../../../UI/MediaCard/MediaCard.UI';
import useGetRank, { YourRank } from '../../../../hooks/useGetRank/useGetRank';
import { generateOutcomeString, generateOutcomeIcon } from '../../../../utils/utilityFunctions';
import CSS from 'csstype';
import GameFormContext from '../../../../contexts/GameForm/GameFormContext';

const ConfirmGame: FunctionComponent<ConfirmGameTypes> = ({ createGame }) => {
  const [state, setState] = useContext(GameFormContext);

  const srInput = state.skillRating ? state.skillRating : 0;

  const rank: YourRank = useGetRank(srInput);

  const role: string = state.heroesPlayed[0].roleName.split('')[0].toUpperCase() + state.heroesPlayed[0].roleName.slice(1);

  const cardPictureStyles: CSS.Properties = { backgroundSize: "contain" };
  
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant={"subtitle2"} >
          Confirm New Game Addition
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <MediaCard
          title={'mapName'}
          image={'mapIcon'}
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