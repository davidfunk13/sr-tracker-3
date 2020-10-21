import CSS from 'csstype';
import React, { useState, FunctionComponent, useEffect } from 'react';
import SelectedSessionTypes from './SelectedSession.View.Types';
import { useLocation } from 'react-router-dom';
import { LocationState } from './SelectedSession.View.Types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GameTable from '../../components/GameTable/GameTable.Component';
import Modal from '../../UI/Modal/Modal.UI';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { RoleEnum, RoleKey, RoleName, Game, HeroEntry, GameForm } from '../../App.Types';
import fetchGraphQL from '../../utils/fetchGraphQL';
import { useAuth0 } from '../../react-auth0-spa';
import GameFormComponent from '../../forms/AddGame';
import GameFormProvider from '../../contexts/GameForm/GameFormProvider';
import { a11yProps, LinkTab, TabPanel } from '../../UI/PageTabs/PageTabs.UI';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Games from '../Games/Games.View';
import PercentPie from '../../UI/Charts/PercentPie/PercentPie.UI';
import SessionStats from '../SessionStats/SessionStats.View';

const SelectedSession: FunctionComponent<SelectedSessionTypes> = () => {
    const [value, setValue] = useState<number>(0);

    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [games, setGames] = useState<Game[]>([]);

    const { getTokenSilently } = useAuth0();

    const location = useLocation();

    const history = useHistory();

    if (!location) {
        history.push('/')
    }

    const { role } = (location.state as LocationState);

    const title: string = role.split('')[0].toUpperCase() + role.slice(1);

    const sessionStorage = localStorage.getItem('_session');

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    // function to convert string used for title on role page to a role key the api understands
    function convertRole() {
        switch (role) {
            case RoleEnum.Tank:
                return 0;
            case RoleEnum.Damage:
                return 1;
            case RoleEnum.Support:
                return 2;
            default:
                return 3;
        }
    };

    // start create game function
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

        const sessionParsed: { _session: string } = JSON.parse(sessionStorage);

        const { _session } = sessionParsed;

        let heroesPlayed: string = form.heroesPlayed.map((hero: HeroEntry) => {
            const q = '"'
            return q + hero.name + q
        }).toString();

        const role: RoleKey = convertRole();

        const query: string = `mutation{
          createGame(input: { 
                _session: "${_session}"
                role: ${role}
                heroesPlayed: [${heroesPlayed}]
                mapPlayed: "${form.mapPlayed.name}"
                rankIn: ${0}
                rankOut: ${form.skillRating}
                outcome: ${form.outcome} 
            }){
                _session
            }
        }`;

        const res = await fetchGraphQL(token, query);

        getGamesOfType(_session);
    }

    //start fetch games
    async function getGamesOfType(_session: string) {
        setIsLoading(true);

        const token = await getTokenSilently({
            audience: "AuthAPI",
            scope: "read:current_user",
        });

        let role: RoleKey = convertRole();

        const query: string = `
        query{
            getAllGamesOfType(_session: "${_session}", role: ${role}){
                role
                mapPlayed
                heroesPlayed
                outcome
                rankIn
                rankOut
          }
        }`;

        const games = await fetchGraphQL(token, query);

        if (games && games.getAllGamesOfType) {
            setGames(games.getAllGamesOfType);
            setIsLoading(false);
        }
    };

    //start effect to parse localstorage string if it exists
    useEffect(() => {
        if (!sessionStorage) {
            return;
        }

        const sessionParsed: { _session: string } = JSON.parse(sessionStorage);

        getGamesOfType(sessionParsed._session);
    }, []);

    return (
        <Grid container style={{ marginBottom: '1em' }} justify={'center'}>

            <Grid item xs={12}>
                <Typography gutterBottom variant={'h4'}>
                    {title} Session
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <AppBar position="static">
                    <Tabs
                        variant="fullWidth"
                        value={value}
                        onChange={handleChange}
                        aria-label="nav tabs example"
                    >
                        <LinkTab label="Games" href="/drafts" {...a11yProps(0)} />
                        <LinkTab label="Statistics" href="/trash" {...a11yProps(1)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <Games isLoading={isLoading} games={games} modalControls={{ modalOpen, setModalOpen }} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <SessionStats />
                </TabPanel>
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