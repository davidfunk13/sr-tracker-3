import React, { useEffect, FunctionComponent, useContext } from 'react';
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
import Win from '../../assets/icons/other/win.png';
import Loss from '../../assets/icons/other/loss.png';
import Draw from '../../assets/icons/other/draw.png';
import { GameFormContextType, HeroEntry } from '../../App.Types';
import GameFormContext from '../../contexts/GameForm/GameFormContext';
import generateGameOutcomeString from '../../utils/generateGameOutcomeString';

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

    const [state, setState]: GameFormContextType = useContext(GameFormContext);

    function generateOutcomeIcon(outcome: number | undefined) {
        switch (outcome) {
            case 0:
                return Loss;
            case 1:
                return Win;
            case 2:
                return Draw
            default:
                break;
        }
    }

    const iconPath: string | undefined = generateOutcomeIcon(state.outcome);

    const outcomeString: string | undefined = generateGameOutcomeString(state.outcome);

    const mapImage = state.mapPlayed && state.mapPlayed.icon ? state.mapPlayed.icon.toString() : 'Error';

    const mapName = state.mapPlayed && state.mapPlayed.name ? state.mapPlayed.name : 'Error';

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={mapImage}
                            title={mapName}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {mapName}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component={'div'}
                            className={classes.media}
                            image={iconPath}
                            title={outcomeString}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {outcomeString}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={12}>
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
                    <CardActions>
                        <Button size="small" color="primary">
                            Submit
                        </Button>
                        <Button size="small" color="secondary">
                            Reset
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
}

export default GameCard;