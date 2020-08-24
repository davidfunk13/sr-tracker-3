import React, { useState, useEffect } from 'react';
import StatsProps from './Stats.View.Types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { CircularProgress } from '@material-ui/core';
import { heroDictionary } from '../../utils/dictionaries';
import { useAuth0 } from '../../react-auth0-spa';
import fetchGraphQL from '../../utils/fetchGraphQL';
import { Response } from './Stats.View.Types';

const Stats: React.FC<StatsProps> = () => {
    const { getTokenSilently } = useAuth0();

    interface Options {
        hero: number,
        ruleset: number,
    }

    enum Ruleset {
        QuickPlay = 0,
        Competitive = 1,
    }

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [options, setOptions] = useState<Options>({
        hero: 0,
        ruleset: 0,
    });

    const [statistics, setStatistics] = useState<Response>({} as Response);

    useEffect(() => { console.log(options) }, [options]);

    const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        const name = event.target.name as keyof typeof options;
        console.log({ val: event.target.value })
        setOptions({
            ...options,
            [name]: event.target.value,
        });
    };

    async function getStats() {
        setIsLoading(true);

        const selectedStorage = localStorage.getItem('selected');

        if (!selectedStorage) {
            setIsLoading(false);
            return;
        }

        const selected: { _id: string, name: string } = JSON.parse(selectedStorage);

        const token = await getTokenSilently({
            audience: "AuthAPI",
            scope: "read:current_user",
        });

        const query: string = `
                query{
                    getBattletagStats(input:{
                        hero: "${options.hero}"
                        _battletag: "${selected._id}"
                        ruleset:"${options.ruleset}"
                    }){
                    Best {
                        all_damage_done
                        barrier_damage_done
                        defensive_assists
                        eliminations
                        environmental_kills
                        final_blows
                        healing_done
                        hero_damage_done
                        kill_streak
                        melee_final_blows
                        multikill
                        objective_kills
                        objective_time
                        offensive_assists
                        recon_assists
                        solo_kills
                        teleporter_pad_destroyed
                        time_spent_on_fire
                        turrets_destroyed
                    }
                    Info {
                        ruleset
                        hero
                    }
                }
            }`;

        const stats = await fetchGraphQL(token, query);
            console.log({stats})
        return stats;
    }

    return (
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <Typography variant={'h4'}>Profile Statistics</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant={'h5'} gutterBottom>
                    Select Search Options
                </Typography>
                <FormControl fullWidth variant="outlined" >
                    <InputLabel>Ruleset</InputLabel>
                    <Select
                        required
                        native
                        value={options.ruleset}
                        onChange={(e) => handleChange(e)}
                        label="Ruleset"
                        name="ruleset"
                    >
                        <option value={Ruleset.QuickPlay}>Quick Play</option>
                        <option value={Ruleset.Competitive}>Competitive</option>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <FormControl fullWidth variant="outlined" >
                    <InputLabel>Hero</InputLabel>
                    <Select
                        required
                        native
                        value={options.hero}
                        onChange={(e) => handleChange(e)}
                        label="Hero"
                        name="hero"
                    >
                        {heroDictionary.map((hero, i) => {
                            return <option key={hero.name} value={i}>{hero.name}</option>
                        })}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <Button onClick={() => getStats()} variant="contained" color="primary">
                    Search
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Typography variant={"h5"}>Stats</Typography>
                <Grid container justify={isLoading ? 'center' : 'flex-start'}>
                    {!isLoading ? null : <CircularProgress style={{ marginTop: '10vh' }} size={100} />}
                    <Grid item xs={12}>

                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    );
};

export default Stats;