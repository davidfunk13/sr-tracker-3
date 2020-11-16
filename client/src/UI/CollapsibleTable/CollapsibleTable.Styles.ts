import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
            padding: '0',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
        },
    },
    noPadding: {
        padding: 0,
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
    },
    downArrowWidth: {
        width: '10%',
    },
    heroesPlayedWidth: {
        width: '35%'
    },
    mapWidth: {
        width: '25%'
    },
    wLWidth: {
        width: '15%'
    },
    overrideOverflow: {
        overflow: 'unset !important'
    }
});

export default useStyles;