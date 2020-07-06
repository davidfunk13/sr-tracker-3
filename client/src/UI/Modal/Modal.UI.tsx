import React, { useContext } from 'react';
import ModalTypes from './Modal.UI.Types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';
import Dialog from '@material-ui/core/Dialog';
import useStyles from './Modal.UI.Styles';
import Button from '@material-ui/core/Button';
import { SeasonFormContext } from '../../contexts/SeasonFormContext/SeasonFormContext.Context'

const Modal: React.FC<ModalTypes> = ({ modalOpen, handleModalClose, children }) => {

    const theme = useTheme();

    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const classes = useStyles();

    const { state, setState }: any = useContext(SeasonFormContext);

    function handleClose() {
        const newState = { ...state, currentStep: 0 }
        setState(newState);
        handleModalClose();
    }

    return <Dialog open={modalOpen} fullScreen={fullScreen}>
        <section className={classes.modalContent}>
            {children}
            <Button variant={'contained'} fullWidth color={'primary'} onClick={() => handleClose()} > Close Modal</Button>
        </section>
    </Dialog>
}

export default Modal;