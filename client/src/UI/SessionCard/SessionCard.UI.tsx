import React, { FunctionComponent } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import useStyles from './SessionCard.UI.Styles';
import SessionCardProps from './SessionCard.UI.Types';

const SessionCard: FunctionComponent<SessionCardProps> = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root} >
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h6" variant="h6">
                        Info or ID Number
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Subtitle More Info
                    </Typography>
                </CardContent>
            </div>
            <CardMedia
                className={classes.cover}
                image="/static/images/cards/live-from-space.jpg"
                title="Live from space album cover"
            />
        </Card>
    );
}

export default SessionCard;