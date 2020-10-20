import React, { useEffect, useState, Fragment, FunctionComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import NewSeasonTypes from './NewSeason.Types';
import Modal from '../../UI/Modal/Modal.UI';
import { useAuth0 } from '../../react-auth0-spa';
import Typography from '@material-ui/core/Typography';
import SessionCard from '../../UI/SessionCard/SessionCard.UI';

const NewSeason: FunctionComponent<NewSeasonTypes> = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const { getTokenSilently } = useAuth0();

    return (
        <Grid container spacing={2} >
            <Grid item xs={12}>
                <Typography variant={'h5'}>Current Session</Typography>
            </Grid>
            <Grid item xs={12}>
                <SessionCard />
            </Grid>
            <Grid item xs={12}>
                <Typography variant={'h5'}>Load Past Session</Typography>
            </Grid>
            <Grid item xs={12}>

            </Grid>
            <Modal modalControls={{ modalOpen, setModalOpen }} title={'Create New Season'} >
                Poop
            </Modal>
        </Grid>
    );
}

export default NewSeason;