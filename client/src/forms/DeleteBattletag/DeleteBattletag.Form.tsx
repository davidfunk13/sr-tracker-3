import React, { FunctionComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteBattletagProps from './DeleteBattletag.Form.Types';

const DeleteBattletag: FunctionComponent<DeleteBattletagProps> = ({ deleteBattletag }) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant={'subtitle1'} component={"h2"} >
                    All sessions and games and other data associated with this battletag will be removed.
          </Typography>
            </Grid>
            <Grid item xs={12}>
                <Button onClick={deleteBattletag} variant={'contained'} color={'secondary'}>
                    <DeleteIcon />
                    <Typography variant={'button'} component={'p'}>
                        Delete Battletag
                    </Typography>
                </Button>
            </Grid>
        </Grid>
    );
}

export default DeleteBattletag;