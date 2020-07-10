import React, { FunctionComponent, Fragment } from 'react';
import RoleTypes from './Role.View.Types';
import { useLocation } from 'react-router-dom';
import { LocationState } from './Role.View.Types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GameTable from '../../components/GameTable/GameTable.Component';

const Role: FunctionComponent<RoleTypes> = () => {


    const location = useLocation();

    const { role } = (location.state as LocationState);

    const title = role.split('')[0].toUpperCase() + role.slice(1);

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
                    <GameTable>

                    </GameTable>
            </Grid>
            </Grid>
        </Fragment >
    )
}

export default Role;