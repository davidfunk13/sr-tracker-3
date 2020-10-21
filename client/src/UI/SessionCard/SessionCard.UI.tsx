import React, { FunctionComponent } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import useStyles from './SessionCard.UI.Styles';
import SessionCardProps from './SessionCard.UI.Types';
import Placeholder from '../../assets/icons/heroes/Tracer.png';

const SessionCard: FunctionComponent<SessionCardProps> = ({ onClick }) => {
    const classes = useStyles();

    return (
        <Card onClick={onClick} className={classes.root} >
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h6" variant="h6">
                        ID Number
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Subtitle More Info
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