import React, { useEffect, FunctionComponent, useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import SelectMapProps from './SelectMap.AddGame.Types';
import { GameFormContext } from '../../../../contexts/GameFormContext/GameFormContext.Context';
import mapDictionary, { MapEntry } from '../../../../utils/mapDictionary';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import StepButtons from '../../../../UI/Modal/StepButtons/StepButtons.UI';
import MediaCard from '../../../../UI/MediaCard/MediaCard.UI';

const SelectMap: FunctionComponent<SelectMapProps> = ({ role }) => {
    const [state, setState]: any = useContext(GameFormContext);

    //enum for maps use here
    function selectMap(val: MapEntry) {
        const newState = { ...state, currentStep: state.currentStep + 1, mapPlayed: val };
        setState(newState);
    }

    useEffect(() => {
        console.log(state.mapPlayed)
        console.log(!!!state.mapPlayed)
    }, [state])

    useEffect(() => {
        mapDictionary.map(map => {
            const img = new Image();
            img.src = map.icon.toString();
        })

    }, []);

    return (
        <StepButtons disabled={!(Object.keys(state.mapPlayed).length > 0)}>
                    <Typography variant={"subtitle2"}>
                        What map are you playing?
                    </Typography>
                    {/* <div style={{ maxHeight: '40vh', overflowY: 'auto' }}> */}
                    <Grid container spacing={2}>
                        {mapDictionary.map(map => {
                            return <Grid key={map.name} item xs={12} sm={6} onClick={() => selectMap(map)}>
                                        <MediaCard image={map.icon.toString()} title={map.name} />
                                    </Grid>;
                        })}
                    </Grid>
        </StepButtons>
    )
}

export default SelectMap;