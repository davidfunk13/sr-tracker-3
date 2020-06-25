import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField'
import Typography from "@material-ui/core/Typography";
import CardWithAvatar from "../../UI/CardWithAvatar/CardWithAvatar.UI";
import LinkProps, { BlizzAPIBattletag } from './Link.View.Types';

const Link: React.FC<LinkProps> = () => {
    const [isOn, setIsOn] = useState<boolean>(false);

    const [search, setSearch] = useState<string>('');

    const fakeBattletags: Array<BlizzAPIBattletag> = [
        { name: "Nakeddave#1894", urlName: "Nakeddave-1894", id: 57242976, level: 1541, playerLevel: 1541, isPublic: true, platform: "pc", portrait: "0x0250000000001405" },
        { name: "NakedDave#11750", urlName: "NakedDave-11750", id: 364415799, level: 704, playerLevel: 704, isPublic: true, platform: "pc", portrait: "0x02500000000009EB" },
        { name: "NakedDave#1251", urlName: "NakedDave-1251", id: 92846, level: 35, playerLevel: 35, isPublic: false, platform: "pc", portrait: "0x0250000000000742" }
    ];

    return (
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <Typography variant={"h4"}>
                    Link New Battletag
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField id="outlined-search" fullWidth required value={search} onChange={(e) => setSearch(e.target.value)} label="Search for Battletag" type="search" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
                <Button onClick={() => {
                    const isOnCopy = !isOn;
                    setIsOn(isOnCopy);
                }} variant="contained" color="primary">
                    Search
                </Button>
            </Grid>
            <Grid item xs={12}>

                <Grid container justify={'center'} spacing={2}>
                    {isOn ?
                        <CircularProgress style={{ marginTop: '10vh' }} size={100} />
                        : (fakeBattletags.map(battletag => {
                            const battletagSplit = battletag.name.split('#');
                            const name: string = battletagSplit[0];
                            const numbers: string = '#' + battletagSplit[1];
                            const avatarLetter = Array.from(name)[0];

                            return <Grid item xs={12}>
                                <CardWithAvatar key={battletag.name} avatarLetter={avatarLetter} CardHeaderTitle={name} CardHeaderSubtitle={numbers} />
                            </Grid>
                        }))
                    }
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Link;