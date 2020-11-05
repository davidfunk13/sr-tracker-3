import { Theme } from '@material-ui/core';

import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modalContent: {
            padding: '6%',
        },
        loadingContainer: {
            display: 'flex',
            justifyContent: 'center'
        },
        iconContainer: {
            textAlign: 'center',
        },
        icon: {
            width: '100%',
            maxWidth: '15vw'
        },
        marginBottom: {
            marginBottom: '1em',
        }
    }),
);

export default useStyles;