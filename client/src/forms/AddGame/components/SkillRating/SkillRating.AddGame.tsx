import React, { FunctionComponent, useContext, useEffect, useState } from 'react';
import SkillRatingProps from './SkillRating.AddGame.Types';
import Grid from '@material-ui/core/Grid';
import useStyles from './SkillRating.AddGame.Styles';
import TextField from '@material-ui/core/TextField';
import MediaCard from '../../../../UI/MediaCard/MediaCard.UI';
import useGetRank, { YourRank } from '../../../../hooks/useGetRank/useGetRank';
import CSS from 'csstype';
import GameFormContext from '../../../../contexts/GameForm/GameFormContext';
import { Game, GameFormContextType } from '../../../../App.Types';
import FormComponentWrapper from '../../../../UI/FormComponentWrapper/FormComponentWrapper.UI.Component';
import Stepper from '../../../Stepper';
import fetchGraphQL from '../../../../utils/fetchGraphQL';
import { useAuth0 } from '../../../../react-auth0-spa';
const SkillRating: FunctionComponent<SkillRatingProps> = () => {
    const { getTokenSilently } = useAuth0();

    const cardPictureStyles: CSS.Properties = { backgroundSize: "contain", margin: '1em', height: '80%' };

    const classes = useStyles();

    const [state, setState]: GameFormContextType = useContext(GameFormContext);

    const [disabled, setDisabled] = useState<boolean>(true);

    const [error, setError] = useState<boolean>(false);

    const [input, setInput] = useState<string>('');

    const [lastPlayed, setLastPlayed] = useState<Game>({} as Game);

    const skillRating = state.skillRating || 0;

    const rank: YourRank = useGetRank(skillRating);

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

    function setSkillrating(val: number) {
        const newState = { ...state, skillRating: val };
        setState(newState);
    }

    function validateInput(value: number, outcome?: number, previous: number = 0) {
        console.log(value, outcome, previous, lastPlayed);
        if (previous === null) {

        } else if (outcome === 2 && value !== previous) {
            console.warn(`You tied. Your skill rating must be ${previous}`)
            setError(true);
            setDisabled(true);
            return;
        } else if ((outcome === 1) && (value <= previous) && (previous !== 0)) {
            console.warn(`You won. Your skill rating must be higher than ${previous}`)
            setError(true);
            setDisabled(true);
            return;
        } else if ((outcome === 0) && (value >= previous) && (previous !== 0)) {
            console.warn(`You lost. Your skill rating must be lower than ${previous}`)
            setError(true);
            setDisabled(true);
            return;
        } else if (isNaN(value)) {
            setError(true);
            setDisabled(true);
            return;
        } else if (value > 5000) {
            setError(true);
            setDisabled(true);
            return;
        } else if (value <= 0) {
            setError(true);
            setDisabled(true);
            return;
        } else {
            setError(false);
            setDisabled(false)
        }
    };

    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        const value: number = parseInt(e.target.value, 10);
        validateInput(value, state.outcome, lastPlayed && lastPlayed.rankOut ? lastPlayed.rankOut : undefined);
        setInput(value.toString());
        setSkillrating(value);
    }

    //if undefined on mount, will be disabled by default. else, there is a previous SR value
    useEffect(() => {
        if (state.skillRating !== undefined) {
            validateInput(state.skillRating);
        }

        fetchMostRecentGame();

        return () => {
            setDisabled(true);
        }
    }, []);

    useEffect(() => console.log({ lastPlayed }), [lastPlayed])

    return (
        <FormComponentWrapper>
            <Grid style={{ height: '70%' }} item xs={12}>
                <MediaCard
                    cardMediaStyle={cardPictureStyles}
                    title={skillRating.toString()}
                    subtitle={rank.name}
                    image={rank.icon}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    required
                    type="number"
                    variant="outlined"
                    className={classes.numInputHideArrows}
                    value={input}
                    error={error}
                    inputProps={{ min: 1, max: 5000 }}
                    onChange={(e) => handleChange(e)}
                    label="New Skill Rating"
                />
            </Grid>
            <Stepper disabled={disabled} />
        </FormComponentWrapper>
    );
}

export default SkillRating;