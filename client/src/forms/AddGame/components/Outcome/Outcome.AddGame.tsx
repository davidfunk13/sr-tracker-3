import CSS from 'csstype';
import React, { FunctionComponent, useContext } from 'react';
import OutcomeProps from './Outcome.AddGame.Types';
import Grid from '@material-ui/core/Grid';
import { GameFormContext } from '../../../../contexts/GameFormContextV2/GameFormContext';
import MediaCard from '../../../../UI/MediaCard/MediaCard.UI';
import Win from '../../../../assets/icons/other/win.png';
import Loss from '../../../../assets/icons/other/loss.png';
import Draw from '../../../../assets/icons/other/draw.png';
import { GameFormTypes, GameContextTypes } from '../../../../contexts/GameFormContextV2/GameFormContextTypes';

const Outcome: FunctionComponent<OutcomeProps> = ({ formControls }) => {
    const [state, setState]: GameContextTypes = useContext(GameFormContext);

    const { step, setStep } = formControls;

    function selectOutcome(val: 0 | 1 | 2) {
        const newState: GameFormTypes = {
            ...state,
            outcome: val
        };

        const newStep: number = step + 1;

        setState(newState);

        setStep(newStep);
    };

    const cardPictureStyles: CSS.Properties = { backgroundSize: "contain" };

    return (
        <Grid container spacing={2}>
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
    );
}

export default Outcome; 