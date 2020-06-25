import { Theme } from '@material-ui/core';

import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modalContent: {
            padding: '6%',
        }
    }),
);

export default useStyles;