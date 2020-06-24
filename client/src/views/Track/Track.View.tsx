import React, { useState, Fragment } from 'react';
import TrackProps from './Track.View.Types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card'
import Paper from '@material-ui/core/Paper';
import DamageIcon from '../../assets/icons/roles/Damage.png'
import SupportIcon from '../../assets/icons/roles/Support.png'
import TankIcon from '../../assets/icons/roles/Tank.png'
import CardWithAvatar from '../../UI/CardWithAvatar.UI';
import { BlizzAPIBattletag } from '../Link/Link.View.Types';
const fakeBattletags: Array<BlizzAPIBattletag> = [
    { name: "Nakeddave#1894", urlName: "Nakeddave-1894", id: 57242976, level: 1541, playerLevel: 1541, isPublic: true, platform: "pc", portrait: "0x0250000000001405" },
    { name: "NakedDave#11750", urlName: "NakedDave-11750", id: 364415799, level: 704, playerLevel: 704, isPublic: true, platform: "pc", portrait: "0x02500000000009EB" },
    { name: "NakedDave#1251", urlName: "NakedDave-1251", id: 92846, level: 35, playerLevel: 35, isPublic: false, platform: "pc", portrait: "0x0250000000000742" }
];

const Track: React.FC<TrackProps> = () => {

    //toggle state of having a selected battletag in localstorage.
    const [isOn, setIsOn] = useState<boolean>(false);

    return (
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <Typography variant={"h4"}>
                    Track Skill Rating
                </Typography>
                <Typography variant={"h6"}>
                    Battletag: {isOn ? 'is On.' : 'is Off.'}
                </Typography>
                <Button variant={'contained'} color={"primary"} onClick={() => { const newState = !isOn; setIsOn(newState) }}>Toggle</Button>
            </Grid>
            <Grid item xs={12}>
                {isOn ?
                    <Fragment>
                        <Typography gutterBottom variant={"h5"}>
                            Battletag Name
                        </Typography>
                        <Typography gutterBottom variant={"h6"}>
                            Most Recent Season
                        </Typography>
                        <Grid container spacing={2} style={{ marginBottom: '1em' }} justify={'center'}>
                            <Grid item xs={4}>
                                <Card style={{ padding: '.5em' }} variant={'outlined'}>
                                    <img style={{ width: '100%' }} src={DamageIcon} />
                                    <Typography align={'center'} variant={'h6'}>
                                        4266
                                    </Typography>
                                    <Typography align={'center'} variant={'subtitle1'}>
                                        Damage
                                    </Typography>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card style={{ padding: '.5em' }} variant={'outlined'}>
                                    <img style={{ width: '100%' }} src={TankIcon} />
                                    <Typography align={'center'} variant={'h6'}>
                                        4001
                                    </Typography>
                                    <Typography align={'center'} variant={'subtitle1'}>
                                        Tank
                                   </Typography>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card style={{ padding: '.5em' }} variant={'outlined'}>
                                    <img style={{ width: '100%' }} src={SupportIcon} />
                                    <Typography align={'center'} variant={'h6'}>
                                        3209
                                    </Typography>
                                    <Typography align={'center'} variant={'subtitle1'}>
                                        Support
                                    </Typography>
                                </Card>
                            </Grid>
                        </Grid>
                    </Fragment>
                    :
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

                                return <Grid item xs={12}>
                                    <CardWithAvatar key={battletag.name} avatarLetter={avatarLetter} CardHeaderTitle={name} CardHeaderSubtitle={numbers} />
                                </Grid>
                            })}
                        </Grid>
                    </Fragment>
                }
            </Grid>
        </Grid>
    );
};

export default Track;