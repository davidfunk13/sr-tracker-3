import React, { useEffect, useState, Fragment, FunctionComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import Modal from '../../UI/Modal/Modal.UI';
import { useAuth0 } from '../../react-auth0-spa';
import Typography from '@material-ui/core/Typography';
import SessionCard from '../../UI/SessionCard/SessionCard.UI';
import { BlizzAPIBattletag, SessionType } from '../../App.Types';
import fetchGraphQL from '../../utils/fetchGraphQL';
import { useHistory } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './NewSession.Styles';
import NewSessionProps from './NewSession.Types';

const NewSession: FunctionComponent<NewSessionProps> = ({ }) => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const classes = useStyles();

    const history = useHistory();

    // const [currentSession, setCurrentSession] = useState<SessionType | undefined>(undefined);
    const [sessions, setSessions] = useState<SessionType[] | undefined>(undefined);

    const [battletag, setBattletag] = useState<BlizzAPIBattletag>();

    const { getTokenSilently } = useAuth0();

    useEffect(() => {
        const selected = localStorage.getItem('selected');

        if (!selected) {
            history.push('/select', 'Track');
        }

        if (selected) {
            const parsed: BlizzAPIBattletag = JSON.parse(selected);
            setBattletag(parsed);
            getAllSessions();
        }

    }, []);

    async function createSession() {
        const storage = localStorage.getItem("selected");

        if (!storage) {
            console.error("No battletag ID available, something went creating a new session.");
            return
        }

        let selected: { _id: string, name: string } = JSON.parse(storage);
        console.log('ass')
        const query: string = `mutation{
            createSession(input: { _battletag: "${selected._id}", damageSR: 0, tankSR: 0, supportSR: 0}) {
            _id
            damageSR
            tankSR
            supportSR
            _games
            createdAt
        }
    }`;

        const token = await getTokenSilently({
            audience: "AuthAPI",
            scope: "read:current_user",
        });

        await fetchGraphQL(token, query);

        setModalOpen(false);
    }

    async function getAllSessions() {
        const storage = localStorage.getItem("selected");

        if (!storage) {
            console.error("No battletag ID available, something went wrong getting your most recent session.");
            return;
        }

        let selected: { _id: string } = JSON.parse(storage);
        const query: string = `{
        getAllSessions(_battletag: "${selected._id}") {
            _id
            tankSR
            supportSR
            damageSR
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

        if (res === undefined) {
            console.error('ALL SESSIONS RETURNED UNDEFINED');
            return;
        }

        if (res.getAllSessions) {
            console.log({ 'gotem': res.getAllSessions })
            setSessions(res.getAllSessions);
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
                {sessions ?
                    <SessionCard session={sessions[0]} onClick={selectSession} />
                    :
                    <div className={classes.loadingContainer}>
                        <CircularProgress style={{ margin: "5vh 0" }} size={100} />
                    </div>
                }
            </Grid>
            <Grid item xs={12}>
                <Typography variant={'h5'}>Load Past Session</Typography>
            </Grid>
            <Grid item xs={12}>
                <Grid container justify={'center'} spacing={2}>
                    {sessions ? sessions.map(session => {
                        console.log(session)
                        return <Grid key={session._id} item xs={6}>
                            <SessionCard session={session} onClick={selectSession} />
                        </Grid>
                    }) : <CircularProgress style={{ margin: "5vh 0" }} size={100} />}
                </Grid>
            </Grid>
            <Modal modalControls={{ modalOpen, setModalOpen }} title={'Create New Session'} >
                Poop
            </Modal>
        </Grid>
    );
}

export default NewSession;