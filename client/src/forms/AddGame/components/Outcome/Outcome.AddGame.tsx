import CSS from 'csstype';
import React, { FunctionComponent, useContext, useEffect, useState } from 'react';
import OutcomeProps from './Outcome.AddGame.Types';
import Grid from '@material-ui/core/Grid';
import MediaCard from '../../../../UI/MediaCard/MediaCard.UI';
import Win from '../../../../assets/icons/other/win.png';
import Loss from '../../../../assets/icons/other/loss.png';
import Draw from '../../../../assets/icons/other/draw.png';
import GameFormContext from '../../../../contexts/GameForm/GameFormContext';
import { GameForm, GameFormContextType } from '../../../../App.Types';
import FormComponentWrapper from '../../../../UI/FormComponentWrapper/FormComponentWrapper.UI.Component';
import Stepper from '../../../Stepper';

const Outcome: FunctionComponent<OutcomeProps> = () => {
    const [state, setState]: GameFormContextType = useContext(GameFormContext);

    const [disabled, setDisabled] = useState<boolean>(true);

    function selectOutcome(val: 0 | 1 | 2) {
        const newState: GameForm = {
            ...state,
            outcome: val,
            step: state.step + 1,
        };

        setState(newState);
    };

    const cardPictureStyles: CSS.Properties = { backgroundSize: "contain" };

    useEffect(()=> {
        if(state.outcome === undefined) {
            setDisabled(true);
        }
        
        if(state.outcome !== undefined) {
            setDisabled(false);
        }

    },[state.outcome])

    return (
        <FormComponentWrapper>
            <Grid style={{ overflowY: 'auto', height: '85%' }} container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <MediaCard
                        cardMediaStyle={cardPictureStyles}
                        onClick={() => selectOutcome(1)}
                        title={"Win"}
                        image={Win}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <MediaCard
                        cardMediaStyle={cardPictureStyles}
                        onClick={() => selectOutcome(0)}
                        title={"Loss"}
                        image={Loss}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <MediaCard
                        cardMediaStyle={cardPictureStyles}
                        onClick={() => selectOutcome(2)}
                        title={"Draw"}
                        image={Draw}
                    />
                </Grid>
            </Grid>
            <Stepper disabled={disabled} />
        </FormComponentWrapper>
    );
}

export default Outcome; 