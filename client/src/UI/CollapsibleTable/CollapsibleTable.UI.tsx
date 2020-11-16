import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useStyles from './CollapsibleTable.Styles';
import Row, { createData } from './Row.UI';
import clsx from 'clsx';

const rows = [
    createData('Hanamura', 'Junkrat, Hanzo, Soldier: 76', 'Win', 3475),
];

function CollapsibleTable() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table style={{ tableLayout: 'fixed', width: '100%' }} aria-label="collapsible table">
                <TableHead >
                    <TableRow>
                        <TableCell align={'center'} className={clsx(classes.noPadding, classes.downArrowWidth)} />
                        <TableCell align={'center'} className={clsx(classes.noPadding, classes.mapWidth)}>Map</TableCell>
                        <TableCell align={'center'} className={clsx(classes.noPadding, classes.heroesPlayedWidth)} >Heore(s)</TableCell>
                        <TableCell align={'center'} className={clsx(classes.noPadding, classes.wLWidth)} >W/L</TableCell>
                        <TableCell align={'center'} className={classes.noPadding}  >SR</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.map} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default CollapsibleTable;