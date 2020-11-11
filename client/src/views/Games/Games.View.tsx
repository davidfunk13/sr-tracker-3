// React
import React, { useEffect, useState } from 'react';
// Hooks
import useStyles from './Games.View.Styles';
//Types
import GamesProps from './Games.View.Types';
//Material Ui Components
import { useTheme, Zoom } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
//SR Tracker
import GameTable from '../../components/GameTable/GameTable.Component';

const Games: React.FC<GamesProps> = ({ session, isLoading, games, modalControls }) => {
    const { setModalOpen } = modalControls;

    const theme = useTheme();

    const classes = useStyles();

    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <Typography variant={'h5'}>
                    Games
                </Typography>
            </Grid>
            {isLoading && <div className={classes.loadingContainer}><CircularProgress style={{ margin: "5vh 0" }} size={100} /></div>}
            <Grid className={classes.marginBottom} item xs={12}>
                <GameTable isLoading={isLoading} games={games} setModalOpen={setModalOpen} />
            </Grid>
            <Button variant={"contained"} fullWidth color={'primary'} onClick={() => setModalOpen(true)}>
                <Typography variant={'button'}>Add A Game</Typography>
            </Button>
        </Grid>
    );
};

export default Games;