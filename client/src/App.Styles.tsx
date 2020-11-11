import { Theme } from '@material-ui/core';

import { makeStyles, createStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      width: '97vw',
      maxWidth: '97vw',
      height: '85vh',
      flexGrow: 1,
      padding: '6% 0 0 0',
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