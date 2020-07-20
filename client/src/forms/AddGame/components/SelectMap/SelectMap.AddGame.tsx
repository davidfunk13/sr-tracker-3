import React, { useEffect, FunctionComponent, useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import SelectMapProps from './SelectMap.AddGame.Types';
import { GameFormContext } from '../../../../contexts/GameFormContext/GameFormContext.Context';
import { mapDictionary } from '../../../../utils/dictionaries';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import StepButtons from '../../../../UI/Modal/StepButtons/StepButtons.UI';

const SelectMap: FunctionComponent<SelectMapProps> = ({ role }) => {
    const [state, setState]: any = useContext(GameFormContext);

    //enum for maps use here
    function selectMap(val: any) {
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
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant={"subtitle2"}>
                    What map are you playing?
            </Typography>
            </Grid>
            <Grid item xs={12}>
                <div style={{ maxHeight: '40vh', overflowY: 'auto' }}>
                    <Card variant={'outlined'}>
                        {mapDictionary.map(map => {
                            return <img key={map.name} onClick={() => selectMap(map)} style={{ maxWidth: '25%' }} src={map.icon.toString()} alt={map.name} />
                        })}
                    </Card>
                </div>
            </Grid>
            <Grid item xs={12}>
                <StepButtons disabled={!!!state.mapPlayed} />
            </Grid>
        </Grid>
    )
}

export default SelectMap;