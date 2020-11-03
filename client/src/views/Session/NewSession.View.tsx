import React, { useEffect, useState, FunctionComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import Modal from '../../UI/Modal/Modal.UI';
import { useAuth0 } from '../../react-auth0-spa';
import Typography from '@material-ui/core/Typography';
import SessionCard from '../../UI/SessionCard/SessionCard.UI';
import { BlizzAPIBattletag, SessionType } from '../../App.Types';
import fetchGraphQL from '../../utils/fetchGraphQL';
import { useHistory } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import useStyles from './NewSession.Styles';
import NewSessionProps from './NewSession.Types';
import AddSession from '../../forms/AddSession/AddSession.Modal.UI';
import SessionFormProvider from '../../contexts/SessionForm/SessionForm.Provider';

const NewSession: FunctionComponent<NewSessionProps> = ({ }) => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const [loading, setLoading] = useState<boolean>(false);

    const [loadingSelected, setLoadingSelected] = useState<boolean>(false);

    const classes = useStyles();

    const history = useHistory();

    const [sessions, setSessions] = useState<SessionType[]>([]);

    const [selectedSession, setSelectedSession] = useState<SessionType | undefined>(undefined);

    const [battletag, setBattletag] = useState<BlizzAPIBattletag>();

    const { getTokenSilently } = useAuth0();

    const selected = JSON.parse(localStorage.getItem("selected") as string);

    const _session = JSON.parse(localStorage.getItem("_session") as string);

    useEffect(() => {
        if (_session) {
            getSelectedSession(_session._session);
        }

        if (!selected) {
            history.push('/select', 'Track');
        }

        if (selected) {
            setBattletag(selected);
            getAllSessions();
        }

    }, []);

    async function createSession() {
        if (!selected) {
            console.error("No battletag ID available, something went creating a new session.");
            return
        }

        const query: string = `mutation {
            createSession(input: { _battletag: "${selected._id}", sessionRole: ${selected.sessionRole}, skillRatingStart: ${selected.skillRatingStart}, skillRatingCurrent: ${selected.skillRatingStart}) {
                _id
                skillRatingStart
                skillRatingCurrent
                sessionRole
                _games {
                    _id
                    outcome
                }
            }
        }`;
        console.log(query)
        const token = await getTokenSilently({
            audience: "AuthAPI",
            scope: "read:current_user",
        });

        await fetchGraphQL(token, query);

        setModalOpen(false);
    }

    async function getAllSessions() {
        setLoading(true);

        if (!selected) {
            console.error("No battletag ID available, something went wrong getting your most recent session.");
            return;
        }

        const query: string = `{
        getAllSessions(_battletag: "${selected._id}") {
            _id
            skillRatingStart
            skillRatingCurrent
            sessionRole
            createdAt
            _games {
                _id
                _session
                outcome
                createdAt
                }
            }
        }` ;

        const token = await getTokenSilently({
            audience: "AuthAPI",
            scope: "read:current_user",
        });

        const res: { getAllSessions: any } = await fetchGraphQL(token, query);
        console.log(res)
        if (res === undefined) {
            console.error('ALL SESSIONS RETURNED UNDEFINED');
            return;
        }

        setSessions(res.getAllSessions);

        setLoading(false);
    }

    async function getSelectedSession(_session: string) {
        if (!selected) {
            console.error("No battletag ID available, something went wrong getting your most recent session.");
            return;
        }

        setLoadingSelected(true);

        const query: string = `{
        getOneSession(_id: "${_session}") {
            _id
            skillRatingStart
            skillRatingCurrent
            sessionRole
            createdAt
            _games {
                _id
                _session
                outcome
                createdAt
                }
            }
        }` ;

        const token = await getTokenSilently({
            audience: "AuthAPI",
            scope: "read:current_user",
        });

        const res: { getOneSession: any } = await fetchGraphQL(token, query);

        if (res === undefined) {
            console.error('ALL SESSIONS RETURNED UNDEFINED');
            return;
        }

        console.log({ 'got one': res.getOneSession });

        setSelectedSession(res.getOneSession);
        setLoadingSelected(false);
    }

    function selectSession(session: SessionType) {
        let str = JSON.stringify({ _session: session._id });

        localStorage.setItem("_session", str);

        history.push({ pathname: '/session/selected', state: { role: 'tank' } });
    }

    return (
        <Grid container spacing={2} >
            <Grid item xs={12}>
                <Typography variant={'h5'}>
                    Selected Session
                </Typography>
            </Grid>
            <Grid item xs={12}>
                {loadingSelected && <div className={classes.loadingContainer}><CircularProgress style={{ margin: "5vh 0" }} size={100} /></div>}
                {selectedSession && !loadingSelected ? <SessionCard session={selectedSession} onClick={() => selectSession(selectedSession)} /> : <Typography>Please select an existing session</Typography>}
            </Grid>
            <Grid item xs={12}>
                <Typography variant={'h5'}>Load Existing Session</Typography>
            </Grid>
            <Grid container justify={'center'} spacing={2}>
                {loading && <div className={classes.loadingContainer}><CircularProgress style={{ margin: "5vh 0" }} size={100} /></div>}
                {sessions.length && !loading ? sessions.map(session => {
                    return <Grid key={session._id} item xs={12}>
                        <SessionCard session={session} onClick={() => selectSession(session)} />
                    </Grid>
                }) : null}
            </Grid>
            <Grid item xs={12}>
                <Button onClick={() => setModalOpen(true)} fullWidth variant={'contained'} color={"primary"} >Add a new Session</Button>
            </Grid>
            <SessionFormProvider>
                <Modal modalControls={{ modalOpen, setModalOpen }} title={'Create New Session'} >
                    <AddSession createSession={createSession} modalControls={{ modalOpen, setModalOpen }} />
                </Modal>
            </SessionFormProvider>
        </Grid>
    );
}

export default NewSession;