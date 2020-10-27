import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import TankIcon from '../../assets/icons/roles/Tank.png';
import DamageIcon from '../../assets/icons/roles/Damage.png';
import SupportIcon from '../../assets/icons/roles/Support.png';
import Typography from '@material-ui/core/Typography';
import React, { Fragment, FunctionComponent } from 'react';
import SelectRoleProps from './Selectrole.AddSession.Types';
import useStyles from './SelectRole.AddSession.Styles';

const SelectRole: FunctionComponent<SelectRoleProps> = ({ }) => {
    const classes = useStyles();
    return (
        <Fragment>
            <Grid item xs={12}>
                <Typography variant={'h5'} component={'h2'}>
                    Select Role
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Grid container justify={"space-between"} spacing={2}>
                    <Card className={classes.root} variant={'outlined'}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.image}
                                image={TankIcon} >
                            </CardMedia>
                        </CardActionArea>
                    </Card>
                    <Card className={classes.root} variant={'outlined'}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.image}
                                image={DamageIcon} >
                            </CardMedia>
                        </CardActionArea>
                    </Card>
                    <Card className={classes.root} variant={'outlined'}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.image}
                                image={SupportIcon} >
                            </CardMedia>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default SelectRole;