import React, { FunctionComponent } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import useStyles from './SessionCard.UI.Styles';
import SessionCardProps from './SessionCard.UI.Types';
import Placeholder from '../../assets/icons/heroes/Tracer.png';

const SessionCard: FunctionComponent<SessionCardProps> = ({ onClick, session }) => {
    const classes = useStyles();

    let createdAt: { date: string, time: string } = { date: '...loading', time: '...loading' };

    if (session && session.createdAt) {
        const date = new Date(parseInt(session.createdAt, 10));

        createdAt = {
            date: date.toLocaleDateString(),
            time: date.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })
        }
    }

    return (
        <Card onClick={onClick} className={classes.root} >
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h6" variant="h6">
                        Whatever
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {createdAt.date}
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                        {createdAt.time}
                    </Typography>
                </CardContent>
            </div>
            <CardMedia
                className={classes.cover}
                image={Placeholder}
                title="Live from space album cover"
            />
        </Card>
    );
}

export default SessionCard;