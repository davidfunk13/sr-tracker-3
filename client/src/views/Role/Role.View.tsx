import React, { useState, FunctionComponent, Fragment, useContext } from 'react';
import RoleTypes from './Role.View.Types';
import { useLocation } from 'react-router-dom';
import { LocationState } from './Role.View.Types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GameTable from '../../components/GameTable/GameTable.Component';
import Modal from '../../UI/Modal/Modal.UI';
import VerticalStepper from '../../components/VerticalStepper/VerticalStepper.Component';
import Button from '@material-ui/core/Button';
import gameFormComponents from '../../forms/AddGame';
import GameFormProvider from '../../contexts/GameFormContext/GameFormContext.Context';
import { GameFormContext } from '../../contexts/GameFormContext/GameFormContext.Context';

const Role: FunctionComponent<RoleTypes> = () => {
    const location = useLocation();

    const { role } = (location.state as LocationState);

    const title = role.split('')[0].toUpperCase() + role.slice(1);

    const [open, setOpen] = useState<boolean>(false);

    return (
        <Fragment>
            <Typography gutterBottom variant={'h4'}>
                {title} Season
            </Typography>
            <Grid container spacing={2} style={{ marginBottom: '1em' }} justify={'center'}>
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
            </Grid>
            <Modal open={open}>
                <GameFormProvider >
                    <VerticalStepper formContext={GameFormContext} components={gameFormComponents} />
                </GameFormProvider>
                <Button variant={"contained"} fullWidth color={'primary'} onClick={() => setOpen(false)}  >
                    <Typography variant={'button'}>
                        Close Modal
                    </Typography>
                </Button>
            </Modal>
        </Fragment >
    )
}

export default Role;