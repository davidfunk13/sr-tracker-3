import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        // numInputHideArrows: {
        //     WebkitAppearance: "none",
        //     margin: 0,
        //     MozAppearance: "textfield",
        // },
        // root: {
        //     minWidth: '30%',
        // },
        // image: {
        //     height: 140,
        //     padding: '1em',
        //     transform: 'scale(.75)',
        //     backgroundSize: 'contain'
        // }
        cardImage: { backgroundSize: "contain", padding: '1em' }
    }),
);

export default useStyles;