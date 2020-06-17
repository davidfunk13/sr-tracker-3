import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { WelcomeViewProps } from './Welcome.View.Types';

const Welcome: React.ComponentType<WelcomeViewProps> = () => {
    return (
        <Grid spacing={2} container>
            <Grid item xs={12}>
                <Card  >
                    <CardContent>

                        <Typography variant="h1" gutterBottom>
                            Welcome
                </Typography>
                        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                            Welcome
                </Typography>
                        <Typography variant="body1" gutterBottom>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit. Pellentesque id nibh tortor id.
                            Urna nunc id cursus metus aliquam
                </Typography>
                        <Typography variant="body2" gutterBottom>
                            Welcome
                </Typography>
                        <Typography variant="button" gutterBottom>
                            Welcome
                </Typography>
                        <Typography variant="body1" gutterBottom>
                            Welcome
                </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Card elevation={4}  >
                    <CardContent>
                        <Typography variant="h1" gutterBottom>
                            Patch Notes:
                 </Typography>
                        <Typography variant="body1" gutterBottom>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit. Pellentesque id nibh tortor id.
                            Urna nunc id cursus metus aliquam
                </Typography>
                        <Typography variant="body2" gutterBottom>
                            Welcome
                </Typography>
                        <Typography variant="button" gutterBottom>
                            Welcome
                </Typography>
                        <Typography variant="body1" gutterBottom>
                            Welcome
                </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Welcome; 