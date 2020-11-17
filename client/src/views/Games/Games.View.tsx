// React
import React from 'react';
// Hooks
import useStyles from './Games.View.Styles';
//Types
import GamesProps from './Games.View.Types';
//Material Ui Components
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
//SR Tracker
import CollapsibleTable from '../../UI/CollapsibleTable/CollapsibleTable.UI';

const Games: React.FC<GamesProps> = ({ isLoading, games, modalControls }) => {
    const classes = useStyles();

    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <Typography gutterBottom variant={'h4'}>
                    Games
                </Typography>
            </Grid>
            {isLoading && <div className={classes.loadingContainer}><CircularProgress style={{ margin: "5vh 0" }} size={100} /></div>}
            <Grid className={classes.marginBottom} item xs={12}>
                <Grid container spacing={2} justify={"center"} >
                    {isLoading ? <CircularProgress style={{ margin: "5vh 0" }} size={100} /> :
                        <CollapsibleTable rows={games} />
                    }
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Games;