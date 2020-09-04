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
import GameFormProvider, { GameFormContext } from '../../contexts/GameFormContextV2/GameFormContext';
import { useHistory } from 'react-router-dom';
import { RoleEnum, RoleKey, RoleName, Game } from '../../App.Types';
import fetchGraphQL from '../../utils/fetchGraphQL';
import FormWithSteps from '../../forms/FormWithSteps/FormWithSteps';
import { useAuth0 } from '../../react-auth0-spa';
import { HeroEntry } from '../../utils/heroDictionary';
import GameForm from '../../forms/AddGame';

const Role: FunctionComponent<RoleTypes> = () => {
    const [open, setOpen] = useState<boolean>(false);

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
    async function createGame(game: any, refreshGames?: () => void) {
        if (!seasonStorage) {
            return;
        }

        const seasonParsed: { _season: string } = JSON.parse(seasonStorage);

        const { _season } = seasonParsed;

        const token = await getTokenSilently({
            audience: "AuthAPI",
            scope: "read:current_user",
        });

        let heroesPlayed = game.heroesPlayed.map((hero: HeroEntry) => {
            const q = '"'
            return q + hero.name + q
        }).toString();

        console.log(heroesPlayed)
        const role: RoleKey = convertRole();
        console.log(role)
        const query = `mutation{
          createGame(input: { _season: "${_season}", role: ${role}, heroesPlayed: [${heroesPlayed}], mapPlayed: "${game.mapPlayed.name}", rankIn: ${0}, rankOut: ${game.skillRating}, outcome: ${game.outcome} }){
            _season
          }
        }`;

        const res = await fetchGraphQL(token, query);

        console.log(res);

        getGamesOfType(_season);
    }
    //end create game function

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
        }
    `;
        const games = await fetchGraphQL(token, query);

        if (games && games.getAllGamesOfType) {
            setGames(games.getAllGamesOfType);
            setIsLoading(false);
        }
    }
    //End Fetch Games

    //start effect to parse localstorage string if it exists
    useEffect(() => {
        if (!seasonStorage) {
            return;
        }

        const seasonParsed: { _season: string } = JSON.parse(seasonStorage);

        getGamesOfType(seasonParsed._season);
    }, []);
    //end effect to parse localstorage string if it exists
    const containerStyles: CSS.Properties = {
        display: 'flex',
        height: '75vh',
        alignItems: 'flex-end',
    }


    return (
        <Grid container spacing={2} style={{ marginBottom: '1em' }} justify={'center'}>
            <Grid item xs={12}>
                <Typography gutterBottom variant={'h4'}>
                    {title} Season
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant={'h5'}>
                    Games
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <GameTable isLoading={isLoading} games={games} setOpen={setOpen} />
            </Grid>
            <Grid item xs={12}>
                <Button variant={"contained"} fullWidth color={'primary'} onClick={() => setOpen(true)}>
                    <Typography variant={'button'}>Add A Game</Typography>
                </Button>
            </Grid>
            <Modal setOpen={setOpen} title={'Add New Game'} open={open}>
                <GameFormProvider >
                    <FormWithSteps
                        styles={containerStyles}
                        componentDependencies={{ createGame: createGame, role: role, setOpen: setOpen }}
                        formComponent={GameForm}
                        context={GameFormContext}
                    />
                </GameFormProvider>
            </Modal>
        </Grid>
    )
}

export default Role;