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

const Role: FunctionComponent<RoleTypes> = () => {
    const [open, setOpen] = useState<boolean>(false);

    const [season, setSeason] = useState<any>({ games: [], startingSR: 0, currentSR: 0, });

    const location = useLocation();

    const history = useHistory();

    if (!location) {
        history.push('/')
    }

    const { role } = (location.state as LocationState);

    const title: string = role.split('')[0].toUpperCase() + role.slice(1);

    const seasonStorage = localStorage.getItem('season');

    useEffect(() => {
        if (!seasonStorage) {
            return;
        }

        const seasonParsed = JSON.parse(seasonStorage);
        // setSeason(seasonParsed)
    }, [])

    // function createGame() {
    //     const query = `mutation{
    //         createGame(_season: ${})
    //     }`;
    // }

    return (
        <Grid container spacing={2} style={{ marginBottom: '1em' }} justify={'center'}>
            <Grid item xs={12}>
                <Typography gutterBottom variant={'h4'}>
                    {title} Season
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Button>
                    <Typography gutterBottom variant={'button'}>
                        Create Test Game
                </Typography>
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Typography variant={'h5'}>
                    Games
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <GameTable setOpen={setOpen} />
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