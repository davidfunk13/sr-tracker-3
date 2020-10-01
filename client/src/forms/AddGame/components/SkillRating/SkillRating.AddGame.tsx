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
    const classes = useStyles();

    const [state, setState]: GameFormContextType = useContext(GameFormContext);

    const [disabled, setDisabled] = useState<boolean>(true);

    function setSkillrating(val: number) {
        const newState = { ...state, skillRating: val };
        setState(newState);
    }

    const skillRating = state.skillRating || 0;

    const rank: YourRank = useGetRank(skillRating);

    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        const value: number = parseInt(e.target.value, 10);
        setSkillrating(value);
    }

    const cardPictureStyles: CSS.Properties = { backgroundSize: "contain" };

    useEffect(() => {
        if (state.skillRating !== undefined) {
            setDisabled(false);
        }

        return () => {
            setDisabled(true);
        }

    }, [state.skillRating]);

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
                    value={state.skillRating}
                    inputProps={{ min: 0, max: 5000 }}
                    onChange={(e) => handleChange(e)}
                    label="New Skill Rating"
                />
            </Grid>
            <Stepper disabled={disabled} />
        </FormComponentWrapper>
    );
}

export default SkillRating;