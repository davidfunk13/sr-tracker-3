import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        numInputHideArrows: {
            WebkitAppearance: "none",
            margin: 0,
            MozAppearance: "textfield",
        }
    }),
);

export default useStyles;