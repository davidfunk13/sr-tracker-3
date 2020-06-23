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

const Stats: React.FC<StatsProps> = () => {

    interface Options {
        hero: string,
        ruleset: string,
    }

    enum Ruleset {
        QuickPlay = 0,
        Competitive = 1,
    }

    const [isOn, setIsOn] = useState<boolean>(false);

    const [options, setOptions] = useState<Options>({
        hero: '',
        ruleset: '',
    })

    const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        const name = event.target.name as keyof typeof options;

        setOptions({
            ...options,
            [name]: event.target.value,
        });
    };

    useEffect(() => console.log(options), [options]);

    return (
        <Grid container spacing={4}>
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
                        <option aria-label="None" value={''}></option>
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
                        <option aria-label="None" value={''}></option>
                        <option aria-label="None" value={'All Heroes'}>All Heroes</option>
                        {heroDictionary.map(hero => {
                            return <option key={hero.name} value={hero.name}>{hero.name}</option>
                        })}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <Button onClick={() => {
                    const newIsOn = !isOn;
                    setIsOn(newIsOn);
                }} variant="contained" color="primary">
                    Search
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Typography variant={"h5"}>Stats</Typography>
                <Grid container justify={isOn ? 'center' : 'flex-start'}>
                    {!isOn ? null : <CircularProgress style={{ marginTop: '10vh' }} size={100} />}
                </Grid>
            </Grid>

        </Grid>
    );
};

export default Stats;