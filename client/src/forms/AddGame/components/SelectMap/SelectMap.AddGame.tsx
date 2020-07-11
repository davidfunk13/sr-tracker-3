import React, { Fragment, FunctionComponent, useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import SelectMapProps from './SelectMap.AddGame.Types';
import { GameFormContext } from '../../../../contexts/GameFormContext/GameFormContext.Context';

const SelectMap: FunctionComponent<SelectMapProps> = ({role}) => {

    const { state, setState }: any = useContext(GameFormContext);

    //enum for maps use here
    // function selectMap(val: any) {
    //     const newState = { ...state, currentStep: state.currentStep + 1, mapPlayed: 'testing' };
    //     setState(newState);
    // }

    console.log(role)

    return (
        <Fragment>
            <Typography variant={"subtitle2"}>
                What map are you playing?
            </Typography>
        </Fragment>
    )
}

export default SelectMap;