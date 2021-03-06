import React, { FunctionComponent, useContext, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import TankIcon from '../../../../assets/icons/roles/Tank.png';
import DamageIcon from '../../../../assets/icons/roles/Damage.png';
import SupportIcon from '../../../../assets/icons/roles/Support.png';
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
        <Grid container spacing={1}>
            <Grid item xs={4} sm={4}>
                <Card onClick={() => selectRole(0)} className={classes.root} variant={'outlined'}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.image}
                            image={TankIcon} >
                        </CardMedia>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={4} sm={4}>
                <Card onClick={() => selectRole(1)} className={classes.root} variant={'outlined'}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.image}
                            image={DamageIcon} >
                        </CardMedia>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={4} sm={4}>
                <Card onClick={() => selectRole(2)} className={classes.root} variant={'outlined'}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.image}
                            image={SupportIcon} >
                        </CardMedia>
                    </CardActionArea>
                </Card>
            </Grid>
            <Stepper formContext={SessionFormContext} disabled={disabled} />
        </Grid>
    );
}

export default SelectRole;