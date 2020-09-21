import React, { useState, useEffect } from 'react';
import { GameForm } from '../../App.Types';
import GameFormContext, { initialGameFormState } from './GameFormContext';

const GameFormProvider = ({ children }: any) => {

    const [state, setState] = useState<GameForm>(initialGameFormState);

    useEffect(() => console.log({ provider: state }), [state]);

    return (
        <GameFormContext.Provider value={[state, setState]}>
            {children}
        </GameFormContext.Provider>
    );
}

export default GameFormProvider;