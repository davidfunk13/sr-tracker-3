import CSS from 'csstype';
import React, { useState, FunctionComponent, useEffect } from 'react';
import RoleTypes from './Role.View.Types';
import { useLocation } from 'react-router-dom';
import { LocationState } from './Role.View.Types';
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
import FillChart from '../../UI/Charts/PercentPie';

const Role: FunctionComponent<RoleTypes> = () => {
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

    const seasonStorage = localStorage.getItem('_season');

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

        if (!seasonStorage) {
            console.log('season id not found in state.')
            return;
        }

        if (!form.mapPlayed) {
            console.log('no map has been selected');
            return;
        }

        const seasonParsed: { _season: string } = JSON.parse(seasonStorage);

        const { _season } = seasonParsed;

        let heroesPlayed: string = form.heroesPlayed.map((hero: HeroEntry) => {
            const q = '"'
            return q + hero.name + q
        }).toString();

        const role: RoleKey = convertRole();

        const query: string = `mutation{
          createGame(input: { 
                _season: "${_season}"
                role: ${role}
                heroesPlayed: [${heroesPlayed}]
                mapPlayed: "${form.mapPlayed.name}"
                rankIn: ${0}
                rankOut: ${form.skillRating}
                outcome: ${form.outcome} 
            }){
                _season
            }
        }`;

        const res = await fetchGraphQL(token, query);

        getGamesOfType(_season);
    }

    //start fetch games
    async function getGamesOfType(_season: string) {
        setIsLoading(true);

        const token = await getTokenSilently({
            audience: "AuthAPI",
            scope: "read:current_user",
        });

        let role: RoleKey = convertRole();

        const query: string = `
        query{
            getAllGamesOfType(_season: "${_season}", role: ${role}){
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
        if (!seasonStorage) {
            return;
        }

        const seasonParsed: { _season: string } = JSON.parse(seasonStorage);

        getGamesOfType(seasonParsed._season);
    }, []);

    return (
        <Grid container style={{ marginBottom: '1em' }} justify={'center'}>

            <Grid item xs={12}>
                <Typography gutterBottom variant={'h4'}>
                    {title} Season
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
                    <FillChart pctComplete={0.82} />
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

export default Role;