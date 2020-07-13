import React, { FunctionComponent, useState } from 'react';
import SkillratingProps from './SkillRating.AddGame.Types';
import Grid from '@material-ui/core/Grid';
import useStyles from './SkillRating.AddGame.Styles';
import TextField from '@material-ui/core/TextField';

const SkillRating: FunctionComponent<SkillratingProps> = () => {
    const classes = useStyles();
    const [search, setSearch] = useState<number | undefined>(undefined);
    return (
        <Grid container>
            <Grid item xs={12}>
                <TextField id="outlined-search" className={classes.numInputHideArrows} fullWidth required value={search} onChange={(e) => setSearch(parseInt(e.target.value, 10))} label="Search for Battletag" type="number" variant="outlined" />
            </Grid>
        </Grid>
    );
}

export default SkillRating;