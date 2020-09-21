import React, { useEffect, useState, Fragment, FunctionComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import SeasonTypes from './Season.View.Types';
import DamageIcon from '../../assets/icons/roles/Damage.png';
import SupportIcon from '../../assets/icons/roles/Support.png';
import TankIcon from '../../assets/icons/roles/Tank.png';
import Modal from '../../UI/Modal/Modal.UI';
import { useHistory } from 'react-router-dom';
import { BlizzAPIBattletag } from '../../App.Types';
import MediaCard from '../../UI/MediaCard/MediaCard.UI';
import { useAuth0 } from '../../react-auth0-spa';
import fetchGraphQL from '../../utils/fetchGraphQL';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import AddSeason from '../../forms/AddSeason/AddSeason.Modal.UI';

const Season: FunctionComponent<SeasonTypes> = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const history = useHistory();

    const [battletag, setBattletag] = useState<BlizzAPIBattletag>();

    const [season, setSeason] = useState<{ tankSR: number, supportSR: number, damageSR: number }>({ tankSR: 0, supportSR: 0, damageSR: 0 });

    const { getTokenSilently } = useAuth0();

    useEffect(() => {
        const selected = localStorage.getItem('selected');

        if (!selected) {
            history.push('/select', 'Track');
        }

        if (selected) {
            const parsed: BlizzAPIBattletag = JSON.parse(selected);
            setBattletag(parsed);
            getMostRecentSeason();
        }

    }, []);

    async function getMostRecentSeason() {
        const storage = localStorage.getItem("selected");

        if (!storage) {
            console.error("No battletag ID available, something went wrong getting your most recent season.");
            return;
        }

        let selected: { _id: string } = JSON.parse(storage);

        const query: string = `{
        getMostRecentSeason(_battletag: "${selected._id}") {
            _id
            tankSR
            supportSR
            damageSR
        }
    }` ;

        const token = await getTokenSilently({
            audience: "AuthAPI",
            scope: "read:current_user",
        });

        const res: { getMostRecentSeason: any } = await fetchGraphQL(token, query);

        if (res.getMostRecentSeason && res.getMostRecentSeason._id) {
            let str = JSON.stringify({ _season: res.getMostRecentSeason._id });

            localStorage.setItem("_season", str);

            setSeason(res.getMostRecentSeason);
        } else {
            createSeason();
        }
    }

    async function createSeason() {
        const storage = localStorage.getItem("selected");

        if (!storage) {
            console.error("No battletag ID available, something went creating a new season.");
            return
        }

        let selected: { _id: string, name: string } = JSON.parse(storage);

        const query: string = `mutation{
            createSeason(input: { _battletag: "${selected._id}", damageSR: 0, tankSR: 0, supportSR: 0}) {
            _id
            damageSR
            tankSR
            supportSR
        }
    }`;

        const token = await getTokenSilently({
            audience: "AuthAPI",
            scope: "read:current_user",
        });

        await fetchGraphQL(token, query);

        getMostRecentSeason();

        setModalOpen(false);
    }

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
                        <MediaCard cardMediaStyle={{ margin: "0.5em", backgroundSize: "contain" }} image={TankIcon} title={season.tankSR.toString()} subtitle={"Tank"} />
                    </Link>
                </Grid>
                <Grid item xs={4}>
                    <Link style={{ textDecoration: "none" }} to={{ pathname: '/season/role', state: { role: 'damage' } }} >
                        <MediaCard cardMediaStyle={{ margin: "0.5em", backgroundSize: "contain" }} image={DamageIcon} title={season.damageSR.toString()} subtitle={"Damage"} />
                    </Link>
                </Grid>
                <Grid item xs={4}>
                    <Link style={{ textDecoration: "none" }} to={{ pathname: '/season/role', state: { role: 'support' } }}>
                        <MediaCard cardMediaStyle={{ margin: "0.5em", backgroundSize: "contain" }} image={SupportIcon} title={season.supportSR.toString()} subtitle={"Support"} />
                    </Link>
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={() => setModalOpen(true)} fullWidth variant={'contained'} color={"primary"} >Add a new Season</Button>
                </Grid>
            </Grid>
            {/* <Fab color={'primary'} href={''}>
                <AddIcon/>
            </Fab> */}
            <Modal modalControls={{modalOpen, setModalOpen}} title={'Create New Season'} >
                <AddSeason createSeason={createSeason} modalControls={{ modalOpen, setModalOpen }} />
            </Modal>
        </Fragment>
    );
}

export default Season;