import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    menuButton: {
        // marginRight: '4%',
    },
    appBar: {
        transition: theme.transitions.create('all', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100%)`,
        transition: theme.transitions.create('all', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        transform: `translateX(${-drawerWidth}px)`,
    },
    title: {
        flexGrow: 1,
        fontSize: '1.4em',
    },
    titleSm: {
        fontSize: '.9em',
    },
    loginButton: {
        marginRight: '5%'
    }
}));

export default useStyles