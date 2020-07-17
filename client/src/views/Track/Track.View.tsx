import React from 'react';
import TrackProps from './Track.View.Types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SelectBattletag from '../SelectBattletag/SelectBattletag.View';

const Track: React.FC<TrackProps> = () => {
    //toggle state of having a selected battletag in localstorage.

    return (
        <Grid container justify={'center'} spacing={4}>
            <Grid item xs={12} md={8}>
                <Typography variant={"h4"}>
                    Track Skill Rating
                </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
                <SelectBattletag />
            </Grid>
        </Grid>
    );
};

export default Track;