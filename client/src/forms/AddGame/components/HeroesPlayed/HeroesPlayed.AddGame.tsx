import React, { FunctionComponent, useContext, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import HeroesPlayedTypes from './HeroesPlayed.AddGame.Types';
import { heroDictionary } from '../../../../utils/dictionaries';
import { GameFormContext } from '../../../../contexts/GameFormContext/GameFormContext.Context';
import { HeroEntry } from '../../../../utils/heroDictionary';
import GameFormContextTypes from '../../../../contexts/GameFormContext/GameFormContext.Context.Types';

const HeroesPlayed: FunctionComponent<HeroesPlayedTypes> = ({ role }) => {
    const { state, setState }: any = useContext(GameFormContext);

    const filtered = heroDictionary.filter(hero => hero.roleName === role);

    useEffect(() => {
        filtered.map(hero => {
            const img = new Image();
            img.src = hero.icon.toString();
        })

    }, [filtered, role]);

    function selectHero(hero: HeroEntry) {
        return () => {
            let newState: GameFormContextTypes;

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
        <Grid container>
            <Grid item xs={12}>
                <Typography variant={"subtitle2"}>
                    Selected
                </Typography>
                <Card variant={'outlined'} style={{ minHeight: '15vh' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        {/* please replace all of this with material ui spacing and components */}
                        {state.heroesPlayed.map((hero: HeroEntry) => <img key={hero.name} style={{ maxWidth: '32%', flex: '1 1 auto' }} src={hero.icon.toString()} alt={hero.name} />)}
                    </div>
                </Card>
                <Typography variant={"subtitle2"}>
                    MainHeroes
                </Typography>
                <div style={{ maxHeight: '40vh', overflowY: 'auto' }}>
                    <Card variant={'outlined'}>
                        {filtered.map(hero => {
                            return <img key={hero.name} onClick={selectHero(hero)} style={{ maxWidth: '25%' }} src={hero.icon.toString()} alt={hero.name} />
                        })}
                    </Card>
                </div>
            </Grid>
        </Grid>
    )
};

export default HeroesPlayed;  