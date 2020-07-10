import React, { Fragment, FunctionComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import HeroesPlayedTypes from './HeroesPlayed.AddGame.Types';

const HeroesPlayed: FunctionComponent<HeroesPlayedTypes> = () => {

    //enum for maps use here
    // function selectMap(val: any) {
    //     const newState = { ...state, currentStep: state.currentStep + 1, mapPlayed: 'testing' };
    //     setState(newState);
    // }

    return (
        <Fragment>
            <Typography variant={"subtitle2"}>
                What Heroe(s) are you playing?
            </Typography>
        </Fragment>
    )
}

export default HeroesPlayed;