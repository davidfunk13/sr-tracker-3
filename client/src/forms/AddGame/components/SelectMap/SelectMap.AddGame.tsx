import React, { useEffect, Fragment, FunctionComponent, useContext, SetStateAction, Dispatch } from 'react';
import Typography from '@material-ui/core/Typography';
import SelectMapProps from './SelectMap.AddGame.Types';
import { GameFormContext } from '../../../../contexts/GameFormContext/GameFormContext.Context';
import { mapDictionary } from '../../../../utils/dictionaries';
import Card from '@material-ui/core/Card';
import GameFormContextTypes from '../../../../contexts/GameFormContext/GameFormContext.Context.Types';

const SelectMap: FunctionComponent<SelectMapProps> = ({ role }) => {
    const { state, setState }: any = useContext(GameFormContext);

    //enum for maps use here
    function selectMap(val: any) {
        const newState = { ...state, currentStep: state.currentStep + 1, mapPlayed: val };
        setState(newState);
    }

    useEffect(() => {
        mapDictionary.map(map => {
            const img = new Image();
            img.src = map.icon.toString();
        })

    }, []);

    console.log(role)

    return (
        <Fragment>
            <Typography variant={"subtitle2"}>
                What map are you playing?
            </Typography>
            <div style={{ maxHeight: '40vh', overflowY: 'auto' }}>
                <Card variant={'outlined'}>
                    {mapDictionary.map(map => {
                        return <img key={map.name} onClick={() => selectMap(map)} style={{ maxWidth: '25%' }} src={map.icon.toString()} alt={map.name} />
                    })}
                </Card>
            </div>
        </Fragment>
    )
}

export default SelectMap;