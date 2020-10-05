import React, { FunctionComponent, useContext, useEffect, useState, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import HeroesPlayedTypes from './HeroesPlayed.AddGame.Types';
import { heroDictionary } from '../../../../utils/dictionaries';
import CircularProgress from '@material-ui/core/CircularProgress';
import { GameForm, GameFormContextType, HeroEntry } from '../../../../App.Types';
import GameFormContext from '../../../../contexts/GameForm/GameFormContext';
import Stepper from '../../../Stepper';
import FormComponentWrapper from '../../../../UI/FormComponentWrapper/FormComponentWrapper.UI.Component';

const HeroesPlayed: FunctionComponent<HeroesPlayedTypes> = ({ role }) => {
    const [state, setState]: GameFormContextType = useContext(GameFormContext);

    const [imagesReady, setImagesReady] = useState<boolean>(false);

    const [disabled, setDisabled] = useState<boolean>(true);

    const filtered = heroDictionary.filter((hero, i) => {
        if (i === 0) {
            return;
        }

        return hero.roleName === role;
    });

    useEffect(() => {
        filtered.map((hero, index) => {
            const img = new Image();

            img.src = hero.icon.toString();

            img.onload = function () {
                console.log('image loaded...');
            }

            if (index === filtered.length - 1) {
                return setImagesReady(true);
            }
        });

    }, [filtered, role]);

    useEffect(() => {
        if (state.heroesPlayed.length) {
            setDisabled(false);
        }

        if (!state.heroesPlayed.length) {
            setDisabled(true);
        }

    }, [state.heroesPlayed])

    function selectHero(hero: HeroEntry) {
        let newState: GameForm;

        const exists: HeroEntry = state.heroesPlayed.filter((item: HeroEntry) => item.name === hero.name)[0];

        const selected: HeroEntry[] = state.heroesPlayed;

        if (selected.length === 3 && !exists) {
            //return error message above component.
            return
        }

        if (exists) {
            const removeItem: HeroEntry[] = selected.filter((item: HeroEntry) => item.name !== hero.name);

            newState = { ...state, heroesPlayed: removeItem }

            return setState(newState);
        }

        newState = { ...state, heroesPlayed: [...state.heroesPlayed, hero] };

        setState(newState);
    }

    return (
        <FormComponentWrapper>
            <Grid item xs={12}>
                <Typography variant={"subtitle2"}>
                    Selected
                </Typography>
            </Grid>
            <div style={{ display: 'flex', justifyContent: 'flex-start', height: '20%', width: '100%' }}>
                {!imagesReady ?
                    <CircularProgress style={{ margin: "5vh 0" }} size={100} />
                    :
                    <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
                        {state.heroesPlayed.map((hero: HeroEntry) =>
                            <img style={{ width: '20%' }} key={hero.name} src={hero.icon.toString()} alt={hero.name} />
                        )}
                    </div>
                }
            </div>
            <Grid item xs={12}>
                <Typography gutterBottom variant={"subtitle2"}>
                    Main Heroes
                </Typography>
            </Grid>
            <Grid style={{ display: 'flex', flexWrap: 'wrap', height: '50%', overflowY: 'auto' }} item xs={12}>
                {!imagesReady ? <CircularProgress style={{ margin: "5vh 0" }} size={100} /> : filtered.map(hero => {
                    return (
                        <img style={{ width: '25%' }} key={hero.name} onClick={() => selectHero(hero)} src={hero.icon.toString()} alt={hero.name} />
                    )
                })}
            </Grid>
            <Stepper disabled={disabled} />
        </FormComponentWrapper>
    )
};

export default HeroesPlayed;    