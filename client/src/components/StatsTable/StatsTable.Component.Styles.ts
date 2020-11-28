import { Theme } from '@material-ui/core';

import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>

    createStyles({
        heading: {
            height: '2em',
            paddingLeft: '3%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: '#3f51b5',
            color: 'white',
        }
    })
);

export default useStyles;