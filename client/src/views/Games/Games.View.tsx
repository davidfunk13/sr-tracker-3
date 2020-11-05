import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import GameTable from '../../components/GameTable/GameTable.Component';
import Button from '@material-ui/core/Button';
import GamesProps from './Games.View.Types';
import DamageIcon from '../../assets/icons/roles/Damage.png';
import SupportIcon from '../../assets/icons/roles/Support.png';
import TankIcon from '../../assets/icons/roles/Tank.png';
import useStyles from './Games.View.Styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const Games: React.FC<GamesProps> = ({ session, isLoading, games, modalControls }) => {
    const { setModalOpen } = modalControls;

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