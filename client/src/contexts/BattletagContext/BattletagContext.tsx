import React, { createContext, useReducer } from 'react';

interface BattletagProviderProps {
    children: React.Component
}

const BattletagContext = createContext({});


const battletagReducer = (state: any, action: any) => {
    switch (action.type) {
        default:
            break;
    }
};

const BattletagProvider: React.FC<BattletagProviderProps> = ({ children }) => {
    const [battletag, dispatch] = useReducer(battletagReducer, function() {console.log('pass action here')});

    return (
        <BattletagContext.Provider value={{battletag, dispatch}}>
            {children}
        </BattletagContext.Provider>
    )
};

export default BattletagProvider;