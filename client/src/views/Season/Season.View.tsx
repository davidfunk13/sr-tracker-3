import React, { useEffect, useState, Fragment, FunctionComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button'
import SeasonTypes from './Season.View.Types';
import DamageIcon from '../../assets/icons/roles/Damage.png';
import SupportIcon from '../../assets/icons/roles/Support.png';
import TankIcon from '../../assets/icons/roles/Tank.png';
import Modal from '../../UI/Modal/Modal.UI';
import ConfirmSeason from '../../forms/CreateSeason/components/ConfirmSeason/ConfirmSeason.Modal.UI';
import { useHistory } from 'react-router-dom';
import { BlizzAPIBattletag } from '../../App.Types';
import MediaCard from '../../UI/MediaCard/MediaCard.UI';

const Season: FunctionComponent<SeasonTypes> = () => {

    const [open, setOpen] = useState<boolean>(false);

    const history = useHistory();

    const [battletag, setBattletag] = useState<BlizzAPIBattletag>();

    useEffect(() => {
        const selected = localStorage.getItem('selected');

        if (selected) {
            const parsed: BlizzAPIBattletag = JSON.parse(selected);

            setBattletag(parsed);
        }

        if (!selected) {
            history.push('/track');
        }

    }, []);

    useEffect(() => console.log(battletag), [battletag]);
    return (
        <Fragment>
            <Typography gutterBottom variant={"h5"}>
                {battletag && battletag.name ? battletag.name : '...loading'}
            </Typography>
            <Typography gutterBottom variant={"h6"}>
                Most Recent Season
            </Typography>
            <Grid container spacing={2} style={{ marginBottom: '1em' }} justify={'center'}>
                <Grid item xs={4}>
                    <Link style={{ textDecoration: "none" }} to={{ pathname: '/season/role', state: { role: 'tank' } }}>
                        <MediaCard cardMediaStyle={{ margin: "0.5em", backgroundSize: "contain" }} image={TankIcon} title={"4001"} subtitle={"Tank"} />
                    </Link>
                </Grid>
                <Grid item xs={4}>
                    <Link style={{ textDecoration: "none" }} to={{ pathname: '/season/role', state: { role: 'damage' } }} >
                        <MediaCard cardMediaStyle={{ margin: "0.5em", backgroundSize: "contain" }} image={DamageIcon} title={"4266"} subtitle={"Damage"} />
                    </Link>
                </Grid>
                <Grid item xs={4}>
                    <Link style={{ textDecoration: "none" }} to={{ pathname: '/season/role', state: { role: 'support' } }}>
                        <MediaCard cardMediaStyle={{ margin: "0.5em", backgroundSize: "contain" }} image={SupportIcon} title={"3209"} subtitle={"Support"} />
                    </Link>
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={() => setOpen(true)} fullWidth variant={'contained'} color={"primary"} >Add a new Season</Button>
                </Grid>
            </Grid>
            <Modal setOpen={setOpen} open={open} title={'Create New Season'} >
                <ConfirmSeason setOpen={setOpen} />
            </Modal>
        </Fragment>
    );
}

export default Season;