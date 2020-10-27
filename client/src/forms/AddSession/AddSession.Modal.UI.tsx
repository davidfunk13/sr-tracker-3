import React, { FunctionComponent, Fragment, useContext } from 'react';
import { ModalControls, SessionFormContextType } from '../../App.Types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MediaCard from '../../UI/MediaCard/MediaCard.UI';
import TankIcon from '../../assets/icons/roles/Tank.png';
import DamageIcon from '../../assets/icons/roles/Damage.png';
import SupportIcon from '../../assets/icons/roles/Support.png';
import useStyles from './AddSession.Modal.UI.Styles';
import FormComponentWrapper from '../../UI/FormComponentWrapper/FormComponentWrapper.UI.Component';
import SelectRole from './components/SelectRole/SelectRole.AddSession';
import SessionForm from '../../contexts/SessionForm';
import SessionFormContext from '../../contexts/SessionForm/SessionForm.Context';
export interface AddSessionTypes {
    createSession: () => void;
    modalControls: ModalControls
};

const AddSession: FunctionComponent<AddSessionTypes> = ({ createSession, modalControls }) => {
    const { setModalOpen, modalOpen }: ModalControls = modalControls;

    const classes = useStyles();

    const [state, setState] = useContext<SessionFormContextType>(SessionFormContext);

    // const { createGame, role } = componentDependencies

    function renderComponent(step: number): JSX.Element {
        switch (step) {
            case 0:
                return <SelectRole />
            case 1:
                return <p>Step 2</p>;
            case 2:
                return <p>Confirm</p>
            default:
                return <h4>Something went wrong</h4>;
        }
    }

    return (
        <FormComponentWrapper>
            {renderComponent(state.step)}
        </FormComponentWrapper>
    );
}

export default AddSession;