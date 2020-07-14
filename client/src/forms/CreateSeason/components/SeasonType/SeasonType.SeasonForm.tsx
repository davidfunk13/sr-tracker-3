import React, { Fragment, FunctionComponent, useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import DamageIcon from '../../../../assets/icons/roles/Damage.png';
import TankIcon from '../../../../assets/icons/roles/Tank.png';
import SupportIcon from '../../../../assets/icons/roles/Support.png';
import Grid from '@material-ui/core/Grid';
import SeasonFormProps from './SeasonType.SeasonForm.Types';
import { SeasonFormContext } from '../../../../contexts/SeasonFormContext/SeasonFormContext.Context';

const SeasonType: FunctionComponent<SeasonFormProps> = () => {

    const [state, setState ]: any = useContext(SeasonFormContext);

    function selectRole(val: number) {
        const newState = { ...state, currentStep: state.currentStep + 1, seasonType: val };
        setState(newState);
    }

    return (
        <Fragment>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant={"subtitle2"}>
                        What type of season is this?
                    </Typography>
                </Grid>
                <Grid onClick={() => selectRole(0)} item xs={4}>
                    <img style={{ maxWidth: '100%' }} src={TankIcon} alt="Tank Season" />
                </Grid>
                <Grid onClick={() => selectRole(1)} item xs={4}>
                    <img style={{ maxWidth: '100%' }} src={DamageIcon} alt="Damage Season" />
                </Grid>
                <Grid onClick={() => selectRole(2)} item xs={4}>
                    <img style={{ maxWidth: '100%' }} src={SupportIcon} alt="Support Season" />
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default SeasonType;