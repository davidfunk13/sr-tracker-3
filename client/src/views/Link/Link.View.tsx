import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField'
import Typography from "@material-ui/core/Typography";
import LinkProps from './Link.View.Types';
import { Button } from "@material-ui/core";

const Link: React.FC<LinkProps> = () => {
    const [search, setSearch] = useState<string>('');

    return (
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <Typography variant={"h5"}>
                    Link New Battletag
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField id="outlined-search" required value={search} onChange={(e) => setSearch(e.target.value)} label="Search Battletag" type="search" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" color="primary">Search for Battletag</Button>
            </Grid>
        </Grid>
    );
};

export default Link;