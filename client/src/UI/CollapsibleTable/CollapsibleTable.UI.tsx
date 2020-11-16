import React, { FunctionComponent } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useStyles from './CollapsibleTable.Styles';
import Row from './Row.UI';
import clsx from 'clsx';
import { Game, GameRow } from '../../App.Types';

const CollapsibleTable: FunctionComponent<{ rows: Game[] }> = ({ rows }) => {
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
                        <TableCell align={'center'} className={classes.noPadding}>SR</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, i) => (
                        <Row key={'game' + i + row.mapPlayed} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default CollapsibleTable;