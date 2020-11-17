import React, { useState, FunctionComponent, useEffect } from 'react';
import useStyles from './CollapsibleTable.Styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import heroDictionary from '../../utils/heroDictionary';
import { Game, HeroEntry, MapEntry } from '../../App.Types';
import generateGameOutcomeString from '../../utils/generateGameOutcomeString';
import Grid from '@material-ui/core/Grid';
import useGetHeroes from '../../hooks/useGetHeroes/useGetHeroes.Hook';
import { mapDictionary } from '../../utils/dictionaries';
import useGetRank from '../../hooks/useGetRank/useGetRank';
import { generateOutcomeIcon, generateOutcomeString } from '../../utils/utilityFunctions';

interface GameRowProps {
    row: Game
};

type MUIColType = boolean | 2 | 1 | "auto" | 3 | 6 | 4 | 5 | 7 | 8 | 9 | 10 | 11 | 12 | undefined;

const Row: FunctionComponent<GameRowProps> = ({ row }) => {
    const { mapPlayed, heroesPlayed, outcome, rankOut, rankIn } = row;

    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const rankIcon = useGetRank(row.rankOut);

    function createHeroList(heroes: string[]) {
        let heroList = '';

        heroes.map((hero, i) => {
            if (i !== heroes.length - 1) {
                return heroList += hero + ', ';
            }

            return heroList += hero;
        });

        return heroList;
    };

    const heroObjs = useGetHeroes(row.heroesPlayed as string[]);

    const mapObj = mapDictionary.filter(loc => loc.name === row.mapPlayed)[0];

    function generateHeroMarkup(heroes: HeroEntry[], length: number) {
        if (!heroes || !length) {
            return;
        }

        function getColumnLength(length: number) {
            switch (length) {
                case 1:
                    return 12;
                case 2:
                    return 6;
                case 3:
                    return 4;
                default:
                    console.error('Error: Problem generating hero icon column length');
                    return 4;
            }
        }

        const cols: MUIColType = getColumnLength(length)

        return heroes.map(hero => {
            return (
                <Grid key={hero.name} item xs={cols}>
                    <div className={length === 1 ? classes.image12 : classes.image} style={{ backgroundImage: `url(${hero.icon.toString()})` }} />
                </Grid>
            );
        })
    }

    const outcomeIcon = generateOutcomeIcon(outcome);

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell align={'left'} className={classes.noPadding} component="th" scope="row">
                    {mapPlayed}
                </TableCell>
                <TableCell align={'left'} className={classes.noPadding} >{createHeroList(heroesPlayed as string[])}</TableCell>
                <TableCell align={'left'} >{generateGameOutcomeString(outcome)}</TableCell>
                <TableCell align={'left'} className={classes.overrideOverflow}>{rankOut}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Grid container>
                                <Grid item xs={12} >
                                    <Typography variant="h6" gutterBottom component="div">
                                        Game Info
                                    </Typography>
                                    <Grid container spacing={1}>
                                        <Grid item xs={6}>
                                            <div className={classes.rankIcon} style={{ backgroundImage: `url(${outcomeIcon})` }} />
                                            <Typography align={'center'} variant={'h5'}>
                                                {generateOutcomeString(outcome)}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div className={classes.rankIcon} style={{ backgroundImage: `url(${rankIcon.icon.toString()})` }} />
                                            <Typography align={'center'} variant={'h5'}>
                                                {rankOut - rankIn > 0 ? ('+ ' + (rankOut - rankIn)) : ('- ' + Math.abs(rankOut - rankIn))}
                                            </Typography>
                                        </Grid>
                                        {generateHeroMarkup(heroObjs, heroObjs.length)}
                                        <Grid item xs={12}>
                                            <div className={classes.image} style={{ backgroundImage: `url(${mapObj.icon.toString()})` }} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment >
    );
}

export default Row;