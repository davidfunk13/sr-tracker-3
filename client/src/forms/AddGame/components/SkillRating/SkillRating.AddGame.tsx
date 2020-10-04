import React, { FunctionComponent, useContext, useEffect, useState } from 'react';
import SkillRatingProps from './SkillRating.AddGame.Types';
import Grid from '@material-ui/core/Grid';
import useStyles from './SkillRating.AddGame.Styles';
import TextField from '@material-ui/core/TextField';
import MediaCard from '../../../../UI/MediaCard/MediaCard.UI';
import useGetRank, { YourRank } from '../../../../hooks/useGetRank/useGetRank';
import CSS from 'csstype';
import GameFormContext from '../../../../contexts/GameForm/GameFormContext';
import { GameFormContextType } from '../../../../App.Types';
import FormComponentWrapper from '../../../../UI/FormComponentWrapper/FormComponentWrapper.UI.Component';
import Stepper from '../../../Stepper';

const SkillRating: FunctionComponent<SkillRatingProps> = () => {
    const cardPictureStyles: CSS.Properties = { backgroundSize: "contain" };

    const classes = useStyles();

    const [state, setState]: GameFormContextType = useContext(GameFormContext);

    const [disabled, setDisabled] = useState<boolean>(true);

    const [error, setError] = useState<boolean>(false);

    const [input, setInput] = useState<string>('');

    const skillRating = state.skillRating || 0;

    const rank: YourRank = useGetRank(skillRating);

    //if undefined on mount, will be disabled by default. else, there is a previous SR value
    useEffect(() => {
        if (state.skillRating !== undefined) {
            validateInput(state.skillRating);
        }

        return () => {
            setDisabled(true);
        }

    }, []);

    function setSkillrating(val: number) {
        const newState = { ...state, skillRating: val };
        setState(newState);
    }

    function validateInput(value: number) {
        if (isNaN(value)) {
            setError(true)
            setDisabled(true);
        } else if (value > 5000) {
            setError(true);
            setDisabled(true);
        } else if (value <= 0) {
            setError(true);
            setDisabled(true);
        } else {
            setError(false);
            setDisabled(false)
        }
    };

    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        const value: number = parseInt(e.target.value, 10);
        validateInput(value);
        setInput(value.toString());
        setSkillrating(value);
    }

    return (
        <FormComponentWrapper>
            <Grid item xs={12}>
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