import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        display: 'flex',
        width: '100%',
        margin: '1em 0',
    },
    item: {
        flex: 1,
    },
    first: {
        marginRight: '.5em',
    }
}));

export default useStyles;