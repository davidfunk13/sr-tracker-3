import React, { useEffect, FunctionComponent, useContext, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import SelectMapProps from './SelectMap.AddGame.Types';
import mapDictionary from '../../../../utils/mapDictionary';
import Grid from '@material-ui/core/Grid';
import MediaCard from '../../../../UI/MediaCard/MediaCard.UI';
import { GameFormContextType, MapEntry } from '../../../../App.Types';
import GameFormContext from '../../../../contexts/GameForm/GameFormContext';
import FormComponentWrapper from '../../../../UI/FormComponentWrapper/FormComponentWrapper.UI.Component';
import Stepper from '../../../Stepper';
import useStyles from './SelectMap.AddGame.Styles';

const SelectMap: FunctionComponent<SelectMapProps> = () => {
    const [state, setState]: GameFormContextType = useContext(GameFormContext);

    const [disabled, setDisabled] = useState<boolean>(true);

    // enum for maps use here
    function selectMap(val: MapEntry) {
        const newState = { ...state, mapPlayed: val, step: state.step + 1 };
        setState(newState);
    }

    const classes = useStyles();

    useEffect(() => {
        mapDictionary.map(map => {
            const img = new Image();
            return img.src = map.icon.toString();
        });
    }, []);

    useEffect(() => {
        if (state && state.mapPlayed && state.mapPlayed.name) {
            return setDisabled(false);
        }

    }, [state]);

    return (
        <FormComponentWrapper >
            <Grid item xs={12}>
                <Typography variant={"subtitle2"}>
                    What map are you playing?
                </Typography>
            </Grid>
            <Grid container spacing={2} className={classes.mapContainerHeight} >
                {mapDictionary.map(map => {
                    return <Grid key={map.name} item xs={12} sm={6} onClick={() => selectMap(map)}>
                        <MediaCard image={map.icon.toString()} title={map.name} />
                    </Grid>;
                })}
            </Grid>
            <Stepper formContext={GameFormContext} disabled={disabled} />
        </FormComponentWrapper>
    )
}

export default SelectMap;