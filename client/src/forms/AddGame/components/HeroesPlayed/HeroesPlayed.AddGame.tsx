import React, { FunctionComponent, useContext, useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import HeroesPlayedTypes from './HeroesPlayed.AddGame.Types';
import { heroDictionary } from '../../../../utils/dictionaries';
import { HeroEntry } from '../../../../utils/heroDictionary';
import { GameContextTypes, GameFormTypes } from '../../../../contexts/GameFormContextV2/GameFormContextTypes';
import { GameFormContext } from '../../../../contexts/GameFormContextV2/GameFormContext';
import CircularProgress from '@material-ui/core/CircularProgress';

const HeroesPlayed: FunctionComponent<HeroesPlayedTypes> = ({ formControls, role }) => {
    const [state, setState]: GameContextTypes = useContext(GameFormContext);
    const [imagesReady, setImagesReady] = useState<boolean>(false);
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

    function selectHero(hero: HeroEntry) {
        let newState: GameFormTypes;

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
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <Typography variant={"subtitle2"}>
                    Selected
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <div style={{ minHeight: "10em", display: 'flex', justifyContent: 'flex-start' }}>
                    {/* please replace all of this with material ui spacing and components */} 
                    {!imagesReady ? <CircularProgress style={{ margin: "5vh 0" }} size={100} /> : state.heroesPlayed.map((hero: HeroEntry) =>
                        <img key={hero.name} style={{ maxWidth: '20%', flex: '1 1 auto' }} src={hero.icon.toString()} alt={hero.name} />
                    )}
                </div>
            </Grid>
            <Grid item xs={12}>
                <Typography gutterBottom variant={"subtitle2"}>
                    Main Heroes
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Grid style={{ height: '40vh', overflowY: 'auto' }} container spacing={1}>
                    {filtered.map(hero => {
                        return (
                            <Grid key={hero.name} item xs={3}>
                                <img style={{ width: '100%' }} key={hero.name} onClick={() => selectHero(hero)} src={hero.icon.toString()} alt={hero.name} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
        </Grid>
    )
};

export default HeroesPlayed;    