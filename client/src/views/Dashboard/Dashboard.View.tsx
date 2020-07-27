import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardWithAvatar from '../../UI/CardWithAvatar/CardWithAvatar.UI';
import DashboardViewProps from './Dashboard.View.Types';
import Typography from '@material-ui/core/Typography';



const Dashboard: React.FC<DashboardViewProps> = () => {

    return (
        <Grid container spacing={4} direction={'row'} wrap={'wrap'} >
            <Grid item xs={12}>
                <Typography variant="h4" gutterBottom>Dashboard</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>Most Recent Stuff Scroller</Typography>

                <CardWithAvatar avatarLetter="BM" CardHeaderTitle="Best Map" CardHeaderSubtitle="Map you win most">
                    {/*  */}
                </CardWithAvatar>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>Linked Battletags Scroller</Typography>

                <CardWithAvatar avatarLetter="BM" CardHeaderTitle="Buttkegels" CardHeaderSubtitle="#1602">
                    {/*  */}
                </CardWithAvatar>
            </Grid>
        </Grid>
    );
};

export default Dashboard;