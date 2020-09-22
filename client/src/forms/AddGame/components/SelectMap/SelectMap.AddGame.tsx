import React, { useEffect, FunctionComponent, useContext, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import SelectMapProps from './SelectMap.AddGame.Types';
import mapDictionary from '../../../../utils/mapDictionary';
import Grid from '@material-ui/core/Grid';
import MediaCard from '../../../../UI/MediaCard/MediaCard.UI';
import { GameFormContextType, MapEntry } from '../../../../App.Types';
import GameFormContext from '../../../../contexts/GameForm/GameFormContext';

const SelectMap: FunctionComponent<SelectMapProps> = () => {
    const [state, setState]: GameFormContextType = useContext(GameFormContext);

    const [disabled, setDisabled] = useState<boolean>(true);

    // enum for maps use here
    function selectMap(val: MapEntry) {
        const newState = { ...state, mapPlayed: val, step: state.step + 1 };
        setState(newState);
    }

    useEffect(() => {
        mapDictionary.map(map => {
            const img = new Image();
            return img.src = map.icon.toString();
        });
    }, []);

    useEffect(() => {
        if (!state.mapPlayed) {
            return setDisabled(true);
        }

        return () => setDisabled(false);
        
    }, [state]);

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