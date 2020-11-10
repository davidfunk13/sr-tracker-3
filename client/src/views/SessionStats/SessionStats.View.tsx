import { Card } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React, { FunctionComponent } from 'react'
import LineChart from '../../UI/Charts/PercentPie/LineChart/LineChart.UI';
import PercentPie from '../../UI/Charts/PercentPie/PercentPie.UI';
import { SessionStatsProps } from './SessionStats.View.Types';

const SessionStats: FunctionComponent<SessionStatsProps> = () => {

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} >
                <Typography variant={'h5'} >
                    Session Statistics
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Card>
                    <LineChart />
                </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Card>
                    <PercentPie value={60} />
                </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Card>
                    <PercentPie value={20} />
                </Card>
            </Grid>
        </Grid>
    )

}

export default SessionStats;