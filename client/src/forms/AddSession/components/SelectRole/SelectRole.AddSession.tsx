import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import TankIcon from '../../../../assets/icons/roles/Tank.png';
import DamageIcon from '../../../../assets/icons/roles/Damage.png';
import SupportIcon from '../../../../assets/icons/roles/Support.png';
import Typography from '@material-ui/core/Typography';
import React, { Fragment, FunctionComponent, useContext, useState } from 'react';
import SelectRoleProps from './SelectRole.AddSession.Types';
import useStyles from './SelectRole.AddSession.Styles';
import { RoleKey, SessionFormContextType } from '../../../../App.Types';
import SessionFormContext from '../../../../contexts/SessionForm/SessionForm.Context';
import FormComponentWrapper from '../../../../UI/FormComponentWrapper/FormComponentWrapper.UI.Component';
import Stepper from '../../../Stepper';

const SelectRole: FunctionComponent<SelectRoleProps> = ({ }) => {
    const classes = useStyles();

    const [state, setState]: SessionFormContextType = useContext(SessionFormContext);

    function selectRole(num: RoleKey): void {
        console.log('hello');

        const newState = {
            ...state,
            step: state.step + 1,
            role: num
        }

        setState(newState);
    }

    const [disabled, setDisabled] = useState<boolean>(true);

    return (
        <FormComponentWrapper spacing={2}>
            <Grid item xs={12}>
                <Typography variant={'h5'} component={'h2'}>
                    Select Role
                </Typography>
            </Grid>
            <Grid container spacing={2} style={{ height: "70%", overflow: 'auto' }}>
                <Grid item xs={12} sm={4}>
                    <Card onClick={() => selectRole(0)} className={classes.root} variant={'outlined'}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.image}
                                image={TankIcon} >
                            </CardMedia>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card onClick={() => selectRole(1)} className={classes.root} variant={'outlined'}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.image}
                                image={DamageIcon} >
                            </CardMedia>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card onClick={() => selectRole(2)} className={classes.root} variant={'outlined'}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.image}
                                image={SupportIcon} >
                            </CardMedia>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
            <Stepper disabled={disabled} />
        </FormComponentWrapper>
    );
}

export default SelectRole;