// React
import SwipeableViews from 'react-swipeable-views';
import React, { useState, FunctionComponent, useEffect } from 'react';
// Hooks
import { useAuth0 } from '../../react-auth0-spa';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useTheme } from '@material-ui/core';
import useStyles from './SelectedSession.View.Styles';
// Types
import SelectedSessionTypes from './SelectedSession.View.Types';
import { Game, HeroEntry, GameForm, SessionType, RoleObject } from '../../App.Types';
// MaterialUI Components
import AddIcon from '@material-ui/icons/Add';
import AppBar from '@material-ui/core/AppBar';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Modal from '../../UI/Modal/Modal.UI';
import Tabs from '@material-ui/core/Tabs';
import Zoom from '@material-ui/core/Zoom';
// SR Tracker
import { a11yProps, LinkTab, TabPanel } from '../../UI/PageTabs/PageTabs.UI';
import Games from '../Games/Games.View';
import GameFormComponent from '../../forms/AddGame/AddGame.Modal.UI';
import GameFormProvider from '../../contexts/GameForm/GameFormProvider';
import SessionInfo from '../SessionInfo/SessionInfo.View';
import SessionStats from '../SessionStats/SessionStats.View';
// Utility Functions
import convertRoleKey from '../../utils/convertRoleKey';
import fetchGraphQL from '../../utils/fetchGraphQL';
import getSelectedSession from '../../utils/getSelectedSession';

const initialSessionState: SessionType = {
    _id: '',
    _games: [],
    sessionRole: 3,
    skillRatingStart: 0,
    skillRatingCurrent: 0,
    createdAt: ''
};

const SelectedSession: FunctionComponent<SelectedSessionTypes> = () => {

    const classes = useStyles();

    const [games, setGames] = useState<Game[]>([]);

    const { getTokenSilently } = useAuth0();

    const history = useHistory();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const location = useLocation();

    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const [session, setSession] = useState<SessionType>(initialSessionState);

    const [sessionLoading, setSessionLoading] = useState<boolean>(false);

    const sessionStorage = JSON.parse(localStorage.getItem('_session') as string) as { _session: string };

    const theme = useTheme();

    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };

    const [value, setValue] = useState<number>(0);

    if (!location) {
        history.push('/')
    }

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    const role: RoleObject = convertRoleKey(session.sessionRole);

    async function createGame(form: GameForm) {
        const token = await getTokenSilently({
            audience: "AuthAPI",
            scope: "read:current_user",
        });

        if (!sessionStorage) {
            console.log('session id not found in state.')
            return;
        }

        if (!form.mapPlayed) {
            console.log('no map has been selected');
            return;
        }

        const { _session } = sessionStorage;

        let heroesPlayed: string = form.heroesPlayed.map((hero: HeroEntry) => {
            const q = '"';
            return q + hero.name + q;
        }).toString();

        const query: string = `mutation{
              createGame(input: { 
                    _session: "${_session}"
                    role: ${session.sessionRole}
                    heroesPlayed: [${heroesPlayed}]
                    mapPlayed: "${form.mapPlayed.name}"
                    rankIn: ${session.skillRatingCurrent}
                    rankOut: ${form.skillRating}
                    outcome: ${form.outcome} 
                }){
                    _session
                }
            }`;

        await fetchGraphQL(token, query);
        return fetchData();
    }

    async function getAllGames(_session: string) {
        setIsLoading(true);

        const token = await getTokenSilently({
            audience: "AuthAPI",
            scope: "read:current_user",
        });

        const query: string = `
        query{
            getAllGames(_session: "${_session}"){
                role
                mapPlayed
                heroesPlayed
                outcome
                rankIn
                rankOut
            }
        }`;

        const games = await fetchGraphQL(token, query);

        if (games && games.getAllGames) {
            setGames(games.getAllGames);
            setIsLoading(false);
        }
    };

    async function fetchData() {
        const token = await getTokenSilently({
            audience: "AuthAPI",
            scope: "read:current_user",
        });

        const query: string = `{
        getOneSession(_id: "${sessionStorage._session}") {
                _id
                skillRatingStart
                skillRatingCurrent
                sessionRole
                createdAt
            }
        }` ;

        getSelectedSession(token, setSession, setIsLoading, query);
        getAllGames(sessionStorage._session);
    }


    useEffect(() => {
        if (!sessionStorage) {
            console.error('No Session found in storage.');
            history.push('/');
            return;
        }

        fetchData();
    }, []);


    return (
        <Grid container style={{ marginBottom: '1em' }} spacing={2} justify={'center'}>
            <Grid item xs={12}>
                <AppBar position="static">
                    <Tabs
                        variant="fullWidth"
                        value={value}
                        onChange={handleChange}
                        aria-label="nav tabs example"
                    >
                        <LinkTab label="Info" {...a11yProps(0)} />
                        <LinkTab label="Games" {...a11yProps(1)} />
                        <LinkTab label="Stats" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>

                <TabPanel value={value} index={0}>
                    <SessionInfo />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Games isLoading={isLoading} games={games} modalControls={{ modalOpen, setModalOpen }} />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <SessionStats />
                </TabPanel>

                <Zoom
                    in={value === 1}
                    timeout={transitionDuration}
                    unmountOnExit
                >
                    <Fab onClick={() => setModalOpen(true)} variant="extended" color="primary" aria-label="add" className={classes.fab}>
                        <AddIcon className={classes.addIcon} />
                        Add New Game
                    </Fab>
                </Zoom>
            </Grid>
            <GameFormProvider>
                <Modal modalControls={{ modalOpen, setModalOpen }} title={'Add New Game'}>
                    <GameFormComponent componentDependencies={{ createGame, role }} modalControls={{ modalOpen, setModalOpen }} />
                </Modal>
            </GameFormProvider>
        </Grid>
    )
}

export default SelectedSession;



