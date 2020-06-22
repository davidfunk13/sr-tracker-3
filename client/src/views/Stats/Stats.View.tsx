import React, { useState, useEffect } from 'react';
import StatsProps from './Stats.View.Types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { CircularProgress } from '@material-ui/core';

const Stats: React.FC<StatsProps> = () => {

    interface Options {
        hero: string,
        ruleset: number | undefined,
    }

    enum changeType {
        Hero = 0,
        Ruleset = 1,
    }

    const [isOn, setIsOn] = useState<boolean>(false);

    const [options, setOptions] = useState<Options>({
        hero: '',
        ruleset: undefined,
    })

    const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>, type: changeType) => {
        const name = event.target.name as keyof typeof options;

        // if (type === changeType.Hero) {

        // }

        setOptions({
            ...options,
            [name]: event.target.value,
        });
    };

    useEffect(() => console.log(options), [options]);

    return (
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <Typography variant={"h5"}>
                    Profile Statistics
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <FormControl fullWidth variant="outlined" >
                    <InputLabel htmlFor="outlined-age-native-simple">Ruleset</InputLabel>
                    <Select
                        native
                        value={options}
                        onChange={(e) => handleChange(e, changeType.Hero)}
                        label="Ruleset"
                        name="ruleset"
                    >
                        <option aria-label="None" value={undefined} />
                        <option value={0}>Quick Play</option>
                        <option value={1}>Competitive</option>
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
            <Grid container justify={'center'}>
                {isOn ? <CircularProgress size={100} /> : <Typography variant={"body1"}>Make stats tables here.</Typography>}
            </Grid>
        </Grid>
    );
};

export default Stats;