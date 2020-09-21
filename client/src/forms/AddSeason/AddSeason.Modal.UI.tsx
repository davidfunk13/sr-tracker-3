import React, { FunctionComponent, Fragment } from 'react';
import { Typography, Button, DialogActions } from '@material-ui/core';
import { ModalControls } from '../../App.Types';

export interface AddSeasonTypes {
    createSeason: () => void;
    modalControls: ModalControls
};

const AddSeason: FunctionComponent<AddSeasonTypes> = ({ createSeason, modalControls }) => {
    const { setModalOpen, modalOpen }: ModalControls = modalControls;

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
                <Button onClick={() => setModalOpen(false)} color={'secondary'} fullWidth>
                    <Typography align={"center"} variant={'button'}>
                        Close
                    </Typography>
                </Button>
            </DialogActions>
        </Fragment>
    );
}

export default AddSeason;