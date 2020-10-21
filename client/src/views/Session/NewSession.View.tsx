import React, { useEffect, useState, Fragment, FunctionComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import NewSessionTypes from './NewSession.Types';
import Modal from '../../UI/Modal/Modal.UI';
import { useAuth0 } from '../../react-auth0-spa';
import Typography from '@material-ui/core/Typography';
import SessionCard from '../../UI/SessionCard/SessionCard.UI';
import { SessionType } from '../../App.Types';
import fetchGraphQL from '../../utils/fetchGraphQL';
import { useHistory } from 'react-router-dom';

const NewSession: FunctionComponent<NewSessionTypes> = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const history = useHistory();

    const [session, setSession] = useState<SessionType>({ tankSR: 0, supportSR: 0, damageSR: 0 });

    const { getTokenSilently } = useAuth0();

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

    function selectSession() {
        history.push({ pathname: '/session/selected', state: { role: 'tank' } });
    }

    return (
        <Grid container spacing={2} >
            <Grid item xs={12}>
                <Typography variant={'h5'}>Current Session</Typography>
            </Grid>
            <Grid item xs={12}>
                <SessionCard onClick={selectSession} />
            </Grid>
            <Grid item xs={12}>
                <Typography variant={'h5'}>Load Past Session</Typography>
            </Grid>
            <Grid item xs={12}>

            </Grid>
            <Modal modalControls={{ modalOpen, setModalOpen }} title={'Create New Session'} >
                Poop
            </Modal>
        </Grid>
    );
}

export default NewSession;