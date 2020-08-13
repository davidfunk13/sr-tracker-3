import React, { FunctionComponent, useEffect, Fragment, useState } from 'react';
// import SeasonFormContext from '../../../contexts/SeasonFormContext/SeasonFormContext.Context';
import ConfirmSeasonTypes from './ConfirmSeason.Modal.UI.Types';
import { Typography, Button, DialogActions } from '@material-ui/core';

const ConfirmSeason: FunctionComponent<ConfirmSeasonTypes> = ({ createSeason, setOpen }) => {

    return (
        <Fragment>
            <Typography variant={'body1'}>
                Creating a new season will set all role's SR back to 0. Your old season will be saved and indexed.
                </Typography>
            <DialogActions>
                <Button onClick={() => createSeason()} color={'primary'} fullWidth>
                    <Typography align={"center"} variant={'button'}>
                        Create
                </Typography>
                </Button>
                <Button onClick={() => setOpen(false)} color={'secondary'} fullWidth>
                    <Typography align={"center"} variant={'button'}>
                        Close
                    </Typography>
                </Button>
            </DialogActions>
        </Fragment>
    );
}

export default ConfirmSeason;