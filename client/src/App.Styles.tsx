import { Theme } from '@material-ui/core';

import { makeStyles, createStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      width: '100%',
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('all', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create(['all'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      transform: 'translateX(-240px)',
      marginRight: 0,
    },
  }),
);

export default useStyles;