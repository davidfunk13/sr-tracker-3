import React, { useContext, useEffect } from 'react';
import { SeasonFormContext } from '../../contexts/SeasonFormContext/SeasonFormContext.Context';

const ContextTest = () => {

    //give them the type here;
    const { state, setState }: any = useContext(SeasonFormContext);

    function set() {
        const newState = { ...state, seasonType: 1 };
        setState(newState);
    }

    function push(arg: any) {
        let newState = { ...state, mainHeroes: [...state.mainHeroes, arg] };
        setState(newState);
    }

    useEffect(() => console.log(state), [state])

    return (
        <div>
            <button onClick={() => set()}>test</button>
            <button onClick={() => push('item')}>poosh</button>
            {state.seasonType || 0}
            {state.mainHeroes.map((item: React.ReactNode) => <div>{item}</div>)}
        </div>
    )
}

export default ContextTest;