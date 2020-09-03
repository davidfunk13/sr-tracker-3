import React, { useEffect, FunctionComponent, useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import SelectMapProps from './SelectMap.AddGame.Types';
import { GameFormContext, GameContext } from '../../../../contexts/GameFormContext/GameFormContext.Context';
import mapDictionary, { MapEntry } from '../../../../utils/mapDictionary';
import Grid from '@material-ui/core/Grid';
import StepButtons from '../../../../UI/Modal/StepButtons/StepButtons.UI';
import MediaCard from '../../../../UI/MediaCard/MediaCard.UI';

const SelectMap: FunctionComponent<SelectMapProps> = ({ formControls, role }) => {
    const [state, setState]: GameContext = useContext(GameFormContext);

    //enum for maps use here
    function selectMap(val: MapEntry) {
        const newState = { ...state, mapPlayed: val };
        setState(newState);
        const newStep = step + 1;
        setStep(newStep);
    }

    useEffect(() => {
        mapDictionary.map(map => {
            const img = new Image();
            return img.src = map.icon.toString();
        })

    }, []);

    const { step, setStep } = formControls;
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant={"subtitle2"}>
                    What map are you playing?
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Grid style={{ height: '60vh', overflowY: 'auto' }} container spacing={2}>
                    {mapDictionary.map(map => {
                        return <Grid key={map.name} item xs={12} sm={6} onClick={() => selectMap(map)}>
                            <MediaCard image={map.icon.toString()} title={map.name} />
                        </Grid>;
                    })}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SelectMap;