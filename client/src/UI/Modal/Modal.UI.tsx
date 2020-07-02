import React from 'react';
import ModalTypes from './Modal.UI.Types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';
import Dialog from '@material-ui/core/Dialog';
import useStyles from './Modal.UI.Styles';
import Button from '@material-ui/core/Button';
import VerticalStepper from '../../components/VerticalStepper/VerticalStepper.Component';

const Modal: React.FC<ModalTypes> = ({ modalOpen, handleModalClose, components, children }) => {

    const theme = useTheme();

    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const classes = useStyles();

    return <Dialog open={modalOpen} fullScreen={fullScreen}>
        <section className={classes.modalContent}>
            {children}
            {/* <VerticalStepper components={components} /> */}
            <Button variant={'contained'} fullWidth color={'primary'} onClick={() => handleModalClose()}>Close Modal</Button>
        </section>
    </Dialog>
}

export default Modal;