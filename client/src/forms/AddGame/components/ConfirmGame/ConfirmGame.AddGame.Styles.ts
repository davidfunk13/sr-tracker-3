import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        innerContainer: {
            overflowY: 'auto',
            height: '80%',
        }
    }),
);

export default useStyles;