import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'nowrap',
        },
        details: {
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
        },
        content: {
            flex: '1 0 auto',
        },
        images: {
            display: 'flex',
            width: '40%',
        },
        arrowIcon: {
            height: 'auto',
        },
        cover: {
            backgroundSize: 'contain',
            width: '100%',
            backgroundPosition: 'center',
            transform: 'scale(.75)',
        },
    }),
);

export default useStyles;
