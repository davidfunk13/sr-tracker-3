import React, { Fragment, FunctionComponent, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import useStyles from './SessionCard.UI.Styles';
import SessionCardProps from './SessionCard.UI.Types';
import Placeholder from '../../assets/icons/heroes/Tracer.png';
import Modal from '../../UI/Modal/Modal.UI';
import convertRoleKey from '../../utils/convertRoleKey';
import useGetRank from '../../hooks/useGetRank/useGetRank';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import fetchGraphQL from '../../utils/fetchGraphQL';
import { useAuth0 } from '../../react-auth0-spa';

const SessionCard: FunctionComponent<SessionCardProps> = ({ onClick, session, deleteSession }) => {
    const { getTokenSilently } = useAuth0();

    const classes = useStyles();

    const date = new Date(parseInt(session.createdAt, 10));

    const [open, setOpen] = useState<boolean>(false);

    const start = useGetRank(session.skillRatingStart);
    const current = useGetRank(session.skillRatingCurrent);

    const createdAt: { date: string, time: string } = {
        date: date.toLocaleDateString(),
        time: date.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })
    }

    const [isDone, setIsDone] = useState<boolean>(false);

    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

    const handleButtonPress = function (e: any) {

        if (timer) {
            clearTimeout(timer)
        }

        setTimer(setTimeout(handleLongPress, 500, e));
    };

    const handleLongPress = (e: any) => {
        console.log("LongPress");
        setOpen(true)
        setIsDone(true);
    };

    const handleButtonRelease = function (e: any) {
        if (!isDone) {
            console.log("Release", isDone);
            setIsDone(true);
        }

        clearTimeout(timer as any);
    };

    const role = convertRoleKey(session.sessionRole);

    return (
        <Fragment>
            <Card onMouseDown={handleButtonPress} onMouseUp={handleButtonRelease} onClick={onClick} className={classes.root} >
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="p" variant="subtitle1">
                            {role.name} Session
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {createdAt.date}
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                            {createdAt.time}
                        </Typography>
                    </CardContent>
                </div>
                <div className={classes.images}>
                    <CardMedia
                        className={classes.cover}
                        image={role.icon}
                        title={`${role.name.charAt(0).toUpperCase() + role.name.slice(1)} Session`}
                    />
                    <CardMedia
                        className={classes.cover}
                        image={start.icon.toString()}
                        title={"Starting Skillrating"}
                    />
                    <TrendingFlatIcon className={classes.arrowIcon} />
                    <CardMedia
                        className={classes.cover}
                        image={current.icon.toString()}
                        title={"Current Skillrating"}
                    />
                </div>
            </Card>
            <Modal modalControls={{ modalOpen: open, setModalOpen: setOpen }} title={'Edit Session'} >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant={'h6'} component={"h2"} >
                            Delete This Session?
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant={'subtitle1'} component={"h2"} >
                            All games and data associated with this session will be removed.
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Button onClick={() => deleteSession(session._id)} variant={'contained'} color={'secondary'}>
                            <DeleteIcon />
                            <Typography variant={'button'} component={'p'}>
                                Delete session
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Modal>
        </Fragment>
    );
}

export default SessionCard;