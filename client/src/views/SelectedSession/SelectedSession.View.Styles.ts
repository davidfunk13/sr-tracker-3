import { Theme } from '@material-ui/core';

import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        loadingContainer: {
            display: 'flex',
            justifyContent: 'center'
        },
        topSection: {
            maxHeight: '20vh',
            width: 'auto'
        },
        fab: {
            position: 'fixed',
            bottom: theme.spacing(2),
            right: theme.spacing(2),
            margin: theme.spacing(1),
        },
        addIcon: {
            marginRight: theme.spacing(1),
        },
    }),
);

export default useStyles;