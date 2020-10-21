import React, { useEffect, useState, Fragment, FunctionComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import SessionTypes from './Session.View.Types';
import DamageIcon from '../../assets/icons/roles/Damage.png';
import SupportIcon from '../../assets/icons/roles/Support.png';
import TankIcon from '../../assets/icons/roles/Tank.png';
import Modal from '../../UI/Modal/Modal.UI';
import { useHistory } from 'react-router-dom';
import { BlizzAPIBattletag, SessionType } from '../../App.Types';
import MediaCard from '../../UI/MediaCard/MediaCard.UI';
import { useAuth0 } from '../../react-auth0-spa';
import fetchGraphQL from '../../utils/fetchGraphQL';
import AddSession from '../../forms/AddSession/AddSession.Modal.UI';

const Session: FunctionComponent<SessionTypes> = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const history = useHistory();

    const [battletag, setBattletag] = useState<BlizzAPIBattletag>();

    const [session, setSession] = useState<SessionType>({ _games: [], tankSR: 0, supportSR: 0, damageSR: 0 });

    const { getTokenSilently } = useAuth0();

    useEffect(() => {
        const selected = localStorage.getItem('selected');

        if (!selected) {
            history.push('/select', 'Track');
        }

        if (selected) {
            const parsed: BlizzAPIBattletag = JSON.parse(selected);
            setBattletag(parsed);
            getMostRecentSession();
        }

    }, []);

    async function getMostRecentSession() {
        const storage = localStorage.getItem("selected");

        if (!storage) {
            console.error("No battletag ID available, something went wrong getting your most recent session.");
            return;
        }

        let selected: { _id: string } = JSON.parse(storage);

        const query: string = `{
        getMostRecentSession(_battletag: "${selected._id}") {
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

        const res: { getMostRecentSession: any } = await fetchGraphQL(token, query);

        if (res.getMostRecentSession && res.getMostRecentSession._id) {
            let str = JSON.stringify({ _session: res.getMostRecentSession._id });

            localStorage.setItem("_session", str);

            setSession(res.getMostRecentSession);
        } else {
            createSession();
        }
    }

    async function createSession() {
        const storage = localStorage.getItem("selected");

        if (!storage) {
            console.error("No battletag ID available, something went creating a new session.");
            return
        }

        let selected: { _id: string, name: string } = JSON.parse(storage);

        const query: string = `mutation{
            createSession(input: { _battletag: "${selected._id}", damageSR: 0, tankSR: 0, supportSR: 0}) {
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

        getMostRecentSession();

        setModalOpen(false);
    }

    return (
        <Fragment>
            <Typography gutterBottom variant={"h5"}>
                {battletag && battletag.name ? battletag.name : '...loading'}
            </Typography>
            <Typography gutterBottom variant={"h6"}>
                Most Recent Session
            </Typography>
            <Grid container spacing={2} style={{ marginBottom: '1em' }} justify={'center'}>
                <Grid item xs={4}>
                    <Link style={{ textDecoration: "none" }} to={{ pathname: '/session/role', state: { role: 'tank' } }}>
                        <MediaCard cardMediaStyle={{ margin: "0.5em", backgroundSize: "contain" }} image={TankIcon} title={session.tankSR.toString()} subtitle={"Tank"} />
                    </Link>
                </Grid>
                <Grid item xs={4}>
                    <Link style={{ textDecoration: "none" }} to={{ pathname: '/session/role', state: { role: 'damage' } }} >
                        <MediaCard cardMediaStyle={{ margin: "0.5em", backgroundSize: "contain" }} image={DamageIcon} title={session.damageSR.toString()} subtitle={"Damage"} />
                    </Link>
                </Grid>
                <Grid item xs={4}>
                    <Link style={{ textDecoration: "none" }} to={{ pathname: '/session/role', state: { role: 'support' } }}>
                        <MediaCard cardMediaStyle={{ margin: "0.5em", backgroundSize: "contain" }} image={SupportIcon} title={session.supportSR.toString()} subtitle={"Support"} />
                    </Link>
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={() => setModalOpen(true)} fullWidth variant={'contained'} color={"primary"} >Add a new Session</Button>
                </Grid>
            </Grid>
            {/* <Fab color={'primary'} href={''}>
                <AddIcon/>
            </Fab> */}
            <Modal modalControls={{ modalOpen, setModalOpen }} title={'Create New Session'} >
                <AddSession createSession={createSession} modalControls={{ modalOpen, setModalOpen }} />
            </Modal>
        </Fragment>
    );
}

export default Session;