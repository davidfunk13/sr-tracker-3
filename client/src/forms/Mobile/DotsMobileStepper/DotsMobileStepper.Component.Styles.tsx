import { Theme } from '@material-ui/core';

import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 400,
            flexGrow: 1,
        },
    }),
);

export default useStyles;