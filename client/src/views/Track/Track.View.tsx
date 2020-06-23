import React from 'react';
import TrackProps from './Track.View.Types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Track: React.FC<TrackProps> = () => {

    return (
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <Typography variant={"h4"}>
                    Track Skill Rating
                </Typography>
            </Grid>
            {/* <Grid item xs={12}>
            </Grid> */}
        </Grid>
    );
};

export default Track;