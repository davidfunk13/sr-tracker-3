import React from 'react';
import ModalTypes from './Modal.UI.Types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';
import Dialog from '@material-ui/core/Dialog';
import useStyles from './Modal.UI.Styles'

const Modal: React.FC<ModalTypes> = ({ modalOpen, children }) => {
    const theme = useTheme();

    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const classes = useStyles();

    return <Dialog open={modalOpen} fullScreen={fullScreen}>
        <section className={classes.modalContent}>
            {children}
        </section>
    </Dialog>
}

export default Modal;