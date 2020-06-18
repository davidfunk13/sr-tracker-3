import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import CardWithAvatar from '../../UI/CardWithAvatar.UI';
import { DashboardViewProps } from './Dashboard.View.Types';
import { Typography } from '@material-ui/core';



const Dashboard: React.ComponentType<DashboardViewProps> = () => {

    return (
        <Fragment>
            <Typography variant="h4" gutterBottom>Dashboard</Typography>
        <Grid spacing={4} direction={'row'} wrap={'wrap'} container>
            <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>Most Recent Stuff Scroller</Typography>

                <CardWithAvatar avatarLetter="BM" CardHeaderTitle="Best Map" CardHeaderSubtitle="Map you win most">
                    <Typography variant="h6">Horizontal Scroller?</Typography>
                </CardWithAvatar>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>Linked Battletags Scroller</Typography>

                <CardWithAvatar avatarLetter="BM" CardHeaderTitle="Buttkegels" CardHeaderSubtitle="#1602">
                    <Typography variant="h6">Horizontal Scroller?</Typography>
                </CardWithAvatar>
            </Grid>
        </Grid>
        </Fragment>
    );
};

export default Dashboard;