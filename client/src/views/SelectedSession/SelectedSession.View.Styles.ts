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
        }
    }),
);

export default useStyles;