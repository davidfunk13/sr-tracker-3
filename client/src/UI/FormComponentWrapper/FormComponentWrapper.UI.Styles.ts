import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
    formContainerHeight: {
        height: '70vh',
        display: 'flex',
        alignContent: 'space-between',
    },
}));

export default useStyles;