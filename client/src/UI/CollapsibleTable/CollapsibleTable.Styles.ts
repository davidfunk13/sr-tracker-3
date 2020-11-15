import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
            padding: '0 1em 0 0',
        },
    },
    noPadding: {
        padding: 0,
    },
    textOverflow: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    }

});

export default useStyles;