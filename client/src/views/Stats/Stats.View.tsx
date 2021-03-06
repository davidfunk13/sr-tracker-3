import React, { useState, useEffect } from 'react';
import StatsProps, { StatsType } from './Stats.View.Types';
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
import { useHistory, useLocation } from 'react-router-dom';
import { Options, Ruleset } from './Stats.View.Types';
import StatsTable from '../../components/StatsTable/StatsTable.Component';

const Stats: React.FC<StatsProps> = () => {
    const { getTokenSilently } = useAuth0();

    const history = useHistory();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [options, setOptions] = useState<Options>({
        hero: 0,
        ruleset: 0,
    });

    const [statistics, setStatistics] = useState<StatsType | undefined>(undefined);

    // checks localStorage for selected SelectBattletag, if it isnt there, you get the boot my dude.
    useEffect(() => {
        const selected = localStorage.getItem('selected');

        if (!selected) {
            history.push('/select', 'Stats');
        }

    }, [history]);

    const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        const name = event.target.name as keyof typeof options;

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

        const data = await fetch('/stats', {
            method: 'POST',
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                authorization: `bearer ${token}`,
            },
            body: JSON.stringify({ hero: options.hero, _battletag: selected._id, ruleset: options.ruleset }),
        });

        const stats = await data.json();

        setStatistics(stats);

        setIsLoading(false);
        return;
    };

    useEffect(() => console.log({ statistics }), [statistics])
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant={'h4'}>
                    Profile Statistics
                </Typography>
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
                <Typography gutterBottom variant={"h5"} component={'h2'}>Stats</Typography>
                <Grid container spacing={2} justify={isLoading ? 'center' : 'flex-start'}>

                    {!isLoading ? null : <CircularProgress style={{ marginTop: '10vh' }} size={100} />}

                    {statistics && !isLoading ?
                        Object.keys(statistics).map(heading => {
                            return <Grid item xs={12}>
                                <StatsTable loading={isLoading} heading={heading.charAt(0).toUpperCase() + heading.slice(1)} stats={statistics[heading]} />
                            </Grid>
                        }) : null
                    }
                </Grid>
            </Grid>

        </Grid>
    );
};

export default Stats;