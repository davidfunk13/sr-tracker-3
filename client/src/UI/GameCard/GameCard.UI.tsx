import React, { FunctionComponent, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GameCardTypes from './GameCard.UI.Types';
import Grid from '@material-ui/core/Grid';
import { GameFormContext } from '../../contexts/GameFormContext/GameFormContext.Context';
import { HeroEntry } from '../../utils/heroDictionary';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    heroCardFlex: {
        display: 'flex',
    },
    heroCardImg: {
        maxWidth: '33%',
    }
});

const GameCard: FunctionComponent<GameCardTypes> = () => {
    const classes = useStyles();

    const [state, setState]: any = useContext(GameFormContext);

    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={state.mapPlayed.icon}
                            title={state.mapPlayed.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {state.mapPlayed.name}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <div className={classes.heroCardFlex}>
                            {state.heroesPlayed.map((hero: HeroEntry) => <img className={classes.heroCardImg} src={hero.icon.toString()} alt={hero.name} />)}
                        </div>
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {state.heroesPlayed.map((hero: HeroEntry) => ' ' + hero.name)}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h2">
                                Heroes Played
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    {/* <CardActions>
                        <Button size="small" color="primary">
                            Submit
                        </Button>
                        <Button size="small" color="secondary">
                            Reset
                        </Button>
                    </CardActions> */}
                </Card>
            </Grid>
        </Grid>
    );
}

export default GameCard;