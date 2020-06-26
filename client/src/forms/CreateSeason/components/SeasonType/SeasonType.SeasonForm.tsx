import React, { Fragment, FunctionComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import DamageIcon from '../../../../assets/icons/roles/Damage.png';
import Grid from '@material-ui/core/Grid';

const SeasonType: FunctionComponent = () => {
    return (
        <Fragment>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant={"subtitle2"}>
                        What type of season is this?
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <img style={{ maxWidth: '100%' }} src={DamageIcon} alt="Damage Season" />
                </Grid>
                <Grid item xs={4}>
                    <img style={{ maxWidth: '100%' }} src={DamageIcon} alt="Damage Season" />
                </Grid>
                <Grid item xs={4}>
                    <img style={{ maxWidth: '100%' }} src={DamageIcon} alt="Damage Season" />
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default SeasonType;