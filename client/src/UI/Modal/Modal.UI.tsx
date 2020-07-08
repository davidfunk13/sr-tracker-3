import React from 'react';
import ModalTypes from './Modal.UI.Types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';

const Transition = React.forwardRef(function Transition(props: TransitionProps & { children?: React.ReactElement<any, any> }, ref: React.Ref<unknown>,) { return <Slide direction="up" ref={ref} {...props} />; });

const Modal: React.FC<ModalTypes> = ({ children, open, title, isFullScreen }) => {

    const theme = useTheme();

    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return <Dialog
        open={open}
        fullScreen={isFullScreen ? fullScreen : undefined}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="Confirm Season"
        aria-describedby="Confirm creation of season">
        <DialogTitle>
            {title ? title : 'Modal'}
        </DialogTitle>
        <DialogContent>
            {children}
        </DialogContent>
    </Dialog>
}

export default Modal;