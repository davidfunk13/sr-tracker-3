import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import useStyles from './ConfirmSession.UI.Styles';
import ConfirmSessionProps from './ConfirmSession.AddSession.UI.Types';
import Stepper from '../../../Stepper';
import SessionFormContext from '../../../../contexts/SessionForm/SessionForm.Context';

const ConfirmSession: React.FC<ConfirmSessionProps> = ({ createSession }) => {

    const [state, setState] = useContext(SessionFormContext);

    const classes = useStyles();

    return (
        <Grid container >
            Poop poop fart fart Poop poop fart fart

            <Stepper submit={() => createSession()} formContext={SessionFormContext} disabled={false} />
        </Grid>
    );
};

export default ConfirmSession;