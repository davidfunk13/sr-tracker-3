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

import { Game } from '../../App.Types';
import generateGameOutcomeString from '../../utils/generateGameOutcomeString';
import Grid from '@material-ui/core/Grid';

interface GameRowProps {
    row: Game
};

const Row: FunctionComponent<GameRowProps> = ({ row }) => {
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const { mapPlayed, heroesPlayed, outcome, rankOut } = row;

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

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell align={'center'} className={classes.noPadding} component="th" scope="row">
                    {mapPlayed}
                </TableCell>
                <TableCell align={'center'} className={classes.noPadding} >{createHeroList(heroesPlayed as string[])}</TableCell>
                <TableCell align={'center'} >{generateGameOutcomeString(outcome)}</TableCell>
                <TableCell align={'center'} className={classes.overrideOverflow}>{rankOut}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Grid container>
                                <Typography variant="h6" gutterBottom component="div">

                                </Typography>
                                <Grid container>
                                    <Grid item xs={4}>
                                        <div style={{ width: '100%', height: '10em', backgroundColor: 'red' }}></div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div style={{ width: '100%', height: '10em', backgroundColor: 'green' }}></div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div style={{ width: '100%', height: '10em', backgroundColor: 'blue' }}></div>
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