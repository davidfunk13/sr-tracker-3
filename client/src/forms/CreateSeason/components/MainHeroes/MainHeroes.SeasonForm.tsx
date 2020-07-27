import React, { FunctionComponent, useState, useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import MainHeroesProps from './MainHeroes.SeasonForm.Types';
import { heroDictionary } from '../../../../utils/dictionaries';
import { HeroEntry } from '../../../../utils/heroDictionary';
import { SeasonFormContext } from '../../../../contexts/SeasonFormContext/SeasonFormContext.Context';
import StepButtons from '../../../../UI/Modal/StepButtons/StepButtons.UI';

const MainHeroes: FunctionComponent<MainHeroesProps> = () => {
    const [ state, setState ]: any = useContext(SeasonFormContext);

    const [selected, setSelected] = useState<HeroEntry[]>([]);

    const filtered = heroDictionary.filter(hero => hero.roleKey === state.seasonType);

    function selectHero(hero: HeroEntry) {
        return () => {
            const exists: HeroEntry = selected.filter(item => item.name === hero.name)[0];

            if (selected.length === 3 && !exists) {
                //return error message above component.
                return
            }

            let newSelected: HeroEntry[];

            if (exists) {
                const newSelected = selected;

                const removeItem = newSelected.filter(item => item.name !== hero.name);

                return setSelected(removeItem)
            }

            newSelected = [...selected, hero];

            setSelected(newSelected)
        }
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant={"subtitle2"}>
                    Selected
                </Typography>
                <Card variant={'outlined'} style={{ minHeight: '15vh' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        {/* please replace all of this with material ui spacing and components */}
                        {selected.map(hero => <img key={hero.name} style={{ maxWidth: '32%', flex: '1 1 auto' }} src={hero.icon.toString()} alt={hero.name} />)}
                    </div>
                </Card>
                <Typography variant={"subtitle2"}>
                    MainHeroes
                </Typography>
                <div style={{ maxHeight: '40vh', overflowY: 'auto' }}>

                    <Card variant={'outlined'}>
                        {filtered.map(hero => <img key={hero.name} onClick={selectHero(hero)} style={{ maxWidth: '25%' }} src={hero.icon.toString()} alt={hero.name} />)}
                    </Card>
                </div>
                <StepButtons disabled={true} />
            </Grid>
        </Grid>
    )
};

export default MainHeroes;