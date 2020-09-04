import React, { FunctionComponent, useContext } from 'react';
import SkillRatingProps from './SkillRating.AddGame.Types';
import Grid from '@material-ui/core/Grid';
import useStyles from './SkillRating.AddGame.Styles';
import TextField from '@material-ui/core/TextField';
import StepButtons from '../../../../UI/Modal/StepButtons/StepButtons.UI';
import MediaCard from '../../../../UI/MediaCard/MediaCard.UI';
import useGetRank, { YourRank } from '../../../../hooks/useGetRank/useGetRank';
import { GameFormContext } from '../../../../contexts/GameFormContextV2/GameFormContext';
import { GameContextTypes } from '../../../../contexts/GameFormContextV2/GameFormContextTypes';
import CSS from 'csstype';

const SkillRating: FunctionComponent<SkillRatingProps> = () => {
    const classes = useStyles();

    const [state, setState]: GameContextTypes = useContext(GameFormContext);

    function setSkillrating(val: number) {
        const newState = { ...state, skillRating: val };
        setState(newState);
    }

    const rank: YourRank = useGetRank(state.skillRating);

    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        const value: number = parseInt(e.target.value, 10);
        setSkillrating(value);
    }

    const cardPictureStyles: CSS.Properties = { backgroundSize: "contain" };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <MediaCard
                    cardMediaStyle={cardPictureStyles}
                    title={state.skillRating.toString()}
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
        </Grid>
    );
}

export default SkillRating;