import React, { useEffect, FunctionComponent, useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import SelectMapProps from './SelectMap.AddGame.Types';
import mapDictionary, { MapEntry } from '../../../../utils/mapDictionary';
import Grid from '@material-ui/core/Grid';
import MediaCard from '../../../../UI/MediaCard/MediaCard.UI';
import { GameContextTypes } from '../../../../contexts/GameFormContextV2/GameFormContextTypes';
import { GameFormContext } from '../../../../contexts/GameFormContextV2/GameFormContext';

const SelectMap: FunctionComponent<SelectMapProps> = ({ formControls, role }) => {
    const [state, setState]: GameContextTypes = useContext(GameFormContext);

    const { step, setStep } = formControls;

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
        });

    }, []);

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