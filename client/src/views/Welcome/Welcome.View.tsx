import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { WelcomeViewProps } from './Welcome.View.Types';
import OverwatchImg from '../../assets/images/splash.png';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

const Welcome: React.ComponentType<WelcomeViewProps> = () => {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            splash: {
                height: '100%',
                width: '100%'
            }
        }),
    );

    const classes = useStyles();

    return (
        <Grid spacing={2} container>
            <Grid item xs={12}>
                <img className={classes.splash} src={OverwatchImg} />
            </Grid>
            <Grid item xs={12}>
                <Typography align={'center'} gutterBottom variant={'h6'}>
                    Please log in to continue!
                </Typography>
                <Typography gutterBottom variant={'h4'}>
                    Welcome
                </Typography>
                <Typography gutterBottom variant={'body1'}>
                    This app is a compaion app for Blizzard's Overwatch.
                    Players can search for their accounts, link them to the application,
                    and track their progress.
                </Typography>
                {/* //move this shit to a Getting started page. */}
                {/* <Typography gutterBottom variant={'h5'}>
                    Getting Started
                </Typography>
                <Typography gutterBottom variant={'body1'}>
                    After linking a battletag and selecting it, players are greeted with an empty
                    session with three roles.
                </Typography>
                <Typography gutterBottom variant={'body1'}>
                    Creating a new session will reset the skill rating for all roles to zero.
                    These sessions can be loaded back into the application to continue at any time.
                </Typography>
                <Typography gutterBottom variant={'h5'}>
                    Adding Games
                </Typography>
                <Typography gutterBottom variant={'body1'}>
                    After linking a battletag and selecting it, players are greeted with an empty
                    session with three roles.
                </Typography>
                <Typography gutterBottom variant={'body1'}>
                    Creating a new session will reset the skill rating for all roles to zero.
                    These sessions can be loaded back into the application to continue at any time.
                </Typography> */}
            </Grid>
        </Grid>
    );
};

export default Welcome; 