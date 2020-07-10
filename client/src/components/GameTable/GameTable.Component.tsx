import React, { FunctionComponent } from 'react';
import GameTableTypes from './GameTable.Component.Types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import clsx from 'clsx';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Paper from '@material-ui/core/Paper';
import useStyles from './GameTable.Component.Styles';

function createData(mapLocation: string, heroes: [string, string?, string?], winLoss: 0 | 1 | 2, srAfter: number) {
    return { mapLocation, heroes, winLoss, srAfter };
}

const rows = [
    createData('Hanamura', ['Ana', 'Lucio'], 0, 3245),
    createData('Paris', ['Brigitte', 'Moira', 'Ana'], 2, 3245),
    createData('Lijang Tower', ['Mercy', 'Brigitte', 'Zenyatta'], 1, 3345),
    createData('Hanamura', ['Baptiste', 'Brigitte', 'Zenyatta'], 0, 3233),
    createData('Hanamura', ['Ana', 'Lucio'], 1, 3322),
    createData('Hanamura', ['Baptiste', 'Mercy'], 1, 3399),
];

const GameTable: FunctionComponent<GameTableTypes> = ({ setOpen }) => {
    const classes = useStyles();

    return (
        <TableContainer className={clsx(classes.tablePadding, classes.tableWidth)} component={Paper}>
            <Table size={'small'} aria-label={'Games Table'}>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tablePadding} align={'left'} >Map</TableCell>
                        <TableCell className={classes.tablePadding} align={'left'} >Heore(s)</TableCell>
                        <TableCell className={classes.tablePadding} align={'left'} >W/L</TableCell>
                        <TableCell className={classes.tablePadding} align={'left'} >SR</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, i) => (
                        <TableRow key={row.mapLocation + i}>
                            <TableCell className={classes.tablePadding} align={'left'} component="th" scope="row">
                                {row.mapLocation}
                            </TableCell>
                            <TableCell className={classes.tablePadding} align={'left'}>{row.heroes.map(str => str + ', ')}</TableCell>
                            <TableCell className={classes.tablePadding} align={'left'}>{row.winLoss}</TableCell>
                            <TableCell className={clsx(classes.tablePadding, { paddingRight: '0' })} align={'left'}>{row.srAfter}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default GameTable;