import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import GameTable from '../../components/GameTable/GameTable.Component';
import Button from '@material-ui/core/Button';
import GamesProps from './Games.View.Types';

const Games: React.FC<GamesProps> = ({ isLoading, games, modalControls }) => {
    const { setModalOpen } = modalControls;
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant={'h5'}>
                    Games
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <GameTable isLoading={isLoading} games={games} setModalOpen={setModalOpen} />
            </Grid>
            <Grid item xs={12}>
                <Button variant={"contained"} fullWidth color={'primary'} onClick={() => setModalOpen(true)}>
                    <Typography variant={'button'}>Add A Game</Typography>
                </Button>
            </Grid>
        </Grid>
    );
};

export default Games;