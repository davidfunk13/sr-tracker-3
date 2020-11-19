import { Theme } from '@material-ui/core';

import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        rankIcon: {
            width: '40%', transform: 'translateX(-50%)', marginLeft: '50%'
        }
    }),
);

export default useStyles;