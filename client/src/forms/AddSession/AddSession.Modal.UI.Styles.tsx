import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        minWidth: '30%',
    },
    image: {
        height: 140,
        padding: '1em',
        transform: 'scale(.75)',
        backgroundSize: 'contain'
    }
}));

export default useStyles;