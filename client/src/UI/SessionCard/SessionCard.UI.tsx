import React, { Fragment, FunctionComponent, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import useStyles from './SessionCard.UI.Styles';
import SessionCardProps from './SessionCard.UI.Types';
import Placeholder from '../../assets/icons/heroes/Tracer.png';
import Modal from '../../UI/Modal/Modal.UI';
import AddSession from '../../forms/AddSession/AddSession.Modal.UI';

const SessionCard: FunctionComponent<SessionCardProps> = ({ onClick, session }) => {
    const classes = useStyles();

    const date = new Date(parseInt(session.createdAt, 10));

    const [open, setOpen] = useState<boolean>(false);

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
        console.log("LongPress")
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

    return (
        <Fragment>
            <Card onMouseDown={handleButtonPress} onMouseUp={handleButtonRelease} onClick={onClick} className={classes.root} >
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
                    title={"Session Feature"}
                />
            </Card>
            <Modal modalControls={{ modalOpen: open, setModalOpen: setOpen }} title={'Edit Session'} >
                <h1>Yo bitch.</h1>
                <h5>{session._id}</h5>
            </Modal>
        </Fragment>
    );
}

export default SessionCard;