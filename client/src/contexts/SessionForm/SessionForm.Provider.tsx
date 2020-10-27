import React, { useState, useEffect } from 'react';
import { SessionForm } from '../../App.Types';
import SessionFormContext, { initialSessionFormState } from './SessionForm.Context';

const SessionFormProvider = ({ children }: any) => {
    const [state, setState] = useState<SessionForm>(initialSessionFormState);

    return (
        <SessionFormContext.Provider value={[state, setState]}>
            {children}
        </SessionFormContext.Provider>
    );
}

export default SessionFormProvider;