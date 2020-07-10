import { makeStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) => ({
    tablePadding: {
        padding: '.35em',
    },
    tableWidth: { maxWidth: '90vw' }
}));

export default useStyles;