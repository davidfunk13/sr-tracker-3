import React, { useState, FunctionComponent, useEffect } from 'react';
import RoleTypes from './Role.View.Types';
import { useLocation } from 'react-router-dom';
import { LocationState } from './Role.View.Types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GameTable from '../../components/GameTable/GameTable.Component';
import Modal from '../../UI/Modal/Modal.UI';
import Button from '@material-ui/core/Button';
import GameFormProvider from '../../contexts/GameFormContext/GameFormContext.Context';
import { useHistory } from 'react-router-dom';
import GameForm from '../../forms/AddGame'
import { RoleEnum, RoleKey, RoleName, Game } from '../../App.Types';
import fetchGraphQL from '../../utils/fetchGraphQL';
import { useAuth0 } from '../../react-auth0-spa';

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

    async function getGamesOfType(_season: string) {
        setIsLoading(true);

        const token = await getTokenSilently({
            audience: "AuthAPI",
            scope: "read:current_user",
        });

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
        }

        let roleInt: RoleKey = convertRole();

        const query: string = `
        query{
            getAllGamesOfType(_season: "${_season}", role: ${roleInt}){
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
        console.log({ games: games.getAllGamesOfType });
        if (games && games.getAllGamesOfType){
            setGames(games.getAllGamesOfType)
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (!seasonStorage) {
            return;
        }

        const seasonParsed: { _season: string } = JSON.parse(seasonStorage);

        getGamesOfType(seasonParsed._season);
    }, []);

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
                    <GameForm setOpen={setOpen} role={role} />
                </GameFormProvider>
            </Modal>
        </Grid>
    )
}

export default Role;