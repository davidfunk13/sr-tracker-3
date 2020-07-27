import React, { FunctionComponent, useContext, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import HeroesPlayedTypes from './HeroesPlayed.AddGame.Types';
import { heroDictionary } from '../../../../utils/dictionaries';
import { GameFormContext } from '../../../../contexts/GameFormContext/GameFormContext.Context';
import { HeroEntry } from '../../../../utils/heroDictionary';
import GameForm from '../../../../contexts/GameFormContext/GameFormContext.Context.Types';
import StepButtons from '../../../../UI/Modal/StepButtons/StepButtons.UI';

const HeroesPlayed: FunctionComponent<HeroesPlayedTypes> = ({ role }) => {
    const [state, setState]: any = useContext(GameFormContext);

    const filtered = heroDictionary.filter(hero => hero.roleName === role);

    useEffect(() => {
        filtered.map(hero => {
            const img = new Image();
           return img.src = hero.icon.toString();
        });

    }, [filtered, role]);

    function selectHero(hero: HeroEntry) {
        return () => {
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
    }

    return (
        <StepButtons disabled={!!!state.heroesPlayed.length}>
            <Typography variant={"subtitle2"}>
                Selected
                </Typography>
            <div style={{ minHeight: "13vh", display: 'flex', justifyContent: 'flex-start' }}>
                {/* please replace all of this with material ui spacing and components */}
                {state.heroesPlayed.map((hero: HeroEntry) => <img key={hero.name} style={{ maxWidth: '20%', flex: '1 1 auto' }} src={hero.icon.toString()} alt={hero.name} />)}
            </div>
            <Typography gutterBottom variant={"subtitle2"}>
                Main Heroes
                </Typography>
            <Grid container spacing={1}>
                {filtered.map(hero => {
                    return (
                        <Grid key={hero.name} item xs={3}>
                            <img style={{ width: '100%' }} key={hero.name} onClick={selectHero(hero)} src={hero.icon.toString()} alt={hero.name} />
                        </Grid>
                    )
                })}
            </Grid>
        </StepButtons>
    )
};

export default HeroesPlayed;  