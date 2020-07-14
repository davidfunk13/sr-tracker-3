import React, { FunctionComponent, useState } from 'react';
import SkillratingProps from './SkillRating.AddGame.Types';
import Grid from '@material-ui/core/Grid';
import useStyles from './SkillRating.AddGame.Styles';
import TextField from '@material-ui/core/TextField';
import VerticalStepperButtons from '../../../../components/VerticalStepper/VerticalStepperButtons.Component';

const SkillRating: FunctionComponent<SkillratingProps> = () => {
    const classes = useStyles();
    const [skillrating, setSkillRating] = useState<number>(0);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    required
                    type="number"
                    variant="outlined"
                    className={classes.numInputHideArrows}
                    value={skillrating}
                    inputProps={{ min: 0, max: 5000 }}
                    onChange={(e) => setSkillRating(parseInt(e.target.value, 10))}
                    label="New Skill Rating"
                />
            </Grid>
            <Grid item xs={12}>
                <VerticalStepperButtons/>
            </Grid>
        </Grid>
    );
}

export default SkillRating;