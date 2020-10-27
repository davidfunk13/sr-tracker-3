import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import GameTable from '../../components/GameTable/GameTable.Component';
import Button from '@material-ui/core/Button';
import GamesProps from './Games.View.Types';
import MediaCard from '../../UI/MediaCard/MediaCard.UI';
import DamageIcon from '../../assets/icons/roles/Damage.png';
import SupportIcon from '../../assets/icons/roles/Support.png';
import TankIcon from '../../assets/icons/roles/Tank.png';
import useStyles from './Games.View.Styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const Games: React.FC<GamesProps> = ({ session, isLoading, games, modalControls }) => {
    const { setModalOpen } = modalControls;

    const classes = useStyles();

    return (
        <Grid container spacing={2}>
            {/* <Grid item xs={12}>
                <Typography variant={'h5'}>
                    Games
                </Typography>
            </Grid>
            {isLoading && <div className={classes.loadingContainer}><CircularProgress style={{ margin: "5vh 0" }} size={100} /></div>}
            <Grid container spacing={2} style={{ marginBottom: '1em' }} justify={'center'}>
                <Grid className={classes.iconContainer} item xs={4}>
                    <img className={classes.icon} src={TankIcon} alt="Tank" />
                    <Typography align={"center"}>
                        {session.tankSR.toString()}
                    </Typography>
                </Grid>
                <Grid className={classes.iconContainer} item xs={4}>
                    <img className={classes.icon} src={SupportIcon} alt="Support" />
                    <Typography align={"center"}>
                        {session.supportSR.toString()}
                    </Typography>
                </Grid>
                <Grid className={classes.iconContainer} item xs={4}>
                    <img className={classes.icon} src={DamageIcon} alt="Damage" />
                    <Typography align={"center"}>{session.damageSR.toString()}</Typography>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <GameTable isLoading={isLoading} games={games} setModalOpen={setModalOpen} />
            </Grid>
            <Grid item xs={12}>
                <Button variant={"contained"} fullWidth color={'primary'} onClick={() => setModalOpen(true)}>
                    <Typography variant={'button'}>Add A Game</Typography>
                </Button>
            </Grid> */}
        </Grid>
    );
};

export default Games;