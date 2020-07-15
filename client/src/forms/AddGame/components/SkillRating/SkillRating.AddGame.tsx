import React, { FunctionComponent, useContext } from 'react';
import SkillratingProps from './SkillRating.AddGame.Types';
import Grid from '@material-ui/core/Grid';
import useStyles from './SkillRating.AddGame.Styles';
import TextField from '@material-ui/core/TextField';
import VerticalStepperButtons from '../../../../components/VerticalStepper/VerticalStepperButtons/VerticalStepperButtons.Component';
import { GameFormContext } from '../../../../contexts/GameFormContext/GameFormContext.Context';

const SkillRating: FunctionComponent<SkillratingProps> = () => {
    const classes = useStyles();

    const [state, setState]: any = useContext(GameFormContext);

    function setSkillrating(val: number) {
        const newState = { ...state, skillRating: val };
        setState(newState);
    }

    return (
        <Grid container spacing={2}>
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
                <VerticalStepperButtons disabled={!!!state.skillRating} />
            </Grid>
        </Grid>
    );
}

export default SkillRating;