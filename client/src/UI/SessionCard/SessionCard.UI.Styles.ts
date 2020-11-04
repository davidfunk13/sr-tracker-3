import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'nowrap',
        },
        details: {
            width: '100%',
        },
        content: {
            flex: '1 0 auto',
        },
        images: {
            display: 'flex',
            width: '100%',
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
