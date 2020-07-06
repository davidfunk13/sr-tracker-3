import React, { useState, Fragment } from 'react';
import TrackProps from './Track.View.Types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card'
import DamageIcon from '../../assets/icons/roles/Damage.png'
import SupportIcon from '../../assets/icons/roles/Support.png'
import TankIcon from '../../assets/icons/roles/Tank.png'
import CardWithAvatar from '../../UI/CardWithAvatar/CardWithAvatar.UI';
import { BlizzAPIBattletag } from '../Link/Link.View.Types';
import Modal from '../../UI/Modal/Modal.UI';
import useModal from '../../hooks/useModal/useModal.Hook';
import useStyles from './Track.Styles';
import seasonFormComponents from '../../forms/CreateSeason';
import SeasonFormProvider from '../../contexts/SeasonFormContext/SeasonFormContext.Context';
import VerticalStepper from '../../components/VerticalStepper/VerticalStepper.Component';

const fakeBattletags: Array<BlizzAPIBattletag> = [
    { name: "Nakeddave#1894", urlName: "Nakeddave-1894", id: 57242976, level: 1541, playerLevel: 1541, isPublic: true, platform: "pc", portrait: "0x0250000000001405" },
    { name: "NakedDave#11750", urlName: "NakedDave-11750", id: 364415799, level: 704, playerLevel: 704, isPublic: true, platform: "pc", portrait: "0x02500000000009EB" },
    { name: "NakedDave#1251", urlName: "NakedDave-1251", id: 92846, level: 35, playerLevel: 35, isPublic: false, platform: "pc", portrait: "0x0250000000000742" }
];

const Track: React.FC<TrackProps> = () => {
    const classes = useStyles();

    //make interface for season form object.
    // const [seasonFormstate, setSeasonFormState] = useForm({
    //     seasonType: '',
    //     mainHeroes: '',
    // });

    //toggle state of having a selected battletag in localstorage.
    const [isOn, setIsOn] = useState<boolean>(false);

    const { modalOpen, handleModalClose, handleModalOpen } = useModal();

    return (
        <Grid container justify={'center'} spacing={4}>
            <Grid item xs={12} md={8}>
                <Typography variant={"h4"}>
                    Track Skill Rating
                </Typography>
                <Typography variant={"h6"}>
                    Battletag: {isOn ? 'is On.' : 'is Off.'}
                </Typography>
                <Button variant={'contained'} color={"primary"} onClick={() => { const newState = !isOn; setIsOn(newState) }}>Toggle</Button>
            </Grid>
            <Grid item xs={12} md={8}>
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
                                    <img style={{ width: '100%' }} src={DamageIcon} alt="Damage SR" />
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
                                    <img style={{ width: '100%' }} src={TankIcon} alt="Tank SR" />
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
                                    <img style={{ width: '100%' }} src={SupportIcon} alt="Support SR" />
                                    <Typography align={'center'} variant={'h6'}>
                                        3209
                                    </Typography>
                                    <Typography align={'center'} variant={'subtitle1'}>
                                        Support
                                    </Typography>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Button onClick={() => handleModalOpen()} fullWidth variant={'contained'} color={"primary"} >Add a new Season</Button>
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

                                return <Grid key={battletag.name} item xs={12}>
                                    <CardWithAvatar avatarLetter={avatarLetter} CardHeaderTitle={name} CardHeaderSubtitle={numbers} />
                                </Grid>
                            })}
                        </Grid>
                    </Fragment>
                }
            </Grid>
            <SeasonFormProvider>
                <Modal handleModalClose={handleModalClose}modalOpen={modalOpen}>
                    <VerticalStepper components={seasonFormComponents}/>
                </Modal>
            </SeasonFormProvider>
        </Grid>

    );
};

export default Track;