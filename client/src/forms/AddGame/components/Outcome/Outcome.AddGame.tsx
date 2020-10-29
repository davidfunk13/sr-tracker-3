import CSS from 'csstype';
import React, { FunctionComponent, useContext, useEffect, useState } from 'react';
import OutcomeProps from './Outcome.AddGame.Types';
import Grid from '@material-ui/core/Grid';
import MediaCard from '../../../../UI/MediaCard/MediaCard.UI';
import Win from '../../../../assets/icons/other/win.png';
import Loss from '../../../../assets/icons/other/loss.png';
import Draw from '../../../../assets/icons/other/draw.png';
import GameFormContext from '../../../../contexts/GameForm/GameFormContext';
import { Game, GameForm, GameFormContextType } from '../../../../App.Types';
import FormComponentWrapper from '../../../../UI/FormComponentWrapper/FormComponentWrapper.UI.Component';
import Stepper from '../../../Stepper';
import fetchGraphQL from '../../../../utils/fetchGraphQL';
import { useAuth0 } from '../../../../react-auth0-spa';

const Outcome: FunctionComponent<OutcomeProps> = () => {
    const { getTokenSilently } = useAuth0();

    const [state, setState]: GameFormContextType = useContext(GameFormContext);

    const [disabled, setDisabled] = useState<boolean>(true);

    const [lastPlayed, setLastPlayed] = useState<Game>({} as Game);

    function selectOutcome(val: 0 | 1 | 2) {
        let newState: GameForm;

        if (val === 2) {
            newState = {
                ...state,
                outcome: val,
                step: state.step + 2,
                skillRating: lastPlayed.rankOut
            }
        } else {
            newState = {
                ...state,
                outcome: val,
                step: state.step + 1
            }
        }

        setState(newState);
    };

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

        setLastPlayed(mostRecent.getMostRecentGame);
    };

    const cardPictureStyles: CSS.Properties = { backgroundSize: "contain", margin: '1em' };

    useEffect(() => {
        if (state.outcome === undefined) {
            setDisabled(true);
        }

        if (state.outcome !== undefined) {
            setDisabled(false);
        }

    }, [state.outcome]);

    useEffect(() => {

        fetchMostRecentGame();

        return () => {
        }
    }, []);

    useEffect(() => console.log({ lastPlayed }), [lastPlayed])

    return (
        <FormComponentWrapper>
            <Grid style={{ overflowY: 'auto', height: '85%' }} container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <MediaCard
                        cardMediaStyle={cardPictureStyles}
                        onClick={() => selectOutcome(1)}
                        title={"Win"}
                        image={Win}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <MediaCard
                        cardMediaStyle={cardPictureStyles}
                        onClick={() => selectOutcome(0)}
                        title={"Loss"}
                        image={Loss}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <MediaCard
                        cardMediaStyle={cardPictureStyles}
                        onClick={() => selectOutcome(2)}
                        title={"Draw"}
                        image={Draw}
                    />
                </Grid>
            </Grid>
            <Stepper formContext={GameFormContext} disabled={disabled} />
        </FormComponentWrapper>
    );
}

export default Outcome; 