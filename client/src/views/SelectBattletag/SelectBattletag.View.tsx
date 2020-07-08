import React, { Fragment, useEffect, FunctionComponent } from 'react';
import SelectBattletagTypes from './SelectBattletag.View.Types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardWithAvatar from '../../UI/CardWithAvatar/CardWithAvatar.UI';
import { BlizzAPIBattletag } from '../../App.Types';
import { useHistory } from 'react-router-dom';

const fakeBattletags: Array<BlizzAPIBattletag> = [
    { name: "Nakeddave#1894", urlName: "Nakeddave-1894", id: 57242976, level: 1541, playerLevel: 1541, isPublic: true, platform: "pc", portrait: "0x0250000000001405" },
    { name: "NakedDave#11750", urlName: "NakedDave-11750", id: 364415799, level: 704, playerLevel: 704, isPublic: true, platform: "pc", portrait: "0x02500000000009EB" },
    { name: "NakedDave#1251", urlName: "NakedDave-1251", id: 92846, level: 35, playerLevel: 35, isPublic: false, platform: "pc", portrait: "0x0250000000000742" }
];

const SelectBattletag: FunctionComponent<SelectBattletagTypes> = () => {

    const history = useHistory();

    //redirect if already selected.

    useEffect(() => {
        const selected = localStorage.getItem('selected');

        if (selected) {
            history.push('/season')
        }
    }, []);

    return (
        <Fragment>
            <Typography gutterBottom variant={"h5"}>
                Select Battletag
            </Typography>
            <Grid container spacing={2}>
                {fakeBattletags.map(battletag => {
                    const battletagSplit = battletag.name.split('#');
                    const name: string = battletagSplit[0];
                    const numbers: string = '#' + battletagSplit[1];
                    const avatarLetter = Array.from(name)[0];

                    return <Grid key={battletag.name} item xs={12}>
                        <CardWithAvatar avatarLetter={avatarLetter} CardHeaderTitle={name} CardHeaderSubtitle={numbers} />
                    </Grid>
                })}
            </Grid>
        </Fragment>
    );
}

export default SelectBattletag