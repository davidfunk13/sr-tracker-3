import React, { FunctionComponent, useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import MainHeroesProps from './MainHEroes.SeasonForm.Types';
import { heroDictionary } from '../../../../utils/dictionaries';
import {SeasonFormContext} from '../../../../contexts/SeasonFormContext/SeasonFormContext.Context';

const MainHeroes: FunctionComponent<MainHeroesProps> = () => {
    const {state, setState} : any = useContext(SeasonFormContext);

    const filtered = heroDictionary.filter(hero => hero.roleKey === state.seasonType);

    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant={"subtitle2"}>
                    MainHeroes
                </Typography>
                <Card variant={'outlined'}>
                    {filtered.map(hero => <img key={hero.name} style={{ maxWidth: '25%' }} src={hero.icon.toString()} alt={hero.name} />)}
                </Card>
            </Grid>
        </Grid>
    )
};

export default MainHeroes;