import React, { FunctionComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

const MainHeroes: FunctionComponent = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant={"subtitle2"}>
                    MainHeroes
                </Typography>
                <Card variant={'outlined'}>
                    <img src={''} alt="Damage Season"/>
                </Card>
            </Grid>
        </Grid>
    )
};

export default MainHeroes;