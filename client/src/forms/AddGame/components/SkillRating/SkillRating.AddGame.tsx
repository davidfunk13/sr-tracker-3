import React, { FunctionComponent, useContext } from 'react';
import SkillratingProps from './SkillRating.AddGame.Types';
import Grid from '@material-ui/core/Grid';
import useStyles from './SkillRating.AddGame.Styles';
import TextField from '@material-ui/core/TextField';
import StepButtons from '../../../../UI/Modal/StepButtons/StepButtons.UI';
import { GameFormContext, GameContext } from '../../../../contexts/GameFormContext/GameFormContext.Context';
import MediaCard from '../../../../UI/MediaCard/MediaCard.UI';
import GameForm from '../../../../contexts/GameFormContext/GameFormContext.Context.Types';
import useGetRank, { YourRank } from '../../../../hooks/useGetRank/useGetRank';

const SkillRating: FunctionComponent<SkillratingProps> = () => {
    const classes = useStyles();

    const [state, setState]: GameContext = useContext(GameFormContext);

    function setSkillrating(val: number) {
        const newState = { ...state, skillRating: val };
        setState(newState);
    }

    const rank: YourRank = useGetRank(state.skillRating);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <MediaCard title={state.skillRating.toString()} subtitle={rank.name} image={rank.icon}  />
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
                    onChange={(e) => setSkillrating(parseInt(e.target.value, 10))}
                    label="New Skill Rating"
                />
            </Grid>
            <Grid item xs={12}>
                <StepButtons disabled={!!!state.skillRating} />
            </Grid>
        </Grid>
    );
}

export default SkillRating;