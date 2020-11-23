import React, { Fragment, FunctionComponent, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import useStyles from './PressHoldCard.UI.Styles';
import Modal from '../../UI/Modal/Modal.UI';
import PressHoldCardProps from './PressHoldCard.UI.Types';

const PressHoldCard: FunctionComponent<PressHoldCardProps> = ({ onClick, action, children, modalTitle, modalChildren }) => {

    const classes = useStyles();

    const [open, setOpen] = useState<boolean>(false);

    const [isDone, setIsDone] = useState<boolean>(false);

    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

    const handleButtonPress = function (e: any) {

        if (timer) {
            clearTimeout(timer)
        }

        setTimer(setTimeout(handleLongPress, 1000, e));
    };

    const handleLongPress = (e: any) => {
        setOpen(true)
        setIsDone(true);
    };

    const handleButtonRelease = function (e: any) {
        if (!isDone) {
            setIsDone(true);
        }

        clearTimeout(timer as any);
    };

    return (
        <Fragment>
            <Card onTouchStart={handleButtonPress} onTouchEnd={handleButtonRelease} onMouseDown={handleButtonPress} onMouseUp={handleButtonRelease} onClick={onClick} className={classes.root} >
                <CardContent className={classes.content}>
                    {children}
                </CardContent>
            </Card>
            <Modal modalControls={{ modalOpen: open, setModalOpen: setOpen }} title={modalTitle} >
                {modalChildren}
            </Modal>
        </Fragment>
    );
}

export default PressHoldCard;