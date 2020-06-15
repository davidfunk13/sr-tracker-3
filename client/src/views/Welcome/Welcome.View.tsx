import React from 'react';
import { Typography } from '@material-ui/core';
import { WelcomeViewProps } from './Welcome.View.Types';

const Welcome: React.ComponentType<WelcomeViewProps> = () => {
    return (
        <Typography gutterBottom>
            Create React App v4-beta example
        </Typography>
    );
};

export default Welcome;