import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
            padding: '0 .25em 0 0',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
        },
    },
    noPadding: {
        padding: 0,
        textAlign: 'left',
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
    },
    image: {
        height: '5em',
        width: 'auto',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    },
    image12: {
        height: '5em',
        width: 'auto',
        backgroundSize: 'cover',
        backgroundPosition: 'center 35%',
        backgroundRepeat: 'no-repeat'
    },
    rankIcon: {
        height: '5em',
        width: 'auto',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }
});

export default useStyles;