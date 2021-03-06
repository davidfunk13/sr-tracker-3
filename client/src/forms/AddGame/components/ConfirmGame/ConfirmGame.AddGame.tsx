import React, { useState, useContext, FunctionComponent, useEffect } from 'react';
import CSS from 'csstype';
import { useAuth0 } from '../../../../react-auth0-spa';
import { Game } from '../../../../App.Types';
import Stepper from '../../../Stepper';
import ConfirmGameTypes from './ConfirmGame.AddGame.Types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import MediaCard from '../../../../UI/MediaCard/MediaCard.UI';
import useGetRank, { YourRank } from '../../../../hooks/useGetRank/useGetRank';
import { generateOutcomeString, generateOutcomeIcon } from '../../../../utils/utilityFunctions';
import GameFormContext, { initialGameFormState } from '../../../../contexts/GameForm/GameFormContext';
import FormComponentWrapper from '../../../../UI/FormComponentWrapper/FormComponentWrapper.UI.Component';
import useStyles from './ConfirmGame.AddGame.Styles';
import fetchGraphQL from '../../../../utils/fetchGraphQL';

const ConfirmGame: FunctionComponent<ConfirmGameTypes> = ({ createGame, modalControls }) => {
  const { getTokenSilently } = useAuth0();

  const [state, setState] = useContext(GameFormContext);

  const classes = useStyles();

  const srInput = state.skillRating ? state.skillRating : 0;

  const rank: YourRank = useGetRank(srInput);

  const [lastPlayed, setLastPlayed] = useState<Game>({} as Game);

  const role: string = state.heroesPlayed[0].roleName.split('')[0].toUpperCase() + state.heroesPlayed[0].roleName.slice(1);

  const cardPictureStyles: CSS.Properties = { backgroundSize: "contain" };

  const mapName = state.mapPlayed?.name || 'loading...';

  async function fetchMostRecentGame() {
    const token = await getTokenSilently({
      audience: "AuthAPI",
      scope: "read:current_user",
    });

    const storage = localStorage.getItem('_session');

    if (!storage) {
      console.warn('no sessionId found');
      return
    }

    const parsed = JSON.parse(storage)._session;

    const query: string = `query {
      getMostRecentGame(_session:"${parsed}"){
        rankIn
        rankOut
      }
    }`;

    const mostRecent = await fetchGraphQL(token, query);

    setLastPlayed(mostRecent);
  }

  useEffect(() => {
    fetchMostRecentGame();
  }, [])


  function submitGame() {
    if (createGame) {
      createGame(state);
    }

    setState(initialGameFormState);

    modalControls.setModalOpen(false);
  }

  return (
    <FormComponentWrapper >
      <Grid item xs={12}>
        <Typography variant={"subtitle2"} >
          Confirm New Game Addition
        </Typography>
      </Grid>
      <Grid spacing={2} className={classes.innerContainer} container>
        <Grid item xs={12}>
          <MediaCard
            title={mapName}
            image={state.mapPlayed?.icon}
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
      <Stepper formContext={GameFormContext} submit={submitGame} disabled={false} />
    </FormComponentWrapper>
  );
}

export default ConfirmGame;