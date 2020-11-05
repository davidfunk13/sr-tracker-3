import React, { FunctionComponent, useContext, } from 'react';
import { ModalControls, SessionForm, SessionFormContextType } from '../../App.Types';
import SelectRole from './components/SelectRole/SelectRole.AddSession';
import SessionFormContext from '../../contexts/SessionForm/SessionForm.Context';
import SkillRating from '../AddSession/components/SkillRating/SkillRating.AddSession';
import ConfirmSession from './components/ConfirmSession/ConfirmSession.AddSession.UI';

export interface AddSessionTypes {
    createSession: (form: SessionForm) => Promise<void>;
    modalControls: ModalControls
};

const AddSession: FunctionComponent<AddSessionTypes> = ({ createSession }) => {

    const [state] = useContext<SessionFormContextType>(SessionFormContext);

    function renderComponent(step: number): JSX.Element {
        switch (step) {
            case 0:
                return <SelectRole />;
            case 1:
                return <SkillRating />;
            case 2:
                return <ConfirmSession createSession={createSession} />;
            default:
                return <h4>Something went wrong</h4>;
        }
    }

    return renderComponent(state.step);
}

export default AddSession;