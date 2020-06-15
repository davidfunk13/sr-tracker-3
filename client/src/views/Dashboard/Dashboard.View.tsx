import React from 'react';
import { Typography } from '@material-ui/core';
import { DashboardViewProps } from './Dashboard.View.Types';

const Dashboard: React.ComponentType<DashboardViewProps> = () => {
    return (
        <Typography gutterBottom>
            Dashboard
        </Typography>
    );
};

export default Dashboard;